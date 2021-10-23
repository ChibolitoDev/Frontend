import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'reactstrap'

const DataTable = ({ data, SingleData }) => {


    return (
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
                                <Button color="primary" onClick={() => SingleData(element, "Editar")}>
                                    Editar
                                </Button>
                            </td>
                            <td>
                                <Button color="danger" onClick={() => SingleData(element, "Eliminar")}>
                                    Eliminar
                                </Button>
                            </td>
                        </tr>)
                    )}
            </tbody>
        </Table>
    )
}

export default DataTable;