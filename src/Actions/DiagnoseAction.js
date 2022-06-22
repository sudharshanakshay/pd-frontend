import axios from "axios";

// ----------------- Configuration data -----------------

export const CONFIG = {
    headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'POST,GET, DELETE',
        'Content-Type': 'application/json'
      }
}

export const sendTestImage = async () => {
    const text = 'test text !';
    // const body = JSON.parse(text)

    
    // await axios.post('http://localhost:5000/', {text : 'hello'}, CONFIG);
    // await fetch('/data').then((res) => {
    //     res.json().then((data) =>{
    //         console.log(data);
    //     }) 
    // })

    await fetch('/diagnose').then((res) => {
        res.json().then((data) => console.log(data))
    })
}