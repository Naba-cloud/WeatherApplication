import React from "react";
import { Container } from "@material-ui/core";
//  import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import disp from "./WeatherData";
const Display = (props) => {
  console.log(props.disp);
  let a = "http://openweathermap.org/img/wn/";
  return (
    <Container>
      {props.disp.map((el, key) => {
        return (
          <Container style={{ textAlign: "center" }} key={key}>
            <Card>
              <Typography
                style={{ background: "#F8485E", color: "white" }}
                variant="h3"
              >
                {" "}
                City : {el.name}
              </Typography>

              <CardActionArea style={{ background: "#BCFFB9" }}>
                <img src={a + el.weather[0].icon + "@2x.png"} />
              </CardActionArea>
              <CardContent style={{ background: "#00C1D4", color: "#EEEEEE" }}>
                <Grid
                  container
                  // direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item lg={4}>
                    <Typography variant="h5">{el.weather[0].main}</Typography>
                    <Typography variant="h6">
                      Description:{el.weather[0].description}
                    </Typography>
                  </Grid>
                  <Grid item lg={4}>
                    <Typography>
                      Temperature :{Math.round(el.main.temp - 273.5)}C
                    </Typography>
                    <Typography>
                      MaxTemperature :{Math.round(el.main.temp_max - 273.5)}C
                    </Typography>
                    <Typography>
                      Feel :{Math.round(el.main.feels_like - 273.5)}C
                    </Typography>
                    <Typography>
                      MinTemperature :{Math.round(el.main.temp_min - 273.5)}C
                    </Typography>

                    <Typography>Pressure :{el.main.pressure}</Typography>
                    <Typography>Humidity:{el.main.humidity}</Typography>
                  </Grid>
                  <Grid item lg={4}>
                    <Typography variant="h5">Wind</Typography>

                    <Typography>Speed : {el.wind.speed} m/s</Typography>
                    <Typography>Degree : {el.wind.deg}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        );
      })}
    </Container>
  );
};
export default Display;
