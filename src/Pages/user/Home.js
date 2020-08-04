import React from "react";
import Navbar from "../../component/user/Navbar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Alert, AlertTitle } from "@material-ui/lab";
import "../../App.css";
import Link from "@material-ui/core/Link";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import logo from "../../pic/transfer-to-ocsc.png";

const useStyles = makeStyles((theme) => ({}));

export default function Home() {
  const classes = useStyles();
  const theme = createMuiTheme({
    typography: {
      fontFamily: '"Prompt", serif',
    },
  });

  return (
    <div className="container" theme={theme}>
      <div className="row">
        <Navbar />

        <Container maxWidth="sm" alignItems="center">
          <div className="box">
            <Container fixed>
              <Box paddingTop={20}>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Box
                    p={1}
                    bgcolor="background.paper"
                    boxShadow={3}
                    spacing={1}
                    style={{ borderRadius: "10px" }}
                  >
                    <div>
                      <h2>แบบประเมินความสนใจของบุคคลที่มีต่องานราชการไทย</h2>
                    </div>
                    <img src={logo} width={300} className="center" alt="logo" />
                    <div>
                      &nbsp;
                      &nbsp;&nbsp;&nbsp;สํานักงาน&nbsp;ก.พ.&nbsp;ร่วมกับ&nbsp;
                      กรมการจัดหางาน&nbsp;กระทรวงแรงงาน&nbsp;
                      พัฒนาแบบประเมินความสนใจของบุคคลที่มีต่องานราชการไทย&nbsp;
                      โดยมีวัตถุประสงค์เพื่อเตรียมความพร้อมให้แก่ผู้สนใจสมัครเข้ารับราชการ&nbsp;
                      ทุนรัฐบาล&nbsp;หรือประชาชนได้ทราบและนําข้อมูลเกี่ยวกับความถนัด&nbsp;
                      ความสนใจ&nbsp;และบุคลิกภาพของตนเองไปใช้&nbsp;ในการตัดสินใจเลือกประกอบอาชีพได้อย่างมีประสิทธิภาพ&nbsp;
                      ตลอดจนเตรียมความพร้อมในการประกอบอาชีพ
                      ก่อนเข้าสู่ตลาดแรงงาน
                    </div>
                  </Box>

                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                  >
                    <div className={classes.root}>
                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                      >
                        <Box p={2} spacing={2}>
                          <Alert severity="info">
                            <AlertTitle>Info</AlertTitle>
                            <h4>
                              <strong>
                                &nbsp; &nbsp; &nbsp; &nbsp;แบบประเมินฯ มีทั้งหมด
                                87 ข้อ&nbsp;
                                ท่านต้องตอบแบบประเมินฯ&nbsp;ให้ครบทุกข้อใช้เวลาทั้งหมดประมาณ
                                15 นาที หากท่านต้องการพิมพ์ผลการประเมินฯ
                                โปรดเตรียมเครื่องพิมพ์ให้เรียบร้อยก่อนเริ่มทําแบบประเมินฯ
                                หรือใช้เว็บเบราวเซอร์ที่สามารถพิมพ์เป็นเอกสาร
                                &nbsp;PDF &nbsp;ได้
                              </strong>
                            </h4>
                          </Alert>
                        </Box>
                      </Grid>

                      <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={4}
                      >
                        <Box p={2} spacing={2}>
                          <Link href={`${process.env.PUBLIC_URL}/main`}>
                            <Button
                              variant="contained"
                              size="small"
                              color="primary"
                              className={classes.margin}
                            >
                              <PlayArrowRoundedIcon />
                              <h3>เริ่มทำแบบประเมิน</h3>
                            </Button>
                          </Link>
                        </Box>
                      </Grid>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
}