const scaleUnit = 8;
const baseEmUnit = 16;

const scale = [
  scaleUnit / 2,
  scaleUnit,
  scaleUnit * 2,
  scaleUnit * 3,
  scaleUnit * 4,
  scaleUnit * 5,
  scaleUnit * 6,
  scaleUnit * 7,
  scaleUnit * 8,
  scaleUnit * 9,
  scaleUnit * 10,
  scaleUnit * 11,
  scaleUnit * 12,
  scaleUnit * 13,
  scaleUnit * 14,
  scaleUnit * 15,
  scaleUnit * 16,
  scaleUnit * 20,
  scaleUnit * 2 + 2,
];

const pxScale = scale.map((value) => `${value}px`);
const emScale = scale.map((value) => `${value / baseEmUnit}em`);
const remScale = scale.map((value) => `${value / baseEmUnit}rem`);

export {scale, pxScale, emScale, remScale};
