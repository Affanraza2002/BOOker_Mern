'use client';
import React from 'react'


import { Link } from 'react-router-dom';
import { HiArrowSmRight, HiChartPie, HiInbox,   HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { FaBookJournalWhills } from 'react-icons/fa6';
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';


const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with content separator example" className=' items-start justify-start'>
    <Sidebar.Logo >
<Link
      to="/"
      className="text-2xl font-bold text-blue-800 flex items-center gap-2"
    >
      <FaBookJournalWhills className="inline-block" />
      BOOKERS
    </Link>
</Sidebar.Logo>
      <Sidebar.Items >
        <Sidebar.ItemGroup className=' text-left'>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie} className="items-start justify-start pl-4">
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload} className="items-start justify-start pl-4">
            Upload Book
          </Sidebar.Item> 
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox} className="items-start justify-start pl-4">
            Manage Books
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} className="items-start justify-start pl-4">
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/shop" icon={HiShoppingBag} className="items-start justify-start pl-4">
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight} className="items-start justify-start pl-4">
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable} className="items-start justify-start pl-4">
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie} className="items-start justify-start pl-4">
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} className="items-start justify-start pl-4">
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy} className="items-start justify-start pl-4">
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>)
}

export default SideBar






