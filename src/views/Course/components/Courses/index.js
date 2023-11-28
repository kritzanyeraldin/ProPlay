import { Add, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";
import { getAllCourses } from "../../../../network";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const callGetCourses = useCallback(async () => {
    const courses = await getAllCourses();
    setCourses(courses);
  }, []);

  useEffect(() => {
    callGetCourses();
  }, [callGetCourses]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        gap={3}
      >
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "calc(100%-20px)",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "Type your message here" }}
            // value={message}
            // onChange={event => 1setMessage(event.target.value)}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="send">
            <Search />
          </IconButton>
        </Paper>

        <Box sx={{ flexGrow: 1 }} bgcolor="gray" p={5} gap={4}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {courses.map((course) => (
              <Grid key={course.id} item xs={2} sm={4} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/static/images/cards/contemplative-reptile.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {course.tittle}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {course.content}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-around" }}>
                    <Button size="small">More</Button>
                    <Button size="small">delete</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Fab
          type="button"
          LinkComponent={Link}
          to={"/course/create"}
          color="secondary"
          aria-label="add"
          sx={{ alignSelf: "flex-end" }}
        >
          <Add />
        </Fab>
      </Box>
    </>
  );
};

export default Courses;
