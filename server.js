const express= require("express");
const path= require("path")
const fs= require("fs");
const notesData= require("./db/db.json")

const app= express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

//send user to initial home screen
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

//route that sends user to notes taking page
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));

app.get('/api/notes', (req, res) => res.json(notesData));

app.post('/api/notes', (req, res) => {
    notesData.push(req.body);
    res.json(true) 
  });



//Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });