//import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layuots/Main';
import About from './components/About/About';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { productsAndCartloader } from './loaders/productsAndCartloader';
import Login from './components/Login/Login';
import SignUp from './components/SingUp/SignUp';
import PrivateRoute from './routes/PrivateRoute';
import Delivery from './components/Delivery/Delivery';
import RegularCI from './RegularItems/RegularCI';
import Drinks from './RegularItems/Drinks/Drinks';
import IceCream from './RegularItems/IceCream/IceCream';
import Stationary from './RegularItems/Stationary/Stationary';
import Chocolate from './RegularItems/Chocolate/Chocolate';
import Chips from './RegularItems/Chips/Chips';
import Help from './components/Help/Help';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'orders',
          loader: productsAndCartloader,
          element: < Orders ></Orders >
        },
        {
          path: 'inventory',
          element: <PrivateRoute><Inventory></Inventory></PrivateRoute>
        },
        {
          path: 'delivery',
          element: <PrivateRoute> <Delivery></Delivery> </PrivateRoute>
        },
        {
          path: 'about',
          element: <About></About>
        },

        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'help',
          element: <Help></Help>
        },
        {
          path: 'regci',
          element: <RegularCI></RegularCI>
        },
        {
          path: 'regdrinks',
          element: <Drinks></Drinks>
        },
        {
          path: 'icecream',
          element: <IceCream></IceCream>
        },
        {
          path: 'stationary',
          element: <Stationary></Stationary>
        },
        {
          path: 'chocolate',
          element: <Chocolate></Chocolate>
        },
        {
          path: 'chips',
          element: <Chips></Chips>
        }
      ]

    },

  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
