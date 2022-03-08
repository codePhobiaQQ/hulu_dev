interface ITopLine {
  classing?: string;
}

const TopLine = ({ classing }: ITopLine) => {
  return (
    <svg
      width="71"
      className={classing}
      height="219"
      viewBox="0 0 71 219"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.49319e-05 218.5C70.5 218.5 2.65735e-05 1.00005 70.5 1.00007"
        stroke="#E6E6E6"
      />
    </svg>
  );
};

export default TopLine;
