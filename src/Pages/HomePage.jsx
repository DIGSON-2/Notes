import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useEffect, useState, useCallback } from "react";
import { Navigate } from "react-router";
import { getCardFromUser } from "../Server/query";
import DialogForAddCard from "./Dialog/DialogForAddCard";
import { useStyles } from "./style";
import { getUsers, removeCard } from "../Server/query";
import DialogForChangeCard from "./Dialog/DialogForChange";

const HomePage = () => {
  let token = localStorage.Token
  const { cardGroup, cardStyle, header, cardButtonsGroup, conteiner,search } = useStyles()
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(0)
  const [card, setCard] = useState({})
  const [cardFromId, setCardFromId] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [openChangeDialog, setOpenChangeDialog] = useState(false)
  const [user, setUser] = useState([])
  const [cardFilter, setCardFilter] = useState('')
  const handleClickClose = () => {
    setOpenAddDialog(false);
    setOpenChangeDialog(false);
  }
  const handleClickOpenAddDialog = () => {
    setOpenAddDialog(true)
  }
  const removeCardFromId = id => {
    removeCard(id)
    setRender(prev => prev + 1)
  }
  const handleClickOpenChangeDialog = (card) => {
    setCard(card)
    setOpenChangeDialog(true)
  }
  useEffect(() => {
    getUsers(setUsers)
  }, [])
  useEffect(() => {
    setUser(users.find((el) => el.token == token))
  }, [users])
  useEffect(() => {
    getCardFromUser(user?.id, setCardFromId)

  }, [user, openAddDialog, openChangeDialog, render])
  const localClear = useCallback(() => {
    localStorage.clear()
    setRender((prev) => prev + 1)
  }, [])
  if (!localStorage.Token) return <Navigate to="/Register" />;
  return (
    <>
      <header className={header}>
        <div className={conteiner}>
          <Button onClick={() => handleClickOpenAddDialog()}>ADD Card</Button>
          <div className={search}>
            <TextField size='small' variant='outlined' placeholder="its filter" onChange={(e)=>setCardFilter(e.target.value.toLowerCase())}/>
          </div>

          <Button onClick={() => localClear()}> Sign out</Button>
        </div>
      </header>
      <div className={conteiner}>
        <div className={cardGroup}>
          {cardFromId ? cardFromId.filter(value => value.name.toLowerCase().includes(cardFilter)).map(el =>
            <Card key={el.id} className={cardStyle}>
              <Typography>Name:  {el.name} {el.surName}</Typography>
              <Typography>Phone: {el.number}</Typography>
              <div className={cardButtonsGroup}>
                <Button variant="outlined" onClick={() => removeCardFromId(el.id)} >
                  Remove
                </Button>
                <Button variant="contained" onClick={() => handleClickOpenChangeDialog(el)} >
                  Change
                </Button>
              </div>
            </Card>
          ) : null}
        </div>
      </div>
      <DialogForAddCard open={openAddDialog} onClose={handleClickClose} id={user?.id} />
      <DialogForChangeCard open={openChangeDialog} onClose={handleClickClose} card={card} />
    </>
  );
};

export default HomePage;  
