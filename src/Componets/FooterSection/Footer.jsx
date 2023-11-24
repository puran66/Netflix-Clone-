export const Footer = () => {
    return (
        <section className='w-[100%] border-t-[8px] bg-black border-t-[rgb(35,35,35)] sm:py-[100px] py-[50px]'>
            <div className='max-w-[1170px] mx-auto px-[50px]'>
                <div className='flex gap-[10px] mb-[12px]'>
                    <p className='text-[16px] text-white'>Questions? Cal</p><p className='text-[16px] text-white underline'>000-800-919-1694</p>
                </div>
                <div className='grid sm:grid-cols-4 grid-cols-2 text-white text-[16px] mb-[15px] sm:gap-[10px] gap-[20px]'>
                    <div>
                        <ul className='flex flex-col gap-[10px] underline underline-offset-4 '>
                            <li>FAQ</li>
                            <li>Investor Relations</li>
                            <li>Privacy</li>
                            <li>Speed Test</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-[10px] underline underline-offset-4 '>
                            <li>Help Centre</li>
                            <li>Jobs</li>
                            <li>Cookie Preferences</li>
                            <li>Legal Notices</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-[10px] underline underline-offset-4 '>
                            <li>Account</li>
                            <li>Ways to Watch</li>
                            <li>Corporate Information</li>
                            <li>Only on Netflix</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='flex flex-col gap-[10px] underline underline-offset-4 '>
                            <li>Media Centre</li>
                            <li>Terms of Use</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className='mb-[15px]'>
                    <select name="" id="" className='px-[15px] bg-black text-white border-[1px] rounded-[3px] py-[2px]'>
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>
                </div>
                <div>
                    <p className='text-[16px] text-white'>
                        Netflix India
                    </p>
                </div>
            </div>
        </section>
    )
}
