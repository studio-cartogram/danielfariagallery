import { colors } from "./colors";
import * as scales from "./scale";

const theme = {
  Body: {
    color: colors.ink
  },
  LinkPrimary: {
    color: colors.blue,
    hover: colors.grey
  },
  LinkSecondary: {
    color: colors.grey,
    hover: colors.greyLight
  },
  LinkTertiary: {
    color: colors.greyLightest,
    hover: colors.grey
  },
  ...scales
};

export default theme;
