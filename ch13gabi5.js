
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();

const jsonPath = path.join(__dirname, 'paintings.json');
let paintings;
fs.readFile(jsonPath, (err,data)=> {
    if (err)
    console.log('Unable to read json data file');
else 
paintings = JSON.parse(data);
});

app.get('/', (req,resp) => { resp.json(paintings)});


app.get('/gallery/:ID', (req,resp) => {
    const ID = re.params.ID;
    const matches = paintings.filter(obj => ID === obj.gallery.galleryID)
    resp.json(matches);
});
app.get('paintings/:artistID',(req,resp) => {
    const searchartistID = req.params.artistID();
    const matches = paintings.filter(obj => searchartistID === obj.paintings.artist.artistID);
    resp.json(matches);
});





let port = 8080;
app.listen(port, () => {
    console.log("Server running at port = " + port);
});