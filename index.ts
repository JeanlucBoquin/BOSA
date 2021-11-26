import app from './configs/app'

app.listen(app.get('port'), () => {
    console.log(`APP LISTEN ON PORT ${app.get('port')}`)
});