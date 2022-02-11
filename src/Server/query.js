
const getUsers = async (callback) => {
  const url = "http://localhost:3006/users";
  const resp = await fetch(url);
  const respData = await resp.json();

  callback(respData);
};

const getCardFromUser = async (id, callback) => {
  const url = `http://localhost:3006/users/${id}/cards`
  const resp = await fetch(url);
  const respData = await resp.json();

  callback(respData)
}


const addCard = async (obj) => {
  const url = "http://localhost:3006/cards";
  await fetch(url,
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
};
const removeCard = async (id) => {
  const url = `http://localhost:3006/cards/${id}`;
  await fetch(url,
    {
      method: "DELETE",
    })
};
const changeCard = async (id,obj) => {
  const url = `http://localhost:3006/cards/${id}`;
  await fetch(url,
    {
      method: "PATCH",
      body: JSON.stringify(obj),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
};


const addUser = async (obj) => {
  const url = "http://localhost:3006/users";
  await fetch(url,
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
};

export { getUsers, addCard, addUser, getCardFromUser, removeCard ,changeCard};
