const mongoose= require('mongoose')
const express = require('express')

mongoose.connect("mongodb+srv://stockNotifier:123@cluster0.zfldi.mongodb.net/demo", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Mongo DB Connected"))
        .catch(err => {
            console.log(err);
        })
        

