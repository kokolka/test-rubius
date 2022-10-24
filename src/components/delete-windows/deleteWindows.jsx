import React from 'react';

const DeleteWindows = (props) => {
    return(
        <div>
            <button onClick={() => {props.DeleteAction()}}>Удалить</button>
            <button onClick={() => {props.resetStateDelete()}}>Отмена</button>
        </div>
    )
}

export default DeleteWindows;