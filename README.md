
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


# メモ

- 2014年7月    
Web Componentsについて、いま思うこと    
→昔はWeb Componentsという考えがあった。    
http://sadah.hatenablog.com/entry/2014/07/29/232721    

jQueryとは何なのか？　なぜ使わなくても（あるいは使わないほうが）いいのか？    
→一昔前の時代には必要なライブラリだった。今の時代にはもう合ってない。    
https://qiita.com/ygkn/items/eed01ae9c01339d6086a    

W3C 版 HTML 5.1 変更点まとめ    
https://qiita.com/mijabi/items/2ff89fba60652771ea66    


# 参考

いまどきのJSプログラマーのためのNode.jsとReactアプリケーション開発テクニック    
http://www.socym.co.jp/book/1114    
https://www.to-r.net/media/react-tutorial03/    
http://www.buildinsider.net/enterprise/electron/05    




