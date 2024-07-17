import React from 'react'
import{Html, useProgress} from '@react-three/drei'


const Loader = () => {
const {progress} = useProgress();

  return (
    <Html>
      <span className="canvas-Load"></span>
      <p
      style={{
        fontSize: 14,
        color: '#c9b669',
        fontWeight: 800,
        marginTop:40
      }}>{progress.toFixed(2)}%</p>
    </Html>
    )
}

export default Loader