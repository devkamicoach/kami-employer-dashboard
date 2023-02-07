import * as React from 'react';
import { Button, Modal } from '@mui/material';
import { FunctionComponent } from 'react';
import AnnouncementModal from 'components/PageComponents/Dashboard/AnnouncementModal';
import CheckInModal from 'components/PageComponents/Dashboard/CheckInModal';
type ModalTypes = {
  button: string;
};

const announcement = {
  button: 'Send an announcement',
  title: 'Send a public announcement',
  subtitle: 'This message will be sent to all 423 users onboarded on Kinhub from your organisation.',
  input1: '👋🏽 Input a title here like: Happy Hump Day!',
  input2: 'Write a brief message here.',
};

const checkin = {
  button: 'Send a private check-in',
  title: 'Send a private check-in',
  subtitle: 'This message will be sent to all 423 users onboarded on Kinhub from your organisation.',
  input1: '👋🏽 Input a title here like: How are you doing?',
  input2: 'Write a brief message here.',
  input3: 'Separate recipient names in commas',
};

const BasicModal: FunctionComponent<ModalTypes> = ({ button }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // bandaid solution for modals due to time constraint. sorry
  const modal = button.includes('announcement') ? (
    <AnnouncementModal
      title={announcement.title}
      subtitle={announcement.subtitle}
      input1={announcement.input1}
      input2={announcement.input2}
    />
  ) : (
    <CheckInModal
      title={checkin.title}
      subtitle={checkin.subtitle}
      input1={checkin.input1}
      input2={checkin.input2}
      input3={checkin.input3}
    />
  );

  return (
    <>
      <Button onClick={handleOpen} variant="contained" className="normal-case bg-kami-gray w-full hover:bg-gray-500">
        {button}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {modal}
      </Modal>
    </>
  );
};

export default BasicModal;
