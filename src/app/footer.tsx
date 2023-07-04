import { Grid, Paper, styled } from "@mui/material";
import React from "react";

export function Footer() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: "#1A2027",
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    return (
        <Grid container spacing={3}>
            <Grid item sm={6} xs={12}>
                <Item> xs=12 </Item>
            </Grid>
            <Grid item sm={6} xs={6}>
                <Item>xs=6</Item>
            </Grid>
            <Grid item sm={6} xs={6}>
                <Item>xs=6</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>xs=3</Item>
            </Grid>
            <Grid item xs={3}>
                <Item>xs=3</Item>
            </Grid>
            <Grid item xs={6}>
                <Item>xs=6</Item>
            </Grid>
        </Grid>
    );
}
