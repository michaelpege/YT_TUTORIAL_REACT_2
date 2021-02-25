import "./App.css";

import React, {useState} from "react";
import {Message, MessageWithTimestamp} from "./components/Message";
import {InputRow} from "./components/Input";

const App = () => {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [listMsg, setListMsg] = useState([]);

  const handleMsg = (e) =>{
    setMsg(e.target.value);
  }
  const handleName = (e) =>{
    setName(e.target.value);
  }
  
  const pushMsg = () =>{
    let target = listMsg;
    target.push({name:name, text:msg});
    setMsg("");
    setName("");
    setListMsg(target);
  }

	return (
		<div className='container'>
      <InputRow label="pesan" value={msg} setValue={handleMsg}/>
      <InputRow label="nama" value={name} setValue={handleName}/>
			<button onClick={() => pushMsg()}>Kirim</button>
			<div className='message-container'>
				{listMsg && listMsg.map((row) => (
					<Message data={row}/>
				))}
			</div>
		</div>
	);
};

export default App;
