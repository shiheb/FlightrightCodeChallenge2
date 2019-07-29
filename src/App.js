import React, { Component } from 'react';
// eslint-disable-next-line
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Markdown } from 'react-showdown';
import Header from './components/Header';
import 'react-widgets/dist/css/react-widgets.css';
import { DropdownList } from 'react-widgets';


var styles1 = {
    width: '100%',
    height: '100%',
    resize: 'none',
  }; 


 var styles2 = {
    width: '100%',
    height: '100vh',
   }; 

 var styles3 = {
    width: '100%',
    height: '18.5rem',
   }; 

{/* templates options by select dropdown element*/}
let colors = [
  { id: 0, name: 'Template 1'},
  { id: 1, name: 'Template 2'},
  { id: 2, name: 'Template 3'},
  { id: 3, name: 'Template 4'},
];
{/* List of markdown files*/}
let md = [	'# Hello \n\n##Sample header  \n will use real-id as id \n\n  More content...\n\n<code><pre>var foo = bar</pre></code><p>some text <a href="www.google.com">www.google.com</a> <p>a line<br>wrapped in two</p>#Flightright \n\n Showdown is a Javascript Markdown to HTML converter, based on the original works by John Gruber. It can be used client side (in the browser) or server side (with Node or io).\n\n #Installation ##Download tarball \n\n You can download the latest release tarball directly from [releases][releases]\n\n##Bower\n\n  bower \n\n     install showdown \n\n ##npm (server-side)\n\n     npm install showdown \n\n \n\n ##CDN \n\n You can also use one of several CDNs available: \n\n *rawgit CDN \n\n   <a href="https://cdn.rawgit.com/showdownjs/showdown/dist/showdown.min.js">https://cdn.rawgit.com/showdownjs/showdown/dist/showdown.min.js</a>  \n\n *cdnjs \n\n  <a href="https://cdnjs.cloudflare.com/ajax/libs/showdown/">https://cdnjs.cloudflare.com/ajax/libs/showdown/showdown.min.js</a> \n\n',

			'# Hallo\n\n## Flightrigh Code Challenge1\n\nFirst cold assessment in Flightright Code Challenge\n\n #################################################################\n\n## What we know:\n\n###Frontend Developer\n\nProblem 1 <br> Solve using javascript <br> We have 3 trains moving on different railways from one station to another with the same speed, every train has assigned different number of people. They need to circulate from side to side on their own railway and in case 2 trains or more arrive to a cross at the same time, the one with the higher number of people should pass first. The problem consists in making the trains circulate on their railways avoiding collisions and falling the priority rules. <br> Note:<br>- The space between stations are the same.<br>- The starting point of every train should be passed in an init function. <br>- This shouldnt be an application, just a written js logic.<br>- You may use console in dev tools to execute the code.<br>- There should be some indicators while code execution, which shows when the collision is avoided.<br> Tip - Feel free to use all your coding superpowers to get the best results.',

			'# Salut\n\n## Possible Soultion:\n\nWe have three trains A, B and C.<br>The Train A has 7 stations, B have 6 stations and C have 6 stations.<br>The train A have possibility of collision in station 3 with train C and in station 5 with train B. <br>The train B have possibility of collision in station 3 with tarin C and in station 4 with train A. <br>The train C have possibility of collision in station 3 with train A and in station 4 with train B.<br>I consider to avoid a collision a train can wait in the station before until the other one with more passengers go across such the case with Tram in Berlin sometimes.<br><br>In order to resolve this problem, let us consider thoses variables:<br><br>var TA = new Array(1, 2, 3, 4, 5, 6, 7); //TA stands for the stations of the train A<br>var TB = new Array(1, 2, 3, 4, 5, 6);  //TB stands for the stations of the train B<br>var TC = new Array(1, 2, 3, 4, 5, 6);  //TC stands for the stations of the train C<br>\n\n###Function initializing\n\nWe can put train on the station we want and with the number of passengers we desire  <br><br>var initA = TA[0]; //the station where begin the train in initial time<br>var initB = TB[0]; //the station where begin the train in initial time<br>var initC = TC[0]; //the station where begin the train in initial time<br><br>var contentA = 0; //stands for how many passengers are actually in the train A (we put it in 0 as inital state)<br>var contentB = 0; //stands for how many passengers are actually in the train B (we put it in 0 as inital state)<br>var contentC = 0; //stands for how many passengers are actually in the train C (we put it in 0 as inital state)<br>\n\n##see next template please',
'# Salem\n\nvar posA = initA; // the position of train A in time t <br>var posB = initB; // the position of train B in time t <br>var posC = initA; // the position of train C in time t <br><br><br>######################################################################### <br><br><br>do {<br>  <br>//train A will change direction if he arrive in the station in one of the extremity <br>if (posA == TA.length) <br>{ var incA = -1; }  <br>if (posA == TA[0]) <br>{ incA = 1;} <br><br>//train B will change direction if he arrive in the station in one of the extremity <br>if (posB == TB.length) <br>{ var incB = -1; }  <br>if (posB == TB[0]) <br>{ incB = 1;} <br><br>//train C will change direction if he arrive in the station in one of the extremity  <br>if (posC == TC.length) <br>{ var incC = -1; } <br>if (posC == TC[0]) <br>{ incC = 1;} <br><br><br>//Avoiding first collision possiblity <br>if ((posA + incA)==3) && ((posC + incC)==3) <br>{ if (contentA >= contentC)  <br>    {incC = 0;} <br>else {incA=0 ;} <br>} <br><br>//Avoiding second collision possibility <br>if ((posA + incA)==5) && ((posB + incB)==4) <br>{ if (contentA >= contentB)  <br>    {incB = 0 ;} <br>else {incA = 0 ;} <br>} <br><br><br>//Avoiding third collision possibility <br>if ((posB + incB)==3) && ((posC + incC)==4) <br>{ if (contentB >= contentC)  <br>    {inc C= 0;} <br> else {incB = 0 ;} <br>} <br><br>posA += incA; <br>posB += incB; <br>posC += incC; <br>contentA +=  Math.floor(50* Math.random()); <br>contentB +=  Math.floor(50* Math.random()); <br>contentC +=  Math.floor(50* Math.random()); <br>console.log(posA); <br>console.log(posB); <br>console.log(posC); <br>} <br>while (!strike && !Apocalypse) <br>',
			];

class App extends Component {


    constructor(props) {
    super(props);
    this.state = {

      value: md[0],
      
    };

    this.handleChange = this.handleChange.bind(this);
     this.handleChangeTemplate = this.handleChangeTemplate.bind(this);
    }

  handleChange(event) {
    this.setState({value:event.target.value});
  }
    

  handleChangeTemplate(event) {
    window.onclick = e => {

    	this.setState({value:md[e.target.textContent[e.target.textContent.length-1]-1]});
  
  
}  
  }


    render() {
			


    	return (

    		<React.Fragment>
    		   		<div className="container" style={styles2}>
					<Header />

					<div className="row">
						<div className="col-md-4"></div>
						 <DropdownList  className="col-md-4"  data={colors}  valueField='id' textField='name'  defaultValue={0}  onChange={this.handleChangeTemplate} />
						<div className="col-md-4"></div>
					</div>
{/* user interface composed of textarea editable on the left and HTML preview on the right*/}
					<div className="row w-100 p-0" style={styles3}>
						<div className="col"> 
         				<textarea value={this.state.value}  style={styles1} onChange={this.handleChange} />
       					</div>
						<div className="col h-100 d-inline-block"> <Markdown markup={this.state.value} /></div>		
					</div>
				
				</div>
			</React.Fragment>
			);
    }
}


export default App;