# nodejs-express-logger
A simple logger middleware for nodeJS express Framework API

## Setup:
Execute the following in your command line utility to clone/download the logger
```
```
## Dependecies:
For this module to work, the following are required:
* `node`
* `express`
## Usage:
**Note: It is assumed that you have installed the necessary dependencies**
The following example demonstrates the usage of this module:
```javascript
const express = require('express');
const app = express();
const logger = require('./path/to/logger');
app.use(logger);

app.get('/',function(req,res){
  res.status(200).send('Hello World')}
  
app.listen(8080,'0.0.0.0');
```
You can check you console everytime a request is made, it is logged with the following format(`$` is dynamic and variable name):
```
[$IP address]  <([$Date] [$time] [$weekday])>  {$request method => $request path}
```
