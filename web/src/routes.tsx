import { BrowserRouter, Route } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { Dragons } from './pages/Dragons';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/dragons" component={Dragons} />
    </BrowserRouter>
  );
}