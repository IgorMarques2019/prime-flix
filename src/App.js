import RouteFlix from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer autoClose={3000} theme="dark" position="bottom-center"  closeOnClick/>
      <RouteFlix/>
    </div>
    
  );
}

export default App;
