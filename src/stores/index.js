
    
import {pingReducer} from './../reduces';
import myEpic from './../epics/index'
import {combineEpics, createEpicMiddleware} from 'redux-observable';

// 导入 applyMiddleware
import { createStore ,applyMiddleware, compose } from 'redux';

const epicMiddleware = createEpicMiddleware();
// 合并epic
const rootEpic = combineEpics(
    myEpic,
);

//创建store
const configureStore = () => {
    let store = createStore(
        pingReducer,
        compose(applyMiddleware(epicMiddleware))
    );
    //让epic 生效
    epicMiddleware.run(rootEpic);
    return store;
};

  export default  configureStore;
