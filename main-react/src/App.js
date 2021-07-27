import { useEffect } from 'react';
import { registerMicroApps, start } from 'qiankun';
import microApps from './micro-app';

function App() {
  useEffect(() => {
    registerMicroApps(microApps);
    start();
  })
  return (
    <div id="subapp-viewport"></div>
  );
}

export default App;
