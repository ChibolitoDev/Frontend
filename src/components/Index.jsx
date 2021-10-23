import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, FormGroup, ModalBody, ModalHeader, ModalFooter, Modal } from 'reactstrap'
import axios from 'axios';
import DataTable from './DataTable';
import InsertData from './InsertData';
import EditData from './EditData';
import DeleteData from './DeleteData';



const baseUrl = "http://127.0.0.1:5000/";


const Index = () => {

    const [data, setData] = useState([]); // Data en la tabla

    const [dataS, setDataS] = useState({ //Data a insertar 
        id: '',
        level_1: '',
        level_2: '',
        year: '',
        value: ''
    })

    const [insert, setInsert] = useState(false); //Variables para insertar
    const [del, setDelete] = useState(false); //variables para editar

    const [edit, setEdit] = useState(false); //variables para editar

    const getData = async () => { //GetMethod
        await axios.get(baseUrl)
            .then(res => {
                setData(res.data)
            }).catch(error => {
                console.log(error)
            })
    }

    const postData = async () => { //PostMethod
        delete dataS.id;
        await axios.post(baseUrl, dataS)
            .then(res => {
                setData(data.concat(res.data))
                openInsert()
            }).catch(error => {
                console.log(error)
            })
    }

    const putData = async () => { //PostMethod
        await axios.put(`${baseUrl}/${dataS.id}`, dataS)
            .then(res => {
                var resp = res.data
                var dataAux = data;
                dataAux.map(element => {
                    if (element.id === resp.id) { element = resp }
                })
                getData();
                openEdit()
            }).catch(error => {
                console.log(error)
            })
    }
    const deleteData = async () => { //PostMethod
        await axios.delete(`${baseUrl}/${dataS.id}`)
            .then(res => {
                getData();
                openDelete()
            }).catch(error => {
                console.log(error)
            })
    }
    const SingleData = (data, caso) => {
        setDataS(data)
        caso === "Editar" && openEdit();
        caso === "Eliminar" && openDelete();
    }

    const openInsert = () => { //Abrir el insert
        setInsert(!insert);
    }

    const openEdit = () => { //Abrir el edit
        setEdit(!edit);
    }

    const openDelete = () => {
        setDelete(!del);
    }


    useEffect(() => { //RecibirData
        getData();
    }, [])

    const handleChange = e => { //Agregando data al array
        const { name, value } = e.target;
        setDataS({ ...dataS, [name]: value });
    }

    return (
        <>
            <Container>
                <br />
                <Button color="primary" onClick={() => openInsert()}>Insertar nueva Data</Button>
                <br />

                <DataTable data={data} SingleData={SingleData} />
            </ Container>

            <InsertData insert={insert} handleChange={handleChange} postData={postData} openInsert={openInsert} />

            <EditData edit={edit} dataS={dataS} handleChange={handleChange} putData={putData} openEdit={openEdit} />

            <DeleteData del={del} dataS={dataS} handleChange={handleChange} deleteData={deleteData} openDelete={openDelete} />
        </>

    )
}


export default Index;
