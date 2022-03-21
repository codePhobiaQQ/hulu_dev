interface IPlainLine {
  classing: string;
}

const PlainLine = ({ classing }: IPlainLine) => {
  return (
    <svg
      width="100"
      height="1"
      className={classing}
      viewBox="0 0 100 1"
      fill="#C4C4C4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="1" fill="#C4C4C4" />
    </svg>
  );
};

export default PlainLine;
