import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

export default function DialogGuide_Login() {
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
      top: 64.5,
      transform: "rotate(45deg)",
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
                6/6
              </Typography>
              <Typography>เข้าสู่ระบบ</Typography>
              <Typography sx={{ fontSize: 12, color: "grey", pt: 1 }}>
                เข้าสู่ระบบเพื่อใช้งาน Feature อื่นๆอีกมากมาย
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
                  sx={{ width: "50%" }}
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
