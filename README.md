# ionic-hands-on-app

[![Netlify Status](https://api.netlify.com/api/v1/badges/192c15ad-241e-4d63-809f-db4b92e021ad/deploy-status)](https://app.netlify.com/sites/silly-colden-00a3e4/deploys)
[![CircleCI](https://circleci.com/gh/orinbou/ionic-hands-on-app/tree/native%2Fcircleci.svg?style=shield)](https://circleci.com/gh/orinbou/ionic-hands-on-app/tree/native%2Fcircleci)
[![CircleCI](https://circleci.com/gh/orinbou/ionic-hands-on-app/tree/native%2Fcircleci.svg?style=svg)](https://circleci.com/gh/orinbou/ionic-hands-on-app/tree/native%2Fcircleci)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> This is a ionic4 sample project

本サンプルは下記バージョンを使用します。
```
Ionic:
   ionic (Ionic CLI)  : 5.2.3
   Ionic Framework    : @ionic/angular 4.9.0
Cordova:
   cordova (Cordova CLI) : 8.0.0
```

## フロントエンド

### 環境構築
下記のコマンドを実行する。
```
npm install -g ionic@5.2.3
npm install -g cordova@8.0.0
```
### バージョン確認
```
ionic info
```
### ビルド＆実行（開発用）
Webブラウザで動作確認する場合は下記のコマンドを実行する。
```
ionic serve
```
Webブラウザでマルチプラットフォームを同時に確認する場合は下記のコマンドを実行する。
```
ionic serve --lab
```
Ionic DevAppを使用して実機で確認する場合は下記のコマンドを実行する。  
`※Windows10では、「Windows Defenderファイアウォール」の「受信の規則」に規則（ポート例：8100）を追加する必要あり。`
```
ionic cordova prepare
ionic serve --devapp
```
### アプリビルド（for Android）
下記のコマンドでプラットフォームを追加する。
```
ionic cordova platform add android --save
```
下記のコマンドを実行してビルドする。
```
ionic cordova build android --debug
```
or
```
ionic cordova build android --prod --release
```
### アプリビルド（for iOS）
下記のコマンドでプラットフォームを追加する。
```
ionic cordova platform add ios --save
```
下記のコマンドを実行してビルドする。
```
ionic cordova build ios --debug
```
or
```
ionic cordova build ios --prod --release
```
### その他、補足
本サンプルは、下記コマンドでプロジェクトを新規作成した。
```
ionic start ionic-hands-on-app tabs --type=angular
```
Netlifyで公開する場合、下記を実行しておかないとビルドエラーになるので注意すること！
```
npm install --save-dev ionic@5.2.3
```
※Netlify公開ページは下記URLです。  
https://silly-colden-00a3e4.netlify.com/

### 参考
| Webページ | 概要 |
| :-------- | :-- |
| [Ionic Framework](https://ionicframework.com/) | Ionic Framework |
| [Ionic documents](https://ionicframework.com/docs) | Ionic 公式ドキュメント（ENG） |
| [Ionic documents](https://ionicframework.jp/docs/) | Ionic 公式ドキュメント（JPN） |
| [Get started with Ionic](https://ionicframework.com/getting-started/) | Get started with Ionic |
| [ionic github page](https://github.com/ionic-team/ionic) | ionic github page |
| [Ionic DevApp](https://ionicframework.com/docs/building/running#ionic-devapp) | 実機デバッグ用ツール |
| [Sample API](https://github.com/orinbou/sample-api) | バックエンド（サーバサイド） |
