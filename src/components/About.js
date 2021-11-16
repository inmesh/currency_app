import React from "react"
import linkedin_icon from '../icons/linkedin_icon.png'
import git_icon from '../icons/git_icon.png'

export default function About() {
    console.log('urn')
    return(
        <div className="about">
            <h5>Contact me and view source code at</h5>
            <a href="https://www.linkedin.com/in/inbal-meshulach/" target="_blank" rel="noreferrer">
                <img alt="" src={linkedin_icon} width="40" height="40" />
            </a>
            <a href="https://github.com/inmesh/currency_app" target="_blank" rel="noreferrer">
                <img alt="" src={git_icon} width="65" height="45" />
            </a>
        </div>
    )
}