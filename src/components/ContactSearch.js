import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

function ContactSearch() {
  return (
    <div className='contact-search'>
        <div className='group-search'>
            <IoSearchOutline className='contact-search-icon'/>
            <input id='contact-search-input' type='text' placeholder='Tìm kiếm'/>
        </div>
        <AiOutlineUserAdd className='add-contact-icon'/>
        <AiOutlineUsergroupAdd className='add-group-icon'/>
    </div>
  )
}

export default ContactSearch