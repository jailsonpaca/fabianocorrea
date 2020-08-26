import '../styles/globals.css'
import useSWR from 'swr'
import getData from './api/getData';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';

function MyApp({ Component, pageProps }) {

  const { data, error } = useSWR('/api/user', getData);
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
}


export default MyApp
