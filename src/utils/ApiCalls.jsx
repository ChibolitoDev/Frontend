import axios from 'axios';

const Url = process.env.REACT_APP_URL

export const getData = async ({ setData }) => { //GetMethod
    await axios.get(Url)
        .then(res => {
            setData(res.data)
        }).catch(error => {
            console.log(error)
        })
}

export const postData = async ({ dataS, setData, data, openInsert }) => { //PostMethod
    delete dataS.id;
    await axios.post(Url, dataS)
        .then(res => {
            setData(data.concat(res.data));
            openInsert();
        }).catch(error => {
            console.log(error)
        })
}

export const putData = async ({ dataS, data, openEdit, setData }) => { //PostMethod

    await axios.put(`${Url}/${dataS.id}`, dataS)
        .then(res => {
            var resp = res.data
            var dataAux = data;
            dataAux.map(element => {
                if (element.id === resp.id) { element = resp }
            })
            getData({ setData });
            openEdit()
        }).catch(error => {
            console.log(error)
        })
}
export const deleteData = async ({ dataS, openDelete, setData }) => { //PostMethod
    await axios.delete(`${Url}/${dataS.id}`)
        .then(res => {
            getData({ setData });
            openDelete();
        }).catch(error => {
            console.log(error)
        })
}