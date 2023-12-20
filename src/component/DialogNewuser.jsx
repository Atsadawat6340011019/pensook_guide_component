import * as React from "react";

import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";

import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, Grid, Typography } from "@mui/material";
import LogoPensook from "../assets/LogoPensook.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import NoImage from "../assets/no_image.png";
import Button from "@mui/material/Button";


export default function DialogNewuser() {
  const [open, setOpen] = React.useState(true);

  const [selectType, setSelectType] = React.useState("");

  const [HoverCard, setHoverCard] = React.useState(null);

  const handleChange = (event) => {
    setSelectType(event.target.value);
  };

  const [selectedTitle, setSelectedTitle] = React.useState([]);

  const handleTitleClick = (index) => {
    // Check if the card is already selected
    const isSelected = selectedTitle.includes(index);

    // If already selected and clicking again, remove from the array
    if (isSelected) {
      setSelectedTitle((prevSelectedTitle) =>
        prevSelectedTitle.filter((cardIndex) => cardIndex !== index)
      );
    } else {
      // If not selected and not exceeding the limit of 3, add to the array
      
        setSelectedTitle((prevSelectedTitle) => [...prevSelectedTitle, index]);
      
    }
  };

  const isTitleSelected = (index) => {
    return selectedTitle.includes(index);
  };

  const Checkmark = (index) => {
    if (isTitleSelected(index)) {
      return (
        <Box
          style={{
            position: "absolute",
            top: 5,
            left: 5,
            color: "#007DFC",
          }}
        >
          <CheckCircleIcon fontSize="27" />
        </Box>
      );
    }
    return null;
  };

  const cardTitle = [
    { text: "โรคซึมเศร้า" },
    { text: "โรคหัวใจ" },
    { text: "โรคมะเร็ง" },
    { text: "โรคไต" },
    { text: "โรคภูมิแพ้" },
    { text: "โรคในเด็ก" },
    { text: "เทคโนโลยีการแพทย์" },
    { text: "โรคระบาด" },
    // เพิ่มข้อมูลข้อความตามจำนวน card ที่คุณต้องการ
  ];

  return (
    <React.Fragment>
      
        <Box sx={{ alignCentent: "center" }}>
          <Dialog
            open={open}
            
            keepMounted
            aria-describedby="alert-dialog-slide-description"
          >
            <Box sx={{ alignItems: "center", pr: 5, pl: 5, pt: 3 }}>
              <DialogTitle sx={{ textAlign: "center" }}>
                <img src={LogoPensook} width={"40%"} alt="logoPensook" />
              </DialogTitle>
            </Box>
            <DialogContent sx={{ pl: 6, pr: 6, pt: 3, pb: 4 }}>
              <Typography variant="h5">
                วันนี้คุณอยากค้นหาข้อมูลเกี่ยวกับอะไร ?
              </Typography>
              <Typography sx={{ fontSize: "0.8rem" }}>
                บอกเราเพื่อเราแนะนำสิ่งที่คุณต้องการได้ถูกต้อง
              </Typography>
              <Box sx={{ minWidth: 120, pt: 5, pb: 2 }}>
                <Typography sx={{ pb: 2 }}>คุณคือบุคคลใด</Typography>
                <FormControl sx={{ width: "20vw" }}>
                  <InputLabel id="demo-simple-select-label">เลือก</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="selectType"
                    value={selectType}
                    label="เลือก"
                    onChange={handleChange}
                  >
                    <MenuItem value={"ผู้ป่วย"}>ผู้ป่วย</MenuItem>
                    <MenuItem value={"ญาติผู้ป่วย"}>ญาติผู้ป่วย</MenuItem>
                    <MenuItem value={"บุคคลทั่วไป"}>บุคคลทั่วไป</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ display: "flex", pb: 1, pt: 1 }}>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  เลือกสิ่งที่คุณสนใจ
                  <Typography
                    variant="caption"
                    sx={{ marginLeft: 1 }}
                    color="#007DFC"
                  >
                    (อย่างน้อย 3)
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Grid container spacing={2}>
                  {cardTitle.map((title, index) => (
                    <Grid item xs={3} key={index} sx={{ p: 3, mb: 2 }}>
                      <Card
                        sx={{
                          borderRadius: "10px",
                          width: "130%",
                          height: "160%",
                          position: "relative",
                          backgroundImage: `url(${NoImage})`,
                          backgroundSize: "cover",
                          transition: "transform 0.2s", // Add transition property

                          // Adjust the scale on hover
                          "&:hover": {
                            transform: "scale(1.1)",
                          },
                          // รักษาความสูงของ card
                        }}
                        onClick={() => handleTitleClick(index)}
                        onMouseEnter={() => setHoverCard(index)}
                        onMouseLeave={() => setHoverCard(null)}
                      >
                        {HoverCard === index && (
                          <Box
                            style={{
                              position: "absolute",
                              top: 5,
                              left: 5,
                              color: "#007DFC",
                            }}
                          >
                            <CircleOutlinedIcon fontSize="27" />
                          </Box>
                        )}
                        {Checkmark(index)}
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            textAlign: "center",
                            height: "100%",
                          }}
                        >
                          <CardContent></CardContent>
                          <Typography
                            variant="caption"
                            sx={{
                              backgroundColor: "rgba(211, 211, 211, 0.5)",
                              width: "100%",
                            }}
                          >
                            {title.text}
                          </Typography>
                        </Box>
                        <CardActions></CardActions>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </DialogContent>
            <Box sx={{ textAlign: "center", pb: 4 }}>
              <Button
                variant="contained"
                disabled={selectedTitle.length < 3}
                sx={{ width: "40%" }}
              >
                ถัดไป
              </Button>
            </Box>
          </Dialog>
        </Box>
      
    </React.Fragment>
  );
}
