import {colors} from './colors';
import * as scales from './scale';
import * as transitions from './transitions';

const theme = {
  Body: {
    CurrentColor: colors.ink,
  },
  Secondary: {
    CurrentColor: colors.grey,
  },
  LinkPrimary: {
    CurrentColor: colors.blue,
    hover: colors.grey,
  },
  LinkSecondary: {
    CurrentColor: colors.ink,
    hover: colors.greyLight,
  },
  LinkTertiary: {
    CurrentColor: colors.grey,
    hover: colors.grey,
  },
  LinkHybrid: {
    CurrentColor: colors.ink,
    hover: colors.grey,
  },
  BorderLight: {
    CurrentColor: colors.greyLightest,
  },
  ...scales,
  ...transitions,
};

export default theme;
