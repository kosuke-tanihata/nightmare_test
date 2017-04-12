require('dotenv').config;
var Nightmare = require('nightmare');
var nightmare = Nightmare({show:true});
date = new Date()
var file_name = String(date.getMonth()+1)+ '月' +  String(date.getDate())+'.png';

nightmare
   .viewport(1000,1000)
   .goto('https://tms.leverages.net/time_records/showtime')
   .type('#email',.env.email )
   .type('#password', .env.password)
   .click(['.login > input[type=submit]'][0])
   .wait(15000)
   .scrollTo(1009,1000)
   //退勤なら('#work_out')
   .click('#work_in')
   .wait(1000)
   .screenshot( file_name )
   .end()
   .then(function (result) {
    console.log('成功')
   })
  .catch(function (error) {
    console.error('失敗');
   });


