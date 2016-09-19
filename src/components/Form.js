import React from 'react';

export default function form({options, onSubmit}) {
    let mapFormElement = (option, index) => <div key={index}>
        <label htmlFor={option.name}>{option.name}:</label>
        <input type={option.type} id={option.name} name={option.name}/>
    </div>;

    return <form>
        {options.map(mapFormElement)}
        <input type="submit" onClick={onSubmit}/>
    </form>;
}
