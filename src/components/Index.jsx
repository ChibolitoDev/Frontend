import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'reactstrap'
import DataTable from './DataTable';
import InsertData from './InsertData';
import EditData from './EditData';
import DeleteData from './DeleteData';
import { getData, postData, putData, deleteData } from './../utils/ApiCalls';



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

    const openInsert = () => { //Abrir el insert
        setInsert(!insert);
    }

    const openEdit = () => { //Abrir el edit
        setEdit(!edit);
    }

    const openDelete = () => {
        setDelete(!del);
    }


    const DataGet = () => (getData({ setData }));

    const DataPost = () => (postData({ dataS, setData, data, openInsert }));

    const DataPut = () => (putData({ dataS, data, openEdit, setData }));

    const DataDelete = () => (deleteData({ dataS, openDelete, setData }));

    const SingleData = (data, caso) => {
        setDataS(data)
        caso === "Editar" && openEdit();
        caso === "Eliminar" && openDelete();
    }


    useEffect(() => { //RecibirData
        DataGet();
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

            <InsertData insert={insert} handleChange={handleChange} postData={DataPost} openInsert={openInsert} />

            <EditData edit={edit} dataS={dataS} handleChange={handleChange} putData={DataPut} openEdit={openEdit} />

            <DeleteData del={del} dataS={dataS} handleChange={handleChange} deleteData={DataDelete} openDelete={openDelete} />
        </>

    )
}


export default Index;
