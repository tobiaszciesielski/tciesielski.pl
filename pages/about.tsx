import type { NextPage } from 'next';
import Image from 'next/image';

import { Header } from '../components/Header';


const About: NextPage = () => {
  return (
    <>
      <Header title="Poznajmy się bliżej" />
      <div>
        <Image
          width={400}
          height={500}
          objectFit="contain"
          src="/images/me.jpeg"
          alt="Tobiasz Ciesielski"
        />
      </div>
    </>
  );
};

export default About;
