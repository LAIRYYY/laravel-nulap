import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import '../Pages/dashboard.css'
import NavLink from '@/Components/NavLink';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import TextArea from '@/Components/TextArea';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { TagsInput } from "react-tag-input-component";
import {Table, Button, Space, Radio, message} from 'antd';




export default function Dashboard(props) {

    const [data, setData] = useState([]);
    const [departmentID, setdepartmentID] = useState('');
    const [isShowLevel, setisShowLevel] = useState(true);
    const [isShowAdd, setisShowAdd] = useState(false);
    const [skills, setSkills] = useState([]);
    const [years, setYears] = useState([]);
    const [workExperience, setworkExperience] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [tags, setTags] = useState([]);
    const [jobTitle, setjobTitle] = useState('');
    const [jobDescription, setjobDescription] = useState('');
    const [key, setKey] = useState(0);
    const [isUpdate, setisUpdate] = useState(false);
    const [jobID, setJobID] = useState('');
    const [status, setStatus] = useState('');
    const [messageApi, contextHolder] = message.useMessage();
    useEffect (() => {
     
    });
    

      const columns = [
        {
          title: '#',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: 'Job Title',
          dataIndex: 'jobtitle',
          key: 'jobtitle',
        },
        {
          title: 'Job Description',
          dataIndex: 'jobdescription',
          key: 'jobdescription',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render:(_, record) =>
            (
                <Space wrap>
               <PrimaryButton onClick={() => updateJobs(record)}>Update</PrimaryButton>
                {/* <PrimaryButton >View </PrimaryButton> */}
              </Space>
            )
          },
      ];

      // pag update ng job
      const updateJobs = (records) => {

        console.log(records);


        axios.post('/get_jobs_by_id', {id:records.key})
        .then(res => {
          
            console.log(res.data);

            res.data.jobs.map((jobs, index) => {
                setjobTitle(jobs.Title);
                setjobDescription(jobs.Description);
                setStatus(jobs.Status);
            });

            let arr = res.data.skills.map((job) => job.title);
            setSkills(arr); 

            let arr2 = res.data.exp.map((job) => job.description);
            setworkExperience(arr2); 

              setisUpdate(true);
            setJobID(records.key);
      
        })
        .catch(err => console.log(err));

  }
  // ~~~~~~~~~~~~`ending ng update~~~~~~~~~~~~~~~~~~~~~

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };


    useEffect(() => {
        axios.get('/level')
            .then(res => setData(res.data))
            .catch(err => console.log(err));

     
  
    }, []);

    // function ng update button
    const updateJobsBtn = () =>{

        axios.post('/update_jobs', {
            id:jobID,
            jobDescription: jobDescription,
            jobTitle: jobTitle,
            skills: skills,
            workExperience: workExperience,
            status: status

        })
        .then(res => {
          
            console.log(res.data);
           
            setSkills([]);
            setworkExperience([]);
            setTags([]);
            setjobTitle('');
            setjobDescription('');

            axios.post('/get_jobs', { id: departmentID })
            .then(res => {
              let arr = [];
              res.data.map((jobs, index) => {
                arr.push({
                  'key': jobs.id,
                  'jobtitle': jobs.Title,
                  'jobdescription': jobs.Description
                });
              });
              setTableData(arr);
            
              setSkills([]);
              setworkExperience([]);
              setTags([]);
              setjobTitle('');
              setjobDescription('');
              setStatus('');
              setisUpdate(false);
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err)); 
    }

    // ~~~~~~~~~~~``end ng function ng update button~~~~~~~~~~~~~~~~~~~~`

    // function ng save button
    const saveJobs = async  (e) => {
        e.preventDefault();
     
     
        axios.post('/save_jobs', {
            id: departmentID,
            jobDescription: jobDescription,
            jobTitle: jobTitle,
            skills: skills,
            workExperience: workExperience,
            status: status
          })
          .then(res => {
           
          
            console.log(res.data);
            if(res.data !="exists")
            {
              messageApi.open({
                type: 'success',
                content: 'Successfully added',
              });
              axios.post('/get_jobs', { id: departmentID })
              .then(res => {
                let arr = [];
                res.data.map((jobs, index) => {
                  arr.push({
                    'key': jobs.id,
                    'jobtitle': jobs.Title,
                    'jobdescription': jobs.Description
                  });
                });
                setTableData(arr);
              
                setSkills([]);
                setworkExperience([]);
                setTags([]);
                setjobTitle('');
                setjobDescription('');
                setStatus('');
              })
              .catch(err => console.log(err));
            }
            else{
              messageApi.open({
                type: 'error',
                content: 'Job is already existing!',
              });
            
            }
          
          })
          .catch(err => console.log(err));




          
       
    };

    // ~~~~~~~~~~~~~~~~~~~~~~`end ng function ng save button~~~~~~~~~~~~~~~~~~~~


    const findDepartment = (id) => {
      
        // axios.get('/getdepartment/'+id)
        // .then(res => setdataDaparment(res.data))
        // .catch(err => console.log(err));

        setisShowAdd(true);

        setisShowLevel(false);

        axios.post('/get_jobs', {id: {id}})
        .then(res => {
            let arr = [];
            res.data.map((jobs, index) => {
                arr.push({
                    'key': jobs.id,
                    'jobtitle': jobs.Title,
                    'jobdescription': jobs.Description
                });
            });
            setTableData(arr);
        })
        .catch(err => console.log(err));

        setdepartmentID(id);
    
        };

        const showAddItems = (id) => {
      
         
            console.log(id)
            setisShowLevel(false);
            setisShowAdd(true);
            setdepartmentID_second(id);
            
            };

                const showBackLevel = () => {
      
                    axios.get('/level')
                    .then(res => setData(res.data))
                    .catch(err => console.log(err));
                    
                    setisShowLevel(true);
                    setisShowAdd(false);

                    setSkills([]);
                    setworkExperience([]);
                    setTableData([]);
                    setTags([]);
                    setjobTitle('');
                    setjobDescription('');

                    };
    
    const onChangeRadio = (value) =>{

        setStatus(value.target.value);
        console.log(value)
    }                

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
 {contextHolder}
            {/* dashboard for admin for main page */}
            <Head title="Dashboard" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-20">
                        {isShowLevel &&  <div className="p-100 text-gray-900 text-3xl text-center">Welcome to NU Laguna Application Portal!</div>}
                        {/* {isShowDepartment &&  <div className="p-100 text-gray-900 text-3xl text-center">Department</div>} */}
                        {isShowAdd &&  <div className="p-100 text-gray-900 text-3xl text-center font-bold">Add Job</div>}
                       
                        {isShowAdd && <div  style={{float:'right'}}><PrimaryButton onClick={showBackLevel}>Back </PrimaryButton></div>}
                        {/* {isShowDepartment && <div  style={{float:'right'}}><PrimaryButton onClick={showBackLevel}>Back </PrimaryButton></div>} */}
                        <br />  <br />

                    
                   
                        {isShowAdd &&
                        <div className="py-12 ">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                           
                           {/* starting ng structure ng dashboard sa loob ng category kung saan mag aadd ng job or edit */}
                            <form onSubmit={saveJobs} className="mt-6 space-y-6">
                                <div className="form-group">
                             
                                <label for="skills">Job Title</label><br />
                                <div className="flex flex-col items-start"> 
                                    <textarea
                                             value={jobTitle} 
                                             onChange={e => setjobTitle(e.target.value)}
                                            className={
                                                `mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm `
                                                
                                            }
                                           
                                            required
                                           
                                        /></div>
                               
                                </div>
                                <div className="form-group">
                                <label for="jobDescription">Job Description</label><br />

                                    <div className="flex flex-col items-start"> 
                                    <textarea
                                            value={jobDescription} 
                                            onChange={e => setjobDescription(e.target.value)}
                                            className={
                                                `mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm `
                                                
                                            }
                                           
                                            required
                                           
                                        /></div>
                                     
                                                            
                               
                                </div>
                                <div className="form-group">
                                <label for="skills">Educational Background</label><br />
                                <TagsInput
                                    value={skills}
                                     onChange={setSkills}
                                    name="skills"
                         
                                    required={true}
                                /></div>
                                <div className="form-group">
                                <label for="workExperience">Work Experience</label><br />
                                <TagsInput
                                    value={workExperience}
            
                                    onChange={setworkExperience}
                                    name="work_experience"
                                 
                                    required={true}
                                />
                                 </div>

                                 <div className="form-group">
                                <label for="status">Status</label><br />
                                <Radio.Group onChange={value => onChangeRadio(value)} value={status}>
                                <Radio value={1}>Active</Radio>
                                <Radio value={0}>Inactive</Radio>
                                </Radio.Group>
                                 </div>
                                  
                                 {!isUpdate && <div style={{float:'right'}}><PrimaryButton>Save</PrimaryButton></div>}
                                 <br/>
                            </form>
                            {/* ~~~~~~~~~~~~~~~~~~~~``Ending ng form structure ng dashboard */}
                            <br/>
                            {isUpdate && <div style={{float:'right'}} onClick={updateJobsBtn}><PrimaryButton>Submit</PrimaryButton></div>}
                            <br/>
                            <br/>
                            <Table dataSource={tableData} columns={columns} />
                            </div>
                            </div>
                            }

                            

                        <div className="boxes-dash">
                        {isShowLevel &&
                           <a href={route('SortedResume')}>
                        <div className="box">
                                          <a href={route('SortedResume')} className='Title'>List of all Applicants</a>
                                      </div></a>}
                                     
                       {isShowLevel &&

                                data.map((item, index) => (
                        
                                <div className="box" onClick={() => findDepartment(item.id)} key={index+1}>
                                    <a href="#" className='Title'>{item.title}</a>
                                    <p>{item.description}</p>
                                </div>
                        
                                        ))
                                    }
                        </div>
                        

                    
                    </div>
                </div>
            </div>
          {/* ~~~~~~~~~~~~~~~ending ng dashboard for main page~~~~~~~~~~~~~~ */}
        </AuthenticatedLayout>
    );
}
