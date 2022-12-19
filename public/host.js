require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const app = express();
const httpServer = http.createServer(app);
const httpsServer = https.createServer(app);

const url = '/Website/index.html'
const fileFormDOM = document.querySelector('.file-form')


imageInputDOM.addEventListener('change',async (e)=>{
 const imageFile = e.target.files[0];
 const formData = new FormData();
 formData.append('image',imageFile)
 try {
  const {data:{image:{src}}} = await app.post(`${url}/uploads`,formData,{
   headers:{
    'Content-Type':'multipart/form-data'
   }
  })
  imageValue = src
 } catch (error) {
   imageValue = null
  console.log(error);
 }
})


fileFormDOM.addEventListener('submit',async (e)=>{
e.preventDefault()
try {
 
  await axios.post(url,product);
  fetchProducts()
} catch (error) {
 console.log(error);
}
})



httpServer.listen(21),

httpsServer.listen(21),

app.get('/Website/public_html', function (req, res) {
    res.header('Content-type', 'text/html');
    return res.end('<h1>Connected!</h1>');
}),
module.exports = app


 