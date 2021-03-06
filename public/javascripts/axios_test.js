function performGetRequest1() {
    var temp = ';'
     
     axios.get('http://localhost:3000/api')
       .then(function (response) {
         temp = response;
         console.log(temp);
         alert("performing get request");
       })
       .catch(function (error) {
         alert("ERRORS");
         console.log(error);
         //resultElement.innerHTML = generateErrorHTMLOutput(error);
       });   
}

async function performPostRequest(r, g, b) {
    return await axios.post(`/api/uniformColor/setColor`, { r, g, b })
/*       .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      }); */
}

function postBrightness(b) {
  axios.post('/api/uniformColor/setBrightness', { brightness: b })
    .then(function (response) {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
}

function postAnimation(animation) {
  axios.post(`/api/animations/${animation}`)
    .then(function (response) {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    })
}
