const OurPartners = () => {
  return(
    <div className="flex flex-col gap-[32px] row-start-2 items-center w-screen">
      <div className="flex flex-col gap-[32px] p-6 sm:p-20 row-start-2 items-center text-center w-screen">
        <h1 className="text-4xl font-bold text-center">Our Partners</h1>
        <p className="text-2xl text-center flex-wrap">
          Since 2019 we have been involved in a number of projects and met
          many great partners, the least but not the last including:
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24'>
          <img src='kompas.png' className='max-w-84 max-h-20 object-contain'/>
          <img src='muda-berdaya.png' className='max-w-84 max-h-20 object-contain'/>
          <img src='noice.png' className='max-w-84 max-h-20 object-contain'/>
          <img src='komunitas-bambu.png' className='max-w-84 max-h-20 object-contain'/>
          <img src='ef-efekta.png' className='max-w-84 max-h-20 object-contain'/>
          <img src='kumparan.png' className='max-w-84 max-h-20 object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default OurPartners;