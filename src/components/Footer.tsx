import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-[#242832] bg-[#0B0D0F]">
      <div className="mx-auto flex min-h-[100px] max-w-[1440px] flex-col items-center justify-between gap-5 px-5 py-6 md:flex-row md:px-8">

        {/* Logo */}
         <div className=" container-main flex items-center gap-2"> 

          <Image
            src="/assets/logo.png"
            alt="FitLog"
            width={100}
            height={40}
            priority
            className="h-auto w-[80px] md:w-[35px]"
          />
        <span className="text-lg font-bold">FITLOG</span>
</div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-500 md:text-right">
          © 2025 FitLog. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;