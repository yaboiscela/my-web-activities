/*
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";


function App() {

  return(
    <>
      <Header/>
      <Food/>
      <Footer/>
    </>
  );

}

//This is for Introduction

*/

/*
import Card from "./Card.jsx";

function App(){

  return(
    <>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </>
    
  );
}

//This is for Card Components

*/

/*import Button from "./Button.jsx"

function App(){

  return(<Button/>);
}

//This is for Styling

*/

/* import Student from "./Student.jsx"; 

function App(){
  return(
    <>
      <Student name="Nia" age={30} isStudent={true}/>
      <Student name="Chrontrish" age={69} isStudent={true}/>
      <Student name="soap" age={420} isStudent={true}/>
      <Student />
    </>
  );
}
 */

/* import UserGreeting from "./UserGreeting.jsx";

function App(){
  return(
    <>
      <UserGreeting isLoggedin={true} username="scela"/>
    </>
  );
}  */

/* import List from "./List.jsx"

function App(){
  const fruits = [{id: 1, name: "apple", calories: 95}, 
    {id: 2, name: "orange", calories: 45}, 
    {id: 3,name: "banana", calories: 105}, 
    {id: 4,name: "coconut", calories: 159},
    {id: 5,name: "pineapple", calories: 37}];

  const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
      {id: 7, name: "celery", calories: 15}, 
      {id: 8,name: "carrots", calories: 25}, 
      {id: 9,name: "corn", calories: 63},
      {id: 10,name: "brocoli", calories: 50}];
  return(
    <>
    {fruits.length > 0 && <List items = {fruits} pcategory = "Fruits"/>}
    {vegetables.length > 0 && <List items = {vegetables} pcategory = "Vegetables"/>}
    </>
  )
} */

import Button2 from "./Button2.jsx"
import ProfilePicture from "./ProfilePicture.jsx"

function App(){

  return(<>
  <>
  <ProfilePicture></ProfilePicture>
  </>

  </>)

}

export default App
