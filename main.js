var express = require("express");
// var mongo=require('mongodb');
// var bodyParser = require("body-parser");
var app=express();

app.get('/', function(req,res){
    res.sendFile(__dirname+'/pages/'+'index.html');
});

// var MongoClient = mongo.MongoClient;
// var url = "mongodb://localhost:27017/";

// //ENCONTRAR POR CODIGO DE CLIENTE
// app.get('/client/:cod',function(req,res){
//     var jsonObj;    
//     var code=req.params.cod;

//     MongoClient.connect(url, function(err, db) {


//         if (err) throw err;
//         var dbo = db.db("events");

                   
//             dbo.collection("client").findOne({identification: code}, function(err, result) {
//                 if (err) throw err;
//                 console.log(result);
//                 jsonObj=result;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.send(result);
//                 db.close();
//             });             
        



//       });

// });

// //LISTAR TODOS LOS CLIENTES
// app.get('/client',function(req,res){
//     var jsonObj;  
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("events");        
//         dbo.collection("client").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         jsonObj=result;
//         res.setHeader('Content-Type', 'application/json');
//         res.send(result);
//         db.close();
//         });
//       });
// });

// //METODO POST, ACTUALIZA objetos y almacenarlos en MongoDB
// app.use(bodyParser.json());
// app.post('/client/update',function(req,res){

//     var jsonObj=req.body;//Obtencion del objeto JSON
//     var cedula={identification:jsonObj.identification};
//     console.log(cedula);
//     var objCambios={ $set: jsonObj };
//     console.log(objCambios);

//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("events");
//         dbo.collection("client").updateOne(cedula,objCambios, function(err, result) {
//             if (err) throw err;
//             //console.log(result);
//             //console.log(jsonObj);
            
            
//             res.status(200).send();
//             db.close();
//           });             
//       });

// });


// //METODO DELETE, borra objeto de la BDD MongoDB
// app.delete('/client/delete/:cod',function(req,res){
//     var codigo={identification:req.params.cod};
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("events");

//         dbo.collection("client").deleteOne(codigo, function(err, result) {
//                     if (err){res.status(404).send();throw err;}
//                     console.log("1 document deleted");
//                     //console.log(jsonObj);
//                     //var resultado={ok: 1};
//                     res.setHeader('Content-Type', 'application/json');
//                     //res.send(resultado);
//                     //res.status(200);
//                     res.status(200).send();
//                     db.close();
//                   });
                     
//       });
// });

// //EVENTOS
// //ENCONTRAR POR CODIGO DE EVENTO
// app.get('/event/:cod',function(req,res){
//     var jsonObj;    
//     var code=req.params.cod;

//     MongoClient.connect(url, function(err, db) {


//         if (err) throw err;
//         var dbo = db.db("events");

                   
//             dbo.collection("event").findOne({code: code}, function(err, result) {
//                 if (err) throw err;
//                 console.log(result);
//                 jsonObj=result;
//                 res.setHeader('Content-Type', 'application/json');
//                 res.send(result);
//                 db.close();
//             });             
        



//       });

// });

// //LISTAR TODOS LOS EVENTOS
// app.get('/event',function(req,res){
//     var jsonObj;  
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("events");        
//         dbo.collection("event").find({}).toArray(function(err, result) {
//         if (err) throw err;
//         console.log(result);
//         jsonObj=result;
//         res.setHeader('Content-Type', 'application/json');
//         res.send(result);
//         db.close();
//         });
//       });
// });

// //NUEVO EVENTO
// app.use(bodyParser.json());
// app.put('/event/new',function(req,res){

//     var jsonObj=req.body;//Obtencion del objeto JSON

//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("events");
//         dbo.collection("event").insertOne(jsonObj, function(err, result) {
//           if (err) throw err;
//          // console.log("1 document inserted");
//           //console.log(jsonObj);
//           //var resultado={ok: 1};
//           res.setHeader('Content-Type', 'application/json');
//           res.status(200).send();
//           db.close();
//         });
//       });

// });

// //METODO POST, ACTUALIZA objetos y almacenarlos en MongoDB

// app.post('/event/update',function(req,res){

//     var jsonObj=req.body;//Obtencion del objeto JSON
//     var code={code:jsonObj.code};
    
//     var objChanges={ $set: jsonObj };
//     console.log(objChanges);

//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("events");
//         dbo.collection("event").updateOne(code,objChanges, function(err, result) {
//             if (err) throw err;
//             //console.log(result);
//             //console.log(jsonObj);
            
            
//             res.status(200).send();
//             db.close();
//           });             
//       });

// });


// //METODO DELETE, borra objeto de la BDD MongoDB
// app.delete('/event/delete/:cod',function(req,res){
//     var code={code:req.params.cod};
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("events");

//         dbo.collection("event").deleteOne(code, function(err, result) {
//                     if (err){res.status(404).send();throw err;}
//                     console.log("1 document deleted");
//                     //console.log(jsonObj);
//                     //var resultado={ok: 1};
//                     res.setHeader('Content-Type', 'application/json');
//                     //res.send(resultado);
//                     //res.status(200);
//                     res.status(200).send();
//                     db.close();
//                   });
                     
//       });
// });



app.listen(process.env.PORT || 5000);
console.log("Server started...");