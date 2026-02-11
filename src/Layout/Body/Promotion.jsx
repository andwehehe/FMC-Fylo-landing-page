
function Promotion() {

    return(
        <article className="
            flex flex-col mx-3 px-4 py-8 mt-28 text-center max-w-lg
            rounded-lg drop-shadow-2xl shadow-2xl bg-n850 
            md:p-8 lg:max-w-2xl lg:px-16
        ">
            <h3 className="font-header font-bold text-neutral text-xl lg:text-2xl">
                Get early access today
            </h3>

            <p className="font-body text-neutral text-sm my-4 lg:text-base">
                It only takes a minute to sign up and our free started tier is
                extremely generous. If you have any questions, our support
                team would be happy to help you.
            </p>

            <div className="
                flex flex-col items-center gap-4 mt-4
                lg:flex-row
            ">
                <input 
                    autoComplete="email"
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="email@example.com"
                    className="font-body text-n900 text-xs py-4 px-6 rounded-full w-full bg-neutral"
                />
                <button className="
                    font-header font-bold text-sm text-neutral py-3.5 rounded-full w-full bg-t200
                    lg:w-xs
                ">
                    Get Started For Free
                </button>
            </div>
        </article>
    );
}

export default Promotion