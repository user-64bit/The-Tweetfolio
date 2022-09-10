import { Button } from "@material-ui/core";
import './Popups.css'
import 'reactjs-popup/dist/index.css';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const Popups = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <Button onClick={() => setOpen(o => !o)} variant="outlined" className="sidebar__tweet button" fullWidth>
        Tweet
      </Button>
      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
          Awwwww.... You wanna Play with this button 🤣....
          I'm Still working on this, So Stay Tuned
        </div>
      </Popup>
    </div>
  );
};
export default Popups