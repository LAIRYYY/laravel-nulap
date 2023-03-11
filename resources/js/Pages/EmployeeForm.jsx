
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UserLayout from '@/Layouts/UserLayout';
import NavLink from '@/Components/NavLink';
import React, { useState, useEffect, Fragment } from 'react';
import { Form, Input, Select, DatePicker, Row, Col, Divider, Button, Radio, message, Upload  } from 'antd';
import {
    PlusCircleOutlined,
    DeleteOutlined,
    UploadOutlined  
  } from '@ant-design/icons';
import axios from 'axios';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';
const { Option } = Select;



export default function EmployeeForm(props){
    const [date, setDate] = useState(null);
    const [position1, setPosition1] = useState('');
    const [position2, setPosition2] = useState('');
    const [position3, setPosition3] = useState('');
    const [salary1, setSalary1] = useState('');
    const [salary2, setSalary2] = useState('');
    const [salary3, setSalary3] = useState('');
    const [department, setDepartment] = useState('');
    const [learnedAboutJob, setLearnedAboutJob] = useState('');
    const [status, setStatus] = useState('');
    const [emergencyContact, setEmergencyContact] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [nickname, setNickname] = useState('');
    const [presentAddress, setPresentAddress] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [phone, setPhone] = useState('');
    const [provincialAddress, setProvincialAddress] = useState('');
    const [cellPhoneProvincial, setCellPhoneProvincial] = useState('');
    const [email, setEmail] = useState('');
    const [birthPlace, setBirthPlace] = useState('');
    const [birthdate, setBirthdate] = useState(null);
    const [age, setAge] = useState(''); 
    const [sex, setSex] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [civilStatus, setCivilStatus] = useState('');
    const [citizenship, setCitizenship] = useState('');
    const [religion, setReligion] = useState('');
    const [healthCardNo, setHealthCardNo] = useState('');
    const [sssNo, setSssNo] = useState('');
    const [tinNo, setTinNo] = useState('');
    const [philHealthNo, setPhilHealthNo] = useState('');
    const [pagIbigNo, setPagIbigNo] = useState('');
    const [motherName, setMotherName] = useState('');
    const [motherOccupation, setMotherOccupation] = useState('');
    const [motherBirthdate, setMotherBirthdate] = useState(null);
    const [motherPhoneNumber, setMotherPhoneNumber] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [fatherOccupation, setFatherOccupation] = useState('');
    const [fatherBirthdate, setFatherBirthdate] = useState(null);
    const [fatherPhoneNumber, setFatherPhoneNumber] = useState('');
    const [nameOfSpouse, setNameOfSpouse] = useState('');
    const [occupationWithSpouse, setOccupationWithSpouse] = useState('');
    const [birthdateWithSpouse, setBirthdateWithSpouse] = useState(null);
    const [phoneNumberWithSpouse, setPhoneNumberWithSpouse] = useState('');
    const [nameOfChildren, setNameOfChildren] = useState('');
    const [childBirthdate, setChildBirthdate] = useState(null);
    const [numDependents, setNumDependents] = useState('');
    const [hasRelativesEmployed, setHasRelativesEmployed] = useState('');
    const [degreeOfRelation, setDegreeOfRelation] = useState('');
    const [relativesPosition, setRelativesPosition] = useState('');
    const [postGraduate, setPostGraduate] = useState('');
    const [postGraduateFromDate, setPostGraduateFromDate] = useState(null);
    const [postGraduateToDate, setPostGraduateToDate] = useState(null);
    const [postGraduateDegree, setPostGraduateDegree] = useState('');
    const [postGraduateAwards, setPostGraduateAwards] = useState('');
    const [graduate, setGraduate] = useState('');
    const [graduateDegree, setGraduateDegree] = useState('');
    const [graduateFromDate, setGraduateFromDate] = useState(null);
    const [graduateToDate, setGraduateToDate] = useState(null);
    const [graduateAwards, setGraduateAwards] = useState('');
    const [college, setCollege] = useState('');
    const [collegeDegree, setCollegeDegree] = useState('');
    const [collegeFromDate, setCollegeFromDate] = useState(null);
    const [collegeToDate, setCollegeToDate] = useState(null);
    const [collegeAwards, setCollegeAwards] = useState('');
    const [gradeSchool, setGradeSchool] = useState('');
    const [schoolDegree, setSchoolDegree] = useState('');
    const [schoolFromDate, setSchoolFromDate] = useState(null);
    const [schoolToDate, setSchoolToDate] = useState(null);
    const [schoolAwards, setSchoolAwards] = useState('');
    const [highSchool, setHighSchool] = useState('');
    const [highSchoolDegree, setHighSchoolDegree] = useState('');
    const [highSchoolFromDate, setHighSchoolFromDate] = useState(null);
    const [highSchoolToDate, setHighSchoolToDate] = useState(null);
    const [highSchoolAwards, setHighSchoolAwards] = useState('');
    const [techVoc, setTechVoc] = useState("");
    const [techVocDegree, setTechVocDegree] = useState("");
    const [techVocFromDate, setTechVocFromDate] = useState(null);
    const [techVocToDate, setTechVocToDate] = useState(null);
    const [techVocAwards, setTechVocAwards] = useState("");
    const [eduUnits, setEduUnits] = useState('');
    const [eduDegree, setEduDegree] = useState('');
    const [eduFromDate, setEduFromDate] = useState(null);
    const [eduToDate, setEduToDate] = useState(null);
    const [eduAwards, setEduAwards] = useState('');
    const [professionalLicense, setProfessionalLicense] = useState('');
    const [registrationNo, setRegistrationNo] = useState('');
    const [rating, setRating] = useState('');
    const [regDate, setRegDate] = useState(null);
    const [professionalAwards, setProfessionalAwards] = useState('');
    const [specialSkills, setSpecialSkills] = useState('');
    const [recommendedName, setRecommendedName] = useState('');
    const [recommendedOccupation, setRecommendedOccupation] = useState('');
    const [recommendedAddress, setRecommendedAddress] = useState('');
    const [recommendedLandline, setRecommendedLandline] = useState('');
    const [currentlyEmployed, setCurrentlyEmployed] = useState(null);
    const [employmentType, setEmploymentType] = useState(null);
    const [hasPendingCase, setHasPendingCase] = useState(null);
    const [pendingCaseDetails, setPendingCaseDetails] = useState('');
    const [hasConviction, setHasConviction] = useState(null);
    const [hasEmploymentHistory, setHasEmploymentHistory] = useState(null);
    const [employmentHistoryReason, setEmploymentHistoryReason] = useState('');
    const [affiliation, setAffiliation] = useState('');
    const [certifyInformation, setCertifyInformation] = useState(null);
    const [jobID, setJobID] = useState(null);
    const [IsSave, setIsSave] = useState(false);
    
    const [requiredPosition1, setrequiredPosition1] = useState(false);
    const [requiredFirstname, setrequiredFirstname] = useState(false);
    const [requiredLastname, setrequiredLastname] = useState(false);
    const [requiredCellPhone, setrequiredCellPhone] = useState(false);
    const [requiredEmail, setrequiredEmail] = useState(false);
    const [requiredStatus, setrequiredStatus] = useState(false);
    const [requiredLearnedAboutJob, setrequiredLearnedAboutJob] = useState(false);
    const [requiredEmergencyContact, setrequiredEmergencyContact] = useState(false);
    const [requiredPresentAddress, setrequiredPresentAddress] = useState(false);
    const [requiredSssNo, setrequiredSssNo] = useState(false);
    const [requiredTinNo, setrequiredTinNo] = useState(false);
    const [requiredPhilHealthNo, setrequiredPhilHealthNo] = useState(false);
    const [requiredPagIbigNo, setrequiredPagIbigNo] = useState(false);
    const [requiredCollege, setrequiredCollege] = useState(false);
    const [requiredHasRelativesEmployed, setrequiredHasRelativesEmployed] = useState(false);
    


    useEffect(() => {

        const urlParts = window.location.href.split('/');
        const id = urlParts[urlParts.length - 1];
        setJobID(id);
        console.log(id)
     
    }, []);

  
  const [form] = Form.useForm();
 

  const [rows, setRows] = useState([{ id: 1 }]);// initial row
  const [formData, setFormData] = useState({});
  const [rows2, setRows2] = useState([{ id: 1 }]);
  const [formData2, setFormData2] = useState({});
  const [rows3, setRows3] = useState([{ id: 1 }]);
  const [formData3, setFormData3] = useState({});
  const [rows4, setRows4] = useState([{ id: 1 }]);
  const [formData4, setFormData4] = useState({});

  const [csrfToken, setCsrfToken] = useState(null);
  useEffect(() => {
      setCsrfToken(document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
    }, []);
    if (!csrfToken) {
      return null;
    }
  const upload = {
    id: jobID,
    name: 'file',
    action: '/upload/resume',
    headers: {
    authorization: 'authorization-text',
    'X-CSRF-TOKEN': csrfToken
    },
    data: { id: jobID,

        lastName   	:	lastName,   
        firstName   	:	firstName,  
        middleName  	:	middleName,  
      
    
    },

    onChange(info) {
    if (info.file.status !== 'uploading') {
        console.log(info.file.response);
    }
    if (info.file.status === 'done') {
        if(info.file.response == 'exist' )
        message.error(`${info.file.name} Applicant already exists!`);
        else
        message.success(`${info.file.name} file uploaded successfully, thank you for Applying!`);
    } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
    }
    },

};


  
  const addRow = () => {
    const newRow = { id: rows.length + 1 };
    setRows([...rows, newRow]);
  };

  const deleteRow = (row) => {
    const filteredRows = rows.filter((r) => r.id !== row.id);
    setRows(filteredRows);
    const newFormData = { ...formData };
    delete newFormData[row.id];
    setFormData(newFormData);
  };

  const handleInputChange = (rowId, field, value) => {
    const newFormData = { ...formData };

    newFormData[rowId] = { ...newFormData[rowId], [field]: value };
    setFormData(newFormData);
  };
 

  const handleSubmit = () => {

    if(status === "")
    {
      setrequiredStatus(true)
   
    }
    else{
      setrequiredStatus(false)
    }

    if(email === "")
    {
      setrequiredEmail(true)
   
    }
    else{
      setrequiredEmail(false)
    }

    if(cellPhone === "")
    {
      setrequiredCellPhone(true)
   
    }
    else{
      setrequiredCellPhone(false)
    }

    if(position1 === "")
    {
      setrequiredPosition1(true)
   
    }
    else{
      setrequiredPosition1(false)
    }

    if(lastName === "")
    {
      setrequiredLastname(true)
   
    }
    else{
      setrequiredLastname(false)
    }

    if(firstName === "")
    {
      setrequiredFirstname(true)
   
    }
    else{
      setrequiredFirstname(false)
    }

    if(learnedAboutJob === "")
    {
      setrequiredLearnedAboutJob(true)
   
    }
    else{
      setrequiredLearnedAboutJob(false)
    }

    if(emergencyContact === "")
    {
      setrequiredEmergencyContact(true)
   
    }
    else{
      setrequiredEmergencyContact(false)
    }

    if(presentAddress === "")
    {
      setrequiredPresentAddress(true)
   
    }
    else{
      setrequiredPresentAddress(false)
    }

    if(sssNo === "")
    {
      setrequiredSssNo(true)
   
    }
    else{
      setrequiredSssNo(false)
    }

    if(tinNo === "")
    {
      setrequiredTinNo(true)
   
    }
    else{
      setrequiredTinNo(false)
    }

    if(philHealthNo === "")
    {
      setrequiredPhilHealthNo(true)
   
    }
    else{
      setrequiredPhilHealthNo(false)
    }

    if(pagIbigNo === "")
    {
      setrequiredPagIbigNo(true)
   
    }
    else{
      setrequiredPagIbigNo(false)
    }

    if(college === "")
    {
      setrequiredCollege(true)
   
    }
    else{
      setrequiredCollege(false)
    }

    if(hasRelativesEmployed === "")
    {
      setrequiredHasRelativesEmployed(true)
   
    }
    else{
      setrequiredHasRelativesEmployed(false)
    }


if(!requiredFirstname && !requiredLastname && !requiredPosition1 && !requiredCellPhone && !requiredEmail && !requiredStatus
  && !requiredLearnedAboutJob && !requiredEmergencyContact && !requiredPresentAddress && !requiredSssNo && !requiredTinNo
  && !requiredPhilHealthNo && !requiredPagIbigNo && !requiredCollege && !requiredHasRelativesEmployed)
{
  console.log('true')


    axios.post('/uploadApplicant', { 

        date   	:	date,   
    position1  	:	position1,
    position2  	:	position2,  
    position3  	:	position3,  
    salary1  	:	salary1,  
    salary2  	:	salary2,  
    salary3   	:	salary3,   
    department   	:	department,   
    learnedAboutJob   	:	learnedAboutJob,   
    status  	:	status,  
    emergencyContact  	:	emergencyContact,  
    lastName   	:	lastName,   
    firstName   	:	firstName,  
    middleName  	:	middleName,  
    nickname   	:	nickname,   
    presentAddress   	:	presentAddress,   
    cellPhone  	:	cellPhone,  
    phone  	:	phone,  
    provincialAddress   	:	provincialAddress,   
    cellPhoneProvincial  	:	cellPhoneProvincial,  
    email 	:	email, 
    birthPlace 	:	birthPlace, 
    birthdate 	:	birthdate, 
    age 	:	age, 
    sex	:	sex,
    weight : weight,
    height 	:	height, 
    civilStatus 	:	civilStatus, 
    citizenship	:	citizenship,
    religion	:	religion,
    healthCardNo 	:	healthCardNo, 
    sssNo 	:	sssNo, 
    tinNo	:	tinNo,
    philHealthNo	:	philHealthNo,
    pagIbigNo	:	pagIbigNo,
    motherName 	:	motherName, 
    motherOccupation	:	motherOccupation,
    motherBirthdate 	:	motherBirthdate, 
    motherPhoneNumber	:	motherPhoneNumber,
    fatherName  	:	fatherName,  
    fatherOccupation 	:	fatherOccupation, 
    fatherBirthdate	:	fatherBirthdate,
    fatherPhoneNumber	:	fatherPhoneNumber,
    nameOfSpouse	:	nameOfSpouse,
    occupationWithSpouse	:	occupationWithSpouse,
    birthdateWithSpouse 	:	birthdateWithSpouse, 
    phoneNumberWithSpouse	:	phoneNumberWithSpouse,
    nameOfChildren 	:	nameOfChildren, 
    childBirthdate 	:	childBirthdate, 
    numDependents 	:	numDependents, 
    hasRelativesEmployed 	:	hasRelativesEmployed, 
    degreeOfRelation	:	degreeOfRelation,
    relativesPosition 	:	relativesPosition, 
    postGraduate 	:	postGraduate, 
    postGraduateFromDate	:	postGraduateFromDate,
    postGraduateToDate	:	postGraduateToDate,
    postGraduateDegree	:	postGraduateDegree,
    postGraduateAwards  	:	postGraduateAwards,  
    graduate 	:	graduate, 
    graduateDegree	:	graduateDegree,
    graduateFromDate	:	graduateFromDate,
    graduateToDate	:	graduateToDate,
    graduateAwards 	:	graduateAwards, 
    college 	:	college, 
    collegeDegree	:	collegeDegree,
    collegeFromDate 	:	collegeFromDate, 
    collegeToDate 	:	collegeToDate, 
    collegeAwards 	:	collegeAwards, 
    gradeSchool  	:	gradeSchool,  
    schoolDegree  	:	schoolDegree,  
    schoolFromDate  	:	schoolFromDate,  
    schoolToDate   	:	schoolToDate,   
    schoolAwards  	:	schoolAwards,  
    highSchool  	:	highSchool,  
    highSchoolDegree  	:	highSchoolDegree,  
    highSchoolFromDate 	:	highSchoolFromDate, 
    highSchoolToDate   	:	highSchoolToDate,   
    highSchoolAwards   	:	highSchoolAwards,   
    techVoc  	:	techVoc,  
    techVocDegree  	:	techVocDegree,  
    techVocFromDate  	:	techVocFromDate,  
    techVocToDate  	:	techVocToDate,  
    techVocAwards  	:	techVocAwards,  
    eduUnits  	:	eduUnits,  
    eduDegree 	:	eduDegree, 
    eduFromDate  	:	eduFromDate,  
    eduToDate  	:	eduToDate,  
    eduAwards 	:	eduAwards, 
    professionalLicense 	:	professionalLicense, 
    registrationNo   	:	registrationNo,   
    rating 	:	rating, 
    regDate 	:	regDate, 
    professionalAwards  	:	professionalAwards,  
    specialSkills  	:	specialSkills,  
    recommendedName   	:	recommendedName,   
    recommendedOccupation   	:	recommendedOccupation,   
    recommendedAddress  	:	recommendedAddress,  
    recommendedLandline   	:	recommendedLandline,   
    currentlyEmployed   	:	currentlyEmployed,   
    employmentType  	:	employmentType  ,
    hasPendingCase   	:	hasPendingCase ,  
    pendingCaseDetails  	:	pendingCaseDetails  ,
    hasConviction   	:	hasConviction,   
    hasEmploymentHistory   	:	hasEmploymentHistory,   
    employmentHistoryReason   	:	employmentHistoryReason,   
    affiliation  	:	affiliation,  
    certifyInformation  	:	certifyInformation,
    formData12345: formData,  
    formData2: formData2,  
    formData3: formData3,  
    formData4: formData4,  

    })
    .then(res => {
        console.log(res.data);
        if(res.data == 1)
        {
            setIsSave(true);
        }

    })
    .catch(err => console.log(err));
    console.log(formData);
  }
    // console.log(formData2);
    // console.log(formData3);
    // console.log(formData4);
    // submit the form data to the server or do something else with it
  };

   
  const addRow2 = () => {
    const newRow2 = { id: rows2.length + 1 };
    setRows2([...rows2, newRow2]);
  };

  const deleteRow2 = (row) => {
    const filteredRows2 = rows2.filter((r) => r.id !== row.id);
    setRows2(filteredRows2);
    const newFormData2 = { ...formData2 };
    delete newFormData2[row.id];
    setFormData2(newFormData2);
  };

  const handleInputChange2 = (rowId, field, value) => {
    const newFormData2 = { ...formData2 };
    newFormData2[rowId] = { ...newFormData2[rowId], [field]: value };
    setFormData2(newFormData2);
  };
  


  const handleSubmit2 = () => {
    console.log(formData3);
    // submit the form data to the server or do something else with it
  };

   
  const addRow3 = () => {
    const newRow3 = { id: rows3.length + 1 };
    setRows3([...rows3, newRow3]);
  };

  const deleteRow3 = (row) => {
    const filteredRows3 = rows3.filter((r) => r.id !== row.id);
    setRows3(filteredRows3);
    const newFormData3 = { ...formData3 };
    delete newFormData3[row.id];
    setFormData3(newFormData3);
  };

  const handleInputChange3 = (rowId, field, value) => {
    const newFormData3 = { ...formData3 };
    newFormData3[rowId] = { ...newFormData3[rowId], [field]: value };
    setFormData3(newFormData3);
  };

 

  const addRow4 = () => {
    const newRow4 = { id: rows4.length + 1 };
    setRows4([...rows4, newRow4]);
  };
  
  const deleteRow4 = (row) => {
    const filteredRows4 = rows4.filter((r) => r.id !== row.id);
    setRows4(filteredRows4);
    const newFormData4 = { ...formData4 };
    delete newFormData4[row.id];
    setFormData4(newFormData4);
  };
  
  const handleInputChange4 = (rowId, field, value) => {
    const newFormData4 = { ...formData4 };
    newFormData4[rowId] = { ...newFormData4[rowId], [field]: value };
    setFormData4(newFormData4);
  };

  const back = () => {
    window.location.replace('/')
  };



  return (
    <UserLayout
    errors={props.errors}
    header={<div style={{textAlign: 'right'}}>
    <NavLink href="/" active={route().current('JobList')}>
    Job Posting</NavLink>

    </div>}
  >
    <Head title="Dashboard" />

            <div className="py-12 ">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-5 text-center">
                    <Button type="primary"   onClick={() => back()} style={{float:'right'}}>
                                Back
                                </Button>
                    <h1 className="p-100 text-gray-900 text-xl">Personal Information</h1>
                    <br></br>
                    <p className='italic'>Note: If field is not applicable, leave it blank</p>
                    <br></br>
    <Form form={form}>
    <Form.Item label="Date of Application">
        <DatePicker style={{ width: '100%' }} value={date} onChange={setDate} />
      </Form.Item>

      <Row gutter={16}>
        <Col span={8}>
        <p className='text-sm italic text-gray-600 text-left px-28'>*Required</p>
          <Form.Item label="Position Desired">
            <Input style={{ width: '100%', borderColor: requiredPosition1 ? 'red' : 'grey'}} placeholder="1" value={position1} onChange={(e) => setPosition1(e.target.value)} />
            {requiredPosition1 &&
              <span style={{color: 'red'}}></span>
        }
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item className='my-5'>
            <Input placeholder="2" value={position2} onChange={(e) => setPosition2(e.target.value)} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item className='my-5'>
            <Input placeholder="3" value={position3} onChange={(e) => setPosition3(e.target.value)} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Expected Salary">
            <Input placeholder="1" value={salary1} onChange={(e) => setSalary1(e.target.value)} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <Input placeholder="2" value={salary2} onChange={(e) => setSalary2(e.target.value)} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item>
            <Input placeholder="3" value={salary3} onChange={(e) => setSalary3(e.target.value)} />
          </Form.Item>
        </Col>
      </Row>


      <Row gutter={16}>
        <Col span={8}>
          <Form.Item className='my-5' label="Department">
            <Input style={{ width: '100%' }} value={department} onChange={(e) => setDepartment(e.target.value)} />
          </Form.Item>
        </Col>

        <Col span={16}>
        <p className='text-sm italic text-gray-600 text-left px-72'>*Required</p>
          <Form.Item label="How did you learn about the job opening?">
            <Input style={{ width: '100%', borderColor: requiredLearnedAboutJob ? 'red' : 'grey'}} value={learnedAboutJob} onChange={(e) => setLearnedAboutJob(e.target.value)} />
            {requiredLearnedAboutJob &&
              <span style={{color: 'red'}}></span>
        }
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
        <p className='text-sm italic text-gray-600 text-left px-12'>*Required</p>
          <Form.Item label="Status">
            <Select style={{ width: '100%', borderColor: requiredStatus ? 'red' : 'grey'}} value={status} onChange={(value) => setStatus(value)}>
              <Option value="Part time">Part time</Option>
              <Option value="Full time">Full time</Option>
            </Select>
            {requiredStatus &&
              <span style={{color: 'red'}}>Required</span>
        }
          </Form.Item>
        </Col>

        <Col span={16}>
        <p className='text-sm italic text-gray-600 text-left px-60'>*Required</p>
          <Form.Item label="Person to notify in case of emergency">
            <Input.TextArea style={{ width: '100%', borderColor: requiredEmergencyContact ? 'red' : 'grey'}} value={emergencyContact} onChange={(e) => setEmergencyContact(e.target.value)} />
            {requiredEmergencyContact &&
              <span style={{color: 'red'}}></span>
        }
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
        <p className='text-sm italic text-gray-600 text-left px-16'>*Required</p>
          <Form.Item label="Fullname">
            <Input style={{ width: '100%', borderColor: requiredLastname ? 'red' : 'grey'}} placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            {requiredLastname &&
              <span style={{color: 'red'}}></span>
        }
          </Form.Item>
        </Col>

        <Col span={6}>
          <p className='text-sm italic text-gray-600 text-left '>*Required</p>
          <Form.Item>
            <Input style={{ width: '100%', borderColor: requiredFirstname ? 'red' : 'grey'}} placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            {requiredFirstname &&
              <span style={{color: 'red'}}></span>
        }
          </Form.Item>
     
        </Col>
      
        <Col span={5}>
          <Form.Item className='my-5'>
            <Input style={{ width: '100%'}} placeholder="Middle Name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
          </Form.Item>
        </Col>

        <Col span={5}>
          <Form.Item className='my-5'>
            <Input style={{ width: '100%' }} placeholder="Nickname" value={nickname} onChange={(e) => setNickname(e.target.value)} />
          </Form.Item>
        </Col>
      </Row>
   

   

     
      
      <Row gutter={16}>
        <Col span={8}>
        <p className='text-sm italic text-gray-600 text-left px-28'>*Required</p>
          <Form.Item label="Present Address">
            <Input.TextArea
              style={{ width: '100%', borderColor: requiredPresentAddress ? 'red' : 'grey'}}
              value={presentAddress}
              onChange={(e) => setPresentAddress(e.target.value)}
            />
            {requiredPresentAddress &&
              <span style={{color: 'red'}}></span>
        }
          </Form.Item>
        </Col>

        <Col span={8}>
        <p className='text-sm italic text-gray-600 text-left px-32'>*Required</p>
          <Form.Item label="Cellular Phone No.">
            <Input
              style={{ width: '100%', borderColor: requiredCellPhone ? 'red' : 'grey'}}
              value={cellPhone}
              onChange={(e) => setCellPhone(e.target.value)}
            />
            {requiredCellPhone &&
              <span style={{color: 'red'}}></span>
        }
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item className='my-5' label="Phone No.">
            <Input
              style={{ width: '100%' }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Provincial Address">
            <Input.TextArea
              style={{ width: '100%' }}
              value={provincialAddress}
              onChange={(e) => setProvincialAddress(e.target.value)}
            />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item  className='my-5' label="Cellular Phone No.">
            <Input
              style={{ width: '100%' }}
              value={cellPhoneProvincial}
              onChange={(e) => setCellPhoneProvincial(e.target.value)}
            />
          </Form.Item>
        </Col>

        <Col span={8}>
        <p className='text-sm italic text-gray-600 text-left px-24'>*Required</p>
          <Form.Item label="Email Address">
            <Input
              style={{ width: '100%', borderColor: requiredEmail ? 'red' : 'grey'}}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
             {requiredEmail &&
              <span style={{color: 'red'}}></span>
        }
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form.Item label="Birth Place">
            <Input style={{ width: '100%' }} value={birthPlace} onChange={(e) => setBirthPlace(e.target.value)} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Birthdate">
            <DatePicker style={{ width: '100%' }} value={birthdate} onChange={(date) => setBirthdate(date)} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="Age">
            <Input value={age} onChange={(e) => setAge(e.target.value)} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Sex">
            <Select value={sex} onChange={(value) => setSex(value)}>
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
            </Select>
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Weight">
            <Input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Height">
            <Input value={height} onChange={(e) => setHeight(e.target.value)} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>

        <Col span={6}>
            <Form.Item label="Civil Status">
                <Select value={civilStatus} onChange={(value) => setCivilStatus(value)}>
                    <Option value="Single">Single</Option>
                    <Option value="Married">Married</Option>
                    <Option value="Widowed">Widowed</Option>
                    <Option value="Separated">Separated</Option>
                    <Option value="Divorced">Divorced</Option>
                </Select>
            </Form.Item>
        </Col>

        <Col span={6}>
            <Form.Item label="Citizenship">
                <Input value={citizenship} onChange={(event) => setCitizenship(event.target.value)} />
            </Form.Item>
        </Col>

        <Col span={6}>
            <Form.Item label="Religion">
                <Input value={religion} onChange={(event) => setReligion(event.target.value)} />
            </Form.Item>
        </Col>

        <Col span={6}>
            <Form.Item label="Health Card No.">
                <Input value={healthCardNo} onChange={(event) => setHealthCardNo(event.target.value)} />
            </Form.Item>
        </Col>

        </Row>

        <Row gutter={16}>

        <Col span={6}>
        <p className='text-sm italic text-gray-600 text-left px-16'>*Required</p>
            <Form.Item label="SSS No.">
                <Input style={{ width: '100%', borderColor: requiredSssNo ? 'red' : 'grey'}} value={sssNo} onChange={(event) => setSssNo(event.target.value)} />
            </Form.Item>
            {requiredSssNo &&
              <span style={{color: 'red'}}></span>
        }
        </Col>

        <Col span={6}>
        <p className='text-sm italic text-gray-600 text-left px-8'>*Required</p>
            <Form.Item label="TIN">
                <Input style={{ width: '100%', borderColor: requiredTinNo ? 'red' : 'grey'}} value={tinNo} onChange={(event) => setTinNo(event.target.value)} />
            </Form.Item>
            {requiredTinNo &&
              <span style={{color: 'red'}}></span>
        }
        </Col>

        <Col span={6}>
        <p className='text-sm italic text-gray-600 text-left px-28'>*Required</p>
            <Form.Item label="Phil. Health No.">
                <Input style={{ width: '100%', borderColor: requiredPhilHealthNo ? 'red' : 'grey'}} value={philHealthNo} onChange={(event) => setPhilHealthNo(event.target.value)} />
            </Form.Item>
            {requiredPhilHealthNo &&
              <span style={{color: 'red'}}></span>
        }
        </Col>

        <Col span={6}>
        <p className='text-sm italic text-gray-600 text-left px-24'>*Required</p>
            <Form.Item label="PAG-IBIG No.">
                <Input style={{ width: '100%', borderColor: requiredPagIbigNo ? 'red' : 'grey'}}  value={pagIbigNo} onChange={(event) => setPagIbigNo(event.target.value)} />
            </Form.Item>
            {requiredPagIbigNo &&
              <span style={{color: 'red'}}></span>
        }
        </Col>

        </Row>
      

        <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="Name of Mother">
            <Input value={motherName} onChange={(e) => setMotherName(e.target.value)} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Occupation">
            <Input value={motherOccupation} onChange={(e) => setMotherOccupation(e.target.value)} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Birthdate">
            <DatePicker value={motherBirthdate} onChange={(date) => setMotherBirthdate(date)} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Phone Number (Mother)">
            <Input value={motherPhoneNumber} onChange={(e) => setMotherPhoneNumber(e.target.value)} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={6}>
          <Form.Item label="Name of Father">
            <Input value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Occupation">
            <Input value={fatherOccupation} onChange={(e) => setFatherOccupation(e.target.value)} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Birthdate">
            <DatePicker value={fatherBirthdate} onChange={(date) => setFatherBirthdate(date)} />
          </Form.Item>
        </Col>

        <Col span={6}>
          <Form.Item label="Phone Number (Father)">
            <Input value={fatherPhoneNumber} onChange={(e) => setFatherPhoneNumber(e.target.value)} />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={16}>
      <Col span={6}>
        <Form.Item label="Name of Spouse">
          <Input value={nameOfSpouse} onChange={(e) => setNameOfSpouse(e.target.value)} />
        </Form.Item>
      </Col>

      <Col span={6}>
        <Form.Item label="Occupation">
          <Input value={occupationWithSpouse} onChange={(e) => setOccupationWithSpouse(e.target.value)} />
        </Form.Item>
      </Col>

      <Col span={6}>
        <Form.Item label="Birthdate">
          <DatePicker value={birthdateWithSpouse} onChange={(dateString) => setBirthdateWithSpouse(dateString)} />
        </Form.Item>
      </Col>

      <Col span={6}>
        <Form.Item label="Phone Number (Spouse)">
          <Input value={phoneNumberWithSpouse} onChange={(e) => setPhoneNumberWithSpouse(e.target.value)} />
        </Form.Item>
      </Col>
    </Row>

    <Row gutter={16}>
        <Col span={8}>
          <Form.Item label="Name of Children">
            <Input value={nameOfChildren} onChange={(event) => setNameOfChildren(event.target.value)} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Child's Birthdate">
            <DatePicker value={childBirthdate} onChange={(date) => setChildBirthdate(date)} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="No. of Dependents">
            <Input type="number" value={numDependents} onChange={(event) => setNumDependents(event.target.value)} />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={20}>
        <p className='text-sm italic text-gray-600 text-right px-64'>*Required</p>
          <Form.Item label="Do you have relatives employed in National University up to the 3rd degree of consanguinity / affinity?">
            <Select style={{ width: '100%', borderColor: requiredHasRelativesEmployed ? 'red' : 'grey'}} value={hasRelativesEmployed} onChange={(value) => setHasRelativesEmployed(value)}>
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </Form.Item>
          {requiredHasRelativesEmployed &&
              <span style={{color: 'red'}}></span>
        }
        </Col>
        <Col span={6}>
        <p className='text-sm italic text-gray-600'>Note: If applicable fill it out, if not leave it blank.</p>
          <Form.Item label="Degree of Relation">
            <Input value={degreeOfRelation} onChange={(event) => setDegreeOfRelation(event.target.value)} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item className='my-10' label="Relative's Position/Department">
            <Input value={relativesPosition} onChange={(event) => setRelativesPosition(event.target.value)} />
          </Form.Item>
        </Col>
      </Row>
        <br />
        <Divider dashed />
        <br />
        <h1 className="p-100 text-gray-900 text-xl">Educational Information</h1>
                    <br></br>

                    <Row gutter={16}>

                <Col span={8}>
                   <Form.Item label="SCHOOL">

                    </Form.Item>
                </Col>

                <Col span={5}>
                <Form.Item label="DEGREE (units) EARNED">

                </Form.Item>
                </Col>

                <Col span={6}>
                <Form.Item label="INCLUSIVE DATE">

                </Form.Item>
               
                </Col>
                <Col span={5}>
                <Form.Item label="AWARDS/ HONORS ">

                </Form.Item>
                            
                </Col>
             

                </Row> 

                <Row gutter={16}>
                    <Col span={8}>
                    <Form.Item label="POST GRADUATE">
                        <Input value={postGraduate} onChange={(event) => setPostGraduate(event.target.value)} />
                    </Form.Item>
                    </Col>
                    <Col span={5}>
                    <Form.Item>
                        <Input value={postGraduateDegree} onChange={(event) => setPostGraduateDegree(event.target.value)} />
                    </Form.Item>
                    </Col>
                    <Col span={6}>

                    <Row>
                        <Col span={12}>
                        <Form.Item label="From">
                            <DatePicker style={{ width: '100%' }} value={postGraduateFromDate}  onChange={(date) => setPostGraduateFromDate(date)} />
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item label="To" style={{ paddingLeft: '5px' }}>
                            <DatePicker style={{ width: '100%' }} value={postGraduateToDate}  onChange={(date) => setPostGraduateToDate(date)} />
                        </Form.Item>
                        </Col>
                    </Row>
                    </Col>
                    <Col span={5}>
                    <Form.Item>
                        <Input value={postGraduateAwards} onChange={(event) => setPostGraduateAwards(event.target.value)} />
                    </Form.Item>
                    </Col>
                </Row>

      
                <Row gutter={16}>
                <Col span={8}>
                    <Form.Item label="GRADUATE">
                    <Input value={graduate} onChange={(event) => setGraduate(event.target.value)} />
                    </Form.Item>
                </Col>
                <Col span={5}>
                    <Form.Item>
                    <Input value={graduateDegree} onChange={(event) => setGraduateDegree(event.target.value)} />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Row>
                    <Col span={12}>
                        <Form.Item label="From">
                        <DatePicker style={{ width: '100%' }} value={graduateFromDate} onChange={(date) => setGraduateFromDate(date)} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="To" style={{ paddingLeft: '5px' }}>
                        <DatePicker style={{ width: '100%' }} value={graduateToDate} onChange={(date) => setGraduateToDate(date)} />
                        </Form.Item>
                    </Col>
                    </Row>
                </Col>
                <Col span={5}>
                    <Form.Item>
                    <Input value={graduateAwards} onChange={(event) => setGraduateAwards(event.target.value)} />
                    </Form.Item>
                </Col>
                </Row>


                    <Row gutter={16}>
                        <Col span={8}>
                        <p className='text-sm italic text-gray-600 text-left px-16'>*Required</p>
                            <Form.Item label="COLLEGE">
                            <Input style={{ width: '100%', borderColor: requiredCollege ? 'red' : 'grey'}} value={college} onChange={(event) => setCollege(event.target.value)} />
                            </Form.Item>
                            {requiredCollege &&
                                  <span style={{color: 'red'}}></span>
                            }
                        </Col>
                        <Col span={5}>
                            <Form.Item className='my-5'>
                            <Input value={collegeDegree} onChange={(event) => setCollegeDegree(event.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Row>
                            <Col span={12}>
                                <Form.Item className='my-5' label="From">
                                <DatePicker style={{ width: '100%' }} value={collegeFromDate} onChange={(date) => setCollegeFromDate(date)} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item className='my-5' label="To" style={{ paddingLeft: '5px' }}>
                                <DatePicker style={{ width: '100%' }} value={collegeToDate} onChange={(date) => setCollegeToDate(date)} />
                                </Form.Item>
                            </Col>
                            </Row>
                        </Col>
                        <Col span={5}>
                            <Form.Item className='my-5'>
                            <Input value={collegeAwards} onChange={(event) => setCollegeAwards(event.target.value)} />
                            </Form.Item>
                        </Col>
                        </Row>

                        <Row gutter={16}>
                        <Col span={8}>
                        <Form.Item label="HIGH SCHOOL">
                            <Input value={highSchool} onChange={(event) => setHighSchool(event.target.value)} />
                        </Form.Item>
                        </Col>
                        <Col span={5}>
                        <Form.Item>
                            <Input value={highSchoolDegree} onChange={(event) => setHighSchoolDegree(event.target.value)} />
                        </Form.Item>
                        </Col>
                        <Col span={6}>
                        <Row>
                            <Col span={12}>
                            <Form.Item label="From">
                                <DatePicker style={{ width: '100%' }} value={highSchoolFromDate} onChange={(date) => setHighSchoolFromDate(date)} />
                            </Form.Item>
                            </Col>
                            <Col span={12}>
                            <Form.Item label="To" style={{ paddingLeft: '5px' }}>
                                <DatePicker style={{ width: '100%' }} value={highSchoolToDate} onChange={(date) => setHighSchoolToDate(date)} />
                            </Form.Item>
                            </Col>
                        </Row>
                        </Col>
                        <Col span={5}>
                        <Form.Item>
                            <Input value={highSchoolAwards} onChange={(event) => setHighSchoolAwards(event.target.value)} />
                        </Form.Item>
                        </Col>
                    </Row>

                   <Row gutter={16}>
                    <Col span={8}>
                    <Form.Item label="GRADE SCHOOL">
                        <Input value={gradeSchool} onChange={(event) => setGradeSchool(event.target.value)} />
                    </Form.Item>
                    </Col>
                    <Col span={5}>
                    <Form.Item>
                        <Input value={schoolDegree} onChange={(event) => setSchoolDegree(event.target.value)} />
                    </Form.Item>
                    </Col>
                    <Col span={6}>
                    <Row>
                        <Col span={12}>
                        <Form.Item label="From">
                            <DatePicker style={{ width: '100%' }} value={schoolFromDate} onChange={(date) => setSchoolFromDate(date)} />
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item label="To" style={{ paddingLeft: '5px' }}>
                            <DatePicker style={{ width: '100%' }} value={schoolToDate} onChange={(date) => setSchoolToDate(date)} />
                        </Form.Item>
                        </Col>
                    </Row>
                    </Col>
                    <Col span={5}>
                    <Form.Item>
                        <Input value={schoolAwards} onChange={(event) => setSchoolAwards(event.target.value)} />
                    </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={8}>
                    <Form.Item label="TECH. VOCATIONAL">
                        <Input value={techVoc} onChange={(event) => setTechVoc(event.target.value)} />
                    </Form.Item>
                    </Col>
                    <Col span={5}>
                    <Form.Item>
                        <Input value={techVocDegree} onChange={(event) => setTechVocDegree(event.target.value)} />
                    </Form.Item>
                    </Col>
                    <Col span={6}>
                    <Row>
                        <Col span={12}>
                        <Form.Item label="From">
                            <DatePicker style={{ width: '100%' }} value={techVocFromDate} onChange={(date) => setTechVocFromDate(date)} />
                        </Form.Item>
                        </Col>
                        <Col span={12}>
                        <Form.Item label="To" style={{ paddingLeft: '5px' }}>
                            <DatePicker style={{ width: '100%' }} value={techVocToDate} onChange={(date) => setTechVocToDate(date)} />
                        </Form.Item>
                        </Col>
                    </Row>
                    </Col>
                    <Col span={5}>
                    <Form.Item>
                        <Input value={techVocAwards} onChange={(event) => setTechVocAwards(event.target.value)} />
                    </Form.Item>
                    </Col>
                </Row>


              
                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="EDUCATION UNITS">
                        <Input value={eduUnits} onChange={(event) => setEduUnits(event.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={5}>
                        <Form.Item>
                        <Input value={eduDegree} onChange={(event) => setEduDegree(event.target.value)} />
                        </Form.Item>
                    </Col>
                    <Col span={6}>
                        <Row>
                        <Col span={12}>
                            <Form.Item label="From">
                            <DatePicker style={{ width: '100%' }} value={eduFromDate} onChange={(date) => setEduFromDate(date)} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="To" style={{ paddingLeft: '5px' }}>
                            <DatePicker style={{ width: '100%' }} value={eduToDate} onChange={(date) => setEduToDate(date)} />
                            </Form.Item>
                        </Col>
                        </Row>
                    </Col>
                    <Col span={5}>
                        <Form.Item>
                        <Input value={eduAwards} onChange={(event) => setEduAwards(event.target.value)} />
                        </Form.Item>
                    </Col>
                    </Row>


                    <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="PROFESSIONAL LICENSE:" >
                        <Input value={professionalLicense} onChange={(event) => setProfessionalLicense(event.target.value)} />
                        </Form.Item>
                    </Col>

                    <Col span={5}>
                        <Form.Item label="Registration No.">
                        <Input value={registrationNo} onChange={(event) => setRegistrationNo(event.target.value)} />
                        </Form.Item>
                    </Col>

                    <Col span={6}>
                        <Row>
                        <Col span={12}>
                            <Form.Item label="Rating">
                            <Input value={rating} onChange={(event) => setRating(event.target.value)} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Reg.Date" style={{ paddingLeft: '5px' }}>
                            <DatePicker style={{ width: '100%' }} value={regDate} onChange={(date) => setRegDate(date)} />
                            </Form.Item>
                        </Col>
                        </Row>
                    </Col>

                    <Col span={5}>
                        <Form.Item label="Professional Awards">
                        <Input value={professionalAwards} onChange={(event) => setProfessionalAwards(event.target.value)} />
                        </Form.Item>
                    </Col>
                    </Row>

                        <Row gutter={16}>
                            <Col span={24}>
                            <Form.Item label="SPECIAL SKILLS:">
                                <Input.TextArea style={{ width: '100%' }} value={specialSkills}  onChange={(event) => setSpecialSkills(event.target.value)} />
                            </Form.Item>
                            </Col>
                        </Row>                              
                        <br />
                        <Divider dashed />
                        <br />
                        <h1 className="p-100 text-gray-900 text-xl">EMPLOYMENT HISTORY (Start with most recent employment)</h1>
                        <br />
                        <p className='italic'>Note: If Reason for Leaving is not applicable, type "none", but if there is no employment history, leave this section blank
                        .</p>
                        <br></br>
                        <Row gutter={16}>

                            <Col span={7}>
                            <Form.Item label="NAME & ADDRESS OF COMPANY">

                                </Form.Item>
                            </Col>

                            <Col span={5}>
                            <Form.Item label="POSITION">

                            </Form.Item>
                            </Col>

                            <Col span={5}>
                            <Form.Item label="INCLUSIVE DATE">

                            </Form.Item>

                            </Col>
                            <Col span={6}>
                            <Form.Item label="REASON FOR LEAVING">

                            </Form.Item>
                                        
                            </Col>


                            </Row>
                            {rows.map((row) => (
                            <Row gutter={16} key={row.id}>
                            <Col span={7}>
                                <Form.Item label="Name of Company">
                                <Input value={formData[row.id]?.companyName} onChange={(e) => handleInputChange(row.id, 'companyName', e.target.value)} />
                                </Form.Item>
                            </Col>

                            <Col span={5}>
                                <Form.Item label="Position">
                                <Input value={formData[row.id]?.position} onChange={(e) => handleInputChange(row.id, 'position', e.target.value)} />
                                </Form.Item>
                            </Col>

                            <Col span={5}>
                                <Row>
                                <Col span={12}>
                                    <Form.Item label="From">
                                    <DatePicker style={{ width: '100%' }} value={formData[row.id]?.fromDate} onChange={(date) => handleInputChange(row.id, 'fromDate', date)} />
                                     </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="To" style={{ paddingLeft: '5px' }}>
                                    <DatePicker style={{ width: '100%' }} value={formData[row.id]?.toDate} onChange={(date) => handleInputChange(row.id, 'toDate', date)} />
                                    </Form.Item>
                                </Col>
                                </Row>
                            </Col>
                            <Col span={6}>
                                <Form.Item label="Reason for Leaving">
                                <Input value={formData[row.id]?.reasonForLeaving} onChange={(e) => handleInputChange(row.id, 'reasonForLeaving', e.target.value)} />
                                </Form.Item>
                            </Col>
                            <Col span={1}>
                                <Button type="primary" icon={<DeleteOutlined />} onClick={() => deleteRow(row)}></Button>
                            </Col>
                            </Row>
                        ))}
                        <Button type="primary" icon={<PlusCircleOutlined />} onClick={addRow} style={{ float: 'right' }}>
                            Add Row
                        </Button>
                  

                        <br />
                        <Divider dashed />
                        <br />
                          <br />
                        <Row gutter={16}>

                            <Col span={7}>
                            <Form.Item label="COURSES TAUGHT">

                                </Form.Item>
                            </Col>

                            <Col span={5}>
                            <Form.Item label="SCHOOL">

                            </Form.Item>
                            </Col>

                            <Col span={5}>
                            <Form.Item label="FROM">

                            </Form.Item>

                            </Col>
                            <Col span={6}>
                            <Form.Item label="TO">

                            </Form.Item>
                                        
                            </Col>


                            </Row>
                            {rows2.map((row) => (
                            <Row gutter={16} key={row.id}>
                            <Col span={7}>
                                <Form.Item >
                                <Input value={formData2[row.id]?.coursetaught} onChange={(e) => handleInputChange2(row.id, 'courseTaught', e.target.value)} />
                                </Form.Item>
                            </Col>

                            <Col span={5}>
                                <Form.Item >
                                <Input value={formData2[row.id]?.expschool} onChange={(e) => handleInputChange2(row.id, 'expSchool', e.target.value)} />
                                </Form.Item>
                            </Col>

                            <Col span={5}>
                            <Form.Item label="From">
                                    <DatePicker style={{ width: '100%' }} value={formData2[row.id]?.fromDate} onChange={(date) => handleInputChange2(row.id, 'fromDate', date)} />
                                    </Form.Item>
                             
                            </Col>
                            <Col span={6}>
                            <Form.Item label="To" style={{ paddingLeft: '5px' }}>
                                    <DatePicker style={{ width: '100%' }} value={formData2[row.id]?.toDate} onChange={(date) => handleInputChange2(row.id, 'toDate', date)} />
                                    </Form.Item>
                            </Col>
                            <Col span={1}>
                                <Button type="primary" icon={<DeleteOutlined />} onClick={() => deleteRow2(row)}></Button>
                            </Col>
                            </Row>
                        ))}
                        <Button type="primary" icon={<PlusCircleOutlined />} onClick={addRow2} style={{ float: 'right' }}>
                            Add Row
                        </Button>
                     
                        <br />
                        <Divider dashed />
                        <br />
                        <h1 className="p-100 text-gray-900 text-xl">Teaching Availability</h1>
                        <br></br>
                        <p className='text-sm italic text-gray-600 text-center'>Note: This section is required</p>
                        <br />
                        <Row gutter={16}>

                            <Col span={8}>
                            <Form.Item label="MORNING">

                                </Form.Item>
                            </Col>

                            <Col span={8}>
                            <Form.Item label="AFTERNOON">

                            </Form.Item>
                            </Col>

                            <Col span={8}>
                            <Form.Item label="EVENING">

                            </Form.Item>

                            </Col>
                       


                            </Row>
                            {rows3.map((row) => (
                            <div key={row.id}>
                               <Row gutter={16}>
  <Col span={8}>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item label="From">
          <Input
            style={{ width: "100%" }}
            value={formData3[row.id]?.avail_from1}
            onChange={(e) => handleInputChange3(row.id, 'avail_from1', e.target.value)}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label="To">
          <Input
            style={{ width: "100%" }}
            value={formData3[row.id]?.avail_to1}
            onChange={(e) => handleInputChange3(row.id, 'avail_to1', e.target.value)}
          />
        </Form.Item>
      </Col>
    </Row>
  </Col>
  <Col span={8}>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item label="From">
          <Input
            style={{ width: "100%" }}
            value={formData3[row.id]?.avail_from2}
            onChange={(e) => handleInputChange3(row.id, 'avail_from2', e.target.value)}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label="To">
          <Input
            style={{ width: "100%" }}
            value={formData3[row.id]?.avail_to2}
            onChange={(e) => handleInputChange3(row.id, 'avail_to2', e.target.value)}
          />
        </Form.Item>
      </Col>
    </Row>
  </Col>
  <Col span={8}>
    <Row gutter={16}>
      <Col span={12}>
        <Form.Item label="From">
          <Input
            style={{ width: "100%" }}
            value={formData3[row.id]?.avail_from3}
            onChange={(e) => handleInputChange3(row.id, 'avail_from3', e.target.value)}
          />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label="To">
          <Input
            style={{ width: "100%" }}
            value={formData3[row.id]?.avail_to3}
            onChange={(e) => handleInputChange3(row.id, 'avail_to3', e.target.value)}
          />
        </Form.Item>
      </Col>
    </Row>
  </Col>
</Row>
<Row gutter={16}>
  <Col span={8}>
    <Form.Item label="Days">
      <Input
        value={formData3[row.id]?.avail_days}
        onChange={(e) => handleInputChange3(row.id, 'avail_days', e.target.value)}
      />
    </Form.Item>
  </Col>
  <Col span={1}>
    <Button type="primary" icon={<DeleteOutlined />} onClick={() => deleteRow3(row)}></Button>
  </Col>
</Row>

                            </div>
                            ))}
                                <Button type="primary" icon={<PlusCircleOutlined />} onClick={addRow3} style={{ float: 'right' }}>
                                    Add Row
                                </Button>
                              
                                
                                <br />
                        <Divider dashed />
                        <br />
                        <h1 className="p-100 text-gray-900 text-xl">CHARACTER REFERENCES (up to the 3rd degree of consanguinity / affinity)</h1>
                        <br></br>
                        <p className='text-sm italic text-gray-600 text-center'>Note: This section is required</p>
                        <br />
                        <Row gutter={16}>

                            <Col span={6}>
                            <Form.Item label="NAME">

                                </Form.Item>
                            </Col>

                            <Col span={6}>
                            <Form.Item label="OCCUPATION">

                            </Form.Item>
                            </Col>

                            <Col span={6}>
                            <Form.Item label="ADDRESS">

                            </Form.Item>

                            </Col>
                            <Col span={6}>
                            <Form.Item label="LANDLINE / EMAIL ADDRESS ">

                            </Form.Item>

                            </Col>
                       


                            </Row>


                                {rows4.map((row) => (
                                <div key={row.id}>
                                <Row gutter={16}>
                                <Col span={7}>
                                    <Form.Item>
                                    <Input 
                                    value={formData4[row.id]?.character_occupation} onChange={(e) => handleInputChange4(row.id, 'character_occupation', e.target.value)}
            
                                    />
                                    </Form.Item>
                                </Col>

                                <Col span={5}>
                                    <Form.Item>
                                    <Input 
                                    value={formData4[row.id]?.character_name} onChange={(e) => handleInputChange4(row.id, 'character_name', e.target.value)}
            
                                    />
                                    </Form.Item>
                                </Col>

                                <Col span={5}>
                                <Form.Item>
                                    <Input.TextArea 
                                     value={formData4[row.id]?.character_address} onChange={(e) => handleInputChange4(row.id, 'character_address', e.target.value)}
            
                                    />
                                        </Form.Item>
                                    
                                </Col>
                                <Col span={6}>
                                <Form.Item  style={{ paddingLeft: '5px' }}>
                                 <Input 
                                  value={formData4[row.id]?.character_landline} onChange={(e) => handleInputChange4(row.id, 'character_landline', e.target.value)}
            
                                 />
                                        </Form.Item>
                                </Col>
                                <Col span={1}>
                                    <Button type="primary" icon={<DeleteOutlined />} onClick={() => deleteRow4(row)}>
                                
                                    </Button>
                                </Col>
                                </Row>
                                </div>
                                ))}

                                <Button type="primary" icon={<PlusCircleOutlined />} onClick={addRow4} style={{ float: 'right' }}>
                                Add Row
                                </Button>
                             
                                
                                <br />
                        <Divider dashed />
                        <br />
                        <h1 className="p-100 text-gray-900 text-xl">Recommended By</h1>
                        <br />
                        <Row gutter={16}>

                            <Col span={6}>
                            <Form.Item label="NAME">

                                </Form.Item>
                            </Col>

                            <Col span={6}>
                            <Form.Item label="OCCUPATION">

                            </Form.Item>
                            </Col>

                            <Col span={6}>
                            <Form.Item label="ADDRESS">

                            </Form.Item>

                            </Col>
                            <Col span={6}>
                            <Form.Item label="LANDLINE / EMAIL ADDRESS ">

                            </Form.Item>

                            </Col>
                       


                            </Row>


          
                                <Row gutter={16} >
                                <Col span={7}>
                                    <Form.Item>
                                    <Input  value={recommendedName} onChange={(e) => setRecommendedName(e.target.value)} />
                                    </Form.Item>
                                </Col>

                                <Col span={5}>
                                    <Form.Item>
                                    <Input value={recommendedOccupation} onChange={(e) => setRecommendedOccupation(e.target.value)} />
                                    </Form.Item>
                                </Col>

                                <Col span={5}>
                                <Form.Item>
                                    <Input.TextArea  value={recommendedAddress} onChange={(e) => setRecommendedAddress(e.target.value)} />
                                        </Form.Item>
                                    
                                </Col>
                                <Col span={6}>
                                <Form.Item  style={{ paddingLeft: '5px' }}>
                                 <Input value={recommendedLandline} onChange={(e) => setRecommendedLandline(e.target.value)} />
                                        </Form.Item>
                                </Col>
                                
                                </Row>
                               
                                <br />
                                <Divider dashed />
                                <br />
                                <h1 className="p-100 text-gray-900 text-xl">PLEASE ANSWER THE FOLLOWING QUESTIONS:</h1>
                                <br></br>
                        <p className='text-sm italic text-gray-600 text-center'>Note: This section is required</p>
                                <br />
                                <Form.Item label="Are you currently employed in any school/company?">
                                <Radio.Group onChange={e => setCurrentlyEmployed(e.target.value)} value ={currentlyEmployed}>
                                <Radio value={true}>Yes</Radio>
                                <Radio value={false}>No</Radio>
                                </Radio.Group>
                            </Form.Item>

                            {currentlyEmployed && (
                                <Form.Item label="If yes, is it part-time or full-time?">
                                <Radio.Group onChange={e => setEmploymentType(e.target.value)} value={employmentType}>
                                    <Radio value="Part time">Part time</Radio>
                                    <Radio value="Full time">Full time</Radio>
                                </Radio.Group>
                                </Form.Item>
                            )}

                            <Form.Item label="Do you have any pending Administrative or Criminal Case?">
                                <Radio.Group onChange={e => setHasPendingCase(e.target.value)} value={hasPendingCase}>
                                <Radio value={true}>Yes</Radio>
                                <Radio value={false}>No</Radio>
                                </Radio.Group>
                            </Form.Item>

                            {hasPendingCase && (
                                <Form.Item label="If you have any, please give details">
                                <Input.TextArea rows={4} onChange={e => setPendingCaseDetails(e.target.value)} value={pendingCaseDetails}/>
                                </Form.Item>
                            )}

                            <Form.Item label="Have you been convicted of any crime or violation of any law, decree, or regulation?">
                                <Radio.Group onChange={e => setHasConviction(e.target.value)} value={hasConviction}>
                                <Radio value={true}>Yes</Radio>
                                <Radio value={false}>No</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item label="Have you ever been retired, forced to resign, or dropped from employment in the public or private sector?">
                                <Radio.Group onChange={e => setHasEmploymentHistory(e.target.value)} value={hasEmploymentHistory}>
                                <Radio value={true}>Yes</Radio>
                                <Radio value={false}>No</Radio>
                                </Radio.Group>
                            </Form.Item>

                            {hasEmploymentHistory && (
                                <Form.Item label="If yes, please state the reason">
                                <Input.TextArea rows={4}  value={employmentHistoryReason} onChange={e => setEmploymentHistoryReason(e.target.value)} />
                                </Form.Item>
                            )}

                            <Form.Item label="Are you affiliated with any community association, union or fraternity?">
                                <Input value={affiliation} onChange={e => setAffiliation(e.target.value)} />
                            </Form.Item>


                            <p>I certify that the foregoing information is true and correct and I understand and agree that a background investigation will be conducted relative to my application. I hereby authorized National University to collect and process my personal data for my employment and fulfill applicable regulations in accordance to the university’s data privacy.
                                        Any false information stated herein shall be dealt with accordingly.
                                        </p>
                            <Form.Item>
                                <Radio.Group onChange={e => setCertifyInformation(e.target.value)} value={certifyInformation}>
                                <Radio value={true}>Yes</Radio>
                                <Radio value={false}>No</Radio>
                                </Radio.Group>
                            </Form.Item>

                                
                        
                                </Form>
                                <Button type="primary"   onClick={() => handleSubmit()} >
                                Save
                                </Button>
                                  <br></br>
                                  <br></br>
                                {IsSave && <Upload {...upload}>
                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                <p className='text-base italic'>File format: PDF or DOCX (preferably PDF)</p>
                            </Upload>}
                                
                                    
                                </div>
                                </div>
                                </div>
                                </UserLayout>
  )

          }