import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/Root/Root.jsx';
import ListedBooks from './componets/ListedBooks/ListedBooks.jsx';
import RedPage from './componets/RedPage/RedPage.jsx';
import Home from './componets/Home/Home.jsx';
import ErrorElements from './componets/ErrorElements/ErrorElements.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElements></ErrorElements>,
    children: [
      {
      path: "/",
      element: <Home></Home>
      
      },
      {
        path: "/Listed",
        element: <ListedBooks></ListedBooks>
        
      },
      {
        path: "/Read",
        element: <RedPage></RedPage>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
