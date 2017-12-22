
    npm init -y
    npm install --save-dev babel-cli babel-preset-es2015
    touch .babelrc
    echo "{ \"presets\": [\"es2015\"]}" > .babelrc
    babel src -d dest
    