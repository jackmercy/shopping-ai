import CanvasModel from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import { Suspense } from 'react';

function App() {
  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Suspense fallback={null}>
        <CanvasModel />
      </Suspense>
      <Customizer />
    </main>
  )
}

export default App
