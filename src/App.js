import logo from './logo.svg';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import SignUp from './pages/SignUp';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CheckLogin from './pages/CheckLogin';
const route=createBrowserRouter([
{
   path:"/login",
   element:<LoginPage></LoginPage>
},
{
   path:"/signup",
   element:<SignUp></SignUp>
},
{
   path:"/",
   element:<CheckLogin><HomePage></HomePage></CheckLogin>
}
]  
)
function App() {

  return (
        <div>
             <RouterProvider router={route}></RouterProvider>
        </div>
  );
}

export default App;
