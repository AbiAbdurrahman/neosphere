const Activity = ({index}) => {
  const isOdd = index % 2 != 0;

  return(
    <div className={`flex ${isOdd ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col w-full gap-24`}>
      <div className={`flex relative items-center justify-center lg:justify-normal lg:items-start ${isOdd ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
        <div className={ `relative max-w-[417px] max-h-[264px]` }>
          {/* <div
            className="
              absolute
              bottom-2 left-2
              h-full w-full
              bg-[#FFF1DD]
              block
              -z-10
            "
            style={{ transform: 'scale(1.05)' }}
          ></div> */}
          <div className={ `w-full h-full z-10` }>
            <img
              src="tyrell.png"
              alt="Products and services"
              className={ `
                w-full h-full
              `}
            />
          </div>
        </div>
      </div>
      <div className={ `lg:w-[70%] flex flex-col gap-5` }>
        <div className={ `lg:text-left text-center`}>
          <h2 className="font-bold text-2xl text-primary">{ `Lorem Ipsum` }</h2>
        </div>
        <div className={ `lg:text-left text-center flex flex-col gap-5` }>
          <h3 className="text-lg" key={index}>
            { `lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` }
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Activity;