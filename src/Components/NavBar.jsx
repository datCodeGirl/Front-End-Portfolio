// import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"

export default function NavBar ({}) {
    return (
        <div className='flex w-full items-center justify-start bg-[#0F0F0F] py-2 text-white'> 
            {/* <Link to="/">
                <img src="/assets/images/Youtube-Logo-White.png" className="w-22 h-7 items-center ml-6"/>
            </Link> */}
            <SearchBar  />
            {/* <Link to="/about">
                <p className="mr-16 hover:text-pink-300">About</p>
            </Link> */}
        </div>
    );
}