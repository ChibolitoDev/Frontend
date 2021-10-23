import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './components/Index';
import { useState } from 'react';

const App = () => {

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

  return (
    <>
      <Index data={data}
        setData={setData}
        dataS={dataS}
        setDataS={setDataS}
        insert={insert}
        setInsert={setInsert}
        del={del}
        setDelete={setDelete}
        edit={edit}
        setEdit={setEdit} />
    </>

  )
}


export default App;
