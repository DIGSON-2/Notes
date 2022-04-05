import { Button, Card, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate , useNavigate } from "react-router";
import DialogForAddCard from "./Dialog/DialogForAddCard";
import { useStyles } from "./style";
import { getUser, removeCard } from "../Server/query";
import DialogForChangeCard from "./Dialog/DialogForChange";

const HomePage = () => {
  let token = localStorage.Token
  let navigate = useNavigate()
  const { cardGroup, cardStyle, header, cardButtonsGroup, conteiner,search } = useStyles()
  const [card, setCard] = useState({})
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [openChangeDialog, setOpenChangeDialog] = useState(false)
  const [data, setData] = useState([])
  const [cardFilter, setCardFilter] = useState('')
  const handleClickClose = () => {
    setOpenAddDialog(false);
    setOpenChangeDialog(false);
  }
  const handleClickOpenAddDialog = () => {
    setOpenAddDialog(true)
  }
  const removeCardFromId = async id => {
    await  removeCard(id)
    setData(prev => 
      {
        return {
          ...prev, cards:prev.cards.filter(el => el.id !== id)
        }
      }
      
    )}
  const handleClickOpenChangeDialog = ( el ) => {
    setCard(el)
    setOpenChangeDialog(true)
  }
  useEffect(() => {
    getUser(setData, token)

  }, [ openAddDialog, openChangeDialog])
  const localClear = () => {
    localStorage.clear()
    navigate('/Authorization')
  }
  if (!token ) return <Navigate to="/Authorization" />;
  return (
    <>
      <header className={header}>
        <div className={conteiner}>
          <Button onClick={() => handleClickOpenAddDialog()}>ADD Card</Button>
          <div className={search}>
            <TextField size='small' variant='outlined' placeholder="its filter" onChange={(e)=>setCardFilter(e.value.toLowerCase())}/>
          </div>

          <Button onClick={() => localClear()}> Sign out</Button>
        </div>
      </header>
      <div className={conteiner}>
        <div className={cardGroup}>
          {data.user ? data.cards.filter(value => value.name.toLowerCase().includes(cardFilter)).map(el =>
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
      <DialogForAddCard open={openAddDialog} onClose={handleClickClose} id={data.user?.id} />
      <DialogForChangeCard open={openChangeDialog} onClose={handleClickClose} card={card} />
    </>
  );
};

export default HomePage;
