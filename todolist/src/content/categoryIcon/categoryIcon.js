
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbHealthRecognition } from "react-icons/tb";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineFund } from "react-icons/ai";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BsTicketPerforated } from "react-icons/bs";




 const categoryIcons=[
    {
        name:'work',
        icon:<MdOutlineWorkOutline size={30}/>
    },
    {
        name:'personal',
        icon:<IoPersonOutline size={30} />
    },
     {
        name:'study',
        icon:<MdOutlineLibraryBooks size={30} />
    },
     {
        name:'health',
        icon:<TbHealthRecognition size={30} />
    },
     {
        name:'shopping',
        icon:<AiOutlineShopping size={30} />
    },
     {
        name:'finance',
        icon:<AiOutlineFund size={30} />
    },
         {
        name:'travel',
        icon:<PiAirplaneTiltLight size={30} />
    },
     {
        name:'default',
        icon:<BsTicketPerforated  size={30}/>

     }


]

export default categoryIcons