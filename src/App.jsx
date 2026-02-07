import Header from "./Layout/Header/Header";
import Body from "./Layout/Body/Body";
import mobile_curvy from '/src/assets/icons/bg-curvy-mobile.svg';

function App() {

  return (
   <main className="relative flex flex-col px-4 py-6  w-full h-full bg-n900 z-1">
      <Header />
      <Body />

      {/* Background */}
      <div className="absolute flex items-end left-0 top-0 bg-n850 -z-1 w-full h-107">
          <img 
              src={mobile_curvy} 
              alt="background" 
              className='w-full bg-n850'
          />
      </div>
   </main>
  )
}

export default App
