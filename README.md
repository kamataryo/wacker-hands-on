# wacker-hands-on

This is example remository for Github Hands-on@wacker #6

## Travis CIでセキュアな値を利用する

1. Travis CIのCLIツールをインストール

```
$ gem install travis
```

2. key=valueの形で値を暗号化

標準出力に表示される文字列をコピペします。
```
$ travis encrypt KEY=value


env:
  global:
  - secure: "{{暗号化された値を記載}}"
```

あるいは、--addオプションを使うと、自動で`.travis.yml`に追記されます。
```
$ travis encrypt KEY=value --add
```

この時、Travis CIのコンテナ内で環境変数KEY(=value)が利用できます。
