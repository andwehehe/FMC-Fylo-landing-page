import intro_img from '/src/assets/images/illustration-intro.png';

function Introduction() {
    
    return(
        <article className='
            flex flex-col items-center px-4 max-w-lg
            md:max-w-none
        '>
            <img 
                src={intro_img} 
                alt="intro image" 
                className='my-12 md:w-xl xl:w-190'
            />
                          
            <h1 className='
                font-header font-bold text-neutral text-2xl text-center leading-normal
                md:text-3xl md:max-w-lg
                xl:text-5xl xl:max-w-4xl
            '>
                All your files in one secure location, accessible
                anywhere.
            </h1>

            <p className='
                font-body text-neutral text-sm text-center px-2 my-4
                md:text-base md:max-w-lg
                xl:text-2xl xl:max-w-3xl
            '>
                Fylo stores all your most important files in
                one secure location. Access them wherever
                you need, share and collaborate with friends
                family, and co-workers.
            </p>

            <button className='
                font-body font-bold text-neutral text-sm py-3 px-20 
                my-2 rounded-4xl bg-t200 cursor-pointer hover:bg-t100
                md:text-base
                xl:py-5 xl:px-28 xl:my-4 
            '>
                Get Started
            </button>
        </article>
    )
}

export default Introduction