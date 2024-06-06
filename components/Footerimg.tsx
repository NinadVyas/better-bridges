
import Image from 'next/image';

export default function Home() {
    return (
        <>
            {/* <Header label="Home" /> */}
            <div className='mt-6 flex justify-center align-center'>
            <Image src="/betterbridgeshome.png" alt="Product screenshot" className="w-[72rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 " width="2432" height="1442"/>
            </div>
        </>
    )
}
