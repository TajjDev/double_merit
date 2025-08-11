import React from 'react'
import Links from '../../component/nav/links/Link'

const Unk = () => {
  return (
    <div>
        <p style={{height:"100%", bottom:0, width:"100%", background:"white", position:"absolute",top:0,display:"flex",alignItems:"center",justifyContent:"center"}} >page not found!, go back to <Links style={{textDecoration:'none',fontWeight:'700'}} label={"Home"}  to="/">Home</Links></p>
    </div>

  )
}

export default Unk