import React from "react";
import { Box, Paper, Typography, Button, Backdrop } from "@mui/material";
import { styled } from "@mui/system";

import Guide_Main from "./Guide_Main";

export default function Guide_Search() {
  const [Dialog_Main, setDialog_Main] = React.useState(false);
  const [Dialog, setDialog] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);

  const handleNextDialog_Main = () => {
    setDialog_Main(true);
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
      <Backdrop open={isVisible} sx={{ zIndex: 0 }}>
        {/* This will be the backdrop that covers the entire screen when isVisible is false */}
      </Backdrop>
      {isVisible && (
        <>
          {Dialog ? (
            <Guide_Main onClose={handleNextDialog_Main} />
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
                    1/9
                  </Typography>
                  <Typography>ค้นหาข้อมูลที่คุณต้องการ</Typography>
                  <Typography sx={{ fontSize: 12, color: "grey", pt: 1 }}>
                    ใส่ Keyword ของข้อมูลที่คุณกำลังหา เช่น โรคหัวใจ
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
                      onClick={handleNextDialog_Main}
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
