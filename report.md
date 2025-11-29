# レポート課題のページ遷移

### 1. Minecraft座標登録
#### ページ遷移図
```mermaid
stateDiagram-v2

/ --> /zahyo: 座標一覧を表示(1)
/zahyo --> /: ホームに戻る

/zahyo --> /zahyo_detail: 座標の詳細を表示
/zahyo_detail --> /zahyo: 一覧に戻る
/zahyo_detail --> /zahyo: 座標を削除

/zahyo --> zahyo_add.html: 座標を登録
zahyo_add.html --> /zahyo: 一覧に戻る

/zahyo_detail --> /zahyo_edit: 座標を編集
/zahyo_edit --> /zahyo: 一覧に戻る

/zahyo --> /zahyo: 座標を削除
```

#### (1)のパラメータ

パラメータ名 | 属性 | 内容 |
-|-|-
id | number | id
name | text | 名前 
x | number | X座標 
y | number | Y座標 
z | number | Z座標 

### 2. ジョジョの奇妙な冒険 スターダストクルセイダース スタンド
#### ページ遷移図
```mermaid
stateDiagram-v2

/--> /stand: スタンド一覧を表示(2)
/stand --> /:ホームに戻る

/stand --> stand_add.html: スタンドを登録
stand_add.html --> /stand: 一覧に戻る

/stand --> /stand_detail: スタンド詳細を表示
/stand_detail --> /stand: スタンドを削除
/stand_detail --> /stand: 一覧に戻る

/stand_detail --> /stand_edit: スタンドを編集
/stand_edit --> /stand: 一覧に戻る

/stand --> /stand: スタンドを削除
```

#### (2)のパラメータ

パラメータ名 | 属性 | 内容 |
-|-|-
id | number | id
name | text | スタンド名
name2 | text | 本体
dpower | radio | 破壊力
speed | radio | スピード
range | radio | 射程距離
persistance | radio | 持続力
precision | radio | 精密動作性
dpotential | radio | 成長性

### 3. 呪術廻戦 登場人物
### ページ遷移図
```mermaid
stateDiagram-v2

/ --> /jujutsu: 登場人物一覧を表示(3)
/jujutsu --> /:ホームに戻る

/jujutsu --> jujutsu_add.html: 人物を登録
jujutsu_add.html --> /jujutsu: 一覧に戻る

/jujutsu --> /jujutsu_detail: 人物詳細を表示
/jujutsu_detail --> /jujutsu: 一覧に戻る
/jujutsu_detail --> /jujutsu: 人物を削除

/jujutsu_detail --> /jujutsu_edit: スタンドを編集
/jujutsu_edit --> /jujutsu: 一覧に戻る

/jujutsu --> /jujutsu:人物を削除
```

#### (3)のパラメータ

パラメータ名 | 属性 | 内容 |
-|-|-
id | number | id
name | text | スタンド名
rank | radio | 階級
jutsushiki | text | 術式名
ryoiki | text | 領域名
