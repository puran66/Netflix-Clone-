import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export const Banner = () => {
    return (
        <section className='w-[100%] h-[100vh] bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/a09bb938-2d90-42ae-986e-5a3e4abf9e77/8eb1e781-3494-4aa4-9405-268ca6473e4c/IN-en-20231113-popsignuptwoweeks-perspective_alpha_website_large.jpg")] bg-center bg-cover'>
            <div className='w-[100%] h-[100vh] bg-[rgba(0,0,0,0.50)]'>
                <nav className='max-w-[1170px] mx-auto '>
                    <div className='grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] items-center'>
                        <figure>
                            <img src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" className='w-[148px]' alt="" />
                        </figure>
                        <div className='flex  gap-[20px] justify-end'>
                            <div>
                                <select name="" id="" className='px-[15px] bg-black text-white border-[1px] rounded-[3px] py-[2px]'>
                                    <FontAwesomeIcon icon={faGlobe} />
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                </select>
                            </div>
                            <button className='text-white bg-red-600 px-[10px] rounded-[3px]'>
                                Sign In
                            </button>
                        </div>
                    </div>
                </nav>

                <div>
                    <div className='max-w-[1170px] mx-auto text-center text-white mt-[130px]' >
                        <h1 className='text-[48px] font-bold py-[15px] px-4'>
                            The biggest Indian hits. The best Indian stories. All streaming here.
                        </h1>
                        <p className='text-[24px] py-[15px]'>
                            Watch anywhere. Cancel anytime.
                        </p>
                        <p className='text-[20px] py-[15px]'>
                            Ready to watch? Enter your email to create or restart your membership.
                        </p>
                        <div className='max-w-[700px] sm:px-[10px] px-[50px] mx-auto'>
                            <div className='grid sm:grid-cols-[70%_auto] grid-cols-1 mx-auto px-[30px] gap-[10px]'>
                                <input type='email' className='h-[50px] pl-[20px] bg-[#161616] border-[1px] border-[#808080] rounded-[3px]' placeholder="Email Address" />
                                <button className='bg-[red] rounded-[3px] text-[25px] font-bold'>Get Started </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



