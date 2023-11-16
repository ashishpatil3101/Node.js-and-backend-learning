const express = require('express');
const app = express();

// // Error handler middleware defined first
// app.use((err, req, res, next) => {
//   console.error(err.stack);

//   // Send a 500 Internal Server Error response to the client
//   res.status(500).send('Something went wrong!');
// });

// Route that intentionally throws an error
app.get('/simulate-error', (req, res, next) => {
  const err = new Error('Simulated Error');
  next(err);

});

app.use( (req, res)=>{

  res.send("hey done")

})


app.use((err, req, res, next) => {
  console.error(err.stack);

  // Send a 500 Internal Server Error response to the client
  res.status(500).send('Something went wrongggggg!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
