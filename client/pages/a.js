import dva from 'dva';
import './moduleA/index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./moduleA/models/example').default);

// 4. Router
app.router(require('./moduleA/router').default);

// 5. Start
app.start('#root');
