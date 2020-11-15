import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
// import App from './01_Cats/App';
// import StudentApp from './06_Forms/StudentApp';
// import App from './07_ImportData';
// import App from './07_MassageData/App';
// =======this index is for 08_Receipt project
import './index.css';
import App from './App';
// =======this index is for my_project
// import App from './my_project/src/components/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);