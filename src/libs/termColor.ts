import { GuestType } from "@afes-website/docs";
import {
  blue,
  red,
  yellow,
  green,
  purple,
  orange,
  grey,
} from "@material-ui/core/colors";

const i = 700;

const termColor = (prefix: GuestType | undefined): string => {
  switch (prefix) {
    case "GuestBlue":
    case "TestBlue":
      return blue[i];
    case "GuestRed":
    case "TestRed":
      return red[i];
    case "GuestYellow":
    case "TestYellow":
      return yellow[i];
    case "GuestGreen":
      return green[i];
    case "GuestPurple":
      return purple[i];
    case "GuestOrange":
      return orange[i];
    case "GuestWhite":
      return grey[i];
    case "StudentGray":
      return grey[i];
    default:
      return "#fff";
  }
};

export default termColor;
