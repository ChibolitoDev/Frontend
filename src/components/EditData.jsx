import React from 'react'

import { Button, FormGroup, ModalBody, ModalHeader, ModalFooter, Modal } from 'reactstrap'


const EditData = ({ edit, dataS, handleChange, putData, openEdit }) => {
    return (
        <Modal isOpen={edit}>
            <ModalBody>
                <ModalHeader> Editar Data</ModalHeader>
                <FormGroup>
                    <label>
                        Level_1:
                    </label>
                    <br />
                    <input className='form-control' type='text' name="level_1" onChange={handleChange} value={dataS && dataS.level_1} />
                    <label>
                        Level_2:
                    </label>
                    <br />
                    <input className='form-control' type='text' name="level_2" onChange={handleChange} value={dataS && dataS.level_2} />
                    <label>
                        year:
                    </label>
                    <br />
                    <input className='form-control' type='text' name="year" onChange={handleChange} value={dataS && dataS.year} />
                    <label>
                        value:
                    </label>
                    <br />
                    <input className='form-control' type='text' name="value" onChange={handleChange} value={dataS && dataS.value} />
                </FormGroup>
                <ModalFooter>
                    <Button className='btn btn-primary' onClick={() => putData()} > Editar </Button>
                    <Button className='btn btn-danger' onClick={() => openEdit()}> Cancelar </Button>
                </ModalFooter>
            </ModalBody>
        </Modal>
    )
}
export default EditData;