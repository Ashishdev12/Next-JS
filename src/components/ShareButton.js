import { LinkIcon } from "@heroicons/react/24/outline"
function ShareButton() {

    
  
  return (
    <div>
      <button className=" inline-block text-orange-500 font-bold hover:cursor-pointer hover:text-red-500">
       <LinkIcon className=" inline-block w-4 h-4"/> Share Link
      </button>
    </div>
  )
}

export default ShareButton
