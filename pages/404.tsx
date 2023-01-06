import { NextPage } from "next";

interface Props {
  d: number;
}

const NotFound: NextPage<Props> = ({ d = 404 }) => {
  return <div>{d}</div>;
};

export default NotFound;
