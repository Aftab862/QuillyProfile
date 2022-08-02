import React from 'react'
const Sociallinks = ({ link }) => {
    return (
        <div>
            <div>

                {
                    link.name === "Twitter" ? (
                        <a href={link.value}>
                            <img src="twitter.png" alt="" />
                            <p>twitter</p>
                        </a>
                    ) : null
                }
            </div>
            <div>
                {
                    link.name === "Tiktok" ? (
                        <a href={link.value}>
                            <img src="tiktok.png" alt="" />
                            <p>tiktok</p>
                        </a>
                    ) : null
                }

            </div>
            <div>           {
                link.name === "Whatsapp" ? (
                    <a href={link.value}>
                        <img src="Whatsapp.png" alt="" />
                        <p>whatsapp</p>
                    </a>
                ) : null
            }
            </div>
            <div>       {
                link.name === "Telegram" ? (
                    <a href={link.value}>
                        <img src="telegram.png" alt="" />
                        <p>telegram</p>
                    </a>
                ) : null
            }
            </div>
            <div>

                {
                    link.name === "Facebook" ? (
                        <a href={link.value}>
                            <img src="facebook.png" alt="" />
                            <p>facebook</p>
                        </a>
                    ) : null
                }
            </div>
            <div>            {
                link.name === "Maps" ? (
                    <a href={link.value}>
                        <img src="maps.png" alt="" />
                        <p>maps</p>
                    </a>
                ) : null
            }
            </div>
            <div>
                {
                    link.name === "Instagram" ? (
                        <a href={link.value}>
                            <img src="instagram.png" alt="" />
                            <p>insta</p>
                        </a>
                    ) : null
                }
            </div>
            <div>       {
                link.name === "Phone" ? (
                    <a href={link.value}>
                        <img src="phone.png" alt="" />
                        <p>phone</p>
                    </a>
                ) : null
            }
            </div>
            <div>
                {
                    link.name === "Messenger" ? (
                        <a href={link.value}>
                            <img src="messenger.png" alt="" />
                            <p>Instagram</p>
                        </a>
                    ) : null
                }
            </div>
        </div >
    )
}

export default Sociallinks



















