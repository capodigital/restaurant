import React from 'react'
import { RiHome3Line, RiPercentLine, RiPieChartLine, RiMailLine, 
  RiNotificationLine, RiSettings4Line, RiLogoutCircleRLine} from "react-icons/ri";

const Sidebar = (props) => {
  const {showMenu} = props;
  return (
    <div className={`bg-[#1f1b28] fixed lg:left-0 top-0 w-28 h-full 
    flex flex-col justify-between py-6 rounded-tr-xl rounded-tb-xl z-50 transition-all
    ${showMenu ? "left-0" : "-left-full"}`}>
      <div>
        <ul className='pl-4'>
          <li>
            <h1 className='text-2xl text-gray-300 uppercase font-bold text-center my-5'>Logo</h1>
          </li>
          <li className='bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl'>
            <a className='bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-white' href="#">
              <RiHome3Line className='text-2xl'/>
            </a>
          </li>
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a]
            group-hover:text-white transition-colors' 
            href="#">
              <RiPercentLine className='text-2xl'/>
            </a>
          </li>
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a]
            group-hover:text-white transition-colors' 
            href="#">
              <RiPieChartLine className='text-2xl'/>
            </a>
          </li>
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a]
            group-hover:text-white transition-colors' 
            href="#">
              <RiMailLine className='text-2xl'/>
            </a>
          </li>
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a]
            group-hover:text-white transition-colors' 
            href="#">
              <RiNotificationLine className='text-2xl'/>
            </a>
          </li>
          <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
            <a className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a]
            group-hover:text-white transition-colors' 
            href="#">
              <RiSettings4Line className='text-2xl'/>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className='pl-4'>
            <li className='hover:bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl group transition-colors'>
              <a className='group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-xl text-[#ec7c6a]
              group-hover:text-white transition-colors' 
              href="#">
                <RiLogoutCircleRLine className='text-2xl'/>
              </a>
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;