import React from 'react'
import { useSelector } from 'react-redux'

const Boat1 = ({follow}) => {

const hello = useSelector((state)=>({...state}))
console.log('userBoat',hello)

  return (
    <div>
      <h1>Component 1 </h1>
      {hello.itBoat.value}
      {/* <br />
      store:<h1>{userBoat.value}</h1>
      <br />
      prop:{follow}
      <br />
      {userBoat.loading ? <p>Loading..</p>
      : <p>ฝากกดติดตาม</p>}  */}
    </div>
  );
}

export default Boat1