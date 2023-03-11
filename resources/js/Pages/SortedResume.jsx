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
import {List, Avatar, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import * as XLSX from 'xlsx';

export default function Sortedresume(props) {

    const [data, setData] = useState([]);
    const [datas, setdatas] = useState([]);
    const [ShowApplicantDetails, setShowApplicantDetails] = useState(true);
    const [Jobs, setJobs] = useState([]);
    const [Applicant, setApplicant] = useState('');
    const [Email, setEmail] = useState('');
    const [Skills, setSkills] = useState([]);

    const [Experience, setExperience] = useState([]);
    const [back, setBack] = useState(false);
    const [ApplicantID, setApplicantID] = useState(false);
    const [LevelDesc, setLevelDesc] = useState('');
    
    const [DownloadLink, setDownloadLink] = useState('');
    const  [isdownload, setisdownload] = useState(false); 
    const  [csvReport, setcsvReport] = useState([]); 

    const handleSubmit = (async) =>{
   

     
          
        // Convert the response data to a JSON object
       


      axios.post('/getCSV', { id: ApplicantID })

      .then(res => {
  
    
    
        
    // Assuming you have received the data from the API call
    const data = {
        main: res.data.main,

        rows1: [{}], // array of objects for main
        main2: res.data.main2,

        // rows1: [{}], // array of objects for main
        // main2: res.data.main2,

        rows2: [{}], // array of objects for main
        main3: res.data.main3,

        rows3: [{}], // array of objects for main
        main4: res.data.main4,

        rows4: [{}], // array of objects for main
        main5: res.data.main5,

        rows5: [{}], // array of objects for main
        main6: res.data.main6,

        rows6: [{}], // array of objects for main
        main7: res.data.main7,

        rows7: [{}], // array of objects for main
        main8: res.data.main8,

        rows8: [{}], // array of objects for main
        main9: res.data.main9,

        rows9: [{}], // array of objects for main
        main10: res.data.main10,

        rows10: [{}], // array of objects for main
        main11: res.data.main11,

        rows11: [{}], // array of objects for main
        main12: res.data.main12,

        rows12: [{}], // array of objects for main
        main13: res.data.main13,

        rows13: [{}], // array of objects for main
        main14: res.data.main14,

        rows14: [{}], // array of objects for main
        main15: res.data.main15,

        rows15: [{}], // array of objects for main
        main16: res.data.main16,

        rows16: [{}], // array of objects for main
        main17: res.data.main17,

        rows17: [{}], // array of objects for main
        main18: res.data.main18,

        rows18: [{}], // array of objects for main
        main19: res.data.main19,

        rows19: [{}], // array of objects for main
        main20: res.data.main20,

        rows20: [{}], // array of objects for main
        main21: res.data.main21,

        rows21: [{}], // array of objects for main
        main22: res.data.main22,

        rows22: [{}], // array of objects for main
        main23: res.data.main23,

        rows23: [{}], // array of objects for main
        main24: res.data.main24,


        rows24: [{}], // array of objects for main
        availabilities: res.data.availabilities,
        rows25: [{}], // array of objects for availabilities
        character_info: res.data.character_info, // array of objects for character_info
        rows26: [{}],
        courses: res.data.courses,
        rows27: [{}], // array of objects for courses
        employment_history:res.data.employment_history // array of objects for employment_history 
      };
                  
                  // Create a new workbook and worksheet
                  const wb = XLSX.utils.book_new();
                  const ws = XLSX.utils.json_to_sheet([]);
                  
                  // Loop through each data row and add it to the worksheet
                  Object.keys(data).forEach((key) => {
                      data[key].forEach((row) => {
                      XLSX.utils.sheet_add_json(ws, [row], {skipHeader: false, origin: -1});
                      });
                  });
                  
                  // Add the worksheet to the workbook
                  XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
                  
                  // Write the workbook to a file and download it
                  XLSX.writeFile(wb, 'data.xlsx');
                      
      })
      .catch(err => console.log(err));
  }

    const getApplicantInfo = (id) =>{
 
        
        axios.post('/get_applicants_info', { id: id })
        .then(res => {
            console.log(res.data.applicant[0].full_name);
            
            setApplicant(res.data.applicant[0].full_name);
            setEmail(res.data.applicant[0].email);

            let arr = [];
            res.data.applicant_skill.map((applicant_skills, index) => {
                arr.push({
                    'key': index+1,
                    'title': applicant_skills.title,
                   
                });
            });
            setSkills(arr);

            
            let arr2 = [];
            res.data.applicant_exp.map((applicant_exps, index) => {
                arr2.push({
                    'key': index+1,
                    'description': applicant_exps.description,
                   
                });
            });

       
            axios.post('/downloadResume', { id: id })
            .then(res => {
                console.log(res.data);

              
                setDownloadLink(res.data);
            })
            .catch(err => console.log(err));
        

            setExperience(arr2);
            setApplicantID(id);
            setBack(true);
            setShowApplicantDetails(false);

        })
        .catch(err => console.log(err));
    }   

    useEffect(() => {
      
    
        axios.get('/get_applicants_sorted')
        .then(res => {
           
            setShowApplicantDetails(true);
            setJobs(res.data.applicant);
            let arr = [];
         
            res.data.applicant.map((applicants, index) => {
           

                arr.push({
                    'key': index+1,
                    'title': applicants.full_name,
                    'match' : res.data.match[index],
                    'id': applicants.id,
                 
                });
            });
            setdatas(arr);
        })
        .catch(err => console.log(err));

    }, []);

    const findJobs = (id) =>{
        axios.post('/get_applicants', { id: id })
        .then(res => {
           
            setShowJobDetails(true);
            setJobs(res.data.applicant);
            let arr = [];
            res.data.applicant.map((applicants, index) => {
                arr.push({
                    'key': index+1,
                    'title': applicants.full_name,
                    'match' : res.data.match[index]
                });
            });
            setdatas(arr);
            // setSkills(res.data.skills);
            // setExperience(res.data.exp);
            setLevelDesc(res.data.applicant.Level_ID);
            setBack(true);
            let levelId = res.data.applicant[0].Level_ID;
            axios.post('/get_level_by_id', { id: levelId })
            .then(res => {
                console.log(res.data[0].title);
                setLevelDesc(res.data[0].title);
                
            })
            .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
        setJobID(id);

    }

 
    const showBack = () =>{
        setShowApplicantDetails(true);
        setBack(false);
    }

    const downloadResume = () =>{
    
        axios.post('/downloadResume', { id: ApplicantID })
        .then(res => {
          console.log(res.data);
          const url = res.data; // replace with your file's URL
          window.open(url);
        //   const fileName = "Resume";
        //   fetch(url)
        //     .then(response => response.blob())
        //     .then(blob => {
        //     const link = document.createElement('a');
        //     link.href = URL.createObjectURL(blob);
        //     link.download = fileName;
        //     document.body.appendChild(link);
        //     link.click();
        //     document.body.removeChild(link);
        //     });
          const link = document.createElement('a');
          link.href = url;
            link.setAttribute('download','Resume');
            link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        
        })
        .catch(err => console.log(err));
      
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
            <Head title="Dashboard" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-20 text-center">
                    {back && <div  style={{float:'right'}}><PrimaryButton onClick={showBack}>Back </PrimaryButton></div>}
                    
                    {ShowApplicantDetails && (
                    <div className="p-100 text-gray-900 font-bold text-3xl text-center">List of all Applicants</div>
                    )}
         
                  
                    <br /> <br />
                        
                    {!ShowApplicantDetails && (
                    <React.Fragment>
                      
                        <div >
                                <div className="p-100 text-gray-900 font-bold text-3xl"> {Applicant}</div>
                        
                            <br />
                            <span>{Email}</span>
                            <br />
                          
                        </div>
                          
                  
                        <br />  
                        <h1 className="p-100 text-gray-900 text-xl font-bold">Educational Background</h1>
                   
                        {Skills.map((item, index) => (
                            <span>{item.title}, </span>
                            ))}
                              <br />      <br />   
                            <h1 className="p-100 text-gray-900 text-xl font-bold">Work Experience  </h1>
                        {Experience.map((item, index) => (
                            <span>{item.description}, </span>
                            ))}
                                 <br /> 
                                 <br /> 
                                <a href={DownloadLink} target="_blank" download={true}>
                                 <Button  icon={<DownloadOutlined />}>Click to Download Resume</Button>
                                </a>
                                <br></br>
                                <br></br>
                                <Button type="primary"   onClick={() => handleSubmit()} >
                                Download Excel
                                </Button>
                                {isdownload &&  <CSVLink {...csvReport}>Export</CSVLink>}
                            
                    </React.Fragment>
                    )}

                {ShowApplicantDetails && (
                    <React.Fragment>
                        
                    <List
                        itemLayout="horizontal"
                        dataSource={datas}
                        style={{ width: "50%", margin: 'auto' }}
                        renderItem={(item) => (
                            <List.Item>
                            <List.Item.Meta
                                title={item.title}
                                onClick={() => getApplicantInfo(item.id)}
                                style={{cursor: 'pointer'}}
                            />
                            </List.Item>
                        )}
                        />
                    </React.Fragment>

                        )}
             

                    
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
