# managing_state_vuex

```
vue init webpack managing_state_vuex
cd managing_state_vuex
npm install vuex --save
```

実行

```
npm run dev
```


```
touch src/store.js
```


```:store.js
export const store = new Vuex.Store({
  state: {
    safelyStoredNumber: 0
  }
});
```


 んー　エラーが出てる

https://alligator.io/vuejs/intro-to-vuex/
