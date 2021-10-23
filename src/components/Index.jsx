import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'reactstrap'
import DataTable from './DataTable';
import InsertData from './InsertData';
import EditData from './EditData';
import DeleteData from './DeleteData';
import { getData, postData, putData, deleteData } from './../utils/ApiCalls';



const Index = ({ data, setData, dataS, setDataS, insert, setInsert, del, setDelete, edit, setEdit }) => {



    const openInsert = () => { //Abrir el insert
        setInsert(!insert);
    }

    const openEdit = () => { //Abrir el edit
        setEdit(!edit);
    }

    const openDelete = () => { //Abrir el delete
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
