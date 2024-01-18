// express 인스턴트 생성 및 app에 저장
const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const app = express();
const path = require('path');

// 8080번 포트로 지정
const port = 8080;

// 화면 엔진은 ejs로 설정
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, 'public')));


app.use("/", require("./routes/index"));



app.get('/post', (req, res) => {
    res.render('post');
})

app.get('/category', (req, res) => {
    res.render('category');
})

app.get('/search', (req, res) => {
    res.render('search');
})




// app.get('post/:id', (req, res) => {
//     const postId = res.params.id;
//     const post = posts.find(p => p.id === parseInt(postId));
// })

// 지정된 포트로 로컬 서버 열기
app.listen(port, () => {
    console.log(`http://localhost:${port} 에서 내 서버 실행 중ㅋ`);
});
