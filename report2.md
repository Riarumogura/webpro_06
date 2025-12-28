### ジョジョの奇妙な冒険 スターダストクルセイダース スタンド -->
#### ページ遷移図
```mermaid
stateDiagram-v2

/--> /stand: スタンド一覧を表示(1)
/stand --> /:ホームに戻る

/stand --> stand_add.html: スタンドを登録
stand_add.html --> /stand: 一覧に戻る

/stand --> /stand/n: スタンド詳細を表示
/stand/n --> /stand: 一覧に戻る
/stand/n --> /stand: スタンドを削除

/stand/n --> /stand/edit/n: スタンドを編集
/stand/edit/n --> /stand: 一覧に戻る

/stand --> /stand: スタンドを削除
```

#### (1)のパラメータ

パラメータ名 | 属性 | 内容 |
-|-|-
id | number | id
name | text | スタンド名
name2 | text | 本体
dpower | text | 破壊力
speed | text | スピード
range | text | 射程距離
persistance | text | 持続力
precision | text | 精密動作性
dpotential | text | 成長性

### 呪術廻戦 登場人物
#### ページ遷移図
```mermaid
stateDiagram-v2

/ --> /jujutsu: 登場人物一覧を表示(2)
/jujutsu --> /:ホームに戻る

/jujutsu --> jujutsu_add.html: 人物を登録
jujutsu_add.html --> /jujutsu: 一覧に戻る

/jujutsu --> /jujutsu/n: 人物詳細を表示
/jujutsu/n --> /jujutsu: 一覧に戻る
/jujutsu/n --> /jujutsu: 人物を削除

/jujutsu/n --> /jujutsu/edit/n: スタンドを編集
/jujutsu/edit/n --> /jujutsu: 一覧に戻る

/jujutsu --> /jujutsu:人物を削除
```

#### (2)のパラメータ

パラメータ名 | 属性 | 内容 |
-|-|-
id | number | id
name | text | 人物名
rank | text | 階級
jutsushiki | text | 術式名
ryoiki | text | 領域名

###  Minecraft座標登録
#### ページ遷移図
```mermaid
stateDiagram-v2

/ --> /zahyo: 座標一覧を表示(3)
/zahyo --> /: ホームに戻る

/zahyo --> zahyo_add.html: 座標を登録
zahyo_add.html --> /zahyo: 一覧に戻る

/zahyo --> /zahyo/n: 座標の詳細を表示
/zahyo/n --> /zahyo: 一覧に戻る
/zahyo/n --> /zahyo: 座標を削除

/zahyo/n --> /zahyo/edit/n: 座標を編集
/zahyo/edit/n --> /zahyo: 一覧に戻る

/zahyo --> /zahyo: 座標を削除
```

#### (3)のパラメータ

パラメータ名 | 属性 | 内容 |
-|-|-
id | number | id
name | text | 名前 
x | number | X座標 
y | number | Y座標 
z | number | Z座標 