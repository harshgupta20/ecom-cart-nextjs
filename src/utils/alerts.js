import { toast } from "sonner";

function successAlert(message) {
  if (message) {
    toast(message, {
      style: {
        background: 'green',
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
        background: 'red',
        color: "white"
      },
      className: 'class',
    });
  }
}

export { successAlert, errorAlert };
