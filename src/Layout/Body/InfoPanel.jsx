import info_img1 from '/src/assets/icons/icon-access-anywhere.svg';
import info_img2 from '/src/assets/icons/icon-security.svg';
import info_img3 from '/src/assets/icons/icon-collaboration.svg';
import info_img4 from '/src/assets/icons/icon-any-file.svg';

const info_list = [
    {
        img: info_img1,
        header: "Access you files, anywhere",
        description: "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
        key: "accessible"
    },
    {
        img: info_img2,
        header: "Security you can trust",
        description: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
        key: "secured"
    },
    {
        img: info_img3,
        header: "Real-time collaboration",
        description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
        key: "collaborate"
    },
    {
        img: info_img4,
        header: "Store any type of file",
        description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
        key: "any type"
    }
];

function InfoPanel() {

    return(
        <section className='flex flex-col justify-center items-center gap-8 text-center px-3 my-16'>
            {
                info_list.map(({ img, header, description, key }) => {
                    
                    return(
                        <article key={key} className='flex flex-col items-center'>
                            <img src={img} alt={key} className='my-8' />
                            <h2 className='font-header font-bold text-xl text-neutral mb-2'>{header}</h2>
                            <p className='font-body text-sm text-neutral'>{description}</p>
                        </article>
                    );
                })
            }
        </section>
    );
}

export default InfoPanel