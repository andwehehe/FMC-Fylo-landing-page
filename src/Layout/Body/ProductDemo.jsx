import demo_img from '/src/assets/images/illustration-stay-productive.png';
import arrow_icon from '/src/assets/icons/icon-arrow.svg';

function ProductDemo() {

    return(
        <article className='flex flex-col items-center gap-4 px-2 py-16'>
            <img 
                src={demo_img} 
                alt="demo" 
                className='my-8'
            />

            <h2 className='font-header font-bold text-neutral text-xl w-full'>
                Stay productive, wherever you are
            </h2>

            <p className='font-body text-neutral text-sm'>
                Never let location be an issue when accessing your files. Fylo has you covered
                for all of your file storage needs.
            </p>
            <p className='font-body text-neutral text-sm'>
                Securely share files and folders with friends, family and colleagues for live
                collaboration. No email attachments required.
            </p>

            <a 
                href="https://github.com/andwehehe"
                className='font-body text-sm text-t200 flex gap-2 items-center self-start py-2 border-b cursor-pointer'
            >
                See how Fylo works
                <img src={arrow_icon} alt="arrow"  className='w-5'/>
            </a>
        </article>
    );
}

export default ProductDemo