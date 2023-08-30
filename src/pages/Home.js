import React from "react";

function Home(){
    return (
    <div className="content-list">
            <article className="la_content">
                <a 
                    href= '/hidden'
                    target="_blank"
                    rel="noreferrer">
                    <figure>
                        <img
                            src = 'https://i.redd.it/jzugmg96wyg81.gif'
                            alt = "Hidden"/>
                    </figure>
                    <h3>Hidden</h3>
                </a>
            </article>

            <article className="la_content">
                <a 
                    href= '/hell'
                    target="_blank"
                    rel="noreferrer">
                    <figure>
                        <img
                            src = 'https://www.utplay.com/upload/20220923/6379952905038173166385851.png'
                            alt = "Clown"/>
                    </figure>
                    <h3>Hell Enjoyer</h3>
                </a>
            </article>

            <article className="la_content">
                <a 
                    href= '/fppl'
                    target="_blank"
                    rel="noreferrer">
                    <figure>
                        <img
                            src = 'https://media.discordapp.net/attachments/1112866145196851241/1112866145406554152/resized-afroghost.png'
                            alt = "fakeppl"/>
                    </figure>
                    <h3>Fake People Ark</h3>
                </a>
            </article>

            <article className="la_content">
                <a 
                    href= '/pug'
                    target="_blank"
                    rel="noreferrer">
                    <figure>
                        <img
                            src = 'https://media.discordapp.net/attachments/1110669710003019866/1110669710145617990/jailed.png?width=636&height=636'
                            alt = "pug"/>
                    </figure>
                    <h3>Pug Life</h3>
                </a>
            </article>
    </div>
    )
}

export default Home;