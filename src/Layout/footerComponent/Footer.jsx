import { Link, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./style";
import myLinks from "./config";

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant='body 2'>
          its original app created by Andranik Baldryan <br /> my contacts{" "}
        </Typography>
        <div className={classes.linkGroup}>
        {myLinks.map((el) => (
            <Link className={classes.link} href={el.url} key={el.key}>
              {el.icon}
              <Typography variant='body 2'>{el.text + (el.label ? el.label : '')}</Typography>
            </Link>
        ))}
        </ div>
      </div>
    </div>
  );
};
