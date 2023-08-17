import { Button, Grid, TextField, Typography } from "@mui/material";
import localFont from "next/font/local";
import { makeStyles } from "@mui/styles";
import { Footer } from "../footer";

const thinFont = localFont({ src: "../../styles/fonts/SharpSansLight.otf" });

export function Page5() {
    const useStyles = makeStyles((theme) => ({
        root: {
            "& label.Mui-focused": {
                color: "#FFFFFF",
            },
            "& .MuiInput-underline:after": {
                borderBottomColor: "yellow",
            },
            "& .MuiOutlinedInput-root": {
                "& fieldset": {
                    borderColor: "#4FCF00",
                },
                "&:hover fieldset": {
                    borderColor: "#4FCF00",
                },
                "&.Mui-focused fieldset": {
                    borderColor: "#4FCF00",
                },
            },
        },
        input: {
            color: "white",
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid container pt={18} pl="5vw" xl={7} xs={12}>
                    <Grid
                        mt={3}
                        px={0}
                        justifyContent="space-between"
                        container
                        xs={12}
                    >
                        <Grid display="flex" xs={2.2} flexDirection="column">
                            <TextField
                                className={classes.root}
                                inputProps={{
                                    sx: {
                                        color: "white",
                                        height: "13px",
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        color: "#A39C9C",
                                        padding: 0,
                                        margin: 0,
                                        fontSize: 14,
                                    },
                                }}
                                label="First name*"
                            />
                        </Grid>
                        <Grid display="flex" xs={2.2} flexDirection="column">
                            <TextField
                                className={classes.root}
                                inputProps={{
                                    sx: {
                                        color: "white",
                                        height: "12px",
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        color: "#A39C9C",
                                        fontSize: 14,
                                    },
                                }}
                                id="outlined-basic"
                                label="Last name*"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid display="flex" xs={2.2} flexDirection="column">
                            <TextField
                                id="outlined-basic"
                                label="Your email*"
                                variant="outlined"
                                className={classes.root}
                                inputProps={{
                                    sx: {
                                        color: "white",
                                        height: "12px",
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        color: "#A39C9C",
                                        fontSize: 14,
                                    },
                                }}
                            />
                        </Grid>
                        <Grid display="flex" xs={2.2} flexDirection="column">
                            <TextField
                                id="outlined-basic"
                                label="Your phone number*"
                                variant="outlined"
                                className={classes.root}
                                inputProps={{
                                    sx: {
                                        color: "white",
                                        height: "12px",
                                    },
                                }}
                                InputLabelProps={{
                                    sx: {
                                        color: "#A39C9C",
                                        fontSize: 14,
                                    },
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Grid mt={3} xs={12}>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Subject*"
                            variant="outlined"
                            className={classes.root}
                            inputProps={{
                                sx: {
                                    color: "white",
                                    height: "12px",
                                },
                            }}
                            InputLabelProps={{
                                sx: {
                                    color: "#A39C9C",
                                    fontSize: 14,
                                },
                            }}
                        />
                    </Grid>
                    <Grid mt={3} xs={12}>
                        <TextField
                            multiline
                            maxRows={6}
                            minRows={4}
                            fullWidth
                            id="outlined-basic"
                            label="Message*"
                            variant="outlined"
                            className={classes.root}
                            inputProps={{
                                sx: {
                                    color: "white",
                                    height: "12px",
                                },
                            }}
                            InputLabelProps={{
                                sx: {
                                    color: "#A39C9C",
                                    fontSize: 14,
                                },
                            }}
                        />
                    </Grid>
                    <Grid>
                        <Button
                            sx={{
                                borderWidth: 1,
                                borderColor: "#4FCF00",
                                borderRadius: "10px",
                                color: "white",
                                fontFamily: thinFont.style.fontFamily,
                                textTransform: "lowercase",
                                px: "30px",
                                mt: "30px",
                                mb: 0,
                            }}
                            variant="outlined"
                        >
                            Submit
                        </Button>
                        <Typography
                            fontSize={14}
                            color="white"
                            my={5}
                            mt={4}
                            fontFamily={thinFont.style.fontFamily}
                        >
                            *Required field
                        </Typography>
                    </Grid>
                </Grid>
                <Grid xs={0} lg={5} xl={5}></Grid>
            </Grid>
            <Footer />
        </div>
    );
}
