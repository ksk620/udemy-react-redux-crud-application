import _ from 'lodash'
// /action/index.jsで作成したactionのtypeをインポート
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
    //console.log(action.response.data);
      // ↑
      // [
      //  {id: 1, token: "token123", title: "Let's have an event 1!", body: "This is the body for event 1.", created_at: "2021-06-05T06:02:07.618Z", …}
      //  {id: 2, token: "token123", title: "Let's have an event 2!", body: "This is the body for event 2.", created_at: "2021-06-05T06:02:07.621Z", …}
      // ]
    //console.log(_.mapKeys(action.response.data, 'id'));
      // ↑
      //idをkeyにして再配置する
      // {
      //  1: {id: 1, token: "token123", title: "Let's have an event 1!", body: "This is the body for event 1.", created_at: "2021-06-05T06:02:07.618Z", …}
      //  2: {id: 2, token: "token123", title: "Let's have an event 2!", body: "This is the body for event 2.", created_at: "2021-06-05T06:02:07.621Z", …}
      // }
      return _.mapKeys(action.response.data, 'id')
    default: 
      return events
  }
}

