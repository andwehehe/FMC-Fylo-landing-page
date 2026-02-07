import logo from '/src/assets/icons/logo.svg';

function Header() {

    return(
        <header className='flex justify-between items-center'>
            <img 
                src={logo} 
                alt="logo"
                className='h-6' 
            />
            <nav>
                <ul className='flex gap-5 text-neutral font-header text-sm'>
                    <li>Features</li>
                    <li>Team</li>
                    <li>Sign In</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header