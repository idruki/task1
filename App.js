import './App.css';
import image from './img/bot_image.jpg';
import { useState } from 'react';


function App() {


  const date =new Date();
  const hours=date.getHours();
  const seconds=date.getSeconds();
  const day=date.getDay();
  const month=date.getMonth();
  const year=date.getFullYear();

  const days=['sun', 'mon', 'tues', 'wednes', 'thurs', 'fri', 'sat'];
  const months=['jan ', 'feb', 'march', 'april','may','jun','jul','aug', 'sep','oct','nov','dec'];
  const [time,setTime]=useState(`${hours}:${seconds}`);
  const [dateTime ,setDateTime] =useState(`${days[ day ]},${months[month]},${year}`)

  const checkStatus= (e) => {
    let isActive= true;
    if (dateTime=== 'thurs,may 20 2022'){
      isActive=false;
    }
    const status=document.querySelector('.status');

    if (isActive===true){
      status.innerHTML='Active';
      status.style.color='green';

    }else{
      status.innerHTML='Not Active';
      status.style.color='red';
    }

  }
  const handleInput =() => {
    const botMessage= document.querySelector('#message1');
    const userMessage= document.querySelector('#message2');

    let  badwords=['react|what is react|what is meant by react| what does react means']
    let words= new RegExp(badwords);
    if(words.test(document.querySelector('#input').value)){
      botMessage.innerHTML='Typing...';
      setTimeout(() => {
        botMessage.innerHTML='React is an open-source, front-end, JavaScript library for creating user interfaces or UI modules. ';
        document.querySelector('#input').value='';

      },2000);
    }

    let bye=['DOM|Document Object Model']
    let words3= new RegExp(bye);
    if(words3 .test(document.querySelector('#input').value)){
      const status=document.querySelector('.status');
      botMessage.innerHTML='Typing...';
      setTimeout(() => {
        botMessage.innerHTML='The Document Object Model ( DOM) is a programming interface for both HTML and XML documents. It represents a page such that programs can adjust the format, layout, and content of the document. ';
        document.querySelector('#input').value='';

      },2000);
      setTimeout(() => {
        status.innerHTML='Not active ';
        status.style.color='red';

      },5000);
      
    }

    let  jsx=['JSX|jsx|javascript extension|java script']
    let words4= new RegExp(jsx);
    if(words4.test(document.querySelector('#input').value)){
      botMessage.innerHTML='Typing...';
      setTimeout(() => {
        botMessage.innerHTML='JavaScript extension, or more often JSX, is an extension of React that helps us to write HTML-like JavaScript.';
        document.querySelector('#input').value='';

      },2000);
    }

    let  recursion=['What is Recursion|recursion means what']
    let words5= new RegExp(recursion);
    if(words5.test(document.querySelector('#input').value)){
      botMessage.innerHTML='Typing...';
      setTimeout(() => {
        botMessage.innerHTML='JavaScript extension, or more often JSX, is an extension of React that helps us to write HTML-like JavaScript.';
        document.querySelector('#input').value='';

      },2000);
    }





    userMessage.innerHTML=document.querySelector('#input').value;

  }

  return (

    <div className="App" onLoad={checkStatus}>
      <div className='wrapper'>
        <div className='content'>
          <div className='header'>
            <div className='img'>
              <img src={image} alt=''/>
              </div>
              <div className='right'>
                <div className='name'>ChatBot</div>
                <div className='status'>Active</div>
            </div>
            </div>
            <div className='main'>
              <div className='main_content'>
                <div className='messages'>
                  <div className='bot-message' id='message1'></div>
                  <div className='human-message' id='message2'></div>
                </div>
              </div>
            </div>
            <div className='bottom'>
              <div className='btm'>
                <div className='input'>
                  <input type="text" id ="input" placeholder='Enter your message'/></div>
                  <div className='btn'>
                    <button onClick={handleInput}><i className='fas fa-paper-plane'></i>Send</button>
                </div>
              </div>
            </div>

        </div>
      </div>
    </div>
  );
}



export default App;