// importing all the required modules
import React,{useState} from 'react'
import {Table} from './components/Table'
import AlignItemsList from './components/AlignItemsList';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewModuleIcon from '@material-ui/icons/ViewModule';


//setiing the function
function App() {
  //using the useState hook to render the components within the togglebutton
  const [view,setView] = useState('list')
  //making the handleChange function which will change the component(value of the view)
  // by clicking the togglebutton's icons 
  const handleChange = (event,nextView)=>{
    setView(nextView)

  }
    return (
    <div className="App">
   {/* setting the values of view and onChange handler     */}
  <ToggleButtonGroup orientation="vertical" value={view} exclusive onChange={handleChange}>
  <ToggleButton value="list" aria-label="list" >
    <ViewListIcon />
  </ToggleButton>
  <ToggleButton value="module" aria-label="module">
    <ViewModuleIcon />
  </ToggleButton>
 
 </ToggleButtonGroup>
{/* ternery operator to change valuee of View */}
 
  {view==='list'?<AlignItemsList/>:<Table/>}     
       
       
     
    </div>
  );
}

export default App;
