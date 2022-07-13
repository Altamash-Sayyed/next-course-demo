import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import images from '../public/images.png'
import html from '../public/html.png'
import css from '../public/css.png'
import javascript from '../public/javascript.png'
import react from '../public/react.png'
import node from '../public/node.png'
import download from '../public/download.png'
import tailwind from '../public/tailwind.png'
import mongodb from '../public/mongodb.png'
import { useRouter } from 'next/router'

export default function Home(props) {
  const [data, setData] = useState([
    {
      imag: html,
      title: 'HTML',
      desc: 'HTML Course For Beginner'
    },
    {
      imag: css,
      title: 'CSS',
      desc: 'Css Course For Beginner'
    },
    {
      imag: javascript,
      title: 'JavaScript',
      desc: 'JavaScript Course For Beginner'
    },
    {
      imag: react,
      title: 'React.js',
      desc: 'React.js Course For Beginner'
    },
    {
      imag: tailwind,
      title: 'Tailwind Css',
      desc: 'Tailwind Css Course For Beginner'
    },
    {
      imag: node,
      title: 'Node.js',
      desc: 'Node.js Course For Beginner'
    },
    {
      imag: download,
      title: 'Express.js',
      desc: 'Express.js Course For Beginner'
    },
    {
      imag: mongodb,
      title: 'MongoDB',
      desc: 'MongoDB Course For Beginner'
    },
  ])
  const [showing, setShowing] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }


  let name = typeof window !== 'undefined' ? localStorage.getItem('name') : null
  let email = typeof window !== 'undefined' ? localStorage.getItem("email") : null
  let psd = typeof window !== 'undefined' ? localStorage.getItem('password') : null


  const logout = () => {
    localStorage.clear();
    router.push('/register')
  }
  // let arr =

  <Head>
    <link rel="shortcut icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUB-ZG0KEcLnNTjT3hA8tZ1usETnt6ZWMaoQ&usqp=CAU" />
  </Head>
  return (


    !email ?
      <center>
        <h1 className='text-3xl font-bold '>Login First</h1>
        <h1 className='text-3xl font-bold text-blue-700 '><Link href="/register">click to Login</Link></h1>
      </center>
      :


      <>
        <div className='w-full p-1 flex justify-between bg-blue-700'>
          <ul >
            <li className='m-1'>
              <Image src={images} height={60} width={60} />
            </li>  </ul>
          <ul className='flex text-white text-xl'>
            <li className='mx-2 mt-4'>
              Hi,  {name}
            </li>
            <li className='mx-2 mt-3.5 rounded-lg hover:bg-black hover:text-white p-2 h-10 bg-white text-black'>
              <button type='submit' onClick={logout}>LogOut</button>
            </li>

          </ul>
        </div>

        <div className='grid grid-cols-1  sm:grid-cols-3 gap-8 '>

          {typeof window !== undefined &&
            data.map((item, index) => {
              return (
                <div key={index} className='border-2 rounded-lg m-3 border-blue-700 h-80  w-80'>
                  <Image src={item.imag} height={200} width={320} />
                  <hr />
                  <p className='m-1  font-bold'>{item.title}</p>
                  <p className='m-1 text-gray-800'>{item.desc}</p>
                  <p className='border-2 ml-3 py-2 cursor-pointer border-blue-700 hover:bg-blue-700 rounded-xl w-24  text-center h-12 hover:text-white'>get Course</p>
                </div>
              )
            })
          }
        </div>
        <footer className=' flex justify-center text-3xl text-white  w-full h-36 bg-blue-700'>
          <h1 className='mt-12'>Thank's For Visiting</h1 >
        </footer>
      </>

  )
}
