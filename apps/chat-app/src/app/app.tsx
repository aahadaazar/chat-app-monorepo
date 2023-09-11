// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Button, ButtonWithState } from '@chat-app/common-ui';

export function App() {
  return (
    <div>
      <Button>hello</Button>
      <ButtonWithState>Click to change counter</ButtonWithState>
    </div>
  );
}

export default App;
