import { BrowserRouter, Route } from 'react-router-dom';
import { Home, RepoDetails } from './components/pages';

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/repo-details" component={RepoDetails} />
    </BrowserRouter>
  );
};

export default AppRoute;
