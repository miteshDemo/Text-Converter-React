import React from 'react';
import { Alert as MUIAlert, Collapse, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Alert(props) {
  const capitalize = (word) => {
    if (!word) return '';
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    if (props.alert) {
      setOpen(true);
    }
  }, [props.alert]);

  return (
    <Collapse in={props.alert && open}>
      {props.alert && (
        <MUIAlert
          severity={props.alert.type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => setOpen(false)}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <strong>{capitalize(props.alert.type)}:</strong> {props.alert.msg}
        </MUIAlert>
      )}
    </Collapse>
  );
}
