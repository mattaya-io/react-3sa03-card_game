import React, {useState} from 'react';

export default function CharacterCard(props){
    const [active, setActive] = useState(false)
    const activate = () => {
        setActive(true)
    }

    const className = `card ${active ? 'activateCard' : ''}`
    return (
        <div className={className} onClick={activate}>{props.value}</div>
    )
}
