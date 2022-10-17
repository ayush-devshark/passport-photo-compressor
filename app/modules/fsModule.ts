import {NativeModules} from 'react-native';

const {fsModule} = NativeModules;

interface FSModuleInterface {
  justGreetMe: (name: string) => Promise<string>;
}

export default fsModule as FSModuleInterface;
