import type { AppProps } from 'next/app';

import Container from 'src/component/Container';
import Footer from 'src/pages/Footer';
import Header from 'src/pages/Header';

import 'src/styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />

    <Container>
      <Component {...pageProps} />
    </Container>

    <Footer />
  </>
);

export default MyApp;
