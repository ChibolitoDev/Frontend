import React, { useEffect, useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Table, Button, Container } from 'reactstrap'

const DataTable = () => {
    const baseUrl = "http://127.0.0.1:5000/";
    const [data, setData] = useState([]);

    const getData = async () => {
        await axios.get(baseUrl)
            .then(res => {
                setData(res.data)
            }).catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Container>
                <br />
                <Button color="primary">Insertar nueva Data</Button>
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
                                <tr>
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
        </>

    )
}


export default DataTable;
