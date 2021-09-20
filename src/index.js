import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const data = [
    {
        id: 512,
        name: "Neil Rhodes",
        email: "rhodes@hmc.edu",
        phone: "(909) 555-1212"
    },
    {
        id: 787,
        name: "Barack Obama",
        email: "ex-prez@whitehouse.gov",
        phone: "(312) 555-1212"
    }

];
const dataJsx = data.map((info) => {
    return <div className="tagline" key={info.id}>
        <p id="name"> {info.name} </p>
        <p> {info.email}</p>
        <p> {info.phone} </p>
    </div>
})
ReactDOM.render(
  <React.StrictMode>

      <strong><h1> People </h1></strong>
      {dataJsx}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
