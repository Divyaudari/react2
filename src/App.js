// function App() {
//   return (
//       <div className="App">
//         {/* <h1 style={{color:'red'}}>Iam divya </h1> */}
//       </div>
  
//   );
// }
// export default App;

// import React from 'react'
// import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <div className='app'>
//       <Navbar />
//       <div className='content'>
//         <Main />
//         <div className='sidebar'>
//           <Sidebar1 />
//           <Sidebar2 />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default App


// import React, { Component } from 'react'
// // import CBCPropEx from './propsex/CBCPropEx'
// import FBCPropEx from './propsex/FBCPropEx'
// export class App extends Component {
//   render() {
//     return (
//       <div>
//         {/* <CBCPropEx
//         username="vamshi"
//         age={20}
//         hobbies={["playing","reading books", "stock"]}
//         address={{city:"siricilla",area: "gandinagar"}}
//         senFun={function(){alert("hi i am vamshi")}}
//         /> */}
//         <FBCPropEx
//         username="kiran"
//         ismarried={true}
//         hobbies={["playing","reading books", "stock"]}/>
//         </div>
//     )
//   }
// }

// export default App

import React, { Component } from 'react'
import { Child1 } from './propsex/Child1'
import { Child2 } from './propsex/Child2'
import { Child3 } from './propsex/Child3'
export class App extends Component {
  render() {
    return (
      <div>App
        <Child1/>
        <Child2/>
        <Child3/>
      </div>
    )
  }
}

export default App

