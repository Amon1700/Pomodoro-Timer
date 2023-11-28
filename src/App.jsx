import Session from './components/Session'
import Break from './components/Break'
import Timer from './components/Timer'
import Audio from './components/Audio'
function App() {
  return (
    <div className='bg-slate-900 h-screen flex flex-col items-center justify-center sm:text-3xl text-2xl text-white sm:gap-8 gap-6'> 
      <Session/>
      <Timer/>
      <Break/>
      <Audio/>
    </div>
  )
}

export default App
