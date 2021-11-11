import { BrowserRouter, Route } from 'react-router-dom';

import { Landing } from './pages/Landing';
import { Dragons } from './pages/Dragons';
import { DragonRegister } from './pages/DragonRegister';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/dragons" exact component={Dragons} />
      <Route path="/dragons/register" component={DragonRegister} />
    </BrowserRouter>
  );
}