const { name } = require("ejs");
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

let station = [
  { id:1, code:"JE01", name:"東京駅"},
  { id:2, code:"JE07", name:"舞浜駅"},
  { id:3, code:"JE12", name:"新習志野駅"},
  { id:4, code:"JE13", name:"幕張豊砂駅"},
  { id:5, code:"JE14", name:"海浜幕張駅"},
  { id:6, code:"JE05", name:"新浦安駅"},
];

let station2 = [
  { id:1, code:"JE01", name:"東京駅", change:"総武本線，中央線，etc", passengers:403831, distance:0 },
  { id:2, code:"JE02", name:"八丁堀駅", change:"日比谷線", passengers:31071, distance:1.2 },
  { id:3, code:"JE05", name:"新木場駅", change:"有楽町線，りんかい線", passengers:67206, distance:7.4 },
  { id:4, code:"JE07", name:"舞浜駅", change:"舞浜リゾートライン", passengers:76156,distance:12.7 },
  { id:5, code:"JE12", name:"新習志野駅", change:"", passengers:11655, distance:28.3 },
  { id:6, code:"JE17", name:"千葉みなと駅", change:"千葉都市モノレール", passengers:16602, distance:39.0 },
  { id:7, code:"JE18", name:"蘇我駅", change:"内房線，外房線", passengers:31328, distance:43.0 },
];

let sawara = [
  {id:1, code:"riarumogura"},
  {id:2, code:"Rainn7"},
  {id:3, code:"kanarisenpai"},
  {id:4, code:"mista"}
];

let zahyo = [
  {id:1, name:"mapleforest1", x:6200, y:60, z:5600},
  {id:2, name:"cave1", x:6245, y:40, z:5567},
  {id:3, name:"mansion1", x:712, y:60, z:25240},
  {id:4, name:"mapleforest2", x:700, y:55, z:5400}
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

// 一覧
app.get("/keiyo2", (req, res) => {
  res.render('keiyo2', {data: station2} );
});

// Create
app.get("/keiyo2/create", (req, res) => {
  res.redirect('/public/keiyo2_new.html');
});

// Read
app.get("/keiyo2/:number", (req, res) => {
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_detail', {newdata: detail, id: number} );
});

// Delete
app.get("/keiyo2/delete/:number", (req, res) => {
  station2.splice( req.params.number, 1 );
  res.redirect('/keiyo2' );
});

// Create
app.post("/keiyo2", (req, res) => {
  const id = station2.length + 1;
  const code = req.body.code;
  const name = req.body.name;
  const change = req.body.change;
  const passengers = req.body.passengers;
  const distance = req.body.distance;
  station2.push( { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance } );
  console.log( station2 );
  res.render('keiyo2', {data: station2} );
});

// Edit
app.get("/keiyo2/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = station2[ number ];
  res.render('keiyo2_edit', {id: number, data: detail} );
});

// Update
app.post("/keiyo2/update/:number", (req, res) => {
  station2[req.params.number].code = req.body.code;
  station2[req.params.number].name = req.body.name;
  station2[req.params.number].change = req.body.change;
  station2[req.params.number].passengers = req.body.passengers;
  station2[req.params.number].distance = req.body.distance;
  console.log( station2 );
  res.redirect('/keiyo2' );
});

// Minecraft zahyo
// 一覧
app.get("/zahyo", (req, res) => {
  res.render('zahyo', {zahyo: zahyo} );
});

// Create
app.get("/zahyo/create", (req, res) => {
  res.redirect('/public/zahyo_add.html');
});

// Read
app.get("/zahyo/:number", (req, res) => {
  const number = req.params.number;
  const detail = zahyo[ number ];
  res.render('zahyo_detail', {zahyo: detail, id: number} );
});

// Delete
app.get("/zahyo/delete/:number", (req, res) => {
  zahyo.splice( req.params.number, 1 );
  res.redirect('/zahyo' );
});

// Create
app.post("/zahyo", (req, res) => {
  const id = zahyo.length + 1;
  const name = req.body.name;
  const x = req.body.x;
  const y = req.body.y;
  const z = req.body.z;
  zahyo.push( { id: id, name: name, x: x, y: y, z: z } );
  console.log( zahyo );
  res.render('zahyo', {zahyo: zahyo} );
});

// Edit
app.get("/zahyo/edit/:number", (req, res) => {
  const number = req.params.number;
  const detail = zahyo[ number ];
  res.render('zahyo_edit', {id: number, zahyo: detail} );
});

// Update
app.post("/keiyo2/update/:number", (req, res) => {
  zahyo[req.params.number].name = req.body.name;
  zahyo[req.params.number].x = req.body.x;
  zahyo[req.params.number].y = req.body.y;
  zahyo[req.params.number].z = req.body.z;
  console.log( zahyo );
  res.redirect('/zahyo' );
});

app.get("/keiyo_add2", (req, res) => {
  let id = req.query.id;
  let code = req.query.code;
  let name = req.query.name;
  let change = req.query.change;
  let passengers = req.query.passengers;
  let distance = req.query.distance;
  let newdata = { id: id, code: code, name: name, change: change, passengers: passengers, distance: distance };
  station2.push( newdata );
  //res.render('db2', {data: station});
  //res.redirect('/public/keiyo_add2.html');
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
