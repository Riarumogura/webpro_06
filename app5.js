const { name } = require("ejs");
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

let station = [
  { id:1, code:"JE01", name:"東京駅"},
  { id:2, code:"JE07", name:"舞浜駅"},
  { id:3, code:"JE12", name:"新習志野駅"},
  { id:4, code:"JE13", name:"幕張豊砂駅"},
  { id:5, code:"JE14", name:"海浜幕張駅"},
  { id:6, code:"JE05", name:"新浦安駅"},
];

let sawara = [
  {id:1, code:"riarumogura"},
  {id:2, code:"Rainn7"},
  {id:3, code:"kanarisenpai"},
  {id:4, code:"mista"}
];

app.get("/sawara", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('db3', { data: sawara });
});


app.get("/keiyo", (req, res) => {
  // 本来ならここにDBとのやり取りが入る
  res.render('db2', { data: station });
});

app.get("/keiyo_add", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let newdata = { id: id, code: code, name: name };
  station.push( newdata );
  //res.render('db2', {data: station});
  //res.redirect('/public/keiyo_add.html');
});

app.get("/hello1", (req, res) => {
  const message1 = "Hello world";
  const message2 = "Bon jour";
  res.render('show', { greet1:message1, greet2:message2});
});

app.get("/hello2", (req, res) => {
  res.render('show', { greet1:"Hello world", greet2:"Bon jour"});
});

app.get("/icon", (req, res) => {
  res.render('icon', { filename:"./public/Apple_logo_black.svg", alt:"Apple Logo"});
});

app.get("/omikuji1", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.send( '今日の運勢は' + luck + 'です' );
});

app.get("/omikuji2", (req, res) => {
  const num = Math.floor( Math.random() * 6 + 1 );
  let luck = '';
  if( num==1 ) luck = '大吉';
  else if( num==2 ) luck = '中吉';

  res.render( 'omikuji2', {result:luck} );
});

app.get("/janken2", (req, res) => {
  let hand = req.query.hand;
  let win = Number( req.query.win )||0;
  let total = Number( req.query.total )||0;
  console.log( {hand, win, total});
  const num = Math.floor( Math.random() * 3 + 1 );
  let cpu = '';
  let judgement = '';
  if( num==1 ) cpu = 'グー';
  else if( num==2 ) cpu = 'チョキ';
  else cpu = 'パー';

  let user = '';
  if( hand==1 ) user = 'グー';
  else if( hand==2 ) user = 'チョキ';
  else if( hand==3) user = 'パー';

  if(num=='1'){
    if(hand=='1'){
      judgement = 'あいこ';
      total += 1;
    }else if(hand=='2'){
      judgement = '負け';
      total += 1;
    }else{
      judgement = '勝ち';
      win += 1;
      total += 1;
    }
  }else if(num=='2'){
    if(hand=='1'){
      judgement = '勝ち';
      win += 1;
      total += 1;
    }else if(hand=='2'){
      judgement = 'あいこ';
      total += 1;
    }else{
      judgement = '負け';
      total += 1;
    }
  }else if(num=='3'){
    if(hand=='1'){
      judgement = '負け';
      total += 1;
    }else if(hand=='2'){
      judgement = '勝ち';
      total += 1;
      win += 1;
    }else{
      judgement = 'あいこ';
      total += 1;
    }
  }

  const display = {
    your: user,
    cpu: cpu,
    judgement: judgement,
    win: win,
    total: total
  }
  res.render( 'janken2', display );
});

app.listen(8080, () => console.log("Example app listening on port 8080!"));
