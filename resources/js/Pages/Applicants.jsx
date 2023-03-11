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
import { UploadOutlined } from '@ant-design/icons';
import { DownloadOutlined } from '@ant-design/icons';
import { CSVLink } from 'react-csv';
// import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
// import * as ExportToCsv from 'csv-export';

export default function Applicants(props) {

    const [data, setData] = useState([]);
    const [datas, setdatas] = useState([]);
    const [ShowJobDetails, setShowJobDetails] = useState(true);
    const [ShowJobDetails2, setShowJobDetails2] = useState(true);
    const [ShowJobDetails3, setShowJobDetails3] = useState(false);
    const [Jobs, setJobs] = useState([]);
    const [Skills, setSkills] = useState([]);
    const [Experience, setExperience] = useState([]);
    const [back, setBack] = useState(false);
    const [back2, setBack2] = useState(false);
    const [JobID, setJobID] = useState(false);
    const [LevelDesc, setLevelDesc] = useState('');
    const [Applicant, setApplicant] = useState('');
    const [Email, setEmail] = useState('');
    const [DownloadLink, setDownloadLink] = useState('');
    const [ApplicantID, setApplicantID] = useState(false);
    const  [csvReport, setcsvReport] = useState([]); 
    const  [isdownload, setisdownload] = useState(false); 

   
   // action para madownload ang excel file
    const handleSubmit = (async) =>{
   

     
          
          // Convert the response data to a JSON object
         


        axios.post('/getCSV', { id: ApplicantID })

        .then(res => {
    
      
      
          
      // Assuming you have received the data from the API call

      // hinihiwalay per array yung data
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
        // ~~~~~~~~~~~~~~~~~~~~~~~ending ng paghihiwalay ng bawat data sa array~~~~~~~~~~~~~~~~~~~~~~~
                    
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

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~end ng action para sa download~~~~~~~~~~~~~~~~~~~~~~~~~~
      
    // function s2ab(s) {
    //     const buf = new ArrayBuffer(s.length);
    //     const view = new Uint8Array(buf);
    //     for (let i = 0; i < s.length; i++) {
    //       view[i] = s.charCodeAt(i) & 0xFF;
    //     }
    //     return buf;
    //   }

    const getApplicantInfo = (id) =>{
      
        setApplicantID(id);

        axios.post('/get_applicants_info', { id: id }) // Make a POST request to fetch the applicant info
        .then(res => {
            console.log(res.data.applicant[0].full_name);
            
            setApplicant(res.data.applicant[0].full_name);
            setEmail(res.data.applicant[0].email);
            
            // Map the applicant's skills and experience into arrays of objects
            // pag create ng array for educational background
            let arr = [];
            res.data.applicant_skill.map((applicant_skills, index) => {
                arr.push({
                    'key': index+1,
                    'title': applicant_skills.title,
                   
                });
            });
            setSkills(arr);

            // pag create ng array for work experience
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
        
            // Update state variables to show applicant details and experience
            setExperience(arr2);
            setApplicantID(id);
            setBack(true); //back buttons
            setBack2(false);
            setShowJobDetails3(true)
            setShowJobDetails(false)
            
        })
        .catch(err => console.log(err));
    }
      

    useEffect(() => {

  

        axios.get('/jobs')
            .then(res => setData(res.data))
            .catch(err => console.log(err));
            setShowJobDetails2(false);
            setShowJobDetails(false);
            setBack2(false);
            setBack(false);
  
    }, []);

    const findJobs = (id) =>{
        axios.post('/get_applicants', { id: id })
        .then(res => {
            setShowJobDetails2(true);
            setShowJobDetails(true);
            setJobs(res.data.applicant);
            let arr = [];
            res.data.applicant.map((applicants, index) => {
                arr.push({
                    'key': index+1,
                    'id': applicants.id,
                    'title': applicants.full_name,
                    'match' : res.data.match[index]
                });
            });
            arr.sort((a, b) => {
                return b.match - a.match;
            });
            setdatas(arr);
            // setSkills(res.data.skills);
            // setExperience(res.data.exp);
            setLevelDesc(res.data.applicant.Level_ID);
       
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
        setShowJobDetails2(false);
        setBack2(true);
        setBack(false);

    }

    const showBack = () =>{
        setShowJobDetails(true);
        setShowJobDetails2(true);
        setShowJobDetails3(false);
        setBack2(true);
        setBack(false);
    }

    const showBack2 = () =>{
        setShowJobDetails(false);
        setShowJobDetails2(false);
        setShowJobDetails3(false);
        setBack2(false);
        setBack(false);
    }


  
    return (

        // route for navbar
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
        {/* // ~~~~~~~~~~~~~~~~~ending ng route for navbar~~~~~~~~~~~~~~~~~~~~ */}


            {/* dashboard for admin side */}
            <Head title="Dashboard" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-20 text-center">
                    {back && <div  style={{float:'right'}}><PrimaryButton onClick={showBack}>Back </PrimaryButton></div>}
                    {back2 && <div  style={{float:'right'}}><PrimaryButton onClick={showBack2}>Back </PrimaryButton></div>}
                    
                    
                    {!ShowJobDetails2 &&   
                    <div className="p-100 text-gray-900 text-3xl text-center font-bold">Job Posting</div>
                    }
                    <br /> <br />
                     {ShowJobDetails &&   
                    <div className="p-100 text-gray-900 text-3xl text-center font-bold">Sorted List of Applicants for {LevelDesc}</div>
                   
                   }
                    <br/>
                        {!ShowJobDetails2 &&
                        
                        // lalabas yung mga job na gagawin dito
                        <div className="boxes" >
                    
                        {

                            data.map((item, index) => (
                    
                            <div className="box" key={index+1} onClick={() => findJobs(item.id)} >
                                <a href="#" className='Title'>{item.Title}</a><br />
                                {/* <span>{item.Description}</span> */}
                                
                                
                            </div>
                    
                                    ))
                                }
                          </div>
                          //~~~~~~~~~~~~~~~~ending ng paglabas ng job~~~~~~~~~~~~~~~~~~~~~~~~~~~
                    
                        }
                           {ShowJobDetails3 && (
                    <React.Fragment>
                      
                      {/* pag display ng name ang email ni applicant */}
                        <div >
                                <div className="p-100 text-gray-900 text-3xl font-bold"> {Applicant}</div>
                        
                            <br />
                            <span>{Email}</span>
                            <br />
                           
                          
                        </div>
                        {/* ~~~~~~~~~~~~~~~~~~~~~~~end ng pagdisplay ng name and email ni applicant~~~~~~~~~~~~ */}
                  
                        <br />  
                        <h1 className="p-100 text-gray-900 text-xl font-bold">Educational Background</h1>
                            {/* pag display ng educational background na nakuha at nag match kay applicant */}
                        {Skills.map((item, index) => (
                            <span>{item.title}, </span>
                            ))} 

                            {/* ~~~~~~~~~~~ending ng pagdisplay~~~~~~~~~~~~~` */}
                              <br />      <br />   
                            <h1 className="p-100 text-gray-900 text-xl font-bold">Work Experience  </h1>
                            {/* pag display ng work experience na nakuha at nag match kay applicant */}
                        {Experience.map((item, index) => (
                            <span>{item.description}, </span>
                            ))}
                            {/*~~~~~~~~~~~~~`ending ng pagdisplay~~~~~~~~~~~~~~~~~~~~*/}
                                 <br /> 
                                 <br /> 

                                {/* pag download */}

                                <a href={DownloadLink} target="_blank" download={true}>
                                 <Button  icon={<DownloadOutlined />}>Click to Download Resume</Button>
                                </a>
                                <br />   <br />
                                <Button type="primary"   onClick={() => handleSubmit()} >
                                Download Excel
                                </Button>
                                {isdownload &&  <CSVLink {...csvReport}>Export</CSVLink>}
                               {/* ~~~~~~~~~~ending ng pagdownload~~~~~~~~~~*/}
                            
                    </React.Fragment>
                    )}

                    {/* pag show ng sorted list with percenage then napipindot si applicant para mapunta sa  new page
                    kung saan kita yung details ni applicants */}
                    {ShowJobDetails && (
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
                                avatar={<Avatar style={{ backgroundColor: "#1C309B"}}>{item.match}% </Avatar>}
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
