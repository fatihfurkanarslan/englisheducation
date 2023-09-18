import React, { useState } from 'react';
import './Navbar.css';
import { Dropdown, Icon, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const trigger = (
        <span>
            <Icon name='user' size='large' />
        </span>
    );

    return (
        <div className='w-full flex flex-row justify-between items-center mt-2.5'>
            <div className='font-black text-[24px] font-serif tracking-[1px]'>
                <Link to="/Home"><span className='text-black'>JO'S ACADEMY</span></Link>
            </div>
            <div className='flex flex-row items-center space-x-4'>
                <div className='font-black text-md font-serif tracking-[1px] py-4'>
                    <Link to="/Home"><span className='text-black'>Free Lessons</span></Link>
                </div>
                <div className='font-black text-md font-serif tracking-[1px] py-4'>
                    <Link to="/Home"><span className='text-black'>IELTS Speaking</span></Link>
                </div>
                <div className='mr-[5px] navbar__searchbar py-4'>
                    <input placeholder='Search'></input>
                </div>
                <div className='ml-[5px]'>
                    {isLoggedIn ? (
                        <Dropdown trigger={trigger} icon={null}>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <div className='text-red-900'>
                                        Profile
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item text='Add Note' />
                                <Dropdown.Item text='My Notes' />
                                <Dropdown.Divider />
                                <Dropdown.Item text='Add Category' />
                                <Dropdown.Item>
                                    <Link to="/AllCategories"><span className='text-black'>Categories</span></Link>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogout} text='Logout' />
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <button className='ui button' onClick={handleLogin}>Login</button>
                    )}
                </div>
            </div>
        </div>
    );
}
