import intro_img from '/src/assets/images/illustration-intro.png';

function Introduction() {
    
    return(
        <article className='flex flex-col items-center px-4'>
            <img 
                src={intro_img} 
                alt="intro image" 
                className='my-12'
            />
            
            <h1 className='font-header font-bold text-neutral text-2xl text-center'>
                All your files in one secure location, accessible
                anywhere.
            </h1>

            <p className='font-body text-neutral text-sm text-center px-2 my-4'>
                Fylo stores all your most important files in
                one secure location. Access them wherever
                you need, share and collaborate with friends
                family, and co-workers.
            </p>

            <button className='font-body text-neutral text-sm py-3 px-20 my-2 rounded-4xl bg-t200 cursor-pointer'>
                Get Started
            </button>
        </article>
    )
}

export default Introduction