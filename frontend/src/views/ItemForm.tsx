import React from "react";
import { Field, Form, FormSpy } from "react-final-form";
import Box from "@mui/material/Box";
import { required } from "../form/validation";
import RFTextField from "../form/RFTextField";
import FormButton from "../form/FormButton";
import { GroceryItem, useAddItemMutation } from "../app/services/api";
import FormFeedback from "../form/FormFeedback";

export default function ItemForm() {
  const [addItem, { isLoading }] = useAddItemMutation();

  const validate = (values: any) => {
    const errors = required(["name"], values);

    return errors;
  };

  const handleSubmit = async (values: GroceryItem) => {
    addItem(values);
  };

  return (
    <React.Fragment>
      <Form
        onSubmit={handleSubmit}
        subscription={{ submitting: true }}
        validate={validate}
      >
        {({ handleSubmit: handleSubmit2, submitting }) => (
          <Box
            component="form"
            onSubmit={handleSubmit2}
            noValidate
            sx={{ mt: 6 }}
          >
            <Field
              autoFocus
              component={RFTextField}
              disabled={submitting || isLoading}
              fullWidth
              label="Name"
              margin="normal"
              name="name"
              required
              size="large"
            />
            <FormSpy subscription={{ submitError: true }}>
              {({ submitError }) =>
                submitError ? (
                  <FormFeedback error sx={{ mt: 2 }}>
                    {submitError}
                  </FormFeedback>
                ) : null
              }
            </FormSpy>
            <FormButton
              sx={{ mt: 3, mb: 2 }}
              disabled={submitting || isLoading}
              size="large"
              color="secondary"
              fullWidth
            >
              {submitting || isLoading ? "In progress…" : "Add item"}
            </FormButton>
          </Box>
        )}
      </Form>
    </React.Fragment>
  );
}
