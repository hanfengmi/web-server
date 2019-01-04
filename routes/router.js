// routes
import test from './test/test';
import currentUser from './user/currentUser'

export default (app) => {
    app.use('/api/test', test);
    app.use('/api/currentUser', currentUser);
}