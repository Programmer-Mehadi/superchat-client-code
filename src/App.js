import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './router/routes';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-[100vh]">
      <Toaster></Toaster>
       <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
