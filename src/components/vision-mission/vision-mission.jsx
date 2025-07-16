const VisionMission = () => {
  return(
    <div className="py-[41px] lg:pl-[105px] lg:pr-[105px] flex flex-col z-10">
      <h1 className="text-[48px] font-extrabold text-primary text-center items-center">
        Visi & Misi <br />
      </h1>

      <hr className="lg:w-full w-full bg-[#A5A5A5] mt-[56px]" />
      <div className="grid grid-rows-1 text-center lg:mt-8 lg:mb-32 mt-5 mb-8 gap-5 px-10">
        <h1 className="text-[40px] font-bold">Visi Kami</h1>
        <h5 className="text-2xl">
          { `Mencerahkan dan menginspirasi masyarakat dengan menjadikan pengetahuan sejarah sebagai sesuatu yang mudah diakses, menarik, dan berpengaruh untuk membangun masa depan yang cerdas dan terinformasi` }
        </h5>
      </div>

      <hr className="lg:w-full bg-[#A5A5A5] w-full" />

      <div className="grid grid-rows-1 text-center lg:mt-8 lg:mb-32 mt-5 mb-8 gap-5 px-10">
        <h1 className="text-[40px] font-bold">Misi Kami</h1>
        <div className="text-2xl pl-6">
          <ul className="list-none">
            <li>
              { `Edukasi dan Keterlibatan` }
            </li>
            <li className="mt-2">
              { `Inovasi dalam Penyajian` }
            </li>
            <li className="mt-2">
              { `Membangun Komunitas` }
            </li>
            <li className="mt-2">
              { `Kolaborasi dan Jangkauan` }
            </li>
            <li className="mt-2">
              { `Pembelajaran Berorientasi Masa Depan` }
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VisionMission;