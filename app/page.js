import Image from 'next/image'
import Effect from './components/effect'
import HomePage from './components/HomePage';

export default function Home() {

  return (
    <main className='flex w-screen  min-h-screen select-none gap-0  items-center'>
      <HomePage/>
    </main>
  );
}
