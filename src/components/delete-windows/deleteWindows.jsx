import React from 'react';
import s from './deleteWindows.module.css';

const DeleteWindows = (props) => {
    return (
        <div className={s.mainBox}>
            <div className={s.buttonBox}>
                <p>Удалить пользователя?</p>
                <div className={s.buttonBox_buttons}>
                    <button onClick={() => { props.DeleteAction() }}>Удалить</button>
                    <button onClick={() => { props.resetStateDelete() }}>Отмена</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteWindows;