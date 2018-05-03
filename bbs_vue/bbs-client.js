//node bbs-client.js

const axios = require('axios'); 


axios.get('http://localhost:3001/api/write', {
    params: {
        name: "user1",
        body: "nanana"
    }
  })
  .then(response => {
    console.log(response.data)
  })
  .catch(error => {
    console.log(error);
  });

axios.get('http://localhost:3001/api/getItems', {
    params: {
    }
  })
  .then(response => {
    console.log(response.data.logs.length);
    console.log(response.data.logs[0]);
    console.log(response.data.logs[0].name);
    console.log(response.data.logs[0].body);
    console.log(response.data.logs[0].stime);
  })
  .catch(error => {
    console.log(error);
  });


