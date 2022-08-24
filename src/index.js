import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import Exam1 from './Exam/Exam1';
import Exam2 from './Exam/Exam2';
import Exam3 from './Exam/Exam3';
import Exam4 from './Exam/Exam4';
import Exam5 from './Exam/Exam5';
import Exam6 from './Exam/Exam6';
import TodoApp from './TodoApp';
import MovieApp from './MovieApp';
import CoinTracker from './CoinTracker';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
