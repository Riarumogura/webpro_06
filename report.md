# レポート課題のページ遷移

### 1. Minecraft座標登録
#### ページ遷移図
```mermaid
stateDiagram-v2
[*] --> /public/minecraft.html

/public/minecraft.html --> \zahyo: 座標一覧を表示(1)

\zahyo --> \zahyo_detail: 詳細を表示

\zahyo --> \zahyo_add: 座標を登録
```

#### (1)のパラメータ

パラメータ名 | 属性 | 内容 |
-|-|-
name | text | 名前 
x | number | x座標 
y | number | y座標 
z | number | z座標 

### 2. aaa
#### ページ遷移図
```mermaid
stateDiagram-v2
[*] --> /public/minecraft.html

/public/minecraft.html --> \zahyo: 座標一覧を表示(1)

\zahyo --> \zahyo_add: 座標を登録
```

#### (1)のパラメータ

パラメータ名 | 属性 | 内容 |
-|-|-
name | text | 名前 
x | number | x座標 
y | number | y座標 
z | number | z座標 