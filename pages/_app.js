import '../styles/globals.css';
import Head from "next/head";

/*import useSWR from 'swr'
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';

export default function MyApp({ Component, pageProps,data,error }) {

  //const { data, error } = useSWR('/api/user', getData);
  if (error) {
    return <div>
      <Alert severity="error">
        <AlertTitle>Erro</AlertTitle>
    Algo deu errado ao carregar o site - <strong>por favor, tente mais tarde</strong>
      </Alert></div>
  }
  if (!data) {
    return <div className='loaderContainer'>
      <CircularProgress className='loader' thickness={2} size={250} /></div>;
  }
  return <Component {...pageProps} data={data} />
}*/
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <title>Fabiano Correa | Psicanálise | Hipnose | Coach</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}





