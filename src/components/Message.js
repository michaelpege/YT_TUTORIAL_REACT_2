import React from "react";

const Message = ({data}) => {
	return (
		<div className='message'>
			<p>{data.name} : </p>
			{data.text}
		</div>
	);
};

const MessageWithTimestamp = ({text, timestamp}) => {
	return (
		<div className='message'>
			<h1>TIMESTAMP</h1>
			{text}
		</div>
	);
};

export {Message, MessageWithTimestamp};
