// Create web server
// http://localhost:3000/comments
app.get('/comments', function(req, res){
    // connect to the database
    // get all the comments
    // send the comments to the browser
    // close the database connection
    res.send("This is the comments page");
});

// Path: comments/:id
app.get('/comments/:id', function(req, res){
    // connect to the database
    // get the comment with the given id
    // send the comment to the browser
    // close the database connection
    res.send("This is the comment with id: " + req.params.id);
});

// Path: comments
// Method: POST
app.post('/comments', function(req, res){
    // connect to the database
    // create a new comment with the given data
    // send the comment to the browser
    // close the database connection
    res.send("This is the post page");
});

// Path: comments/:id
// Method: PUT
app.put('/comments/:id', function(req, res){
    // connect to the database
    // update the comment with the given id
    // send the updated comment to the browser
    // close the database connection
    res.send("This is the put page");
});

// Path: comments/:id
// Method: DELETE
app.delete('/comments/:id', function(req, res){
    // connect to the database
    // delete the comment with the given id
    // send the deleted comment to the browser
    // close the database connection
    res.send("This is the delete page");
});

// listen for requests
app.listen(3000, function(){
    console.log("Server is listening on port 3000");
});