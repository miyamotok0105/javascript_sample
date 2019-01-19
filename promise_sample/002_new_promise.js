fs = require('fs');

function readFileAsync(file) {
  return new Promise(function(resolve, reject){
    fs.readFile(file, function(err, data){
      if (err) {
        reject(err); // errがあればrejectを呼び出す
        return;
      }

      resolve(data); // errがなければ成功とみなしresolveを呼び出す
    });
  });
}

// 成功時呼ばれる関数
function onFulfilled(data) {
  console.log(data);
}

function onRejected(err) {
  console.log(err);
}

readFileAsync(module.filename)
  .then(onFulfilled, onRejected);
