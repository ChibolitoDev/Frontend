import React from 'react'
import { Button, FormGroup, ModalBody, ModalHeader, ModalFooter, Modal } from 'reactstrap'

const InsertData = ({ insert, handleChange, postData, openInsert }) => {
    return (
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
    )
}
export default InsertData;