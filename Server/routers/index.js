module.exports=(app)=>{
    app.use('/api',require('./reg'))
    app.use('/api',require('./login'))
}