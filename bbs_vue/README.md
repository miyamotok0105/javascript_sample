

```
npm init -y
npm install --save express
npm install --save nedb
npm install --save superagent

npm i --save-dev webpack
npm i --save-dev babel-loader babel-core
npm i --save-dev babel-preset-es2015 babel-preset-react
```

srcはクライアント側    
bbs-server.jsがサーバー側のメインプログラム。    
public内はクライアント側のプログラム。    

- port解放    

```
lsof -i -P | grep 3001
```

