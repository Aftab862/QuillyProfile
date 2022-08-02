import React, { useEffect, useState } from 'react';
import './style.css';
import { FaBirthdayCake } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go'
import { TbAddressBook, } from 'react-icons/tb'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { storage } from '../firebase/DataBase';
import { Avatar, Skeleton, Typography } from '@mui/material';
import Sociallinks from './Sociallinks';
import { ref, getDownloadURL } from 'firebase/storage'

const Card = ({ Odata }) => {

    const [fd, setfd] = useState();
    const [loading, setloading] = useState(true);
    const [link, setlink] = useState([]);
    const [imgurl, setimgurl] = useState("")
    const [coverurl, setcoverurl] = useState("")
    const [open, setOpen] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 0);
        const utilize = async () => {
            await Odata.forEach(element => {
                setfd(element)
            });
        }
        utilize();
        if (fd) {
            setlink(fd.links)
        }
    }, [Odata, fd])

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const getimg = async () => {
        if (fd && storage) {

            await getDownloadURL(ref(storage, fd.profileUrl)).then((x) => {
                setimgurl(x)
            })

            await getDownloadURL(ref(storage, fd.coverUrl)).then((x) => {
                setcoverurl(x)
            })
        }
    }

    useEffect(() => {
        getimg();

    }, [fd])

    return (
        <div className='card'>
            <div>
                <img className='backimg' src={coverurl} alt="" />
            </div>
            <div className='container'>

                <Typography variant='p'>

                    {loading ? (
                        // <Skeleton centered
                        //     sx={{ bgcolor: 'grey' }}
                        //     variant='text'
                        //     animation='wave'
                        //     marginTop={400}
                        //     style={{ display:"hidden", position: "relative", top: "11%", left: "9%", marginTop: "25px" }}
                        //     width={290} height={25} />
                        null
                    ) :

                        (

                            <h3 >
                                {fd && fd.name}
                            </h3>
                        )
                    }

                </Typography>


                {loading ? (
                    <Skeleton
                        animation='wave'
                        sx={{ bgcolor: 'grey' }}
                        variant='text'
                        marginTop={200}
                        style={{ position: "relative", top: "12%", left: "20%" }}
                        width={220} height={18} />
                ) :
                    (
                        <h6>
                            {fd && fd.job}- Film Studio <TbAddressBook />
                        </h6>
                    )
                }
                {loading ? (
                    <Skeleton
                        animation='wave'
                        sx={{ bgcolor: 'grey' }}
                        variant='text'
                        style={{ position: "relative", top: "13%", left: "20%" }}
                        width={220} height={18} />
                ) :
                    (
                        <h6>
                            <GoLocation />  {fd && fd.city} | {fd && fd.dob}  <FaBirthdayCake />
                        </h6>

                    )
                }
                {loading ? (
                    <Skeleton
                        animation='wave'
                        sx={{ bgcolor: 'grey' }}
                        variant='text'

                        style={{ position: "relative", top: "14%", left: "20%", marginBottom: "230px" }}
                        width={220} height={18} />
                ) :

                    (
                        <>
                            <h6>
                                {fd && fd.bio}
                            </h6>
                        </>
                    )
                }

                <div className='social'>
                    {loading ?
                       null :
                       (
                            
                        link.map(element => {
                            // console.log(element.value)
                            return <Sociallinks key={link.value} link={element} />
                        })
                        
                        )
                    }

                </div>

            </div>
            <div className='dialog'>
                {
                    loading ? (
                        <Skeleton
                            sx={{ bgcolor: 'grey.200' }}
                            variant='circular' animation="wave" width={130} height={130}
                            style={{ position: "absolute", top: "-35px" }}
                        >
                            <Avatar />
                        </Skeleton>
                    ) : (<img className='image ' src={imgurl} alt="" />)
                }
            </div>




            <div>

                {
                    loading ? (
                        <Skeleton width={50} height={50} variant="circular"
                            style={{ position: "absolute", top: "5%", left: "60%" }}

                        />


                    ) : (<img className='side-image' src="logo.png" alt="" />)
                }


            </div>
            <div onClick={handleClickOpen} > <img className='msgpic' src="msg.png" alt="" /> </div>
            <div className='dialog' >
                {/*   css-ekeie0 css-hz1bth-MuiDialog-container MuiDialogTitle-root css-ypiqx9-MuiDialogContent-root .css-m9glnp-MuiPaper-root-MuiDialog-paper"                  */}
                <Dialog className="css-uhb5lp" open={open} onClose={handleClose} style={{ borderRadius: "25px" }}>
                    <DialogTitle style={{ fontFamily: "system-ui", marginTop: "25px", fontSize: "24px", fontWeight: "bold", display: "flex", justifyContent: "center" }}>Contact Karina now</DialogTitle>
                    <DialogContent>

                        <img src="close.png" onClick={handleClose} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "20px", height: "20px", position: "absolute", right: "28px", top: "23px", fontFamily: "system-ui", color: "black", cursor: "pointer" }} alt="" />
                        <TextField
                            autoFocus
                            style={{ fontFamily: "Baloo-Bhaijaan-2", fontSize: "2px" }}
                            fontFamily="Baloo-Bhaijaan-2"

                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            fullWidth

                            variant="standard"
                        />
                        <TextField
                            style={{ fontFamily: "Baloo-Bhaijaan-2", fontSize: "2px" }}
                            fontFamily="Baloo-Bhaijaan-2"

                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                        <TextField

                            style={{ fontFamily: "Baloo-Bhaijaan-2", fontSize: "2px" }}
                            fontFamily="Baloo-Bhaijaan-2"
                            margin="dense"
                            id="name"
                            label="Phone"
                            type="number"
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            style={{ fontFamily: "Baloo-Bhaijaan-2", fontSize: "2px" }}
                            fontFamily="Baloo-Bhaijaan-2"

                            margin="dense"
                            id="name"
                            label="Job-Title"
                            type="number"
                            fullWidth
                            variant="standard"
                        />

                        <TextField
                            style={{ fontFamily: "Baloo-Bhaijaan-2", marginTop: "40px", fontSize: "12px" }}
                            fontFamily="Baloo-Bhaijaan-2"
                            fullWidth

                            label="Message"
                            multiline
                            rows={3}
                        // defaultValue="Default Value"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ fontWeight: "bold", borderRadius: "200px", margin: "0px 30px 20px 30px ", color: "black", fontFamily: "system-ui", backgroundImage: " linear-gradient(90deg, rgba(3, 255, 202, 1) 0%, rgba(142, 255, 163, 1) 100%)" }} fullWidth onClick={handleClose}>Submit</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div >

    )



}
export default Card;




