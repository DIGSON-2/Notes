import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import FacebookIcon from '@mui/icons-material/Facebook';
const myLinks = [
  {
    text: "Facebook",
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/ando.andranik.98/",
    key: 1
  },
  {
    text: "HH work",
    icon: <WorkIcon  />,
    url: "https://hh.ru/resume/2bdc9878ff098767f80039ed1f625958324b61",
    key: 2
  },
  {
    text: "Linkedin",
    icon: <LinkedInIcon  />,
    url: "https://www.linkedin.com/in/andranik-baldryan-a66815219/",
    key: 3
  },
  {
    text: "Google ",
    label: 'andranikbaldryan27@gmail.com',
    icon: <EmailIcon  />,
    url: 'https://mail.google.com',
    key: 4
  },
  {
    text: "Github",
    icon: <GitHubIcon  />,
    url: "https://github.com/DIGSON-2",
    key: 5
  },
];
export default myLinks