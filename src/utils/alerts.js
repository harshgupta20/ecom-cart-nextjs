import { toast } from "sonner";

function successAlert(message) {
  if (message) {
    toast(message, {
      style: {
        background: '#6ab844',
        color: "white"
      },
      className: 'class',
    });
  }
}

function errorAlert(message) {
  if(message){
    toast(message, {
      style: {
        background: '#cf4444',
        color: "white"
      },
      className: 'class',
    });
  }
}

export { successAlert, errorAlert };
