// routes
import test from './test/test';
import currentUser from './user/currentUser';
import logList from './logList/logList'

export default (app) => {
    app.use('/api/test', test);
    app.use('/api/currentUser', currentUser);
    app.use('/api/login',logList)
}