import React from "react";
import TweetNow from "./TweetNow";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function TransitionsModal(props) {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(blue[700]),
      borderRadius: '2rem',
      //  padding: ".5rem 5rem",
      backgroundColor: blue[700],
      '&:hover': {
        backgroundColor: blue[500],
      },
    },
  }))(Button);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ColorButton id='navButton' type='button' onClick={handleOpen}>
        {props.name}
      </ColorButton>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>

            <TweetNow close={handleClose} />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
