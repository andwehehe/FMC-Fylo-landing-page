import logo from '/src/assets/icons/logo.svg';
import location_logo from '/src/assets/icons/icon-location.svg';
import phone_logo from '/src/assets/icons/icon-phone.svg';
import email_logo from '/src/assets/icons/icon-email.svg';

const contacts = [
    {
        icon: location_logo,
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        key: "location",
        span: "2"
    },
    {
        icon: phone_logo,
        info: "+1-543-123-4567",
        key: "phone",
        span: "1"
    },
    {
        icon: email_logo,
        info: "example@fylo.com",
        key: "email",
        span: "1"
    }
];

function Footer() {

    return(
        <footer className='flex justify-center px-8 p-8 bg-n950 w-full'>
            <div className='
                max-w-lg w-full md:max-w-6xl lg:max-w-none
                lg:flex items-start justify-center xl:justify-between xl:max-w-6xl
            '>
                <article>
                    <img src={logo} alt="logo" className='py-8'/>
                    <div className='grid md:grid-cols-[55%_40%] grid-row-2 gap-4 gap-x-12 xl:gap-x-20 xl:gap-y-4'>
                        {
                            contacts.map(({ icon, info, key, span }) => {
                                const rowSpanClass = span === "2" ? "md:row-span-2" : "md:row-span-1";
                                
                                return(
                                    <div key={key} className={`flex items-start gap-4 max-w-sm ${rowSpanClass}`}>
                                        <img src={icon} alt={key} className='py-1.5'/>
                                        <p className='font-body text-neutral self-center h-full'>
                                            {info}
                                        </p>
                                    </div>
                                );
                            })
                        }
                    </div>
                </article>

                <article className='my-16 md:flex md:gap-32 items-start lg:gap-8 lg:mt-28 xl:gap-20'>
                    <nav className='
                        flex flex-col gap-8
                        md:flex-row md:gap-24
                        lg:gap-6 xl:gap-20
                    '>
                        <ul className='flex flex-col gap-2 font-body text-neutral'>
                            <li>About Us</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>

                        <ul className='flex flex-col gap-2 font-body text-neutral'>
                            <li>Contact Us</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                        </ul>
                    </nav>

                    <nav className='flex justify-center gap-4 lg:flex-col 2xs:my-12 md:my-0 xl:flex-row'>
                        {/* facebook logo */}
                        <div className='border-1 border-neutral rounded-full p-2 group hover:border-c500'>
                            <svg 
                                className='w-6 cursor-pointer fill-white group-hover:fill-c500'
                                fill="#ffffff" 
                                viewBox="0 0 32 32" 
                                id="Camada_1" 
                                version="1.1" 
                                xmlSpace="preserve" 
                                xmlns="http://www.w3.org/2000/svg" 
                                xmlnsXlink="http://www.w3.org/1999/xlink" 
                                stroke="#ffffff"
                                >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <style type="text/css">
                                    {`.st0{fill-rule:evenodd;clip-rule:evenodd;}`}
                                    </style>
                                    <path 
                                    className="st0" 
                                    d="M12.6,16.1v11.6c0,0.2,0.1,0.3,0.3,0.3h4.6c0.2,0,0.3-0.1,0.3-0.3V15.9h3.4c0.2,0,0.3-0.1,0.3-0.3l0.3-3.6 c0-0.2-0.1-0.3-0.3-0.3h-3.7V9.2c0-0.6,0.5-1.1,1.2-1.1h2.6C21.9,8.1,22,8,22,7.8V4.3C22,4.1,21.9,4,21.7,4h-4.4 c-2.6,0-4.7,1.9-4.7,4.3v3.4h-2.3c-0.2,0-0.3,0.1-0.3,0.3v3.6c0,0.2,0.1,0.3,0.3,0.3h2.3V16.1z"
                                    />
                                </g>
                            </svg>
                        </div>

                        {/* twitter logo */}
                        <div className='border-1 border-neutral rounded-full p-2 group hover:border-c500'>
                            <svg 
                                className='w-6 group-hover:fill-c500'
                                fill="#ffffff" 
                                viewBox="0 0 256 256" 
                                id="Flat" 
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M245.65723,77.65674l-30.16407,30.16455C209.4707,177.70215,150.53809,232,80,232c-14.52441,0-26.49414-2.30273-35.57764-6.84473-7.33056-3.665-10.33349-7.59912-11.07861-8.71777a8,8,0,0,1,3.84717-11.92822c.25732-.09717,23.84814-9.15772,39.09521-26.40869a109.574,109.574,0,0,1-24.72656-24.355c-13.708-18.60352-28.206-50.91114-19.43066-99.17676a8.00023,8.00023,0,0,1,13.52832-4.22559c.35254.35156,33.64209,33.1709,74.3374,43.772L120,87.99609a48.31863,48.31863,0,0,1,48.6084-47.99267,48.11329,48.11329,0,0,1,40.96875,23.99609L240,64a8.0001,8.0001,0,0,1,5.65723,13.65674Z"></path>
                                </g>
                            </svg>
                        </div>

                        {/* IG logo */}
                        <div className='border-1 border-neutral rounded-full p-2 group hover:border-c500'>
                            <svg 
                                className='w-6 group-hover:fill-c500'
                                fill="#ffffff" 
                                viewBox="0 0 32 32" 
                                id="Camada_1" 
                                version="1.1" 
                                xmlSpace="preserve" 
                                xmlns="http://www.w3.org/2000/svg" 
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                    <path d="M22.3,8.4c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4C23.7,9,23.1,8.4,22.3,8.4z"></path>
                                    <path d="M16,10.2c-3.3,0-5.9,2.7-5.9,5.9s2.7,5.9,5.9,5.9s5.9-2.7,5.9-5.9S19.3,10.2,16,10.2z M16,19.9c-2.1,0-3.8-1.7-3.8-3.8 c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C19.8,18.2,18.1,19.9,16,19.9z"></path>
                                    <path d="M20.8,4h-9.5C7.2,4,4,7.2,4,11.2v9.5c0,4,3.2,7.2,7.2,7.2h9.5c4,0,7.2-3.2,7.2-7.2v-9.5C28,7.2,24.8,4,20.8,4z M25.7,20.8 c0,2.7-2.2,5-5,5h-9.5c-2.7,0-5-2.2-5-5v-9.5c0-2.7,2.2-5,5-5h9.5c2.7,0,5,2.2,5,5V20.8z"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </nav>
                </article>
            </div>
        </footer>
    );
}

export default Footer