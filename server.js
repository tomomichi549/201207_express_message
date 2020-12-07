const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ミドルウェア関数
// 全てのリクエスト
app.use((req, res, next) => {
    console.log(`middleware: all. url: ${req.url}`);

    //CROS設定: 全てのドメインに対して許可 
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    //次の処理
    next();
});

app.post('/', (req, res) => {

    let result = {
        // let result = {?
            message: 'Hello',

        };
        res.send(result);
    });






app.get('/', (req, res) => {
    res.send('Hello Express!');

});



app.listen(3000);

console.log('Server listen:http://localhost:3000');

