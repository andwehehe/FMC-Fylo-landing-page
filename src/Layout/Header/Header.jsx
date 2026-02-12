import logo from '/src/assets/icons/logo.svg';

function Header() {

    return(
        <header className='
            flex justify-between items-center px-4 pt-6 w-full max-w-2xl
            md:px-8 md:pt-8 md:max-w-none
            lg:pt-12 lg:px-16
            xl:pt-16 xl:px-18
            xl:max-w-[1440px]
        '>
            <img 
                src={logo} 
                alt="logo"
                className='h-6 md:h-8 lg:h-10 xl:h-12' 
            />
            <nav>
                <ul className='flex gap-5 text-neutral font-header text-sm lg:gap-12'>
                    <li className='xl:text-base xl:mt-2 hover:cursor-pointer hover:border-b'>Features</li>
                    <li className='xl:text-base xl:mt-2 hover:cursor-pointer hover:border-b'>Team</li>
                    <li className='xl:text-base xl:mt-2 hover:cursor-pointer hover:border-b'>Sign In</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header