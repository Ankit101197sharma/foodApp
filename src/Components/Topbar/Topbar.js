import React, {useState} from 'react'



function Topbar() {
  const [show , setShow] = useState(true)
  
  return (
      <>
      <div className='fixed-top'>
        <div    class="collapse  " id="navbarToggleExternalContent">
 <div class="bg-dark  p-4 " >
 show?<h5 class="text-black h4">Collapsed content</h5>:null
    <span class="text-muted">Toggleable via the navbar brand.</span>
    <a href="">Food</a>
  </div>
</div>
<nav class="navbar bg-white    " style={{color:'#000'}}>
  <div class="container-fluid">
    <button onClick={()=>setShow(!show)} class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon " ></span>
    </button>
   
    <div style={{fontSize:'24px' , fontFamily:'Karma sans-serif'}}>
      My Food
    </div>
    <div style={{fontSize:'24px' ,fontFamily:'Karma sans-serif'}}>
      Mail
    </div>
    
    
  </div>
</nav>

        


</div>


        </>
  )
}
export default Topbar;