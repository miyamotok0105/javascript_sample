

```
npm update -g npm
npm i -g querystring
npm i -g axios
npm install --save mongodb -g
sudo pip install mongo-connector
sudo pip install elastic2-doc-manager
```

mongodbのインストール


```
brew install mongodb
sudo mkdir /var/lib/mongodb
sudo touch /var/log/mongodb.log
sudo mongod --dbpath /var/lib/mongodb --logpath /var/log/mongodb.log
```

elasticsearchのインストール

```
brew install elasticsearch@5.6 kibana@5.6
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-6.3.0.tar.gz
tar -xzf elasticsearch-6.3.0.tar.gz
cd elasticsearch-6.3.0
bin/elasticsearch-plugin install analysis-kuromoji
```

kibanaのインストール




```
mongo
show dbs
use dbname
show collections

> db.events.find({limit: {$gt: 30}}).count()
20
> db.events.find({limit: {$gt: 10}}).count()
268

```

全文の中から本当に欲しいデータを取得する。

title：
description：
started_at：
ended_at：
limit：
accepted：
waiting：
owner_id：


小さいモデルのためのデータ抽出


```
4
{ event_url: 'https://weeyble-data.connpass.com/event/95452/',
  event_type: 'participation',
  owner_nickname: 'weeyble',
  series:
   { url: 'https://weeyble-data.connpass.com/',
     id: 3331,
     title: 'Weeyble データサイエンス' },
  updated_at: '2018-07-22T13:31:09+09:00',
  lat: '35.696575200000',
  started_at: '2018-07-27T19:30:00+09:00',
  hash_tag: '',
  title: '[秋葉原] ゼロから作るDeep Learning2(自然言語処理編) 輪読&勉強会 #1章 +LT',
  event_id: 95452,
  lon: '139.771830100000',
  waiting: 0,
  limit: 30,
  owner_id: 109434,
  owner_display_name: 'コワーキングスペース秋葉原Weeyble',
  description:
   '<p><b>増席しました！</b></p>\n<h1>この会について</h1>\n<p>自然言語処理と深層学習を学習し理解を深める会です。<br></p>\n<p>今回は<a href="https://amzn.to/2KSEoWu" rel="nofollow">ゼロから作るディープラーニング(2) 自然言語処理編</a> の1章(ニューラルネットワークの復習)を扱います。  <br>\nLTも２本予定しております。    </p>\n<p>LT1 : PyTorchで自然言語処理してみた  <br>\nLT2 : 調整中</p>\n<p>他にも発表やLTをしてくれる方も歓迎です。(自然言語処理に関わる内容であれば何でもOKです)<br></p>\n<h1>スケジュール</h1>\n<p>7/27(金)  <br></p>\n<p>ゼロから作るディープラーニング(2) 自然言語処理編  <br>\n<a href="https://amzn.to/2KSEoWu" rel="nofollow">https://amzn.to/2KSEoWu</a></p>\n<p>1章 ニューラルネットワークの復習     <br>\nLT(調整中)      </p>\n<p>8/3(金)  <br>\n2章 自然言語と単語の分散表現</p>\n<h1>書籍や参考資料など</h1>\n<p><a href="https://amzn.to/2KSEoWu" rel="nofollow">ゼロから作るディープラーニング(2) 自然言語処理編</a>    </p>\n<p><a href="https://amzn.to/2ugTWJt" rel="nofollow">PythonとKerasによるディープラーニング</a></p>\n<p><a href="https://amzn.to/2KPF4fB" rel="nofollow">深層学習による自然言語処理 (機械学習プロフェッショナルシリーズ)</a> <br></p>\n<p><a href="https://amzn.to/2uhgwl4" rel="nofollow">詳解ディープラーニング TensorFlow・Kerasによる時系列データ処理</a><br></p>\n<p><a href="https://amzn.to/2Na4DVf" rel="nofollow">Python 機械学習プログラミング 達人データサイエンティストによる理論と実践</a><br></p>\n<p><a href="https://amzn.to/2ucGB52" rel="nofollow">Pythonではじめる機械学習 ―scikit-learnで学ぶ特徴量エンジニアリングと機械学習の基礎</a><br></p>\n<p>(上記の6冊は会場に置いてあります)</p>\n<p>言語処理100本ノック<br>\n<a href="http://www.cl.ecei.tohoku.ac.jp/nlp100/" rel="nofollow">http://www.cl.ecei.tohoku.ac.jp/nlp100/</a></p>\n<h1>参加費</h1>\n<p>1,000円（会場費）</p>\n<h1>Slack</h1>\n<p><a href="https://now-examples-slackin-mswfphbzab.now.sh/" rel="nofollow">https://now-examples-slackin-mswfphbzab.now.sh/</a></p>\n<p>情報共有にSlackを使用します。事前に登録をお願いします。  <br>\n( #python_deeplearningというchannelを使用します。)</p>\n<h1>持ち物</h1>\n<p>実装される方はPC <br>\nPythonの実行環境があると動かしながら確認できます。<br></p>\n<p><a href="https://amzn.to/2KSEoWu" rel="nofollow">ゼロから作るディープラーニング(2) 自然言語処理編</a>    </p>\n<p>※電源、Wi-Fiはあります。</p>\n<h1>開催場所</h1>\n<p>コワーキングスペース秋葉原 Weeyble（ウィーブル)<br>\n<a href="https://weeyble.com/" rel="nofollow">https://weeyble.com/</a> <br>\n東京都千代田区神田須田町２丁目１９−２３(野村第３ビル４階) <br><br>\n秋葉原駅電気街口または中央改札口より徒歩3分。<br>\n 都営新宿線 岩本町駅徒歩3分、銀座線 神田駅6番出口徒歩2分。<br></p>\n<h1>その他</h1>\n<p>会場のコワーキングスペースは18:00-23:00でご利用できます。<br>\n事前に来て作業していただいても構いません。</p>',
  address: '東京都千代田区神田須田町２丁目１９−２３ (野村第３ビル ４階)',
  catch: '',
  accepted: 30,
  ended_at: '2018-07-27T21:30:00+09:00',
  place: 'コワーキングスペース秋葉原Weeyble' }
```


# mongodbの初歩

https://qiita.com/Frog_woman/items/f8a70286c7f1c4d5fc02



