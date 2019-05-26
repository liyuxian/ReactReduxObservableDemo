

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Alert} from 'react-native';
import { ping ,pong } from "./actions/index";
import { bindActionCreators } from 'redux'
import { connect } from "react-redux";

class MyApp extends Component {
    render() {
      //映射属性 和action creator 
        const { myPing ,myPong, showText,showColor}  =  this.props ;
        return (
             <View style={styles.container}>
             <Text style = {{
                    fontSize: 20,
                    textAlign: 'center',
                    marginBottom: 34,
                    color: showColor,   
                 }}>
                {showText}
             </Text>
                <Button 
                    color = {showColor}
                    onPress = {myPing}
                    title='click on me' >
                </Button>
         
            </View >
        );
    }
}






const styles = StyleSheet.create({
       
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});
//将 state交给属性 按需添加	
const mapStateToProps = (state) => {
    return {
        showText : state.showText,
        showColor : state.showColor
    }
}

//将action creator 交给属性 按需添加(2中模式)	
const  mapDispatchToProps =  {
          myPing : ping ,
          myPong : pong
}

// function mapDispatchToProps(dispatch) {
//     return {
//       myPing:bindActionCreators(ping,dispatch),
//       myPong:bindActionCreators(pong,dispatch),
//     }
// }

// 关联
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyApp);

