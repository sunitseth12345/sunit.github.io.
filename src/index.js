
// var React = require('react');
// // import React from 'react';
// var ReactDOM = require('react-dom');
// import ReactDOM from 'react-dom';



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


// import React from 'react';
// import ReactDOM from 'react-dom'
// import './index.css'

// const name='sunit';
// const img1='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/300px-Image_created_with_a_mobile_phone.png'
// const img2='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/300px-Image_created_with_a_mobile_phone.png'
// const img3='https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg'
// const sorce='https://www.linkedin.com/in/sunit-seth-61772b217/'
// ReactDOM.render(
//     <>
//     <h1 className='heading' contentEditable='true'> My name is {name} </h1>
//     <img src={img1} alt='randomImages'/>
//     <img src={img2} alt='randomImages'/>
//     <a href={sorce}>
//     <img src={img3} alt='randomImages'/>
//     </a>
    
//     </>,
//     document.getElementById('root')

// );


// import React from "react";
// import ReactDOM from 'react-dom';
// import './index.css'

// let currDate=new Date();
// currDate=currDate.getHours();

// let Time=new Date();
// Time=Time.getFullYear()

// let Time1=new Date();
// Time1=Time1.getMonth()

// let Time2=new Date();
// Time2=Time2.getDate()

// // let Time3=new Date();
// // Time3=Time3.getHours()

// let Time4=new Date();
// Time4=Time4.getMinutes()

// let Time5=new Date();
// Time5=Time5.getSeconds()

// let greating="";
// let styleClr={}

// if(currDate >=1 && currDate <12){
//     greating='Good Morning'
//     styleClr.color='green'
// }else if (currDate >=12 && currDate <19){
//     greating="Good Afternoon"
//     styleClr.color='Orange'
// }else{
//     greating ="Good Night"
//     styleClr.color='Black'
// }

// ReactDOM.render(<h1>Hello sir <span style={styleClr}> {greating}  {Time2}/{Time1}/{Time} : {currDate}.{Time4}.{Time5}</span></h1>,
// document.getElementById('root')
// )


// import React from 'react';
// import ReactDOM  from 'react-dom'
// // import Heading from './Heading';
// import Head,{name,name1}  from './Head'

// ReactDOM.render(
//     // <Heading/>,
//     <>
//     <ol>
//     <li><Head/></li>
//     <li>{name}</li>
//     </ol>
//     </>,
  
      
//     document.getElementById('root')
// )

// import React from 'react';
// import ReactDOM from 'react-dom';
// import add, {division,malti,mins} from './Calculation'
// ReactDOM.render(
//     <>
//         <ol>
//             <li>{add(40,4)}</li>
//             <li>{division(40,4)}</li>
//             <li>{malti(40,4)}</li>
//             <li>{mins(40,4)}</li>
//         </ol>
//     </>,
//     document.getElementById('root')
// )

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <>
        <p>I am learning React. My life is getting better.</p>
    </>,
    document.getElementById('root')
)