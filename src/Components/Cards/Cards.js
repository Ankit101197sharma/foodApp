import React from 'react'
import {cardDetails, aboutData} from "../../DataFile"
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
  {/* about section */}
        
        <div style={{padding:'40px'}}>
          {aboutData.map((value)=>{
            return(
              <>
              <h3 className={classes.heading}>{value.mainHeading}</h3>
              <img src={value.imageSrc} alt="" />
              <div style={{paddingTop:"32px", paddingBottom:"32px"}}>
            <h4>
              <b>{value.h4Heading}</b>
            </h4>
            <h6>
              <i>{value.h6Heading}</i>
            </h6>
            <p>{value.imagePara}</p>
          </div>
              </>
            )
          })}
              <hr />
        </div>

          {/* Footer section */}

        <div style={{padding:'26px', margin:'26px'}}>
          <footer className={classes.row1} style={{paddingBottom:'20px'}}>
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
                  <div style={{textAlign:'left'}} className={classes.third}>
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