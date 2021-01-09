import React from 'react'

const Display = ({display}) => {
    const displaylist = display.length > 0 ? 
    (display.map (data => {
        return ( 
            <div>
            <span> {data.names}</span>
            </div>
        )
    })) : (
        <p>No Names atm</p>
    );
    
    
    return (
        <div>
        {displaylist}
        </div>
    )
}

export default Display;