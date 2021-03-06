import React from 'react';
import ReactDOM from 'react-dom';

import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';
import App from './App';
import Invoices from './routes/invoices';
import Expenses from './routes/expenses';
import Invoice from './routes/invoice';

const rootElement = document.getElementById('root');

ReactDOM.render( 
  <Router>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='expenses' element={<Expenses/>} />
        <Route path='invoices' element={<Invoices/>} >
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=':invoiceId' element={<Invoice/>} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>404 Not Found.</p>
          </main>
        }
      />
    </Routes>
  </Router>, 
  rootElement);
