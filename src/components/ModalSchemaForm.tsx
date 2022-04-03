import React from "react";
import { FormProps } from "@rjsf/core";
import SchemaForm from "@rjsf/material-ui";

import { Box, Button, Stack } from "@mui/material";

interface ModalSchemaFormProps<T, M> extends Omit<FormProps<T>, "formData" | "onSubmit"> {
  onSave: (model: M) => void;
  onClose: () => void;
  initialModel: M | undefined;
  closeOnSave?: boolean;
  fromFormDataTransformer: (formData: T) => M;
  toFormDataTransformer: (model: M) => T;
}

export function ModalSchemaForm<T, M>(props: ModalSchemaFormProps<T, M>) {
  const {
    onSave,
    onClose,
    closeOnSave,
    initialModel,
    fromFormDataTransformer,
    toFormDataTransformer,
  } = props;
  return (
    <SchemaForm
      {...props}
      formData={initialModel && toFormDataTransformer(initialModel)}
      onSubmit={(e) => {
        const model = fromFormDataTransformer(e.formData);
        console.debug(`[FormSubmit] formData: ${JSON.stringify(e.formData)} -> ${JSON.stringify(model)}`);
        onSave(model);
        (closeOnSave ?? true) && onClose();
      }}
    >
      <Box sx={{ pl: 1 }}>
        <Stack direction="row" spacing={1}>
          <Button variant="contained" type="submit">Submit</Button>
          <Button variant="contained" type="button" onClick={onClose}>Cancel</Button>
        </Stack>
      </Box>
    </SchemaForm>
  );
}
