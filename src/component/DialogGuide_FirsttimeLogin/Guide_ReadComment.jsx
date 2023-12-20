import React from "react";
import { Box, Paper, Typography, Button, Backdrop } from "@mui/material";
import { styled } from "@mui/system";
import Guide_ToPost from "./Guide_ToPost";

export default function Guide_ReadComment() {
  const [Dialog_ToPost, setDialog_ToPost] = React.useState(false);
  const [Dialog, setDialog] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  const handleNextDialog_ToPost = () => {
    setDialog_ToPost(true);
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
            <Guide_ToPost onClose={handleNextDialog_ToPost} />
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
                    6/9
                  </Typography>
                  <Typography>เส้นสีฟ้าบ่งบอกถึงความคิดเห็น</Typography>
                  <Typography sx={{ fontSize: 12, color: "grey", pt: 1 }}>
                    เส้นสีฟ้าบ่งบอกว่าคุณกำลังอ่านความคิดเห็นของโพสต์นั้นๆอยู่
                  </Typography>
                  <Box sx={{ pt: 2, display: "flex" }}>
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
                      onClick={handleNextDialog_ToPost}
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
