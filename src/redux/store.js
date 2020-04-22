
import {createStore, combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import palabraReduce from './palabraDock';

const reduce = combineReducers({
    array:palabraReduce
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const generaStore =()=>{
   const store = createStore(reduce, composeEnhancers(applyMiddleware(thunk)));
   return store;

}
