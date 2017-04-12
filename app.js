var Nightmare = require('nightmare');
var nightmare = Nightmare({show:true});
date = new Date()
var file_name = String(date.getMonth()+1)+ '月' +  String(date.getDate())+'.png';

nightmare
   .viewport(1000,1000)
   .goto('https://tms.leverages.net/time_records/showtime')
   .type('#email',    'kosuke.tanihata@leverages.jp')
   .type('#password', 'z2c3wxma')
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


// var Nightmare = require('nightmare');
// var nightmare = Nightmare({show:true});
// // date = new Date()
// // var file_name = String(date.getMonth()+1)+ '月' +  String(date.getDate())+'.png';

// const company_mails = [
//   "kenya.sakurai@leverages.jp",
//   ]

// nightmare
//    .viewport(1000,1000)
//    .goto('https://mail.google.com/mail/u/0/#inbox')
//    .type('#Email', 'kosuke.tanihata@leverages.jp')
//    .click('#next')
//    .wait(1000)
//    .type('#Passwd', 'z2c3wxma')
//    .click('#signIn')
//    .wait(3000)
//    .type('#gbqfq', 'kenya.sakurai@leverages.jp')
//    // .scrollTo(1009,1000)
//    .wait(1000)
//    .click('#gbqfb')
//    .end()
//    .then(function (result) {
//     console.log('成功')
//    })
//   .catch(function (error) {
//     console.error('失敗');
//    });
