export const Feature1 = () => {
    return (
        <section className='w-[100%] border-t-[8px] bg-black border-t-[rgb(35,35,35)] sm:py-[100px] py-[50px]'>
            <div className='max-w-[1170px] mx-auto grid sm:grid-cols-2 grid-cols-1 sm:px-[10px] px-[20px]  text-white items-center sml:text-center'>
                <div>
                    <h1 className='sm:text-[48px] font-bold text-[32px]'>Enjoy on your TV</h1>
                    <p className='sm:text-[24px] mt-[16px] text-[18px]'>
                        Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                    </p>
                </div>
                <div className='relative'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" className='relative z-[2]' />
                    <video className='w-[72.5%] absolute top-[21%] left-[13.5%] z-[1]' autoPlay muted >
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" />
                    </video>
                </div>
            </div>
        </section>
    )
}

export const Feature2 = () => {
    return (
        <section className='w-[100%] border-t-[8px] bg-black border-t-[rgb(35,35,35)] sm:py-[100px] py-[50px]'>
            <div className='max-w-[1170px] mx-auto grid sm:grid-cols-2 grid-cols-1 sm:px-[10px] px-[20px]  text-white items-center pb-[110px] sml:text-center'>
                <div className='relative sm:order-1 order-2'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" className='relative ' />
                    <div className='sm:w-[60%] w-[80%] bg-black grid grid-cols-[70%_auto] absolute border-[2px] border-[rgba(128,128,128,0.7)] sm:left-[20%] left-[10%] top-[80%] items-center rounded-[10px]'>
                        <div className='grid grid-cols-[30%_auto] p-4 gap-[10px] items-center'>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
                            <div>
                                <p className='text-[16px] '>
                                    Stranger Things
                                </p>
                                <p className='text-[14px] text-blue-600 '>
                                    Downloading...
                                </p>
                            </div>
                        </div>
                        <div className='p-7'>
                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
                        </div>
                    </div>
                </div>
                <div className='sm:order-2 order-1'>
                    <h1 className='sm:text-[48px] font-bold text-[32px]'>Download your shows to watch offline</h1>
                    <p className='sm:text-[24px] mt-[16px] text-[18px]'>
                        Save your favourites easily and always have something to watch.
                    </p>
                </div>
            </div>
        </section>
    )
}

export const Feature3 = () => {
    return (
        <section className='w-[100%] border-t-[8px] bg-black border-t-[rgb(35,35,35)]  py-[50px]'>
            <div className='max-w-[1170px] mx-auto grid sm:grid-cols-2 grid-cols-1 sm:px-[10px] px-[20px]  text-white items-center sml:text-center'>
                <div>
                    <h1 className='sm:text-[48px] font-bold text-[32px]'>Watch everywhere</h1>
                    <p className='sm:text-[24px] mt-[16px] text-[18px]'>
                        Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
                    </p>
                </div>
                <div className='relative'>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" className='relative z-[2]' />
                    <video className='w-[63%] absolute top-[10%] left-[18%] z-[1]' autoPlay muted >
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" />
                    </video>
                </div>
            </div>
        </section>
    )
}

export const Feature4 = () => {
    return (
        <section className='w-[100%] border-t-[8px] bg-black border-t-[rgb(35,35,35)] sm:py-[100px] py-[50px]'>
            <div className='max-w-[1170px] mx-auto grid sm:grid-cols-2 grid-cols-1 sm:px-[10px] px-[20px]  text-white items-center sml:text-center'>
                <div className='sm:order-1 order-2'>
                    <img src="https://occ-0-4875-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" />
                </div>
                <div className='sm:order-2 order-1'>
                    <h1 className='sm:text-[48px] font-bold text-[32px]'>Create profiles for kids</h1>
                    <p className='sm:text-[24px] mt-[16px] text-[18px]'>
                        Send children on adventures with their favourite characters in a space made just for them—free with your membership.
                    </p>
                </div>
            </div>
        </section>
    )
}