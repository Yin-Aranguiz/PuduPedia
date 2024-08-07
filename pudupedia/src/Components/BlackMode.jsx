import React, {useState} from 'react'

const [black, setBlack] = useState(false)
 
const BlackMode = () => {
  if (black=== false) {
    setBlack(true)
  }else {
    setBlack(false)
  }
  return (
    <div>
      
    </div>
  )
}

export default Black
