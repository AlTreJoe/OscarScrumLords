import React, {useState, useEffect} from 'react';
import styled from 'styled-components'; 
import axios from 'axios';
import {useParams} from 'react-router-dom';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SendMessageStyled = styled.div`

border: 1px;
  border-color: lightgray;
  border-style: solid;
  border-radius: 15px;
  padding: 5px;
  margin: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  background-color: white;
  font-family: 'Ubuntu', sans-serif; 

`;

const SendMessage = () => {

  const {id} = useParams();

  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [recipient, setRecipient] = useState('');

  //get info for person that we are sending a message to
  const getTarget = async () => {
    const {data} = await axios.get(`/routes/userlist/userlist/visitProfile/${id}`);
    console.log('data'. data);
    setRecipient(data.fullName);
  };

  const sendMessage = async () => {
    await axios.post(`/routes/messages/sendMessage/${id}`, { message, subject});
  };

  const subjectChange = ({target: {value}}) => {
    setSubject(value);
  };

  const messageChange = ({target: {value}}) => {
    setMessage(value);
  };

  useEffect(()=> getTarget(), []);


  return (
    <SendMessageStyled>
      <InputGroup className="mb-3">
        <InputGroup.Text>Subject</InputGroup.Text>
        <FormControl
          aria-label="subject"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <h3>send message to {recipient}</h3>
      subject
      <input type='text' onChange={subjectChange} value={subject}></input>
      message
      <input 
        type='text' 
        onChange={messageChange}
        value={message}
      ></input>
      <Button className='fButton' onClick={sendMessage}>send</Button>

    </SendMessageStyled>
  );
};

export default SendMessage;
