import store from '../src/app/rootStore';
import { getRpcConfigsSuccess } from '../src/containers/RpcConfiguration/reducer';
store.dispatch({
  type: getRpcConfigsSuccess.type,
  payload: {
    remotes: [
      {
        rpcauth:
          'wlhfikeH:76b24097db74151dbb4a98f3ec965596$4ed98c14c3c72e7b3756b63d9404fc6d74c231286f9e58e924a6d7c73e85d663',
        rpcpassword:
          'e7e4667f77ef2594804749f2cd0e3c4c9babca86eb423881b67c0c89cdd53bfa',
        rpcuser: 'wlhfikeH',
        test: {
          rpcport: 8555,
          rpcconnect: '127.0.0.1',
          rpcbind: '127.0.0.1',
        },
        main: {
          rpcport: 8555,
          rpcconnect: '127.0.0.1',
          rpcbind: '127.0.0.1',
        },
      },
    ],
  },
});
