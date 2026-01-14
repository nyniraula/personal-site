import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';

const Identity = lazy(() => import('./components/sections/Identity'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Footer = lazy(() => import('./components/sections/Footer'));

function App() {
  return (
    <Layout>
      <Hero />
      <Suspense fallback={null}>
        <Identity />
      </Suspense>
      <Suspense fallback={null}>
        <Skills />
      </Suspense>
      <Suspense fallback={null}>
        <Projects />
      </Suspense>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </Layout>
  );
}

export default App;
