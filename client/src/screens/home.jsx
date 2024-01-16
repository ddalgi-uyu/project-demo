import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link
} from "@mui/material";
import { CardMedia } from '@mui/material';

const HomePage = (props) => {
    return (
        <Box m="2rem 0">
            <Box m="3rem 2rem">
                <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    pl="1.5rem"
                >
                    <Typography
                        fontSize="24px"
                        fontWeight="bold">
                        Project collection
                    </Typography>
                </Box>

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    mt="1.5rem"
                    mr="1.5rem">
                        <Grid container>
                            <Grid item xs={6}>
                                <Box
                                    width="100%"
                                    p="1.5rem">
                                    <Typography
                                        fontSize="16px"
                                        fontWeight="bold">
                                        Aus Reef Tracker Website
                                    </Typography>
                                    <Box m="1.5rem">
                                        <CardMedia
                                            component="video"
                                            image='../../static/vedio/aus-reef-tracker-demo.mp4'
                                            title='title'
                                            controls/> 
                                    </Box>
                                    <Typography
                                        fontSize="14px"
                                        mx="1.5rem"
                                        mt="0.5rem">
                                        Project description:
                                        <br/>
                                        Aus Reef Tracker is a web application that consists of interactive graphs that are connected to live coral reef data for users to monitor the coral reef situation in Australia.
                                        <br/><br/>
                                        project repository: 
                                        <Link href="https://gitfront.io/r/ddalgiuyu/cyACNQR7Vi94/aus-reef-tracker/">   https://gitfront.io/r/ddalgiuyu/cyACNQR7Vi94/aus-reef-tracker/</Link>
                                        <br/>
                                        User guide:
                                        <Link href="https://drive.google.com/file/d/16cuGhGWNYo9mD-rclUHQAzY9DSa93J0b/view?usp=sharing">    https://drive.google.com/file/d/16cuGhGWNYo9mD-rclUHQAzY9DSa93J0b/view?usp=sharing</Link>
                                    </Typography>
                                </Box>
                                
                            </Grid>
                            <Grid item xs={6}>
                                <Box
                                    width="100%"
                                    height="300px"
                                    p="1.5rem">
                                    <Typography
                                        fontSize="16px"
                                        fontWeight="bold">
                                        Movie Rating APP
                                    </Typography>
                                    <Box m="1.5rem">
                                        <CardMedia
                                            height="423"
                                            component="video"
                                            image='../../static/vedio/movie-rating-demo.mp4'
                                            title='title'
                                            controls/> 
                                    </Box>
                                    <Typography
                                        fontSize="14px"
                                        mx="1.5rem"
                                        mt="0.5rem">
                                        Project description:<br/>
                                        With the development of the movie industry and internet technology, published movies of each year and the number of online streaming services has increased massively, which makes it harder to choose the suitable streaming service as well as the movie to watch. The focus of this application is to make the process of deciding movies and finding streaming services to be easier.
                                        <br/><br/>
                                        project repository: 
                                        <Link href="https://gitfront.io/r/ddalgiuyu/jpphSAY3hty2/movie-rating/">   https://gitfront.io/r/ddalgiuyu/jpphSAY3hty2/movie-rating/</Link>
                            
                                    </Typography>
                                        
                                </Box>
                            </Grid>

                        </Grid>
                </Box>
              
            </Box>
        </Box>
        
    );
};

export default HomePage;