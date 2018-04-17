
- npmのアップデート

    npm update -g npm

- babel

クロスコンパイラ。

    npm install --global babel-cli babel-preset-es2015
    npm install -D babel-preset-es2015

- react



- electronの確認

    npm install --save-dev devtron
    electron .

- consoleでデバッグツール

    require('devtron').install()

- ビルド

    npm install -g electron-packager
    brew install wine
    electron-packager . sample1 --platform=darwin,win32,linux --arch=ia32,x64,armv7l --electron-version=1.4.14


# 参考

いまどきのJSプログラマーのためのNode.jsとReactアプリケーション開発テクニック    
http://www.socym.co.jp/book/1114    
https://www.to-r.net/media/react-tutorial03/    
http://www.buildinsider.net/enterprise/electron/05    




