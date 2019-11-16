import React from 'react';
import s from './Dialogs.module.css';


const  Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dmitry
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Sasha
                </div>
                <div className={s.dialog}>
                    Sveta
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How is your</div>
                <div className={s.dialog}>Yo</div>
                <div className={s.dialog}>Bye</div>

            </div>
        </div>
    )
}

export default Dialogs;