const getUsersData = async (callback) => {
  const url = "http://localhost:3006/users";
  const resp = await fetch(url);
  const respData = await resp.json();

  callback(respData);
};
const getUser = async (callback, token) => {
  const url = "http://localhost:3006/users";
  const resp = await fetch(url);
  const respData = await resp.json();
  const user = await respData.find((el) => el.token ===  token)
  if (!user) return
  const cards = await getCardFromUser(user.id)
  callback({ user, cards });
};

const getCardFromUser = async (id) => {
  const url = `http://localhost:3006/users/${id}/cards`
  const resp = await fetch(url);
  const respData = await resp.json();

  return respData
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
const changeCard = async (id, obj) => {
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

export { getUser, getUsersData, addCard, addUser, removeCard, changeCard };
