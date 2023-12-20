import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import DrawIcon from "@mui/icons-material/Draw";
export const PostStatus = () => {

  return (
    <Box width={"60%"}>
      <Box
        bgcolor="#fff"
        sx={{
          display: "flex",
          alignItems: "center",
          height: 70,
          px: 2,
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Box
          bgcolor="#F1F1F1"
          sx={{
            ml: 2,
            height: 40,
            borderRadius: "30px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            px: 2,
          }}
        >
          <Typography sx={{ color: "grey", fontSize: 14 }}>
            คุณมีคำถามหรือต้องการแบ่งปันไหม ?
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", color: "grey" }}>
        <Button
          variant="text"
          sx={{
            color: "grey",
            pr: 5,
            "&:hover": { color: "black", background: "transparent" },
          }}
        >
          <DrawIcon sx={{ pr: 1 }} />
          โพสต์เล่าเรื่องราว
        </Button>
        |
        <Button
          variant="text"
          sx={{
            color: "grey",
            pl: 5,
            "&:hover": { color: "black", background: "transparent" },
          }}
          disableRipple
        >
          <LiveHelpIcon sx={{ pr: 1 }} />
          โพสต์คำถาม
        </Button>
      </Box>
    </Box>
  );
};
