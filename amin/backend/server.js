const express=require('express')

const bodyParser=require('body-parser')

const {MongoClient, ObjectID}=require('mongodb')

const assert=require('assert')

const app=express()
app.use(bodyParser.json())

const MongoUrl="mongodb://localhost:27017"
let id=ObjectID("5c503a1bd319a37d4f2a34c7")
const dataBase ="trello"
MongoClient.connect(

    MongoUrl,

    { useNewUrlParser: true },

    (err,client)=>{

        assert.equal(err,null,"dataabse failed to connecte")

        const db=client.db(dataBase)
        app.get("/project",(req,res)=>{

            db.collection("project")

            .find({_id :id})

            .toArray((err,data)=>{

                if(err) res.send("cannot get contact")

                else res.send(data)

            })

        })
    })

app.listen(3007,err=>{

    if(err) console.log('server erreur')

    else console.log("server is running on port 3007")

})