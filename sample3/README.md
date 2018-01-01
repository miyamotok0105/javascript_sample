
    npm init -y
    npm i --save react react-dom react-router-dom
    npm i --save express nedb superagent
    npm i --save-dev webpack babel-loader babel-core
    npm i --save-dev babel-preset-es2015 babel-preset-react
    

package.jsonに追加

    "scripts": {
        "start": "node sns-server.js",
        "watch": "webpack -w",
        "build": "webpack"
    },

    npm run build
    npm start

    http://localhost:3001
    