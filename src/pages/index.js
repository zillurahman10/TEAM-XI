import Image from 'next/image'
import logo from '../assets/logo.PNG'
import RootLayout from '@/components/Layout/RootLayout';

function Home() {
  return (
    <div className='flex justify-between mx-24 my-8'>
      <div>
        <Image src={logo} width={400} height={500}></Image>
      </div>
      <div>
        <h1 className='text-left'>Team XI</h1>
      </div>
    </div>
  )
}

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}
