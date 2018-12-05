// routes
import test from './test/test';

export default (app) => {
    app.use('/api/test', test);
}