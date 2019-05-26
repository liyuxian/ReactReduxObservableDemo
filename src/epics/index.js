
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {PING,PONG}  from './../types'
import { pong } from "./../actions";
 //创建 action流 监听
function myEpic(action$) {
      return  action$. ofType(PING)
            .delay(2000) // Asynchronously wait 1000ms then continue
            .mapTo(pong());
    } 
export default myEpic ;

