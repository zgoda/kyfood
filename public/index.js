if (process.env.NODE_ENV === 'development') {
  require('preact/debug');
}

import {
  LocationProvider,
  Router,
  Route,
  lazy,
  ErrorBoundary,
  hydrate,
  prerender as ssr,
} from 'preact-iso';
import NotFound from './pages/_404';
import { Header } from './components/header';

import '@csstools/normalize.css/normalize.css';
import './style.scss';

const Home = lazy(() => import('./pages/home.js'));
const About = lazy(() => import('./pages/about.js'));

export function App() {
  return (
    <LocationProvider>
      <main class="main">
        <Header />
        <article class="container">
          <ErrorBoundary>
            <Router>
              <Route path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route default component={NotFound} />
            </Router>
          </ErrorBoundary>
        </article>
      </main>
    </LocationProvider>
  );
}

hydrate(<App />);

/**
 * @param {import("preact").JSX.IntrinsicAttributes} data
 */
export async function prerender(data) {
  return await ssr(<App {...data} />);
}
