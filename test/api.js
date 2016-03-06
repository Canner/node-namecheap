var path= require('path');
var fs= require('fs');
var Namecheap = require('../namecheap');
var namecheap = new Namecheap(
  process.env.NAMECHEAP_USER, 
  process.env.NAMECHEAP_KEY, 
  process.env.NODE_IP);

namecheap.users.getOneYearRegisterPrice()
.then(function (res) {
    console.log(res);
}).catch(console.log)
