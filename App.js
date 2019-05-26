/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore  from "./src/stores/index";
import  MyApp  from "./src/MyApp";

export default class App extends Component {
  render() {
    return (
        //传store 到 Provider
         <Provider store={configureStore()} >
            <MyApp/>
         </Provider>
    );
  }
}

