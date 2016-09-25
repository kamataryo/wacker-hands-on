# wacker-hands-on

This is example remository for Github Hands-on@wacker #6

## Travis CIでセキュアな値を利用する

以下の操作を行うと、Travis CIのコンテナ内で環境変数KEY(=value)をセキュアに利用できます。
Travis CIのビルドログ上にvalueの値は表示されません。

### Webから操作する

https://travis-ci.org/KamataRyo/wacker-hands-on/settings

![screenshot1](screenshots/sc1.png)

[settings] -> [Environment variable]から、表示・非表示を含めて設定できます。

### CLIから操作する

#### Travis CIのCLIツールをインストール

```
$ gem install travis
```

### key=valueの形で値を暗号化

標準出力に表示される文字列をコピペします。

```
$ travis encrypt KEY=value
$ vi .travis.yml

env:
  global:
  - secure: "{{暗号化された値を記載}}"
```

あるいは、--addオプションを使うと、自動で`.travis.yml`に追記されます。

```
$ travis encrypt KEY=value --add
```
