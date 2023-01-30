import React, { useState } from 'react';
import "../App.css";

const Input = (props) => {
    const { list, setList } = props;
    const [input, setInput] = useState("");
    const currentField = React.createRef();

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        let task = {
            name: input,
            isComplete: false,
        };

        setList([...list, task]);
        currentField.current.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={currentField} onChange={handleInput} type="text" name="task" value={input} className="input-main" />
            <button className="btn-add">Add</button>
        </form>
    );
}

export default Input;