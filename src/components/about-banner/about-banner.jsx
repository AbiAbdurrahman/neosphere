const AboutBanner = () => {
  return(
    <div className="relative flex flex-col items-center justify-center w-full h-[600px]">
      {/* Banner background image */}
      <img src='/jakarta-cityscape.png' alt="Banner" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-red-800 opacity-50 pointer-events-none" />
      {/* Banner text */}
      <div className="relative flex items-center justify-center h-full z-20">
        <h1 className="text-4xl font-bold text-white text-center px-4">Mengajarkan sejarah dengan cara yang menyenangkan</h1>
      </div>
    </div>
  )
}

export default AboutBanner;