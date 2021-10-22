import React, { useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, FormGroup, ModalBody, ModalHeader, ModalFooter, Modal } from 'reactstrap'
import axios from 'axios';



const baseUrl = "http://127.0.0.1:5000/";


const DataTable = () => {

    const [data, setData] = useState([]); // Data en la tabla

    const [dataS, setDataS] = useState({ //Data a insertar 
        id: '',
        level_1: '',
        level_2: '',
        year: '',
        value: ''
    })

    const [insert, setInsert] = useState(false); //Variables para insertar

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


    const openInsert = () => { //Abrir el insert
        setInsert(!insert);
    }

    useEffect(() => { //Cambiar data cada vez que cambie un valor
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
                <Table>
                    <thead>
                        <tr>
                            <th>
                                level_1
                            </th>
                            <th>
                                level_2
                            </th>
                            <th>
                                year
                            </th>
                            <th>
                                value
                            </th>
                            <th>
                                acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.map(element => (
                                <tr key={element.id}>
                                    <td>
                                        {element.level_1}
                                    </td>
                                    <td>
                                        {element.level_2}
                                    </td>
                                    <td>
                                        {element.year}
                                    </td>
                                    <td>
                                        {element.value}
                                    </td>
                                    <td>
                                        <Button color="primary">
                                            Editar
                                        </Button>
                                    </td>
                                    <td>
                                        <Button color="danger">
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>)
                            )}
                    </tbody>
                </Table>

            </ Container>

            <Modal isOpen={insert}>
                <ModalBody>
                    <ModalHeader> Insertar Data</ModalHeader>
                    <FormGroup>
                        <label>
                            Level_1:
                        </label>
                        <br />
                        <input className='form-control' type='text' name="level_1" onChange={handleChange} />
                        <label>
                            Level_2:
                        </label>
                        <br />
                        <input className='form-control' type='text' name="level_2" onChange={handleChange} />
                        <label>
                            year:
                        </label>
                        <br />
                        <input className='form-control' type='text' name="year" onChange={handleChange} />
                        <label>
                            value:
                        </label>
                        <br />
                        <input className='form-control' type='text' name="value" onChange={handleChange} />
                    </FormGroup>
                    <ModalFooter>
                        <Button className='btn btn-primary' onClick={() => postData()} > Insertar </Button>
                        <Button className='btn btn-danger' onClick={() => openInsert()}> Cancelar </Button>
                    </ModalFooter>
                </ModalBody>
            </Modal>

        </>

    )
}




export default DataTable;
