const time = 10;
const share = 0.03;
const timedisp = 100;
const sharenew = 0.01;
const horerate = 15;

export const toNormalString = (result: string) => {
  return new Intl.NumberFormat("ru-RU").format(+result);
};

export const calcNumbSection = (
  transactions: number,
  first: boolean
): string => {
  if (first) {
    return toNormalString(
      (
        ((transactions * ((1 - share) * time + share * timedisp)) / 60) *
        30 *
        horerate
      ).toFixed(0)
    );
  } else {
    return toNormalString(
      (
        ((transactions * ((1 - share) * time + share * timedisp)) / 60) *
          30 *
          horerate -
        ((sharenew * timedisp * transactions) / 60) * 30 * horerate
      ).toFixed(0)
    );
  }
};
