
// ReactDOM.render(<h1>Hello World</h1>,
// document.getElementById('root')   );


// ** using multiple rendermethod using one element+
// ReactDOM.render(
// // <div> 
// [
// <h1>My Name is Sunit Seth</h1>,
// <p> Plz like and Subscribe</p>,
// ],
// // </div>,
// document.getElementById('root')   );


// **extra div not creating in node  1>less memory 2>faster
// ReactDOM.render(
//     <React.Fragment>
//         <h1>hi my name sunit</h1>
//         <p>am i audible ? </p>
//         <h2>this is my number </h2>
//     </React.Fragment>,
//     document.getElementById("root")
// );


// ReactDOM.render(
// <div>
//     <h1>Thapa Technical Netflix Pick </h1>
//     <p>here are the list of my fav 5 netflix series</p>
//     <ol>
//         <li>Dark</li>
//         <li>Extra curricular</li>
//         <li>My holo Love</li>
//         <li>My first-2 love</li>
//         <li>mr robot</li>
//     </ol>
//     </div>,
//     document.getElementById('root')
// );

// import React from 'react';
// import ReactDOM from 'react-dom';

// const flname="sunit seth";
// let number="80";

// ReactDOM.render(
//     <>
//     <h1>my name is {flname}</h1>
//     <p>my lucky number is {number} and {3+5} and {2*8} and </p>
//     </>,
//     document.getElementById('root')
// );


// import react from 'react';
// import ReactDOM from 'react-dom';

// const namef='sunit';
// const namel='seth';

// ReactDOM.render(
//     <>
//         <h1>my name is {namef} {namel} </h1>
//         <h1>my name is {namef +" "+ namel} </h1>
//         <h1>my name is {`${namef}  ${namel}`} </h1>
//     </>,
//     document.getElementById('root')
// );


// import react from 'react';
// import ReactDOM from 'react-dom';


// const curdate= new Date().toLocaleDateString();
// const curtime=new Date().toLocaleTimeString();
// ReactDOM.render(
//     <><h1>My Name is sunit seth</h1>
//     <p>Current Date is {curdate} </p>
//     <p>current time is {curtime} </p></>,
//     document.getElementById('root')

// );