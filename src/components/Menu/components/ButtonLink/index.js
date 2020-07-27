import React from 'react';


function ButtonLink(props){
    // props => { className: " ", href= " " }
    console.log(props)
    return (
        <button href={props.href} className={props.className}>
            Novo Video
        </button>
    );
}

export default ButtonLink;