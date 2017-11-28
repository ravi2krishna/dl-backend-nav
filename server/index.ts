import * as express from "express";
import { json, urlencoded } from "body-parser";
import * as http from "http";
import "reflect-metadata";
process.env.NODE_ENV = "testing";

const app: express.Application = express();
app.use(json());
// app.use(urlencoded({
//     extended: true
// }));

var parsePost = function(req, callback) {
    var data = '';
    req.on('data', function(chunk) {
        data += chunk;
    });
    req.on('end', function() {
        if (data != '') {
            data = JSON.parse(data);
        }
        callback(data);
    });
}


app.all('*', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'accept, Content-Type, Authorization');

    if (req.headers['content-type'] && req.headers['content-type'].indexOf('application/x-www-form-urlencoded') > -1) {
        parsePost(req, function(data) {
            if (data && data != '') {
                req.body = data;
            }
            next();
        });
    } else {
        next();
    }

});

//Prefix as dledursc
app.get("/dledursc", (request: express.Request, response: express.Response) => {
    response.json({
        name: "e-Learning NodeJs Application"
    })
});

app.use((err: Error & { status: number }, request: express.Request, response: express.Response, next: express.NextFunction): void => {

    response.status(err.status || 500);
    response.json({
        error: "Server error"
    })
});
import { AppController } from './routes/AppController';
import { APIDocs } from './swagger/ApiDocs';

import { createConnection } from 'typeorm';
createConnection().then(async connection => {


    let appController = new AppController();
    //Prefix as dledursc
    app.use('/dledursc/api', appController.getRouter());


    let apiDocs = new APIDocs();
    //Prefix as dledursc
    app.use('/dledursc/swagger', apiDocs.getRouter());

    app.listen(3000);
    console.log("Listen port: 3000");
}).catch(error => console.log("TypeORM connection error: ", error));

process.on('uncaughtException', function(err) {
    console.log('Caught exception: ' + err);
});

// import { DataAccess } from "./config/DataAccess";
// new DataAccess();
