
#ReactDOM

仮想DOMはDOMの状態をメモリ上に保持して操作するのでパフォーマンスが良い。    


    npm init -y
    npm install --save-dev babel-cli babel-preset-react babel-preset-es2015
    echo "{ \"presets\": [\"es2015\", \"react\"]}" > .babelrc


package.jsonに追加

      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "babel src -d dest"
      }


    npm run build


index.htmlにアクセス
