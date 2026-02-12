import demo_img from '/src/assets/images/illustration-stay-productive.png';
import arrow_icon from '/src/assets/icons/icon-arrow.svg';

function ProductDemo() {

    return(
        <article className='
            flex flex-col items-start gap-4 xs:px-0 py-16 xs:max-w-2xl
            2xs:px-2
            md:max-w-2xl
            lg:max-w-5xl lg:flex-row lg:items-center
            xl:max-w-none xl:gap-12
        '>
            <img 
                src={demo_img} 
                alt="demo" 
                className='my-8 self-center md:w-xl lg:w-lg xl:w-xl'
            />

           <div className='flex flex-col gap-4 xl:max-w-xl'>
                 <h2 className='
                    font-header font-bold text-neutral text-xl w-full
                    md:text-2xl
                    lg:text-4xl
                    xl:text-5xl
                '>
                    Stay productive, wherever you are
                </h2>

                <p className='font-body text-neutral text-sm lg:text-base xl:text-lg'>
                    Never let location be an issue when accessing your files. Fylo has you covered
                    for all of your file storage needs.
                </p>
                <p className='font-body text-neutral text-sm lg:text-base xl:text-lg'>
                    Securely share files and folders with friends, family and colleagues for live
                    collaboration. No email attachments required.
                </p>

                <a 
                    href="https://github.com/andwehehe"
                    className='
                        font-body text-sm text-t200 flex 
                        gap-2 items-center self-start py-2 
                        border-b cursor-pointer lg:text-base
                        hover:text-neutral hover:border-neutral
                    '>
                    See how Fylo works
                    <img src={arrow_icon} alt="arrow"  className='w-5'/>
                </a>
           </div>
        </article>
    );
}

export default ProductDemo