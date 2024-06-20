import React from "react";
// import { ThemeProvider } from "./components/ThemeContext";
// import ThemeButton from "./components/ThemeButton";
import "./App.css";

//import {Route,Router,Routes} from 'react-router-dom'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home2 from "./components/Home2";
import About2 from "./components/About2";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {Container,Button,Nav,Navbar,Alert, NavLink} from 'react-bootstrap'
// import { useState } from "react";
// import { AuthProvider } from "./components/AuthContext";
// import Home from "./components/Home";
// import { DataProvider } from "./components/DataContext";
// import DisplayData from "./components/DisplayData";

// import { Provider } from "react-redux";
// import Counter3 from "./components/Counter3";
// import store from './components/Store'


// function App(){ 
//   const [message,setMessage]=useState(null)
//   const handleButtonClick=()=>{ 
//     setMessage('Button Clicked....!')
//   }
//   const handleNavLinkClick=(section)=>{ 
//     setMessage(`Navigated to ${section}`)
//   }

//   return( 
//     <div className="App">
//         <Navbar bg="dark" variant="dark">
//           <Container>
//             <Navbar.Brand href="#home">React Bootstrap example</Navbar.Brand>
//             <Nav className="ml-auto">
//               <NavLink onClick={()=>handleNavLinkClick('Home')} href="#home">
//                 Home
//               </NavLink>

//               <NavLink onClick={()=>handleNavLinkClick('Features')} href="#features">
//               Features
//               </NavLink>

//               <NavLink onClick={()=>handleNavLinkClick('Contact')} href="#contact">
//                 Contact
//               </NavLink>

//             </Nav>
//           </Container>
//         </Navbar>

//         <Container className="mt-3"> 
//           <h1>Welcome to React Bootstrap</h1>
//         </Container>

//         <Button className="mt-3" onClick={handleButtonClick}>Click me</Button>

//         {message && <Alert variant="info" className='mt-3'>
//           {message}
//           </Alert>}
//     </div>
//   )
// }


// const App=()=>{ 

//   return( 
//     <>
//     <h1>This is Theme</h1>
//     <ThemeProvider>
//         <div style={{padding:'20px',textAlign:'center'}}>
//           <h1>Theme Switcher</h1>
//           <ThemeButton/>
//         </div>
//     </ThemeProvider>
//     </>
    
//   )
// }

function App() {
 // const [text,setText]=useState(" ")
  return (
    <div className="App">
      <p>This our first react app</p>
      {/* 
     <Greet name="Avishkar"/>
     <Greet name="Abhay"/> */}
      {/* <Welcome/>
     <Welcome/>
     <Welcome/>
      */}
      {/* 
      <Greet name="Avishkar" skill="Full stack">
        <p>This is children props</p>
      </Greet>

      <Greet name="John" skill="Full stack">
        <button>Click me</button>
      </Greet>

      <Welcome name="Virat kohli" city="Delhi"></Welcome> */}

      {/* <Props_Types boolean='3+2=6'/> */}
      {/* <Props_Types anyd={9875} /> */}
      {/* <Props_Types value="[1,2,3,4,5]"/> */}
      {/* <Props_Types myNumber={42} /> */}
      {/* <Props_Types myName="Virat kohli"/> */}
      {/* <props_types myName="XXX"/> */}
      {/* 
      <Custom/>
      <br />
      <Counter/> */}

      {/* <Destruct name="Avishkar" courseName="Full Stack"/> */}

      {/* <Message name="Abhay" courseName="MERN Stack"/> */}

      {/* <ArrayD/> */}
      {/* <ClassArray/> */}
      {/* <EventClick/> */}
      {/* <ClassEvent/> */}
      {/* <EventClick1/> */}

      {/* <EventObject/> */}
      {/* <EventBinding/> */}
      {/* <ParentComponent/> */}

      {/* <UserConditional/> */}

      {/* <ElementVariable/> */}

      {/* <TernaryOperator/> */}
      {/* <ShortCircuit/> */}

      {/* <Details/> */}
      {/* <Deatils1/> */}

      {/* <DeatilsIndex/> */}
      {/* <Detail12/> */}

      {/* <StyleSheet/> */}
      {/* <Deatils1/> */}

      {/* <StyleSheet primary={false}/> */}

      {/* <InlineCss/> */}

      {/* <Appstyle/> */}

      {/* <div style={{
          textAlign:"center",
          margin:"auto"
        }}>
        
        <h1 style={{color:"green"}}>Style Component</h1>

        <h3>Read Style Component example</h3>

        <Button bg="red">Click</Button>
      </div> */}

      {/* <Form/> */}
      {/* <LifeCyle/> */}
      {/* <Counter1/> */}
      {/* <PureComp/> */}
      {/* <ParentComponent/> */}
      {/* <PostList/> */}
      {/* <PostForm/> */}

      {/* Hooks */}
      {/* <CountApp/> */}
      {/* <ParentComponents/> */}
      {/* <Parent/> */}

      {/* Context API */}
      {/* <ContextApi.Provider value={{text,setText}}> 
        <MyComponent/>
      </ContextApi.Provider> */}
{/* 
<AuthProvider>
      <Home/>
    </AuthProvider> */}
{/* 
    <DataProvider> 
      <DisplayData/>
    </DataProvider> */}

    <Router>
      <Routes>
        <Route path="/" element={<Home2/>}/>
        <Route path="/about" element={<About2/>}/>
      </Routes>
    </Router>

    
    </div>
  );
}

// {/* Redux */}
// const App=()=>{ 
//   return(
    
//       <Provider store={store}>
//        <div>
//           <h1>React Counter App</h1>
//           <Counter3/>
          
//        </div>
//       </Provider>
    
//   )
// }

export default App;
