import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import DialogGuide_ToPost from "./DialogGuide_ToPost";

export default function DialogGuide_ReadComment() {
 
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
      top: 225,
      transform: "rotate(225deg)",
      left: "calc(50% - 6px)",
    },
  });
  return (
    <>
      {isVisible && (
        <>
          {Dialog ? (
            <DialogGuide_ToPost onClose={handleNextDialog_ToPost} />
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
                    3/6
                  </Typography>
                  <Typography>ความคิดเห็น</Typography>
                  <Typography sx={{ fontSize: 12, color: "grey", pt: 1 }}>
                    คลิกเพื่ออ่านความคิดเห็นของโพสต์นั้นๆ
                  </Typography>
                  <Box
                    sx={{
                      pt: 4,
                      display: "flex",
                      zIndex: 3,
                      position: "relative",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{ mr: 2, width: "50%" }}
                      onClick={handleSkip}
                    >
                      ข้าม
                    </Button>
                    <Button
                      variant="contained"
                      sx={{ width: "50%" ,zIndex: 999}}
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
