import React, { Component } from 'react'

import style from './Dashboard.module.scss'
import Image from 'next/image'
import { AiFillInstagram, AiOutlineTwitter, AiOutlineGithub, AiOutlineFacebook,  AiOutlineLinkedin,  } from 'react-icons/ai';

export default class Dashboard extends Component {
  render() {
    return (
      
        <div className={style.container1}>
            
            <div className={`${style.row}  ${style.row1} `}>
                 <div className={style.col} style={{flexBasis:'100%'}}>
                  <div className={style.imgBox}>
                  <Image className={style.imgBox}
                        src="https://navbharattimes.indiatimes.com/photo/msid-89826872,imgsize-24032/pic.jpg"
                        width="600"
                        height="338"
                        alt="amanGupta"
                      />
                  </div>
                  <div>
                  <p className={style.userName}>Aman Gupta</p>
                  <p className={style.post}>CEO boAT</p>
                  <p className={style.desc1}>Insert your desired text here. Insert your desired text here. This is a sample test.</p>
                  </div>
                  
                  <div className={style.row4}>
                  <div className={style.data} style={{flexBasis:'31%'}}><h1>350</h1><p>Articles</p></div>
                  <div className={style.data} style={{flexBasis:'31%'}}><h1>25k </h1><p>Followers</p></div>
                  <div className={style.data} style={{flexBasis:'31%'}}><h1>8.9</h1><p>Rating</p></div>
                  </div>
                   
                 </div>
                 </div>
            <div className={`${style.row}  ${style.row2} `}>
                <div className={`${style.col}  ${style.col2} `}><h1 className={style.heading}>Placeholder</h1>
                <p className={style.desc}>Insert your desired text here. Insert your desired text here. This is a sample test.</p>
                <div className={style.mainCol3}>
                <div className={`${style.col3}  ${style.col3First} `}>
                  <h1 style={{color:'white'}}>This week sale</h1>
                <h1 style={{color:'white'}}>6.9 k </h1>
                </div>
                
                <div className={`${style.col3}  ${style.col3Bottom} `}>
                <h1 style={{color:'white'}}>Earnings of this week</h1>
                <h1 style={{color:'white'}}>$212 Mn</h1>
                </div>
                <div className={`${style.col3}  ${style.col3last} `}>
                <p className={style.icons}>
            <AiFillInstagram className={style.instagram}/>
            <AiOutlineTwitter className={style.twitter}/>
            <AiOutlineGithub className={style.github}/>
            <AiOutlineFacebook className={style.facebook}/>
            <AiOutlineLinkedin className={style.linkedin}/>
    
          </p>
                </div>
                </div>
                </div>
                <div className={`${style.col}  ${style.col2} `}><h1 className={style.heading}>Placeholder</h1>
                <p className={style.desc}>Insert your desired text here. Insert your desired text here. This is a sample test.</p>
                <div className={style.mainCol3}>
                <div className={`${style.col3}  ${style.col3First} `}>
                <p style={{color:'white'}} className={style.text}>This week sale</p>
                <h1 style={{color:'white'}} className={style.number}>8.9</h1>
                </div>
                <div className={`${style.col3}  ${style.col3Bottom} `}>
                <p style={{color:'white'}}  className={style.text}>This week Earn</p>
                <h1 style={{color:'white'}} className={style.number}>5000$</h1>
                </div>
                <div className={`${style.col3}  ${style.col3last} `}>
                <p className={style.icons}>
            <AiFillInstagram className={style.instagram}/>
            <AiOutlineTwitter className={style.twitter}/>
            <AiOutlineGithub className={style.github}/>
            <AiOutlineFacebook className={style.facebook}/>
            <AiOutlineLinkedin className={style.linkedin}/>
    
          </p>
                </div>
                </div>
                </div>
            </div>
            
            
        </div>
      
    )
  }
}
