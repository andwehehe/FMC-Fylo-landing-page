import Header from "./Layout/Header/Header";
import Body from "./Layout/Body/Body";
import Footer from "./Layout/Footer/Footer";
import mobile_curvy from '/src/assets/icons/bg-curvy-mobile.svg';
import { useState } from "react";
// import desktop_curvy from '/src/assets/icons/bg-curvy-desktop.svg';

function App() {

    const [ isMobile, setIsMobile ] = useState(false);

    return (
        <main className="
            relative flex flex-col items-center w-full h-full 
            bg-n900 z-1 overflow-hidden
        ">
            <Header />
            <Body />
            <Footer />

            {/* Background */}
            <div className="absolute flex items-end left-0 top-0 bg-n850 -z-1 w-full h-107 max-h-107">
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
