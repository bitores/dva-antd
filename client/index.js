import dva from 'dva';
import './index.css';
import models from './models';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models').default);
console.log(models)
models.forEach(m=>app.model(m))

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
