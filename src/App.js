import './App.css';
import Card from './Components/Card';
import { get, query, getDatabase, equalTo, orderByChild, ref } from "firebase/database";
import { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { initializeApp } from "firebase/app";
function App() {
  const [Odata, setOdata] = useState([]);
  const firebaseConfig = {
    apiKey: "AIzaSyAzELDGzoWlYzW4aDBZhKBqYNgOKt65kUI",
    authDomain: "profile-picture-a66b6.firebaseapp.com",
    databaseURL: "https://profile-picture-a66b6-default-rtdb.firebaseio.com",
    projectId: "profile-picture-a66b6",
    storageBucket: "profile-picture-a66b6.appspot.com",
    messagingSenderId: "429269887734",
    appId: "1:429269887734:web:a66e7a3f53e2611b81dad7",
    measurementId: "G-JSV57RHCGL"
  };
  initializeApp(firebaseConfig);
  useEffect(() => {
    const fetchdata = async () => {

      const db = getDatabase();
      const que = query(ref(db, "Users"), orderByChild("id"), equalTo("-MwbkfgMp5Oevfn_Lx3p"));
      await get(que)
        .then((snapshot) => {
          var data = []
          snapshot.forEach(childsnapshot => {
            data.push(childsnapshot.val())
          });
          setOdata(data)
        })
    }
    fetchdata()
  }, [setOdata])

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Card Odata={Odata} />
        </header>
        <div className='slider'>
          <button className='btn' onClick={handleClickOpen}>
            Connect
          </button >
          <div className='dialog'>
          <Dialog className="css-uhb5lp"         
               open={open} onClose={handleClose} style={{ borderRadius: "25px" }}>
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
          <span className='powederedby'>Powered by

            <b>
              <i>
                Quilly
              </i>
            </b>
          </span>
        </div>
      </div>
    </div>

  );
}
export default App;























