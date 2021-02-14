const express= require("express");
const path= require("path")
const fs= require("fs");

const app= express();

const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//send user to initial home screen
// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));



//Listener
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });