import React from "react";
import { Box, Paper, Typography, Button , Backdrop } from "@mui/material";
import { styled } from "@mui/system";

export default function Guide_Comment() {
  const [isVisible, setIsVisible] = React.useState(true);

  const handleSkip = () => {
    setIsVisible(false);
  };

  const DialogWithArrow = styled(Paper)({
    position: "relative",
    mt: "10px",
    zIndex: 1,
    "&::before": {
      borderLeft: "1px solid #ccc",
      borderTop: "1px solid #ccc",
      backgroundColor: "white",
      content: '""',
      display: "block",
      position: "absolute",
      width: 30,
      height: 30,
      top: 225,
      transform: "rotate(225deg)",
      left: "calc(50% - 6px)",
    },
  });
  return (
    <>
      
      {isVisible && (
        <>
          <DialogWithArrow></DialogWithArrow>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pt: 10,
              position: "relative",
            }}
          >
            <Paper
              variant="outlined"
              sx={{
                width: "300px",
                height: "120px",
                pt: 3,
                pr: 3,
                pl: 3,
                pb: 2,
                position: "relative",
                borderRadius: 3,
                boxShadow: 2,
              }}
            >
              <Typography
                sx={{
                  color: "grey",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  p: 3,
                  fontSize: 10,
                }}
              >
                9/9
              </Typography>
              <Typography>ความคิดเห็น</Typography>
              <Typography sx={{ fontSize: 12, color: "grey", pt: 1 }}>
                คุณสามารถแสดงความคิดเห็นของโพสต์นั้นๆได้
              </Typography>
              <Box sx={{ pt: 4, display: "flex" }}>
                <Button
                  variant="outlined"
                  sx={{ mr: 2, width: "50%" }}
                  onClick={handleSkip}
                >
                  ข้าม
                </Button>
                <Button
                  variant="contained"
                  sx={{ width: "50%", zIndex: 999 }}
                  onClick={handleSkip}
                >
                  ต่อไป
                </Button>
              </Box>
            </Paper>
          </Box>
        </>
      )}
    </>
  );
}
