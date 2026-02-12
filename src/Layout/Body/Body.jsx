import Introduction from "./Introduction";
import InfoPanel from "./InfoPanel";
import ProductDemo from "./ProductDemo";
import Testimonials from "./Testimonials";
import Promotion from "./Promotion";

function Body() {
    
    return(
        <section className="
            relative px-4 before:content-[''] 
            before:absolute before:bg-n950 
            before:w-full before:h-1/21 
            before:left-0  before:bottom-0 
            before:-z-1 w-full

            flex flex-col items-center
            md:px-6
            2xs:max-w-xs xs:max-w-none
        ">
            <Introduction />
            <InfoPanel />
            <ProductDemo />
            <Testimonials />
            <Promotion />
        </section>
    )
}

export default Body