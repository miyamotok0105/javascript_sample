

```
npm install -g nativescript
npm install -g rollup
tns plugin add nativescript-localstorage
```

tnsが使えれば良し。


```
tns create todo-app --template nativescript-vue-rollup-template
cd todo-app
rollup -c -w & cd tns;tns run ios --clean --emulator
```

./todo-app
tns plugin add nativescript-localstorage
tns plugin add nativescript-iqkeyboardmanager


# 参考


https://qiita.com/haidrant/items/789346c164b193008577
