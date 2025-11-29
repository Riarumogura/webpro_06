# レポート課題のページ遷移

### 1. Minecraft座標登録
#### ページ遷移図
```mermaid
stateDiagram-v2
[*] --> /

/ --> /zahyo: 座標一覧を表示(1)
/zahyo --> /: ホームに戻る

/zahyo --> /zahyo_detail: 座標の詳細を表示
/zahyo_detail --> /zahyo: 一覧に戻る

/zahyo --> zahyo_add.html: 座標を登録
zahyo_add.html --> /zahyo: 一覧に戻る

/zahyo --> /zahyo_edit: 座標を編集
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
[*] --> /public/jojo3.html

/public/jojo3.html --> \stand: スタンド一覧を表示(2)

\stand --> \stand_add: スタンドを登録

\stand --> \stand_detail: スタンド詳細を表示

\stand --> \stand_edit: スタンドを編集

\stand --> \stand_delete: スタンドを削除
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
[*] --> /public/jujutsu.html

/public/jujutsu.html --> \stand: 登場人物一覧を表示(3)

\stand --> \stand_add: 人物を登録

\stand --> \stand_detail: 人物詳細を表示

\stand --> \stand_delete: 人物を削除
```

#### (3)のパラメータ

パラメータ名 | 属性 | 内容 |
-|-|-
id | number | id
name | text | スタンド名
rank | radio | 階級
jutsushiki | text | 術式名
ryoiki | text | 領域名
