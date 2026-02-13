import quote_icon from '/src/assets/images/bg-quotes.png';
import profile_1 from '/src/assets/images/profile-1.jpg';
import profile_2 from '/src/assets/images/profile-2.jpg';
import profile_3 from '/src/assets/images/profile-3.jpg';

const testimonial_cards = [
    {
        profile_pic: profile_1,
        commenter: "Satish Patel",
        role: "Founder & CEO, Huddle",
        comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    },
    {
        profile_pic: profile_2,
        commenter: "Bruce McKenzie",
        role: "Founder & CEO, Huddle",
        comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    },
    {
        profile_pic: profile_3,
        commenter: "Iva Boyd",
        role: "Founder & CEO, Huddle",
        comment: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
    }
];

function Testimonials() {

    return(
        <section className='
            relative flex flex-wrap items-center justify-center gap-6 p-6 mt-16
            xl:flex-nowrap
        '>
            <img 
                src={quote_icon} 
                alt="quote bg" 
                className='absolute -top-0.5 left-6 w-8 xl:w-12 xl:-z-1 xl:-top-1 xl:left-4'
            />
            {
                testimonial_cards.map(({ profile_pic, commenter, role, comment }) => {

                    return(
                        <article key={commenter} className='
                            flex flex-1 flex-col items-start gap-6 p-6 rounded-md  max-w-lg bg-n800 shadow-2xl 
                            2xs:min-w-2xs md:min-w-md xl:min-w-[22rem] xl:px-8 xl:flex-none xl:w-[5rem]
                        '>

                            <p className='
                                font-body text-neutral text-[0.65rem] leading-relaxed
                                md:text-sm xl:text-sm xl:pt-2
                            '>
                                {comment}
                            </p>

                            <div className='flex justify-end items-center gap-2'>
                                <img src={profile_pic} alt="profile pic" className='w-8 rounded-full xl:w-12' />
                                <span>
                                    <h3 className='
                                        font-header font-bold text-neutral text-xs tracking-widest
                                        md:text-xs xl:text-sm
                                    '>
                                        {commenter}
                                    </h3>

                                    <p className='font-body text-neutral text-[0.65rem] xl:text-xs'>
                                        {role}
                                    </p>
                                </span>
                            </div>

                        </article>
                    );
                })
            }
        </section>
    );
}

export default Testimonials