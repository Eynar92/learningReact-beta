import React from 'react'

// function TitlePropsDefault({ titlePropsDefault = 'Default Title' }) {
function TitlePropsDefault({ titlePropsDefault}) {
    return (
        // <h2 className='read-the-docs'>{titlePropsDefault ? titlePropsDefault : "Default Title"}</h2>
        <h2 className='read-the-docs'>{titlePropsDefault}</h2>
    )
}

TitlePropsDefault.defaultProps = {
    titlePropsDefault: "Default Title"
}

export default TitlePropsDefault
