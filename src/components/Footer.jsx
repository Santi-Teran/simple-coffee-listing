import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-between bg-slate-400 bg-opacity-40 backdrop-filter backdrop-blur-lg text-white py-2 px-8 fixed bottom-0 right-0 left-0">
      <div className='flex items-center'>
        <span className='text-2xl mr-2'>&copy;</span>
        <p className='text-sm'>2023 Santiago Teran. Done with ⚡</p>
      </div>
      <div className="flex justify-between items-center">
        <ul className="flex gap-4">
          <Link href="https://github.com/Santi-Teran" target="_BLANK"><Image width={25} height={25} src="/github.png" alt="github"/> </Link>
          <Link href="https://www.linkedin.com/in/santi-teran/" target="_BLANK"><Image width={25} height={25} src="/linkedin.png" alt="linkedin"/> </Link>
          <Link href="https://santiteran.vercel.app/" target="_BLANK"><Image width={25}  height={25} src="/logo-solo.png" alt="Portafolio"/> </Link>
        </ul>
      </div>
    </footer>
  );
}