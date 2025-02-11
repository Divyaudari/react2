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

// import React, { Component } from 'react'
// import Child1 from './propsex/Child1'

// export class App extends Component {
//   render() {
//     return (
//       <div>App
//         <Child1 university="Mallareddy university"/>
//       </div>
//     )
//   }
// }

// export default App

// import React from 'react'
// import CBCStateEx from './stateexample/CBCStateEx'
// import FBCStateEx from './stateexample/FBCStateEx'
// import MyForm from './components/MyForm'
// const App = () => {
//   return (
//     <div>
//       <MyForm/>
//       {/* <CBCStateEx/> */}
//       {/* <FBCStateEx/> */}
//     </div>
//   )
// }

// export default App

import React from 'react'
// import UseEffectEx from './hookexamples/UseEffectEx'
import RefExamples from './hookexamples/RefExamples';
const App = () => {
  return (
    <div><RefExamples/></div>
  )
}

export default App;


