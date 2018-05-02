

# vuejsとaxiosで外部api連携

こちらの記事で勉強します。    
https://www.webprofessional.jp/fetching-data-third-party-api-vue-axios/    

config.js周りを後で書き直した部分があるので
READMEとコミットされてるソースがちょっと違う部分もある状態。


```
touch app.js
touch index.html
```


```
cp config.js.example config.js
```

YOUR_NYT_API_KEYをちゃんとする。    


```js:config.js.example
const config = {
    KEY: "YOUR_NYT_API_KEY"
}
```

確かにこうやってkeyは整理しておいたほうがいい。   


# vueで表示してみる


elで予想に値を渡す

```js:app0.js
const vm = new Vue({
  el: '#app',
  data: {
    results: [
      {title: "the very first post", abstract: "lorem ipsum some test dimpsum"},
      {title: "and then there was the second", abstract: "lorem ipsum some test dimsum"},
      {title: "third time's a charm", abstract: "lorem ipsum some test dimsum"},
      {title: "four the last time", abstract: "lorem ipsum some test dimsum"}
    ]
  }
});
```

app id以下に値を渡し、v-forで回す。    
https://unpkg.com/vueでvueを読み込んでる。    


```html:index0.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The greatest news app ever</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css">
  </head>
  <body>
    <div class="container" id="app">
        <h3 class="text-center">VueNews</h3> 

        <div class="columns medium-3" v-for="result in results">
          <div class="card">
            <div class="card-divider">
              {{ result.title }}
            </div>
            <div class="card-section">
              <p>{{ result.abstract }}.</p>
            </div>
          </div>
        </div>

    </div>

    <script src="https://unpkg.com/vue"></script>
    <script src="app.js"></script>
  </body>
</html>

```

# apiからデータを表示


Top Stories API api keyを取得する。    
https://developer.nytimes.com/signup    


```js:app.js

key = "XXXXXXXXXXXXXX"
console.log(key);

const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key="+key)
    .then(response => {this.results = response.data.results})
  }
});

```

# ヘルパー関数

コードを修正してURLを作るヘルパー関数を作る。    
getPostsをmethodsに登録する。    


```js:app.js
const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "XXXXXXXXXXXXXX";

function buildUrl (url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey
}

const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted () {
    this.getPosts('home');
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch( error => { console.log(error); });
    }
  }
});
```

算出プロパティを使ってAPIから取ったデータを加工。    
computedのprocessedPostsでapiから取得したデータにimage_urlを追加。    


```js:app.js
const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "XXXXXXXXXXXXXX";

function buildUrl (url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey
}

const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted () {
    this.getPosts('home');
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch( error => { console.log(error); });
    }
  },
  computed: {
    processedPosts() {
      let posts = this.results;

      // Add image_url attribute
      posts.map(post => {
        let imgObj = post.multimedia.find(media => media.format === "superJumbo");
        post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
      });

      // Put Array into Chunks
      let i, j, chunkedArray = [], chunk = 4;
      for (i=0, j=0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i,i+chunk);
      }
      return chunkedArray;
    }
  }
});
```


```html:index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The greatest news app ever</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css">
  </head>
  <body>
    <div class="container" id="app">
        <h3 class="text-center">VueNews</h3> 

        <div class="row" v-for="posts in processedPosts">
          <div class="columns large-3 medium-6" v-for="post in posts">
            <div class="card">
            <div class="card-divider">
              {{ post.title }}
            </div>
            <a :href="post.url" target="_blank"><img :src="post.image_url"></a>
            <div class="card-section">
              <p>{{ post.abstract }}</p>
            </div>
          </div>
          </div>
        </div>

    </div>

    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="app.js"></script>
  </body>
</html>

```


だいぶ見た目が良くなった。

# コンポーネント

こっからコンポーネントにまとめる。    
index2.html app2.jsに書いていくことにする。    
Vue.component('news-list',のタグ名はハイフンを使用すること。標準タグ名と被らないこと。また将来追加されるタグ名と被ると困るので避けること。    


```js:app2.js

Vue.component('news-list', {
  props: ['results'],
  template: `
    <section>
      <div class="row" v-for="posts in processedPosts">
        <div class="columns large-3 medium-6" v-for="post in posts">
          <div class="card">
          <div class="card-divider">
          {{ post.title }}
          </div>
          <a :href="post.url" target="_blank"><img :src="post.image_url"></a>
          <div class="card-section">
            <p>{{ post.abstract }}</p>
          </div>
        </div>
        </div>
      </div>
  </section>
  `,
  computed: {
    processedPosts() {
      let posts = this.results;

      // Add image_url attribute
      posts.map(post => {
        let imgObj = post.multimedia.find(media => media.format === "superJumbo");
        post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
      });

      // Put Array into Chunks
      let i, j, chunkedArray = [], chunk = 4;
      for (i=0, j=0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i,i+chunk);
      }
      return chunkedArray;
    }
  }
});

const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "XXXXXXXXXXXXXX";

function buildUrl (url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey
}

const vm = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted () {
    this.getPosts('home');
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch( error => { console.log(error); });
    }
  }
});

```


```html:index2.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The greatest news app ever</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css">
  </head>
  <body>
    <div class="container" id="app">
      <h3 class="text-center">VueNews</h3>
      <news-list :results="results"></news-list>
    </div>

    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="app2.js"></script>
  </body>
</html>

```


# カテゴリフィルター

app3.js index3.htmlを作った。


```js:app3.js



Vue.component('news-list', {
  props: ['results'],
  template: `
    <section>
      <div class="row" v-for="posts in processedPosts">
        <div class="columns large-3 medium-6" v-for="post in posts">
          <div class="card">
          <div class="card-divider">
          {{ post.title }}
          </div>
          <a :href="post.url" target="_blank"><img :src="post.image_url"></a>
          <div class="card-section">
            <p>{{ post.abstract }}</p>
          </div>
        </div>
        </div>
      </div>
  </section>
  `,
  computed: {
    processedPosts() {
      let posts = this.results;

      // Add image_url attribute
      posts.map(post => {
        let imgObj = post.multimedia.find(media => media.format === "superJumbo");
        post.image_url = imgObj ? imgObj.url : "http://placehold.it/300x200?text=N/A";
      });

      // Put Array into Chunks
      let i, j, chunkedArray = [], chunk = 4;
      for (i=0, j=0; i < posts.length; i += chunk, j++) {
        chunkedArray[j] = posts.slice(i,i+chunk);
      }
      return chunkedArray;
    }
  }
});

const NYTBaseUrl = "https://api.nytimes.com/svc/topstories/v2/";
const ApiKey = "XXXXXXXXXXXXXX";

function buildUrl (url) {
  return NYTBaseUrl + url + ".json?api-key=" + ApiKey
}


const SECTIONS = "home, arts, automobiles, books, business, fashion, food, health, insider, magazine, movies, national, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, tmagazine, travel, upshot, world"; // From NYTimes

const vm = new Vue({
  el: '#app',
  data: {
    results: [],
    sections: SECTIONS.split(', '), // create an array of the sections
    section: 'home', // set default section to 'home'
  },
  mounted () {
    this.getPosts(this.section);
  },
  methods: {
    getPosts(section) {
      let url = buildUrl(section);
      axios.get(url).then((response) => {
        this.results = response.data.results;
      }).catch( error => { console.log(error); });
    }
  }
});



```


vueでは@clickでクリック検知できる。    



```html:index3.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>The greatest news app ever</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css">
  </head>
  <body>
    <div class="container" id="app">
      <h3 class="text-center">VueNews</h3>

      <section class="callout secondary">
        <h5 class="text-center">Filter by Category</h5>
        <form>
          <div class="row">
            <div class="large-6 columns">
              <select v-model="section">
                <option v-for="section in sections" :value="section">{{ section }}</option>
              </select>
            </div>
            <div class="medium-6 columns">
              <a @click="getPosts(section)" class="button expanded">Retrieve</a>
            </div>
          </div>
        </form>
      </section>

      <news-list :results="results"></news-list>
    </div>
    
    <script src="https://unpkg.com/vue"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="app3.js"></script>
  </body>
</html>

```

# loadingをつける
 

index4.html app3.jsにした。    

getPostsのaxios.get(url).thenまでいったらloadingをfalseにしてデータ取得が終わったことを伝える。    

下記にすることでloading trueの時はクルクルが表示される。    


```
<div v-if="loading" class="loader"><img src="http://cdnjs.cloudflare.com/ajax/libs/semantic-ui/0.16.1/images/loader-large.gif" alt="loader"></div>
```

データ取得が終わったらnews-listコンポーネントを表示する。    

```
<news-list v-if="!loading" :results="results"></news-list>
```


かっちょいいのができた。すごい勉強なりました。    
https://github.com/sitepoint-editors/vuejs-news    



