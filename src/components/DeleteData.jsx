import React from 'react'
import { Button, FormGroup, ModalBody, ModalHeader, ModalFooter, Modal } from 'reactstrap'

const DeleteData = ({ del, dataS, handleChange, deleteData, openDelete }) => {
    return (
        <Modal isOpen={del}>
            <ModalBody>
                <ModalHeader>
                    ¿ESTAS SEGURO QUE DESEA ELIMINAR ESTE DATO DE LA BASE DE DATOS?
                </ModalHeader>
                <FormGroup>
                    <label>
                        Level_1:
                    </label>
                    <br />
                    <input className='form-control' type='text' name="level_1" onChange={handleChange} value={dataS && dataS.level_1} readOnly />
                    <label>
                        Level_2:
                    </label>
                    <br />
                    <input className='form-control' type='text' name="level_2" onChange={handleChange} value={dataS && dataS.level_2} readOnly />
                    <label>
                        year:
                    </label>
                    <br />
                    <input className='form-control' type='text' name="year" onChange={handleChange} value={dataS && dataS.year} readOnly />
                    <label>
                        value:
                    </label>
                    <br />
                    <input className='form-control' type='text' name="value" onChange={handleChange} value={dataS && dataS.value} readOnly />
                </FormGroup>
            </ModalBody>

            <ModalFooter>
                <Button className='btn btn-danger' onClick={() => deleteData()}>
                    Si
                </Button>
                <Button className='btn btn-secondary' onClick={() => openDelete()}>
                    No
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default DeleteData