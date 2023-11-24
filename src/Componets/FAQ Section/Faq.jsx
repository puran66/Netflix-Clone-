import { useState } from "react"
import { Data } from "./FaqData";

export const FAQ = () => {
    const [index, changeindex] = useState();
    const [active, changeactive] = useState(false);

    const handleicon = (id) => {
        changeactive((prevalue) => prevalue == false ? true : false)
        console.log(active);
        changeindex(() => active == true ? id : null)
        console.log(index);
        // changeicon(()=>active == true ? {transform: "rotate(45deg)"}:null)
        // changeshow(()=>active == true ? {transform: "scale(1)", height: "auto", padding: "20px"}:null)
    }

    return (
        <section className='w-[100%] border-t-[8px] bg-black border-t-[rgb(35,35,35)] sm:py-[100px] py-[50px]'>
            <div className='max-w-[1170px] mx-auto px-[50px]'>
                <h1 className='text-white font-bold text-[48px] text-center'>
                    Frequently Asked Questions
                </h1>
                <div className='py-5'>
                    <div>
                        {
                            Data.map((item) => {
                                return (
                                    <>
                                        <div className='text-white text-[24px] p-[20px] bg-[#2d2d2d] my-2 relative hover:bg-[#414141] duration-300'>
                                            <p>
                                                {item.question}
                                            </p>
                                            <span className='Show text-white text-[60px] absolute right-[2%] top-[-10%] cursor-pointer transition-transform duration-300 ease-in-out' style={index == item.id ? { transform: "rotate(45deg)" } : null} onClick={() => { handleicon(item.id) }}>+</span>
                                        </div>
                                        <div className='Answer text-white text-[24px]  bg-[#2d2d2d] scale-0 h-0 transition-transform duration-300 ease-in-out' style={index == item.id ? { transform: "scale(1)", height: "auto", padding: "20px" } : null} >
                                            <p className='mb-4'>
                                                {
                                                    item.answer
                                                }
                                            </p>
                                            <p>
                                                {
                                                    item.answer2
                                                }
                                            </p>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <h3 className='text-white text-[20px] text-center py-[20px]'>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className='max-w-[700px] sm:px-[10px] px-[50px] mx-auto'>
                        <div className='grid sm:grid-cols-[70%_auto] grid-cols-1 mx-auto px-[30px] gap-[10px]'>
                            <input type='email' className='h-[50px] pl-[20px] bg-[#161616] border-[1px] border-[#808080] rounded-[3px]' placeholder="Email Address" />
                            <center>
                            <button className='bg-[red] text-white rounded-[3px] text-[25px] font-bold w-[150px] sm:w-[200px] h-[48px] sm:h-[50px]'>Get Started </button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

