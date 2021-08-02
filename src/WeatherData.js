import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  TextField,
  Container,
  Typography,
  Card,
  Grid,
  CardContent,
  CardActionArea
} from "@material-ui/core";
import axios from "axios";
import Display from "./Display";
import "./styles.css";

const WeatherData = (props) => {
  let [name, setName] = useState("Karachi");
  let [data, setdata] = useState("Karachi");
  let [disp, setdisp] = useState([]);

  const apiData = async () => {
    if (data !== "" && data!==null) {
      let weatherdata = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=08afca674faacba8a8d06d0c89a7ffb0`
      );
      //  console.log(weatherdata.data);
        
      if(weatherdata.data){setdisp([weatherdata.data])};
         
        
    } else {
      alert("Fill Fields");
    }
    //  console.log('oo'+disp[1]);
  };

  useEffect(() => {
    apiData();
  }, [data]);

  return (
    <div style={{}}>
      <br />{" "}
      <Typography variant="h6" style={{ paddingTop: "10px", marginTop: "5px" }}>
        Want to Know About <br />
        Current Weather Just Enter Your City Name
      </Typography>
      <br />{" "}
      <TextField
        // label="Enter City Name"
        placeholder="Enter City Name"
        id="inp"
        alignItems="center"
        justify="center"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Button
        id="clickbtn"
        variant="contained"
        color="primary"
        onClick={() => {
          setdata(name);

          setName("");
        }}
      >
        Search
      </Button>
      <Display disp={disp} />
    </div>
  );
};

export default WeatherData;
