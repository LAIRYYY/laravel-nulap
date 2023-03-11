import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../Pages/dashboard.css'
import NavLink from '@/Components/NavLink';
import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { TagsInput } from "react-tag-input-component";
import {Table, Button, Space, message, Upload} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function JobList(props) {

    const [data, setData] = useState([]);
    const [ShowJobDetails, setShowJobDetails] = useState(false);
    const [Jobs, setJobs] = useState([]);
    const [Skills, setSkills] = useState([]);
    const [Experience, setExperience] = useState([]);
    const [back, setBack] = useState(false);
    const [JobID, setJobID] = useState(false);
    const  appyNow = () =>{
        window.location.replace('/applicantform/'+JobID);
    };

    useEffect(() => {
        axios.get('/jobs')
            .then(res => setData(res.data))
            .catch(err => console.log(err));

     
  
    }, []);

    const findJobs = (id) =>{
        axios.post('/get_all', { id: id })
        .then(res => {
            console.log(res);
            setShowJobDetails(true);
            setJobs(res.data.jobs);
            setSkills(res.data.skills);
            setExperience(res.data.exp);
            setBack(true);
        })
        .catch(err => console.log(err));
        setJobID(id);
    
    }

    const showBack = () =>{
        setShowJobDetails(false);
        setBack(false);
    }

    const [csrfToken, setCsrfToken] = useState(null);
    useEffect(() => {
        setCsrfToken(document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
      }, []);
      if (!csrfToken) {
        return null;
      }

    const upload = {
            id: JobID,
            name: 'file',
            action: '/upload/resume',
            headers: {
            authorization: 'authorization-text',
            'X-CSRF-TOKEN': csrfToken
            },
            data: { id: JobID },

            onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file.response);
            }
            if (info.file.status === 'done') {
                if(info.file.response == 'exist' )
                message.error(`${info.file.name} Applicant already exists!`);
                else
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
            },

      };
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<div style={{textAlign: 'right'}}><NavLink href={route('dashboard')} active={route().current('dashboard')}>
            Dashboard</NavLink>
            <NavLink href={route('JobList')} active={route().current('JobList')}>
            Job Posting</NavLink>
            <NavLink href={route('Applicants')} active={route().current('Applicants')}>
            Applicants</NavLink>
            </div>}
        >
            <Head title="Dashboard" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-20 text-center">
                    {back && <div  style={{float:'right'}}><PrimaryButton onClick={showBack}>Back </PrimaryButton></div>}
                    
                    {!ShowJobDetails &&   
                    <div className="p-100 text-gray-900 text-3xl text-center font-bold">Job Posting</div>
                    }
                    <br /> <br />
                        {!ShowJobDetails &&
                        
              
                        <div className="boxes" >
                    
                        {

                            data.map((item, index) => (
                    
                            <div className="box" key={index+1} onClick={() => findJobs(item.id)} >
                                <a href="#" className='Title'>{item.Title}</a><br />
                                {/* <span>{item.Description}</span>
                                <br /> */}
                                
                            </div>
                    
                                    ))
                                }
                          </div>
                    
                        }
                    {ShowJobDetails && (
                    <React.Fragment>
                        {Jobs.map((item, index) => (
                        <div >
                                <div className="p-100 text-gray=-900 text-3xl font-bold"> {item.Title}</div>
                        
                            <br />
                            <span>{item.Description}</span>
                            <br />
                          
                        </div>
                          
                        ))}
                        <br />  
                        <h1 className="p-100 text-gray-900 text-xl font-bold">Educational Background</h1>
                   
                        {Skills.map((item, index) => (
                            <span>{item.title}, </span>
                            ))}
                              <br />      <br />   
                            <h1 className="p-100 text-gray-900 text-xl font-bold">Work Experience  </h1>
                        {Experience.map((item, index) => (
                            <span>{item.description} </span>
                            ))}
                                 <br /> 
                                 <br /> 
                                 {/* <Upload {...upload}>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload> */}
                            {/* <PrimaryButton onClick={() => appyNow()}>ApplyNow </PrimaryButton> */}
                    </React.Fragment>
                    )}

                    
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
