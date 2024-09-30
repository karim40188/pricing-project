import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import Comparison from "./components/Comparison";
import Home from "./components/Home";
import Reports from "./components/Reports";

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        slotProps: {
          inputLabel: {
            sx: {
              fontSize: "14px",
            },
          },
        },
      },
    },
  },
});
function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/comparison", element: <Comparison /> },
        { path: "/home", element: <Home /> },
        { path: "/", element: <Home /> },
        { path: "/reports", element: <Reports /> },
      ],
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}>
        <div>App</div>
      </RouterProvider>
    </ThemeProvider>
  );
}

export default App;
