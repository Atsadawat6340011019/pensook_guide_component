import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import DialogGuide_Login from "./DialogGuide_Login";

export default function DialogGuide_PostStatus() {
  
  const [Dialog_Login, setDialog_Login] = React.useState(false);
  const [Dialog, setDialog] = React.useState(false);
const [isVisible, setIsVisible] = React.useState(true);


  const handleNextDialog_Login = () => {
    setDialog_Login(true);
    setDialog(true);
  };

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
          {Dialog ? (
            <DialogGuide_Login onClose={handleNextDialog_Login} />
          ) : (
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
                    5/6
                  </Typography>
                  <Typography>โพสต์</Typography>
                  <Typography sx={{ fontSize: 12, color: "grey", pt: 1 }}>
                    คุณจะโพสต์ได้เมื่อคุณเข้าสู่ระบบ
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
                      onClick={handleNextDialog_Login}
                    >
                      ต่อไป
                    </Button>
                  </Box>
                </Paper>
              </Box>
            </>
          )}
        </>
      )}
    </>
  );
}
