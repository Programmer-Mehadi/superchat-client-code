import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './router/routes';

function App() {
  return (
    <div className="max-w-[1440px] mx-auto min-h-[100vh]">
       <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
