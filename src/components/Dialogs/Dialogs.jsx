import classes from './Dialogs.module.css'
import React from 'react'
import Message from './Messages/Messages'
import DialogItem from './DialogItem/DialogItem'

const Dialogs = (props) => {

  let dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>
        {dialogElements}
      </div>
      <div className={classes.messages}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs