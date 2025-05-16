import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Stack } from '@mui/material';

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleClick = () => {
    if (text.trim().length === 0) {
      props.showAlert("Text is empty!", "warning");
      return;
    }
    setText(text.toUpperCase());
    props.showAlert("UpperCase is Enabled..!", "success");
  };

  const handleLowerClick = () => {
    if (text.trim().length === 0) {
      props.showAlert("Text is empty!", "warning");
      return;
    }
    setText(text.toLowerCase());
    props.showAlert("Converted to LowerCase..!", "success");
  };

  const handleClearClick = () => {
    if (text.trim().length === 0) {
      props.showAlert("Text is Already Empty!", "warning");
      return;
    }
    setText('');
    props.showAlert("Text Will be Cleared..!", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    if (text.trim().length === 0) {
      props.showAlert("Text is Already Empty..!", "warning");
      return;
    }
    props.showAlert("Text will be Copied..!", "success");
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;
  const readTime = 0.008 * wordCount;

  const isDarkMode = props.mode === 'dark';

  return (
    <Box sx={{ color: isDarkMode ? 'white' : '#042743', p: 2 }}>
      <Typography variant="h4" gutterBottom>
        <b>{props.heading}</b>
      </Typography>

      <TextField
        id="myBox"
        label="Enter your text"
        multiline
        rows={8}
        fullWidth
        value={text}
        onChange={handleChange}
        variant="outlined"
        sx={{
          backgroundColor: isDarkMode ? '#333' : '#fff',
          color: isDarkMode ? '#fff' : '#042743',
          mb: 2
        }}
        InputProps={{
          style: {
            color: isDarkMode ? 'white' : '#042743'
          }
        }}
      />

      <Stack direction="row" spacing={2} mb={4}>
        <Button variant="contained" onClick={handleClick}>Convert to UpperCase</Button>
        <Button variant="contained" onClick={handleLowerClick}>Convert to LowerCase</Button>
        <Button variant="contained" onClick={handleClearClick}>Clear</Button>
        <Button variant="contained" onClick={handleCopy}>Copy</Button>
      </Stack>

      <Box>
        <Typography variant="h5"><b>Text Summary</b></Typography>
        <Typography><b>Words:</b> {wordCount}, <b>Characters:</b> {charCount}</Typography>
        <Typography><b>Estimated Read Time:</b> {readTime.toFixed(2)} minutes</Typography>

        <Typography variant="h6" mt={2}><b>Preview</b></Typography>
        <Typography>
          {text.length > 0 ? text : "Write Something For Preview...!"}
        </Typography>
      </Box>
    </Box>
  );
}
