const Express = require('express');
const path = require('path');
const rootRouter = require('./src/routes/index');

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({extended: true}));

const port = process.env.PORT || 8000 

app.use(Express.static(__dirname + '/public'))

app.set('views', path.join('./src/views'));
app.set('view engine', "ejs");

app.use("/", rootRouter);

app.listen(port, () => {
    console.log(`App lisntening at port ${port}`);
})