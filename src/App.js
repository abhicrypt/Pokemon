import React, {useState, useEffect } from "react";
import axios from 'axios'
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TaskA from "./components/TaskA/TaskA";
import TaskB from "./TaskB/TaskB";
import TaskC from "./TaskC/TaskC";


// const App=()=> {
// }
//   render()
//     return (
//       <React.Fragment>
//         <Router>
//           <Navbar />
//           <br/>
//           <br/>
//           <Switch>
//             <Route path="/TaskA" component={TaskA} />
//             <Route path="/TaskC" component={TaskC} />
//             <Route path="/TaskB" component={TaskB} /> 
//           </Switch>
//         </Router>
//       </React.Fragment>
//     );
// }
// export default App;


const App=()=> {
  const [pokiData,setPoki] = useState([]);
    const [loading,setLoading] = useState(false);

  useEffect(()=>{
    // setLoading(true);
    axios.get('http://localhost:8000/table/task')
    .then(res=>{
      console.log(res.data)
      setPoki(res.data.pokemon);
      setLoading(false);
      
    })
    .catch(err=>console.log(err))
},[]);



  return (
   <div>
   <div class="table-responsive">
   <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Height</th>
            <th>weight</th>
            <th>Multiplier</th>
            <th>weakness</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <h5>{pokiData.pokemon}</h5>
          <tbody>
          {
            // console.log(pokiData)
            pokiData.map((item)=>{
              return ( <tr>
                <td>{item.id}</td>
              </tr>
              )
              
            })
          }
        </tbody> 
        {/* <tbody>
        <tr>
          poki.pokemon.map=(item)=>{
            return ( 
            <div  key={item.id}>
            <td>{item.id}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            {/* <td><button type="button" class="btn btn-primary">Primary</button></td> */}
           
          {/* </div> */}
          {/* ) */}
        {/* </tr> */}
        {/* </tbody> */} 

      </table>
      </div>
    </div>
  )
}

export default App

