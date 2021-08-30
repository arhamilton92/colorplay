import React, { Fragment, useState } from 'react'

import Canvas from './Canvas';
import Button from './Button'

const MonsterBox = () => {
    const [ click, setClick ] = useState(false)

    return (
        <Fragment>
            <div className="main">
            <Canvas setClick={setClick} click={click} />
            </div>
            <Button click={setClick} />
        </Fragment>
    )
}

export default MonsterBox
