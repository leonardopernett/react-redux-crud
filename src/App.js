import React from "react";
import {Provider} from 'react-redux'
import Form from './components/Form'
import {generaStore} from './redux/store'


export const App = () => {
   const store = generaStore()
    return (
      <Provider store={store}>
          <Form />
      </Provider>
    )

  } 

