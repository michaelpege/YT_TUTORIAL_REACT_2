import React from "react";

const InputRow = ({value, setValue, label}) => {
	return (
		<div className='form-row'>
			<label>{label} : </label>
			<input type='text' onChange={(e) => setValue(e)} value={value}></input>
		</div>
	);
};

export {InputRow};
