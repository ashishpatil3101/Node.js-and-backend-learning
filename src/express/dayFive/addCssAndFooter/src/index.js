const express = require('express');
const app = express();


// Route that intentionally throws an error
app.get('/', (req, res) => {
 
  app.use( express.static)

});

app.use( (req, res)=>{

  res.send("hey done")

})



// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
