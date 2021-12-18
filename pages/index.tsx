import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Image src={'/tc-logo.svg'} width={50} height={50} />
    </div>
  );
};

export default Home;
