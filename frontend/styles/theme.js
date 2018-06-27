import {colors} from './colors';
import * as scales from './scale';
import * as transitions from './transitions';

const theme = {
  Body: {
    CurrentColor: colors.ink,
  },
  LinkPrimary: {
    CurrentColor: colors.blue,
    hover: colors.grey,
  },
  LinkSecondary: {
    CurrentColor: colors.grey,
    hover: colors.greyLight,
  },
  LinkTertiary: {
    CurrentColor: colors.greyLightest,
    hover: colors.grey,
  },
  ...scales,
  ...transitions,
};

export default theme;
