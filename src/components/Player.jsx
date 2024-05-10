import { useState } from "react";

export default function Player({ name, symbol, isActive, onChangeName}){
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleClick(){
        //setIsEditing(!isEditing);//not a good practice
        setIsEditing((editing)=>!editing);
        if(!isEditing) onChangeName(symbol,playerName);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if(isEditing) editablePlayerName = <input type = "text" required defaultValue = {playerName} onChange={handleChange}/>;

    return (
        <li className={isActive?'active':undefined}>
            <span className="player">
              {editablePlayerName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
        </li>
    );
}