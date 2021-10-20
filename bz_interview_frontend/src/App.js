import { Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import BasicHomePage from './pages/BasicHomePage';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <BasicHomePage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
