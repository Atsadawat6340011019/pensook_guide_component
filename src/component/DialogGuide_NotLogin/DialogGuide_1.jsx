import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import DialogGuide_Comment from "./DialogGuide_Comment";
import DialogGuide_Search from "./DialogGuide_Search";
import Backdrop from "@mui/material/Backdrop";

export default function DialogGuild_1() {
  const [open, setOpen] = React.useState(true);
  const [showDialog_WriteComment, setDialog_WriteComment] = React.useState(false);
  const [showDialog_Search, setDialog_Search] = React.useState(false);
  const [showDialog_Comment, setDialog_Comment] = React.useState(false);

  const handleClickClose = () => {
    setDialog_Search(true);
    setOpen(false);
  };

  const handleNextDialog_Search = () => {
    setDialog_Search(false);
    setDialog_Comment(true);
  };

  const handleNextDialog_Comment = () => {
    setDialog_Comment(false);
  };

  return (
    <>
      {showDialog_Search && (
        <DialogGuide_Search
          onClose={handleNextDialog_Search}
          
        />
      )}

      {showDialog_Comment && (
        <DialogGuide_Comment
          onClose={handleNextDialog_Comment}
          
        />
      )}

      <Box>
        <Dialog
          open={open}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
          sx={{
            "& .MuiDialog-paper": {
              borderRadius: "15px",
            },
          }}
        >
          <DialogContent sx={{ pt: 3 }}>
            <Typography sx={{ pb: 1, fontSize: 18 }}>
              Platform ทำอะไรได้บ้าง
            </Typography>
            <ul style={{ color: "grey", fontSize: 14, paddingLeft: 23 }}>
              <li style={{ paddingBottom: 4 }}>
                เป็นพื้นที่แลกเปลี่ยนไลฟ์สไตล์การใช้ชีวิตกับการป่วย
              </li>
              <li style={{ paddingBottom: 4 }}>
                เป็นพื้นที่การพูดคุยกับคนกลุ่มเดียวกัน
              </li>
              <li style={{ paddingBottom: 4 }}>
                เป็นพื้นที่ support มากกว่าเรื่องโรค แต่รวมถึงด้านสภาวะจิตใจด้วย
              </li>
              <li>เป็นพื้นที่สำหรับแชร์บทความเรื่องโรค เทคโนโลยีการแพทย์</li>
            </ul>
          </DialogContent>

          <Box sx={{ textAlign: "center", p: 3 }}>
            <Button
              variant="contained"
              onClick={handleClickClose}
              sx={{ width: "100%" }}
            >
              ถัดไป
            </Button>
          </Box>
        </Dialog>
      </Box>
    </>
  );
}