import React from "react";
import { Box, Paper, Typography, Button, Backdrop } from "@mui/material";
import { styled } from "@mui/system";
import Guide_Comment from "./Guide_Comment";

export default function Guide_KeepPost() {
  const [Dialog_Comment, setDialog_Comment] = React.useState(false);
  const [Dialog, setDialog] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  const handleNextDialog_Comment = () => {
    setDialog_Comment(true);
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
            <Guide_Comment onClose={handleNextDialog_Comment} />
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
                    8/9
                  </Typography>
                  <Typography>Keep โพสต์</Typography>
                  <Typography sx={{ fontSize: 12, color: "grey", pt: 1 }}>
                    โพสต์นี้น่าสนใจ คลิป Keep โพสต์ไว้
                    คุณจะได้รับแจ้งเตือนเป็นคนแรก
                    หากโพสต์นี้มีการแสดงความคิดเห็นใหม่
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
                      onClick={handleNextDialog_Comment}
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
