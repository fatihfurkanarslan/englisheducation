
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
       
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>

//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import Navbar from './Components/navbar/Navbar'
import Layout from './Components/layout/Layout'
import { withRouter } from 'react-router-dom';


class App extends Component {
  render() {



    return (
      <div className='w-[80%] mx-auto my-0'>
        <Navbar />
        <Layout />

      </div>
    )
  }
}
export default withRouter(App)
