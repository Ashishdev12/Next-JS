'use client'
import toast, { Toaster } from 'react-hot-toast';
import { LinkIcon } from "@heroicons/react/24/outline"

function ShareButton() {

  const handleShare = () =>{
     navigator.clipboard.writeText(window.location.href)
     toast.success('Copied')
  }
  
  return (
    <div>
      <button onClick={handleShare} className=" inline-block text-orange-500 font-bold hover:cursor-pointer hover:text-red-500">
       <LinkIcon className=" inline-block w-4 h-4"/> Share Link
      </button>
      <Toaster />
    </div>
  )
}

export default ShareButton
