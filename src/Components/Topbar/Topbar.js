import React from 'react'



function Topbar() {
  return (
      <>
      <div >
        <div   class="collapse " id="navbarToggleExternalContent">
  <div class="bg-dark p-4 " >
    <h5 class="text-black h4">Collapsed content</h5>
    <span class="text-muted">Toggleable via the navbar brand.</span>
    <a href="">Food</a>
  </div>
</div>
<nav class="navbar navbar-dark bg-white   " style={{color:'#000'}}>
  <div class="container-fluid">
    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
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