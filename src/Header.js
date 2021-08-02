import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Container, Typography } from "@material-ui/core";
const Header = () => {
  return (
    <>
      <Container>
        <Typography variant="h3" style={{ color: "#F8485E" }}>
          <SearchIcon fontSize="large" />
          Weather Application Using React Js
        </Typography>
      </Container>
    </>
  );
};
export default Header;
