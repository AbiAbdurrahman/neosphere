import Image from 'next/image'

const Footer = () => (
  <footer className="flex flex-col md:flex-row items-center md:items-center justify-center min-h-[180px] bg-[#7F1416] text-white p-4 gap-20 md:gap-40">
    <div className='flex flex-col md:flex-col items-center order-2 md:order-1 w-full md:w-auto'>
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '1rem', flexShrink: 'unset' }}>
        <img
          src="/ndm-logo.png"
          style={{ width: 200, height: 'auto', flexShrink: 0 }}
          alt="Logo"
        />
      </div>
      <div className="flex flex-row gap-[24px] mb-2 justify-center md:justify-start">
        <a
          className="flex items-center gap-2 shrink-0 hover:underline hover:underline-offset-4"
          href="https://www.facebook.com/neohistoria.id/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Image
            aria-hidden
            src="/facebook.svg"
            alt="Facebook icon"
            width={36}
            height={36}
          />
        </a>
        <a
          className="flex items-center gap-2 shrink-0 hover:underline hover:underline-offset-4"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Image
            aria-hidden
            src="/instagram.svg"
            alt="Instagram icon"
            width={36}
            height={36}
          />
        </a>
        <a
          className="flex items-center gap-2 shrink-0 hover:underline hover:underline-offset-4"
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <Image
            aria-hidden
            src="/x.svg"
            alt="X icon"
            width={36}
            height={36}
          />
        </a>
      </div>
      <span className="text-sm mt-2 md:mt-0 text-center md:text-left">&copy; {new Date().getFullYear()} All rights reserved.</span>
    </div>
    <div className='flex flex-col gap-4 px-0 md:px-40 order-1 md:order-2 w-full md:w-auto'>
      <span className="text-md font-bold">{ `Alamat Redaksi` }</span>
      <span className='text-md' style={{ width: 320, height: 90, display: 'block', overflow: 'hidden' }}>
        {"Jl. Mawar Raya No.22, RT.3/RW.04, Pondok Cina, Kecamatan Beji, Kota Depok, Jawa Barat 16424"}
      </span>
      <div style={{ width: 320, height: 180, overflow: 'hidden', borderRadius: 8 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6639855474423!2d106.83292377454791!3d-6.362668462242443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed7b43857c13%3A0x25ed84b1525e580c!2sNeo%20Historia%20Library!5e1!3m2!1sen!2sid!4v1754793908611!5m2!1sen!2sid"
          width="320"
          height="180"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </footer>
)

export default Footer;