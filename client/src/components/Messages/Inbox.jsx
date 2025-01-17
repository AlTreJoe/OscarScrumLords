import React, {useState, useEffect} from 'react';
import styled from 'styled-components'; 
import axios from 'axios';
import MessagePreview from './MessagePreview.jsx';
import MessageView from './MessageView.jsx';
import SentMessagePreview from './SentMessagePreview.jsx';
import { ListGroup, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const InboxStyles = styled.div`
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-content: center;
  }
  .selected {
    background-color: #ffd1dc;

  }
  .previewItem {
    width: 250px;
    :hover {
      background-color: lavender; 
    }
  }
  .messagePreviewsContainer {
    margin-right: 30px;
    margin-left: 0px;
  }
  .messageView {
    margin-left: 0px;
    margin-top: 30px;
  }
  .messageViewWrapper :{
    margin-top: 30px;
    flex: 1;
  }

`;

const Inbox = () => {

  

  const [mail, setMail] = useState([]);
  const [currentMessage, setCurrentMessage] = useState({}); //a state to an email that someone wants to view.  when clicked the email will display
  const [sentMail, setSentMail] = useState([]);
  const [activeClass, setActiveClass] = useState(0);

  const getInbox = async () => { //get request to get mail.  and then set it to the state
    const {data} = await axios.get('/routes/messages/getInbox');
    setMail(data);
  };

  const getOutbox = async () => { //get request to get mail.  and then set it to the state
    const {data} = await axios.get('/routes/messages/getOutbox');
    setSentMail(data);
  };

  const changeActive = (i) => setActiveClass(i);

  

  const viewMessage = (message) => { //fn to fire off when clicked
    setCurrentMessage(message);
  };

  const messagePreviews = mail.map((messageObj, i) => (
    <ListGroup.Item 

      key={i} 
      className={`previewItem ${i === activeClass && 'selected'}`}
      onClick={() => {
        changeActive(i);
        viewMessage(messageObj);
      }}>
      <MessagePreview messageObj={messageObj} viewMessage={viewMessage} />
    </ListGroup.Item>
  
  ) );

  const sentMessagePreviews = mail.map((messageObj, i) => <SentMessagePreview key={i} messageObj={messageObj} viewMessage={viewMessage} /> );

  useEffect(()=> getInbox(), []);

  //useEffect(()=>{}, currentMessage)

  


  return (
    <InboxStyles>
      <div className='wrapper'>
  
        <ListGroup className='messagePreviewsContainer'>
          {messagePreviews}
        </ListGroup>
    
        <div className='messageViewWrapper'>
          <MessageView className='messageView' currentMessage={currentMessage}/>
        </div>
      </div>
    </InboxStyles>
  );
};

export default Inbox; 
//{currentMessage.id ? <MessageView /> : <div>no messages selected </div>}
