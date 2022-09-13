import React from 'react'

const SocialMediaLinks = () => {
  return (
    <div className='social-media-container'>
    <p>Follow me : </p>
    <ul>
            <li><img src={require("../assets/github-png.png")} width={20}/><div>GitHub</div></li>
            <li><img src={require("../assets/facebook-png.png")} width={20}/><div>Facebook</div></li>
            <li><img src={require("../assets/twitter-png.png")} width={20}/><div>Twitter</div></li>
            <li><img src={require("../assets/instagram.png")} width={20}/><div>Instagram</div></li>
    </ul>
    </div>
  )
}

export default SocialMediaLinks