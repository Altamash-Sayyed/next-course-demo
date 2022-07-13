import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'


export default function SignUp() {
  const [name, setName] = useState()
  const [LastName, setLastName] = useState()
  const [email, setemail] = useState()
  const [conPassword, setConPassword] = useState(null)
  const [Password, setPassword] = useState(null)

  const router = useRouter();


  const registerStudent = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (name.length < 3) {
      alert("Name Must Be 3 Char")
      return false;
    }
    if (LastName?.length < 3) {
      alert("LastName Must Be 3 Char")
      return false;
    }
    if (!email.match(mailformat)) {
      alert("Email is Inavalid")

      return false;
    }
    if (Password.length < 6) {
      alert("Password Must Be 6 Char")
      return false;
    }
    if (Password !== conPassword) {
      alert("Password not match")
      return false;
    }
    localStorage.setItem("email", email)
    localStorage.setItem("password", Password)
    localStorage.setItem("name", name)
    router.push('/login')
  }


  return (
    <>

      <div className="flex justify-center bg-blue-700 h-screen ">
        <div className=" bg-white m-4 p-2 rounded-xl mt-12 justify-center flex flex-col w-96">
          <label htmlFor="">Name</label>
          <input onChange={(e) => setName(e.target.value)} value={name} className="m-2 border-2 border-gray-200 p-2" type="text" placeholder="John" />
          <label htmlFor="">LastName</label>
          <input onChange={(e) => setLastName(e.target.value)} value={LastName} className="m-2 border-2 border-gray-200 p-2" type="text" placeholder="Doe" />
          <label htmlFor="">Email</label>
          <input onChange={(e) => setemail(e.target.value)} value={email} className="m-2 border-2 border-gray-200 p-2" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="johndoe@gmail.com" />
          <label htmlFor="">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} value={Password} className="m-2 border-2 border-gray-200 p-2" type="password" placeholder="••••••••••••" />
          <label htmlFor="">Confirm Password</label>
          <input onChange={(e) => setConPassword(e.target.value)} value={conPassword} className="m-2 border-2 border-gray-200 p-2" type="password" placeholder="••••••••••••" />
          <button type='submit' onClick={registerStudent} className="m-2 p-2 rounded-lg text-white font-bold bg-blue-700 hover:bg-indigo-700 hover:scale-100">Submit</button>
          <p className="ml-40 m-2 cursor-pointer">Have You Already <span className="text-blue-700"> <Link href="/login">Register ?</Link></span></p>

        </div>

      </div></>
  )
}
