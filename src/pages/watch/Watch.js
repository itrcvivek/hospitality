import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

function Watch() {
    const articles = [
        "The Art of Connection",
        "Beyond the Obstacle",
        "Growth Unlocked",
        "The Art of Connection",
        "Collaboration Magic",
        "Teamwork Triumphs",
        "Adaptive Advantage"
    ];

    return (
        <Box sx={{ maxWidth: "900px", paddingTop: "50px", margin: "auto", padding: "20px" }}>
            <Typography variant='h4' gutterBottom style={{ fontFamily: "var(--font-family-cardo)" }}>
                Watch, Read, Listen
            </Typography>
            <hr />
            {articles.map((title, index) => (
                <React.Fragment key={index}>
                    <Grid container>
                        <Grid item xs={6} md={7} lg={7} xl={8}>
                            <Box>
                                <Typography variant='h6' style={{ fontFamily: 'var(--font-family-cardo)' }}>
                                    {title}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6} md={5} lg={5} xl={4}>
                            <Box>
                                <Typography variant='body2'>
                                    May 25, 2024 — by Daniel Lee in Uncategorized
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <hr />
                </React.Fragment>
            ))}
        </Box>
    );
}

export default Watch;
