import * as React from "react";
import Container from "@mui/material/Container";
import ItemList from "./ItemList";
import ItemForm from "./ItemForm";

function GroceryList() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <ItemForm />
      <ItemList />
    </Container>
  );
}

export default GroceryList;
