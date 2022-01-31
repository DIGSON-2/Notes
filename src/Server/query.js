import { RssFeed } from "@mui/icons-material";

const getData = async (callback) => {
  const url = "http://localhost:3001/users";
  const resp = await fetch(url);
  const respData = await resp.json();

  callback(respData);
};

const addCard = async (obj) => {
  const url = "http://localhost:3001/users";
  let response = await fetch(url,
    {
      method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
  let result = await response.json()
  console.log(result)
};

const addUser = async (obj) => {
  const url = "http://localhost:3001/users/1";
  let response = await fetch(url,
    {
      method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
  let result = await response.json()
  console.log(result)
};



export { getData, addCard };
