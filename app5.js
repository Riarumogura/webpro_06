"use strict";
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

app.get("/", (req, res) => {
  res.render('landing', { title: "ホーム", links: [
    { url: "/keiyo", text: "京葉線1"},
    { url: "/keiyo2", text: "京葉線2"},
    { url: "/janken2", text: "じゃんけん2"},
    { url: "/sawara", text: "sawara" },
    { url: "/zahyo", text: "Minecraft座標一覧"},
    { url: "/stand", text: "ジョジョの奇妙な冒険 スターダストクルセイダース スタンド一覧"},
    { url: "/jujutsu", text: "呪術廻戦 登場人物一覧"},
  ]});
});

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

// Minecraft座標データベース
//内容
let zahyo = [
  {id:1, name:"mapleforest1", x:6200, y:60, z:5600, memo:"拠点から少し遠い、漁りかけ"},
  {id:2, name:"cave1", x:6245, y:40, z:5567, memo:"廃坑に続いてる、毒蜘蛛スポナーは破壊済み"},
  {id:3, name:"mansion1", x:712, y:60, z:25240, memo:"拠点から遠い、拠点近くネザー経由で行ける"},
  {id:4, name:"mapleforest2", x:700, y:55, z:5400, memo:"拠点から一番近い、地下にサクラダイヤモンド採掘場"}
];

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
  res.render('zahyo_detail', {zahyo: zahyo[ number ], id: number} );
});

// Delete
app.get("/zahyo/delete/:number", (req, res) => {
  zahyo.splice( req.params.number, 1 );
  res.redirect('/zahyo' );
});

// Create
app.post("/zahyo", (req, res) => {
  const id = zahyo.length > 0 ? zahyo[zahyo.length - 1].id + 1 : 1;
  const newdata = {
    name: req.body.name,
    x: req.body.x,
    y: req.body.y,
    z: req.body.z
  };
  zahyo.push( newdata );
  console.log( newdata );
  res.render('zahyo', {zahyo: zahyo} );
});

// Edit
app.get("/zahyo/edit/:number", (req, res) => {
  const number = req.params.number;
  res.render('zahyo_edit', {id: number, zahyo: zahyo[number]} );
});

// Update
app.post("/zahyo/update/:number", (req, res) => {
  zahyo[req.params.number].id = req.body.id;
  zahyo[req.params.number].name = req.body.name;
  zahyo[req.params.number].x = req.body.x;
  zahyo[req.params.number].y = req.body.y;
  zahyo[req.params.number].z = req.body.z;
  zahyo[req.params.number].memo = req.body.memo;
  console.log( zahyo );
  res.redirect('/zahyo' );
});

// 2. ジョジョの奇妙な冒険 スタンドデータベース

let stand = [
  {
    id: 1, 
    name: "スタープラチナ", 
    name2: "空条承太郎", 
    dpower: "A", 
    speed: "A", 
    range: "C", 
    persistance: "A", 
    precision: "A", 
    dpotential: "A" 
  },
  {
    id: 2, 
    name: "マジシャンズ・レッド", 
    name2: "モハメド・アヴドゥル", 
    dpower: "B", 
    speed: "B", 
    range: "C", 
    persistance: "B", 
    precision: "C", 
    dpotential: "D" 
  },
  {
    id: 3, 
    name: "ハイエロファントグリーン", 
    name2: "花京院典明", 
    dpower: "C", 
    speed: "B", 
    range: "A", 
    persistance: "B", 
    precision: "C", 
    dpotential: "D" 
  },
  {
    id: 4, 
    name: "シルバーチャリオッツ", 
    name2: "J・P・ポルナレフ", 
    dpower: "C", 
    speed: "A", 
    range: "C", 
    persistance: "B", 
    precision: "B", 
    dpotential: "C" 
  },
  {
    id: 5, 
    name: "ザ・ワールド", 
    name2: "DIO", 
    dpower: "A", 
    speed: "A", 
    range: "C", 
    persistance: "A", 
    precision: "B", 
    dpotential: "B" 
  }
];

// 一覧
app.get("/stand", (req, res) => {
  res.render('stand', { stand: stand });
});

// Create
app.get("/stand/create", (req, res) => {
  res.redirect('/public/stand_add.html');
});

// Read
app.get("/stand/:number", (req, res) => {
  const number = req.params.number;
  res.render('stand_detail', { stand: stand[ number ], id: number });
});

// Delete
app.get("/stand/delete/:number", (req, res) => {
  stand.splice(req.params.number, 1);
  res.redirect('/stand' );
});

// Create
app.post("/stand", (req, res) => {
  const id = stand.length > 0 ? stand[stand.length - 1].id + 1 : 1;
  const newdata = {
    id: id,
    name: req.body.name,
    name2: req.body.name2,
    dpower: req.body.dpower,
    speed: req.body.speed,
    range: req.body.range,
    persistance: req.body.persistance,
    precision: req.body.precision,
    dpotential: req.body.dpotential
  };
  stand.push(newdata);
  console.log( newdata );
  res.render('stand', { stand: stand });
});

// Edit
app.get("/stand/edit/:number", (req, res) => {
  const number = req.params.number;
  res.render('stand_edit', { id: number, stand: stand[number] });
  });

// Update
app.post("/stand/update/:number", (req, res) => {
  stand[req.params.number].id = req.body.id;
  stand[req.params.number].name = req.body.name;
  stand[req.params.number].name2 = req.body.name2;
  stand[req.params.number].dpower = req.body.dpower;
  stand[req.params.number].speed = req.body.speed;
  stand[req.params.number].range = req.body.range;
  stand[req.params.number].persistance = req.body.persistance;
  stand[req.params.number].precision = req.body.precision;
  stand[req.params.number].dpotential = req.body.dpotential;
  console.log( stand );
  res.redirect('/stand');
});


// 呪術廻戦 登場人物データベース

let jujutsu = [
  { 
    id: 1, 
    name: "虎杖悠仁", 
    rank: "なし", 
    jutsushiki: "なし", 
    ryoiki: "なし" 
  },
  { 
    id: 2, 
    name: "伏黒恵", 
    rank: "2級", 
    jutsushiki: "十種影法術", 
    ryoiki: "嵌合暗翳庭" 
  },
  { 
    id: 3, 
    name: "釘崎野薔薇", 
    rank: "3級", 
    jutsushiki: "芻霊呪法", 
    ryoiki: "なし" 
  },
  { 
    id: 4, 
    name: "五条悟", 
    rank: "特級", 
    jutsushiki: "無下限呪術", 
    ryoiki: "無量空処" 
  },
  { 
    id: 5, 
    name: "両面宿儺", 
    rank: "特級", 
    jutsushiki: "御厨子", 
    ryoiki: "伏魔御廚子" 
  }
];

// 一覧
app.get("/jujutsu", (req, res) => {
  res.render('jujutsu', { jujutsu: jujutsu });
});

// Create
app.get("/jujutsu/create", (req, res) => {
  res.redirect('/public/jujutsu_add.html');
});

// Read
app.get("/jujutsu/:number", (req, res) => {
  const number = req.params.number;
  res.render('jujutsu_detail', { jujutsu: jujutsu[number], id: number });
});

// Delete
app.get("/jujutsu/delete/:number", (req, res) => {
  jujutsu.splice(req.params.number, 1);
  res.redirect('/jujutsu');
});

// Create
app.post("/jujutsu", (req, res) => {
  const id = jujutsu.length > 0 ? jujutsu[jujutsu.length - 1].id + 1 : 1;
  const newdata = {
    id: id,
    name: req.body.name,
    rank: req.body.rank,
    jutsushiki: req.body.jutsushiki,
    ryoiki: req.body.ryoiki
  };
  jujutsu.push(newdata);
  console.log( newdata );
  res.render('jujutsu', { jujutsu: jujutsu });
});

// Edit
app.get("/jujutsu/edit/:number", (req, res) => {
  const number = req.params.number;
  res.render('jujutsu_edit', { id: number, jujutsu: jujutsu[number] });
});

// Update
app.post("/jujutsu/update/:number", (req, res) => {
  jujutsu[req.params.number].id = req.body.id;
  jujutsu[req.params.number].name = req.body.name;
  jujutsu[req.params.number].rank = req.body.rank;
  jujutsu[req.params.number].jutsushiki = req.body.jutsushiki;
  jujutsu[req.params.number].ryoiki = req.body.ryoiki;
  console.log( jujutsu );
  res.redirect('/jujutsu');
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
