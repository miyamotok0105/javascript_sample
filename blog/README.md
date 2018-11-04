

# s3_hostting

```
cd s3_hostting
npm install -g vue-cli
npm i bootstrap-vue bootstrap@4.0.0-beta.2
vue init webpack sample
cd sample
npm install
npm run dev
```

ルーティングのチェック
./sample/src/router/index.js

コンポーネント追加
touch src/components/LP1.vue


```
npm run build
```

ls dist

distとindex.htmlをs3のバケットにアップロードする

vue-sample-tokyoってバケットを作成して、statice siteの設定にしてバケットポリシーを設定して。


バケットポリシー

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::(バケット名)/*"
            ]
        }
    ]
}
```

自分の場合はこれで動いた。
http://vue-sample-tokyo.s3-website-ap-northeast-1.amazonaws.com/#/lp1


参考

https://www.ketancho.net/entry/2017/12/01/000000


