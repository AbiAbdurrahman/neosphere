'use client';

import { useModal } from '@/components/modal-context';

const MediaAndPublishing = () => {
  const { openModal } = useModal();

  const handleOpenModal = (title, description, image) => {
    openModal(
      <div className="flex flex-col items-center p-4">
        <img src={image} alt={title} className="w-[200px] h-[200px] rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-base text-center">{description}</p>
      </div>
    );
  };

  return (
    <div className="bg-red-900 bg-linear-to-br from-red-700 to-red-900 text-white">
      <div className="lg:pl-[105px] lg:pr-[105px] flex flex-col">
        <h1 className="text-[48px] pt-[41px] font-extrabold text-primary text-center items-center">
          Media and Publishing <br />
        </h1>
      </div>
      <div className="flex flex-col items-center p-20">
        <div className="mb-6 w-full flex justify-center">
          <div
            className="flex flex-col gap-3 border-2 rounded-lg border-white p-2 w-fit h-fit max-w-[600px] cursor-pointer hover:shadow-lg transition"
            onClick={() => handleOpenModal(
              'Neo Historia',
              'Neohistoria adalah media yang didedikasikan untuk memperkenalkan sejarah secara dinamis dan menyenangkan. Dengan berbagai cara, Neohistoria mengajarkan sejarah umum dengan berbagai cara untuk menarik perhatian para audiens, spesifiknya untuk para pemuda. Melalui Neohistoria, pembelajaran sejarah pun lebih tersebar luas, mudah dipahami, dan mudah diakses lewat sosial media',
              '/neo-historia.jpeg'
            )}
          >
            <img src='/neo-historia.jpeg' alt="Neo Historia" className="w-[150px] h-[150px] rounded-lg mx-5 justify-self-center self-center" />
            <h5 className="self-center text-xl font-semibold">{ `Neo Historia` }</h5>
          </div>
        </div>
        <div className="flex gap-6 w-full justify-center">
          <div
            className="flex flex-col gap-3 border-2 rounded-lg border-white p-2 w-fit h-fit max-w-[600px] cursor-pointer hover:shadow-lg transition"
            onClick={() => handleOpenModal(
              'Neo Christposting',
              'Neo Christposting adalah sebuah komunitas yang berfokus pada edukasi kekristenan. Menggunakan sosial media untuk mengajarkan teologi kristiani secara ringan, akademis, dan menyenangan. Dengan reach sampai 39 ribuan pengguna instagram, Neo Christposting sudah menyebarkan pembelajaran nasrani secara informatif dan menarik.',
              '/neo-christposting-red.png'
            )}
          >
            <img src='/neo-christposting.png' alt="Neo Christposting" className="w-[150px] h-[150px] rounded-lg justify-self-center self-center" />
            <h5 className="self-center text-xl font-semibold">{ `Neo Christposting` }</h5>
          </div>
          <div
            className="flex flex-col gap-3 border-2 rounded-lg border-white p-2 w-fit h-fit max-w-[600px] cursor-pointer hover:shadow-lg transition"
            onClick={() => handleOpenModal(
              'Barisan Ummat Neo',
              'Barisan Ummat Neo adalah suatu himpunan Islam untuk Neo Historia. Didedikasian untuk menunjukkan sejarah peradaban Islam dan memberikan ruang diskusi untuk membahas Fiqih, Aqidah, dan ajaran Islam lainnya. Upaya ini dilakukan melalui artikel, cerita, reels, meme, dan konten lainnya.',
              '/barisan-ummat-neo.jpg'
            )}
          >
            <img src='/barisan-ummat-neo.jpg' alt="Barisan Ummat Neo" className="w-[150px] h-[150px] rounded-lg mx-5 justify-self-center self-center" />
            <h5 className="text-xl font-semibold">{ `Barisan Ummat Neo` }</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaAndPublishing;