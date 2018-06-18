import dva from 'dva';
import createLoading from 'dva-loading';
import { message } from 'antd';
import models from './models';
import './index.css';

// 1. Initialize
const app = dva({
	// onStateChange(){

	// },
	// onReducer(){

	// },
	// onEffect(){

	// },
	onError(err) {
	    message.error(err.message)
	}
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// app.model(require('./models').default);
console.log(models)
models.forEach(m=>app.model(m))

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
