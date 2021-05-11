import NProgress from 'nprogress';
import Page from '../components/Page';
import router, { Router } from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.start());
Router.events.on('routeChangeError', () => NProgress.start());

// TODO: Swap with our own
import 'nprogress/nprogress.css'
import '../components/styles/nprogress.css'

export default function MyApp({ Component, pageProps }) {
  return  <Page>
    <Component {...pageProps}/>
  </Page>
}