import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../Pages/dashboard.css'
import NavLink from '@/Components/NavLink';
import React, { useState, useEffect } from 'react';
export default function Dashboard(props) {
    const [data, setData] = useState([]);
    // useEffect(() => {
    //     axios.get('/department/{id}')
    //         .then(res => setData(res.data))
    //         .catch(err => console.log(err));
    // }, []);


    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<div style={{textAlign: 'right'}}>
            <NavLink href={route('dashboard')}>
            Dashboard</NavLink>
            <NavLink href={route('department')} active={route().current('department')}>
            Department</NavLink></div>}
        >
            <Head title="Dashboard" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-20">
                        <div className="p-100 text-gray-900 text-3xl text-center">Deparment</div>
                        <br />
                        <div className="boxes">
                            <div className="box">
                                <a href="../admin/scateg.html" className='Title'>Sorted Resumes</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="box">
                                <a href="../admin/college.html" className='Title'>Adminisrative</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            <div className="box">
                                <a href="../admin/shs.html" className='Title'>Academic</a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            </div>
                    
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
