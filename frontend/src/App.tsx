import React from "react";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import AppAppBar from "./views/AppAppBar";
import GroceryList from "./views/GroceryList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <AppAppBar />
        <GroceryList />
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
