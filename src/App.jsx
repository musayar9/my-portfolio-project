import Item from "./Components/Item.jsx";
import Person from "./Components/Person.jsx";
import SendForm from "./Components/SendForm.jsx";
import Form from "./Components/Form.jsx";
import { ToastContainer } from 'react-toastify';
function App() {


  return (
    <div  className="relative">
        <Person/>
      <Item/>
<Form/>
<ToastContainer autoClose={2000}/>
    </div>
  )
}

export default App
