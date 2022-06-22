import axios from 'axios';

// ----------------- Configuration data -----------------

export const CONFIG = {
    headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": 'POST,GET, DELETE',
        'Content-Type': 'application/json'
      }
}

export const diagnoseViaWaveImg = async () => {

    console.log('diagnose !');
    await axios.post('http://localhost:5000/diagnose', CONFIG)
    .then((res) => {
        console.log(res);
        res.json().then((data) => console.log(data))
    })
}