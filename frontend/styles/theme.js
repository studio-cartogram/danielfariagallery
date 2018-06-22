import { css } from "styled-components";

const colors = {
  blue: "#003468",
  grey: "#616262",
  ink: "#1F2123",
  white: "#FFFFFF"
};

const theme = {
  Body: {
    color: colors.ink
  },
  LinkPrimary: {
    color: colors.blue,
    hover: colors.grey
  }
};

export default theme;
