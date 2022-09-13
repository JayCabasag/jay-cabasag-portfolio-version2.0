import React from 'react'
import SocialMediaLinks from '../components/SocialMediaLinks'

const Container = () => {
  return (
    <div className='main-container'>
        <div>
            <img src={require('../assets/main-image.png')} className="main-img" sizes='cover'/>
        </div>
        <div className='left-info'>
            <h1 className='author-name-text'>JAY AURELLANO CABASAG</h1>
            <div className='author-intro-container'>
                <p className='author-intro-text'>I'm A 22 yo filipino developer <br /> graduated from Taguig City <br />University.</p>
            </div>
            <button className='download-cv-btn'>DOWNLOAD CV</button>
            <div className='author-intro-container-roadmap'>
                <p className='author-roadmap-text'>Check my roadmap? </p>
            </div>

            <SocialMediaLinks />
           
        </div>
    </div>
  )
}

export default Container