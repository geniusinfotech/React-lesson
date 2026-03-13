// create a ecommerce website using HTML, CSS and JS

// What Is ReactJS?
// JS Library ==> use to make ui(frontent)
// Meta create ==> 2013 Year
// What is SPA?

// Liberary
// ex. GSAP, Lenis, ReactJS
// Make A Home (buy a land and create a Home)

// Framework
// NextJS, Angular
// Buy a Ready Home(not create form scretch)

// JS Essentials (What you know before start React):
// JS Basic(VAriables, Loops, Conditions(control Flow))
// Functions
// Arrays
// Objects
// ES6+ Features
// ASynchronous Javascript (Promisse, Async-await, fetch APi)
// Import/Export (Two Type of Export : Names, Default)
// Export ==> export var a = 25, export defult a
// Import ==> import {a} from 'filename.js', import number from 'filename.js'

// Real DOM vs Virtual DOM
// JSX ==> HTML + Javascript
// React vs Vite
// Folder Structure
// eslint.config.js ==> set rules (create custom rules)

// components ==> Reusable UI (Header, Footer, Button, Card)
// if you want to print varibale you have to write that variable name into {}
// ex. const name = "test" ==> {name} 
// create a card component

// Props ==> Data transfer from parent to child
// function agrs or parameters 
// <Card user = "test" /> // arges 
// if you want to send number, variable write into {}
// in card components ==>  card(props) 
//  check the console.log(props) ==> parameters reviced as a object
/ create a projects ==>
// use map function for print a array and array of object data
// arr.map(function(elem)=>{clg(elem)})
// when you use map you have to you key prop ===> because react its make it same
// make you card into your div not all cards

// css type
// normal css folder
// module css file and folder (create a folder btn ==> btn.jsx and btn.module.css)
// make it more secure and encryted
// import styles from '.btn.module.css'
// <div className={styles.btn}>

// Single Page Applicaton project


// Hooks
// ex. on click change user
// change sections background when you click on btn
// scroll effect ::
// onWheel Event :
// deltaY (check on )

// you can't change direct into react
(like owner and butler)

// useState ==> Data that can change (useState Hook)  
// change state of data or variable (change data)
// use ==> useStateSinpet
// const [a, setA] = useState(0)
// a ==> read only, setA ==> write only
// function changeNam(){
setNum(20)
}
// change number, string, array, object
// project :
// increase and decrease counter with jump by btn
==================================================================================
// Advance
// not re-render
// setA(0) ==> not render
// function chagnevalue(){
console.log(a)
setA(a+1)
console.log(a)
}
// change object value
const [data, setData] = useState({username: "test", age: 25})
function obj(){
const newObj = {...data},
newObj.username = "new test"
setData(newObj)
}
// change array value
const [arr, setArr] = useState([1,2,3])
function chagneArr(){
const newArr = [...arr]
newArr.push(4)
setArr(newArr)
}
// two way biding
// create a html form (input and button)
// create a function submitfrom
// create state 
// const [value, setValue] = useState('')
// add function into input filed
// <input title ={value} onChange={(e)=>{setValue(e.target.value)}>
=====
// create project ==> create a notes
// save task into state
// const [notes, setNotes] = useState([])
// in submit function add task into notes array
function submitForm(e){
e.preventDefault() // page refresh stop
setNotes([...notes, task])
copyTask({title, deatils})
setTask(copyTask);
}
// after form create notes card
// use map method for print all notes
// {notes.Map()}
 

// create a function addTask



// useEffect ==> Side Effects (fetching data, DOM manipulation)
// ex. bike and truck example

// useContext ==> global state management
// without prop use data into whole webiste

// useReducer ==> complex state management
// like redux

// useRef ==> Mutable values hold (to stop re-render, acess dom element)

// useMemo / useCallback
// Optimize your website, unnercessary re-renders avoid karva mate

// React Router ==> Routing in React (Single Page Application)
// Context API ==> State Management (Global State)
// React Hooks ==> useState, useEffect, useContext, useReducer, useRef