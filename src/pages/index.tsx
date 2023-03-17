// import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';

// import { Main } from '@/templates/Main';
import Header from './Header';

const Index = () => {
  // const router = useRouter();

  return (
    <>
      <Meta title="Joshua Tree Academy" description="Description yahan" />
      <Header />
    </>
  );
};

export default Index;
