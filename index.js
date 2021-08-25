require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();

// app.use((req,res,next)=>{
//     console.log("I am in middleware");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("I am in 2nd midd");
//     res.status(404).json({
//         status:"fail"
//     });
// });

//3rd party middleware --> morgam
// app.use(morgan('short'));

//retrieve data from body---> post method
app.use(express.json());

app.get('/about',(req,res)=>{
    console.log("GEt all workd");
    res.status(200).json({
        "status":"success",
        data:{
            "restaurant":"pizza hut"
        }
    });
});

app.get('/about/:id',(req,res)=>{
    console.log(req.params);
});

app.post('/about',(req,res)=>{
    // if we dont use express.json middleware and body don't works
    console.log(req.body);
});

//update
app.put('/about/:id',(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
});

//delete
app.delete('/about/:id',(req,res)=>{
    console.log("I am in delete");
    res.status(202).json({
    status:"Success"
});

});

app.listen(process.env.PORT,()=>{
    console.log("Server is running in "+process.env.PORT);
});