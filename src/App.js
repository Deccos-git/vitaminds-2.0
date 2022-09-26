import Layout from './Components/Layout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter key='router'>
        <Layout/>
    </BrowserRouter>
  );
}

export default App;
