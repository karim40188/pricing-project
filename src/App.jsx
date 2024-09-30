import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@mui/material";


const theme= createTheme({
  components:{
  MuiTextField:{
    defaultProps:{
      slotProps:{
        inputLabel:{
          sx:{
            fontSize:'14px',
       
            
          }
        }
      }
    }
  }
  }
})
function App() {
  let router = createBrowserRouter([{ path: "/", element: <Layout /> }]);

 
  return (

    <ThemeProvider theme={theme}>
 <RouterProvider router={router}>
      <div>App</div>
    </RouterProvider>
    </ThemeProvider>
   
  );
}

export default App;
