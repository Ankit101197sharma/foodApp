import React from 'react'
import {cardDetails} from "../../DataFile"
import classes from "./Cards.module.css"

 function Cards() {
  return (
    <>
    <div>
      <div  className={classes.mainDiv} >
        {cardDetails.map((item)=>{
          return(
            <div className={classes.imgGrid}  >
            <div className={classes.imgContainer}>
              <div className={classes.acard}>
              <img  className={classes.imgd} src={item.imgSrc} alt="fgs" /> 
           <h3 className={classes.heading} >{item.imgHeading}</h3>
           <p className={classes.text}>{item.imgDesc}</p>
              </div>

         </div>
         
            </div>  
            
          )
         
        })}
       
        
        <div style={{padding:'40px'}}>
          <h3 className={classes.heading}>About Me, The Food Man</h3>
          <img src="https://www.w3schools.com/w3images/chef.jpg" alt="chief" />
          <div style={{paddingTop:"32px", paddingBottom:"32px"}}>
            <h4>
              <b>I am Who I Am !</b>
            </h4>
            <h6>
              <i>With Passion For Real, Good Food</i>
            </h6>
            <p>Just me, myself and I, exploring the universe of unknownment. I have a heart of love and an interest of lorem ipsum and mauris neque quam blog. I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
              <hr />
        </div>
        <div>
          <footer className='row' style={{paddingBottom:'20px'}}>
                  <div style={{textAlign:'left'}} className={classes.third}>
                    <h3>FOOTER</h3>
                    <p >Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                    <p>Powered by</p>
                  </div>
                  <div style={{textAlign:'left'}} className={classes.third}>
                    <h3>BLOG POSTS</h3>
                    <ul className='ul hoverable'>
                        <li>
                          <img src="https://www.w3schools.com/w3images/gondol.jpg" className='left margin-right' style={{width:'50px'}} alt="" />
                          <span className='large' style={{padding:'18px'}}>Ipsum <br /> lorem ipsum lorem</span>
                        </li>
                        <li >
                          <img src="https://www.w3schools.com/w3images/gondol.jpg" className='left margin-right' style={{width:'50px'}} alt="" />
                          <span className='large' style={{padding:'18px'}}>Ipsum</span><br />
                          <span>Praes titnci sed</span>
                        </li>
                    </ul>
                  </div>
                  <div className={classes.third}>
                    <h3>POPULAR TAGS</h3>
                    <p>
                      <span className={classes.tags}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                      <span className={classes.tag}>
                        Travel
                      </span>
                    </p>

                  </div>
          </footer>
        </div>
      </div>
    </div>
    




   
</>
  )
}
export default Cards;