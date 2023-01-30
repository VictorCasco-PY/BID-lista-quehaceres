
import React from 'react';

const Task = (props) => {
    const { task, index, list, setList } = props;

    const onClick = () => {
        const newList = () => list.filter((task) => list.indexOf(task) !== index);
        setList(newList);
    };

    const onChange = (e) => {
        list[index].isComplete = !list[index].isComplete;
        setList([...list]);
    }

    return (
        <div>
            <div className="task">
                <label
                    style={{ textDecorationLine: task.isComplete ? "line-through" : 'none' }}
                    htmlFor="checkbox"
                >
                    {task.name}
                </label>
                <input
                    onChange={onChange}
                    type="checkbox"
                    name=""
                    checked={task.isComplete}
                    className="check"
                ></input>
                <button onClick={onClick} className="btn-delete"> Delete </button>
            </div>
        </div>
    );
}

export default Task;