import {Navbar,Hero,Places,About, NewsLetter,Footer} from './components'
function App() {

  return (
    <div>
      <div className='w-11/12 2xl:w-4/5 m-auto'>
        <Navbar/>
        <Hero/>
        <Places/>
      </div>
      
      <About/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default App
