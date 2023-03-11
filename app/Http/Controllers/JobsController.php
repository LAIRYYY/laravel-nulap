<?php

// call out funtions para magamit from diffent models
namespace App\Http\Controllers;
use App\Models\Jobs;
use App\Models\Skills_jobs;
use App\Models\Work_experience_jobs;
use App\Models\Resume;
use App\Models\Applicant;
use App\Models\Applicant_info;
use App\Models\Level;
use Illuminate\Support\Facades\DB;
use PDO;
use Smalot\PdfParser\Parser;
use App\Http\Controllers\API_KEY;
use Dompdf\FrameDecorator\Text;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpWord\IOFactory;
//~~~~~~~~~~~~~~~~~~~~~Ending ng callout function~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
class JobsController extends Controller
{
    //
    
      // pang download ng excel file and formating
    public function getCSV(Request $request)
    {
    //     $data['main'] = DB::table('applicants_form')->
    //    where('applicant_id',$request->id)->get();

        $data['main'] = DB::table('applicants_form')->
        select('date', 'position1', 'position2', 'position3')
        ->where('applicant_id',$request->id)->get();

        $data['main2'] = DB::table('applicants_form')
        ->select(
            'salary1','salary2', 'salary3', 'department')
        ->where('applicant_id', $request->id)
        ->get();

        $data['main3'] = DB::table('applicants_form')
        ->select('learnedAboutJob', 'status','emergencyContact')
        ->where('applicant_id', $request->id)
        ->get();

        $data['main4'] = DB::table('applicants_form')->
        select('lastName', 'firstName', 'middleName', 'nickname')
        ->where('applicant_id',$request->id)->get();

        $data['main5'] = DB::table('applicants_form')->
        select('presentAddress as Present Address',
        'cellPhone as Cell Phone',  
        'phone as Phone',  
        'provincialAddress as Provincial Address',
        'cellPhoneProvincial as Provincial Cell Phone')
        ->where('applicant_id',$request->id)->get();

        $data['main6'] = DB::table('applicants_form')->
        select('email as Email',  
        'birthPlace as Birth Place', 
        'birthdate as Birth Date',
        'age as Age',    
        'sex as Sex')
        ->where('applicant_id',$request->id)->get();

        $data['main7'] = DB::table('applicants_form')->
        select('weight as Weight',
        'height as Height', 
        'civilStatus as Civil Status', 
        'citizenship as Citizenship',
        'religion as Religion')
        ->where('applicant_id',$request->id)->get();

        $data['main8'] = DB::table('applicants_form')->
        select('healthCardNo as Health Card No',
        'sssNo as SSS No',  
        'tinNo as TIN No',
        'philHealthNo as PhilHealth No',
        'pagIbigNo as PagIBIG No')
        ->where('applicant_id',$request->id)->get();

        $data['main9'] = DB::table('applicants_form')->
        select('motherName as Mother Name', 
        'motherOccupation as Mother Occupation',
        'motherBirthdate as Mother Birthdate', 
        'motherPhoneNumber as Mother Phone Number')
        ->where('applicant_id',$request->id)->get();

        $data['main10'] = DB::table('applicants_form')->
        select('fatherName as Father Name',  
        'fatherOccupation as Father Occupation', 
        'fatherBirthdate as Father Birthdate',
        'fatherPhoneNumber as Father Phone Number')
        ->where('applicant_id',$request->id)->get();

        $data['main11'] = DB::table('applicants_form')->
        select('nameOfSpouse as Name of Spouse',
        'occupationWithSpouse as Occupation of Spouse',
        'birthdateWithSpouse as Birthdate of Spouse', 
        'phoneNumberWithSpouse as Phone Number of Spouse')
        ->where('applicant_id',$request->id)->get();

        $data['main12'] = DB::table('applicants_form')->
        select('nameOfChildren AS Name of Children',
        'childBirthdate AS Child Birthdate',
        'numDependents AS Number of Dependents')
        ->where('applicant_id',$request->id)->get();

        $data['main13'] = DB::table('applicants_form')->
        select('hasRelativesEmployed AS Has Relatives Employed', 
        'degreeOfRelation AS Degree of Relation', 
        'relativesPosition AS Relatives Position')
        ->where('applicant_id',$request->id)->get();

        $data['main14'] = DB::table('applicants_form')->
        select('postGraduate AS Post Graduate', 
        'postGraduateFromDate AS Post Graduate From Date',
        'postGraduateToDate AS Post Graduate To Date',
        'postGraduateDegree AS Post Graduate Degree', 
        'postGraduateAwards AS Post Graduate Awards')
        ->where('applicant_id',$request->id)->get();

        $data['main15'] = DB::table('applicants_form')->
        select('graduate AS Graduate', 
        'graduateDegree AS Graduate Degree', 
        'graduateFromDate AS Graduate From Date',
        'graduateToDate AS Graduate To Date', 
        'graduateAwards AS Graduate Awards')
        ->where('applicant_id',$request->id)->get();

        $data['main16'] = DB::table('applicants_form')->
        select('college as College',
        'collegeDegree as College Degree',
        'collegeFromDate as College From Date',
        'collegeToDate as College To Date',
        'collegeAwards as College Awards')
        ->where('applicant_id',$request->id)->get();

        $data['main17'] = DB::table('applicants_form')->
        select('highSchool as High School',
        'highSchoolDegree as High School Degree',
        'highSchoolFromDate as High School From Date',
        'highSchoolToDate as High School To Date',
        'highSchoolAwards as High School Awards' )
        ->where('applicant_id',$request->id)->get();

        $data['main18'] = DB::table('applicants_form')->
        select('gradeSchool as Grade School',
        'schoolDegree as School Degree',
        'schoolFromDate as School From Date',
        'schoolToDate as School To Date',
        'schoolAwards as School Awards')
        ->where('applicant_id',$request->id)->get();

        $data['main19'] = DB::table('applicants_form')->
        select('techVoc AS Technical/Vocational Course',
        'techVocDegree AS Technical/Vocational Degree',
        'techVocFromDate AS Technical/Vocational From Date',
        'techVocToDate AS Technical/Vocational To Date',
        'techVocAwards AS Technical/Vocational Awards')
        ->where('applicant_id',$request->id)->get();

        $data['main20'] = DB::table('applicants_form')->
        select('edu_units AS Educational Units',
        'edu_degree AS Educational Degree',
        'edu_from_date AS Educational From Date',
        'edu_to_date AS Educational To Date',
        'edu_awards AS Educational Awards')
        ->where('applicant_id',$request->id)->get();

        $data['main21'] = DB::table('applicants_form')->
        select('professional_license AS Professional License',
        'registration_no AS Registration No.',
        'rating AS Rating',
        'reg_date AS Registration Date',
        'professional_awards AS Professional Awards',
        'special_skills AS Special Skills')
        ->where('applicant_id',$request->id)->get();

        $data['main22'] = DB::table('applicants_form')->
        select('recommended_name as Recommended Name',
        'recommended_occupation as Recommended Occupation',
        'recommended_address as Recommended Address',
        'recommended_landline as Recommended Landline')
        ->where('applicant_id',$request->id)->get();

        $data['main23'] = DB::table('applicants_form')->
        select('currently_employed as Currently Employed',
        'employment_type as Employment Type',
        'has_pending_case as Has Pending Case',
        'pending_case_details as Pending Case Details')
        ->where('applicant_id',$request->id)->get();

        $data['main24'] = DB::table('applicants_form')->
        select('has_conviction as Has Conviction',
        'has_employment_history as Has Employment History',
        'employment_history_reason as Employment History Reason',
        'affiliation as Affiliation',
        'certify_information as Certify Information' )
        ->where('applicant_id',$request->id)->get();

        // $data['main2'] = DB::table('applicants_form')
        // ->select(
        //     'presentAddress as Present Address',
        //     'cellPhone as Cell Phone',  
        //     'phone as Phone',  
        //     'provincialAddress as Provincial Address',
        //     'cellPhoneProvincial as Provincial Cell Phone',
        //     'email as Email',  
        //     'birthPlace as Birth Place', 
        //     'birthdate as Birth Date',
        //     'age as Age',    
        //     'sex as Sex',
        //     'height as Height', 
        //     'civilStatus as Civil Status', 
        //     'citizenship as Citizenship',
        //     'religion as Religion',
        //     'healthCardNo as Health Card No',
        //     'sssNo as SSS No',  
        //     'tinNo as TIN No',
        // )
        // ->where('applicant_id', $request->id)
        // ->get();

        // $data['main3'] = DB::table('applicants_form')
        // ->select(
        //     'philHealthNo as PhilHealth No',
        //     'pagIbigNo as PagIBIG No',
        //     'motherName as Mother Name', 
        //     'motherOccupation as Mother Occupation',
        //     'motherBirthdate as Mother Birthdate', 
        //     'motherPhoneNumber as Mother Phone Number',
        //     'fatherName as Father Name',  
        //     'fatherOccupation as Father Occupation', 
        //     'fatherBirthdate as Father Birthdate',
        //     'fatherPhoneNumber as Father Phone Number',
        //     'nameOfSpouse as Name of Spouse',
        //     'occupationWithSpouse as Occupation with Spouse',
        //     'birthdateWithSpouse as Birthdate with Spouse', 
        //     'phoneNumberWithSpouse as Phone Number with Spouse'
        
        // )
        // ->where('applicant_id', $request->id)
        // ->get();

        // $data['main4'] = DB::table('applicants_form')->
        // select(    
        // 'nameOfChildren AS Name of Children',
        // 'childBirthdate AS Child Birthdate',
        // 'numDependents AS Number of Dependents',
        // 'hasRelativesEmployed AS Has Relatives Employed', 
        // 'degreeOfRelation AS Degree of Relation', 
        // 'relativesPosition AS Relatives Position',
        // 'postGraduate AS Post Graduate', 
        // 'postGraduateFromDate AS Post Graduate From Date',
        // 'postGraduateToDate AS Post Graduate To Date',
        // 'postGraduateDegree AS Post Graduate Degree', 
        // 'postGraduateAwards AS Post Graduate Awards', 
        // 'graduate AS Graduate', 
        // 'graduateDegree AS Graduate Degree', 
        // 'graduateFromDate AS Graduate From Date',
        // 'graduateToDate AS Graduate To Date', 
        // 'graduateAwards AS Graduate Awards' )->where('applicant_id',$request->id)->get();

        // $data['main5'] = DB::table('applicants_form')->
        // select(    
        //     'college as College',
        //     'collegeDegree as College Degree',
        //     'collegeFromDate as College From Date',
        //     'collegeToDate as College To Date',
        //     'collegeAwards as College Awards',
        //     'gradeSchool as Grade School',
        //     'schoolDegree as School Degree',
        //     'schoolFromDate as School From Date',
        //     'schoolToDate as School To Date',
        //     'schoolAwards as School Awards',
        //     'highSchool as High School',
        //     'highSchoolDegree as High School Degree',
        //     'highSchoolFromDate as High School From Date',
        //     'highSchoolToDate as High School To Date',
        //     'highSchoolAwards as High School Awards' )->where('applicant_id',$request->id)->get();

        // $data['main6'] = DB::table('applicants_form')->
        // select(    
        //     'techVoc AS Technical/Vocational Course',
        // 'techVocDegree AS Technical/Vocational Degree',
        // 'techVocFromDate AS Technical/Vocational From Date',
        // 'techVocToDate AS Technical/Vocational To Date',
        // 'techVocAwards AS Technical/Vocational Awards',
        // 'edu_units AS Educational Units',
        // 'edu_degree AS Educational Degree',
        // 'edu_from_date AS Educational From Date',
        // 'edu_to_date AS Educational To Date',
        // 'edu_awards AS Educational Awards',
        // 'professional_license AS Professional License',
        // 'registration_no AS Registration No.',
        // 'rating AS Rating',
        // 'reg_date AS Registration Date',
        // 'professional_awards AS Professional Awards',
        // 'special_skills AS Special Skills')->where('applicant_id',$request->id)->get();

        // $data['main7'] = DB::table('applicants_form')->
        // select(    
        //     'recommended_name as Recommended Name',
        //     'recommended_occupation as Recommended Occupation',
        //     'recommended_address as Recommended Address',
        //     'recommended_landline as Recommended Landline',
        //     'currently_employed as Currently Employed',
        //     'employment_type as Employment Type',
        //     'has_pending_case as Has Pending Case',
        //     'pending_case_details as Pending Case Details',
        //     'has_conviction as Has Conviction',
        //     'has_employment_history as Has Employment History',
        //     'employment_history_reason as Employment History Reason',
        //     'affiliation as Affiliation',
        //     'certify_information as Certify Information' )->where('applicant_id',$request->id)->get();

        $data['availabilities'] = DB::table('availabilities')
        ->select('avail_days', 'avail_from1 as Morning From', 'avail_to1 as Morning To',
         'avail_from2 as Afternoon From', 'avail_to2 as Afternoon To', 'avail_from3 as Evening From', 'avail_to3 as Evening To')
        ->where('applicant_id',$request->id)->get();

        $data['character_info'] = DB::table('character_info')->
        select('character_name as Name','character_occupation as Occupation',
        'character_address as Address','character_landline as Landline/Email')
        ->where('applicant_id',$request->id)->get();

        $data['courses'] = DB::table('courses')->
        select('courseTaught as Course Taught','expSchool as School',	'fromDate as From','toDate as To')
        ->where('applicant_id',$request->id)->get();

        $data['employment_history'] = DB::table('employment_history')
        ->select('company_name as Company Name','from_date as from date','to_date as to date','position as Position',
        'reason_for_leaving as Reason for Leaving')
        ->where('applicant_id',$request->id)->get();

        return json_encode($data);
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Ending ng pag download ng excel file~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // Uploading ng form
    public function uploadApplicant(Request $request)
    {

        // ito yung pag sasave ng details ni applicant (full name, email) and pag dididsplay.
 
        try {
            DB::beginTransaction();
            
            $full_name = $request->firstName." ". $request->middleName. ' ' . $request->lastName; 

  
      
        $test = Applicant::where('full_name', $full_name)->first();
        if(!$test)
        {
            $applicants = Applicant::insert([
                'full_name' => $full_name,
                'email' => $request->email,
                'phone' => $request->phone
            ]);

        }
        else{
            return 'exists';
        }
       //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Ending ng pag save and display~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

        if( $applicants)
        {
               $applicant = Applicant::where('full_name', $full_name)->first();
            $formData3 = $request->input('formData3');

            // pag store ng mga finill out ni applicant for teaching availabilities

            foreach($formData3 as $data)
            {
                $avail = DB::table('availabilities')->insert([
                    'avail_days' => $data['avail_days'], // use the array syntax to access properties
                    'avail_from1' => $data['avail_from1'] ,
                    'avail_to1' =>  $data['avail_to1'],
                    'avail_from2' => $data['avail_from2'] ,
                    'avail_to2' =>  $data['avail_to2'],
                    'avail_from3' =>  $data['avail_from3'],
                    'avail_to3' =>  $data['avail_to3'] ,
            
                    'applicant_id' => $applicant->id,
                ]);
            }
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~Ending ng pag store ng teaching availabilities~~~~~~~~~~~~~~~

            // pag store ng mga finill out ni applicant for Employment history

            $formData2 = $request->input('formData2');
            
            foreach($formData2 as $data)
            {
                $avail = DB::table('courses')->insert([
                    'courseTaught' => $data['courseTaught'],
                    'expSchool' => $data['expSchool'],
                    'fromDate' => $data['fromDate'] != NULL ? Carbon::parse($data['fromDate'])->toDateString() : NULL,
                    'toDate' => $data['toDate'] != NULL ? Carbon::parse($data['toDate'])->toDateString() : NULL,
                    'applicant_id' => $applicant->id,
                ]);
            }
            
            $formData = $request->input('formData12345');
            foreach($formData as $data)
            {
                $avail = DB::table('employment_history')->insert([
                    'company_name' => $data['companyName'],
                    'from_date' => $data['fromDate'] != NULL ? Carbon::parse($data['fromDate'])->toDateString() : NULL,
                    'to_date' => $data['toDate'] != NULL ? Carbon::parse($data['toDate'])->toDateString() : NULL,
                    'position' =>  $data['position'],
                    'reason_for_leaving' => $data['reasonForLeaving'],
                    'applicant_id' => $applicant->id,
                ]);
            }

            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~Ending ng pag store ng Employment History~~~~~~~~~~~~~~~
            

            // pag store ng mga finill out ni applicant for For Character References

            $formData4 = $request->input('formData4');
            foreach($formData4 as $data)
            {
                $avail = DB::table('character_info')->insert([
                    'character_name' => $data['character_name'],
                    'character_occupation' => $data['character_occupation'],
                    'character_address' => $data['character_address'],
                    'character_landline' =>  $data['character_landline'],
                    'applicant_id' => $applicant->id,
                ]);
            }
           
            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~Ending ng pag store ng character references~~~~~~~~~~~~~~~~~~~~

            // pag save ng mga fillout details papunta sa database
            
        $save = DB::table('applicants_form')->insert([
            'date'   	=> 	$request->date != NULL ? Carbon::parse($request->date)->toDateString() : NULL,   
            'position1'  	=> 	$request->position1,
            'position2'  	=> 	$request->position2,  
            'position3'  	=> 	$request->position3,  
            'salary1'  	=> 	$request->salary1,  
            'salary2'  	=> 	$request->salary2,  
            'salary3'   	=> 	$request->salary3,   
            'department'   	=> 	$request->department,   
            'learnedAboutJob'   	=> 	$request->learnedAboutJob,   
            'status'  	=> 	$request->status,  
            'emergencyContact'  	=> 	$request->emergencyContact,  
            'lastName'   	=> 	$request->lastName,   
            'firstName'   	=> 	$request->firstName,  
            'middleName'  	=> 	$request->middleName,  
            'nickname'   	=> 	$request->nickname,   
            'presentAddress'   	=> 	$request->presentAddress,   
            'cellPhone'  	=> 	$request->cellPhone,  
            'phone'  	=> 	$request->phone,  
            'provincialAddress'   	=> 	$request->provincialAddress,   
            'cellPhoneProvincial'  	=> 	$request->cellPhoneProvincial,  
            'email' 	=> 	$request->email, 
            'birthPlace' 	=> 	$request->birthPlace, 
            'birthdate' 	=> 	$request->birthdate != NULL ?   Carbon::parse($request->birthdate)->toDateString() : NULL, 
            'age' 	=> 	$request->age, 
            'sex'	=> 	$request->sex,
            'weight' 	=> 	$request->weight, 
            'height' 	=> 	$request->height, 
            'civilStatus' 	=> 	$request->civilStatus, 
            'citizenship'	=> 	$request->citizenship,
            'religion'	=> 	$request->religion,
            'healthCardNo' 	=> 	$request->healthCardNo, 
            'sssNo' 	=> 	$request->sssNo, 
            'tinNo'	=> 	$request->tinNo,
            'philHealthNo'	=> 	$request->philHealthNo,
            'pagIbigNo'	=> 	$request->pagIbigNo,
            'motherName' 	=> 	$request->motherName, 
            'motherOccupation'	=> 	$request->motherOccupation,
            'motherBirthdate' 	=> 	$request->motherBirthdate != NULL ? Carbon::parse($request->motherBirthdate)->toDateString() : NULL, 
            'motherPhoneNumber'	=> 	$request->motherPhoneNumber,
            'fatherName'  	=> 	$request->fatherName,  
            'fatherOccupation' 	=> 	$request->fatherOccupation, 
            'fatherBirthdate'	=> 	$request->fatherBirthdate != NULL ? Carbon::parse($request->fatherBirthdate)->toDateString() : NULL,
            'fatherPhoneNumber'	=> 	$request->fatherPhoneNumber,
            'nameOfSpouse'	=> 	$request->nameOfSpouse,
            'occupationWithSpouse'	=> 	$request->occupationWithSpouse,
            'birthdateWithSpouse' 	=> 	 $request->birthdateWithSpouse != NULL ? Carbon::parse($request->birthdateWithSpouse)->toDateString() : NULL, 
            'phoneNumberWithSpouse'	=> 	$request->phoneNumberWithSpouse,
            'nameOfChildren' 	=> 	$request->nameOfChildren, 
            'childBirthdate' 	=> 	$request->childBirthdate != NULL ? Carbon::parse($request->childBirthdate)->toDateString() : NULL, 
            'numDependents' 	=> 	$request->numDependents, 
            'hasRelativesEmployed' 	=> 	$request->hasRelativesEmployed, 
            'degreeOfRelation'	=> 	$request->degreeOfRelation,
            'relativesPosition' 	=> 	$request->relativesPosition, 
            'postGraduate' 	=> 	$request->postGraduate, 
            'postGraduateFromDate'	=> 	$request->postGraduateFromDate != NULL ? Carbon::parse($request->postGraduateFromDate)->toDateString() : NULL,
            'postGraduateToDate'	=> 	 $request->postGraduateToDate != NULL ? Carbon::parse($request->postGraduateToDate)->toDateString() : NULL,
            'postGraduateDegree'	=> 	$request->postGraduateDegree,
            'postGraduateAwards'  	=> 	$request->postGraduateAwards,  
            'graduate' 	=> 	$request->graduate, 
            'graduateDegree'	=> 	$request->graduateDegree,
            'graduateFromDate'	=> 	$request->graduateFromDate != NULL ? Carbon::parse($request->graduateFromDate)->toDateString() : NULL,
            'graduateToDate'	=> 	$request->graduateToDate != NULL ? Carbon::parse($request->graduateToDate)->toDateString() : NULL,
            'graduateAwards' 	=> 	$request->graduateAwards, 
            'college' 	=> 	$request->college, 
            'collegeDegree'	=> 	$request->collegeDegree,
            'collegeFromDate' 	=> 	$request->collegeFromDate != NULL ? Carbon::parse($request->collegeFromDate)->toDateString() : NULL, 
            'collegeToDate' 	=> 	$request->collegeToDate != NULL ? Carbon::parse($request->collegeToDate )->toDateString() : NULL, 
            'collegeAwards' 	=> 	$request->collegeAwards, 
            'gradeSchool'  	=> 	$request->gradeSchool,  
            'schoolDegree'  	=> 	$request->schoolDegree,  
            'schoolFromDate'  	=> 	$request->schoolFromDate != NULL ? Carbon::parse($request->schoolFromDate )->toDateString() : NULL,  
            'schoolToDate'   	=> 	 $request->schoolToDate != NULL ? Carbon::parse($request->schoolToDate)->toDateString() : NULL,   
            'schoolAwards'  	=> 	$request->schoolAwards,  
            'highSchool'  	=> 	$request->highSchool,  
            'highSchoolDegree'  	=> 	$request->highSchoolDegree,  
            'highSchoolFromDate' 	=> 	$request->highSchoolFromDate != NULL ? Carbon::parse($request->highSchoolFromDate )->toDateString() : NULL, 
            'highSchoolToDate'   	=> $request->highSchoolToDate != NULL ? Carbon::parse(	$request->highSchoolToDate )->toDateString() : NULL,   
            'highSchoolAwards'   	=> 	$request->highSchoolAwards,   
            'techVoc'  	=> 	$request->techVoc,  
            'techVocDegree'  	=> 	$request->techVocDegree,  
            'techVocFromDate'  	=> 	$request->techVocFromDate != NULL ? Carbon::parse($request->techVocFromDate )->toDateString() : NULL,  
            'techVocToDate'  	=> 	$request->techVocToDate != NULL ? Carbon::parse($request->techVocToDate )->toDateString() : NULL,  
            'techVocAwards'  	=> 	$request->techVocAwards,  
            'edu_units'  	=> 	$request->eduUnits,  
            'edu_degree' 	=> 	$request->eduDegree, 
            'edu_from_date' 	=> 	$request->eduFromDate != NULL ? Carbon::parse($request->eduFromDate)->toDateString() : NULL,  
            'edu_to_date'  	=> 	$request->eduToDate != NULL ? Carbon::parse($request->eduToDate)->toDateString() : NULL,  
            'edu_awards' 	=> 	$request->eduAwards, 
            'professional_license' 	=> 	$request->professionalLicense, 
            'registration_no'   	=> 	$request->registrationNo,   
            'rating' 	=> 	$request->rating, 
            'reg_date' 	=> 	 $request->regDate != NULL ? Carbon::parse($request->regDate)->toDateString() : NULL, 
            'professional_awards'  	=> 	$request->professionalAwards,  
            'special_skills'  	=> 	$request->specialSkills,  
            'recommended_name'   	=> 	$request->recommendedName,   
            'recommended_occupation'   	=> 	$request->recommendedOccupation,   
            'recommended_address'  	=> 	$request->recommendedAddress,  
            'recommended_landline'   	=> 	$request->recommendedLandline,   
            'currently_employed'   	=> 	$request->currentlyEmployed,   
            'employment_type'  	=> 	$request->employmentType  ,
            'has_pending_case'   	=> 	$request->hasPendingCase ,  
            'pending_case_details'  	=> 	$request->pendingCaseDetails  ,
            'has_conviction'   	=> 	$request->hasConviction,   
            'has_employment_history'   	=> 	$request->hasEmploymentHistory,   
            'employment_history_reason'   	=> 	$request->employmentHistoryReason,   
            'affiliation'  	=> 	$request->affiliation,  
            'certify_information'  	=> 	$request->certifyInformation,  
            'applicant_id' => $applicant->id            
            
        ]);
    }
        
        DB::commit();
        return $save;
    } catch (\Exception $e) {
        DB::rollBack();
        return $e;
        // Handle the exception
        // ...
    }
        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Ending ng pag save sa database~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    }
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Ending ng Upload form~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    // pag download ng resume
    public function downloadResume(Request $request)
    {
        // $resume_id = Applicant_info::select('resumes_id')->where('applicant_id', $request->id)->orderBy('id','desc')->limit(1)->get();
        $getresumelink = Resume::select('file_name')->where('applicant_id',$request->id)->get();

        $url = Storage::url('public/resumes/'.$getresumelink[0]->file_name);
        return $url ;
        }

        // ~~~~~~~~~~~~~~~~~~~~~~~~~Ending ng pag download ng resume~~~~~~~~~~~~~~~~~~~~~~~~~~`

        // Para makuha yung sorted list ng applicant

    public function get_applicants_sorted()
    {
        // $data['applicant'] = Applicant::join('applicant_info', 'applicant.id', '=', 'applicant_info.applicant_id')
        // ->join('jobs', 'jobs.id', '=', 'applicant_info.job_id')
        // ->select('applicant.full_name', 'applicant.email','jobs.Level_ID','applicant.id')
        // ->groupBy('applicant.full_name', 'applicant.email','jobs.Level_ID','applicant.id')
        // ->get();

        $data['applicant'] = Applicant::select('id','full_name','email')->get();

        $jobs_skills = Skills_jobs::select('title')->get();
 
        foreach($data['applicant'] as $item)
        {
            $applicant_skill = DB::table('applicant_info as a')
            ->join('skills_jobs as s', 's.id', '=', 'a.skills_id')
            ->select('s.title')
            ->where('a.applicant_id', '=', $item->id)
            ->get();
   
                        
                      
            $applicant_titles = collect($applicant_skill)->pluck('title');
            $job_titles = collect($jobs_skills)->pluck('title');
            $matching_titles = $applicant_titles->intersect($job_titles)->count();
            $total_titles = $job_titles->count();

            $percentage = $total_titles > 0 ? ($matching_titles / $total_titles) * 100 : 0;

            $data['match'][] = ceil($percentage);
        }

        // $applicant_skills = Applicant_info::select('skills_id')->where('job_id',$request->id)->get();



        return $data; 

    }

    // ~~~~~~~~~~~Ending ng pagkuha ng sorted applicant at paglist~~~~~~~~~~~~~~~~~~~~~~~

    // pagkuha at pagmatch ng info ni applicant

    public function get_applicants_info(Request $request)
    {
        // $data['applicant'] = Applicant::join('applicant_info', 'applicant.id', '=', 'applicant_info.applicant_id')
        // ->join('jobs', 'jobs.id', '=', 'applicant_info.job_id')
        // ->select('applicant.full_name', 'applicant.email','jobs.Level_ID','applicant.id')
        // ->where('applicant_info.applicant_id', $request->id)
        // ->groupBy('applicant.full_name', 'applicant.email','jobs.Level_ID','applicant.id')
        // ->get();

        // from database, applicant table
        $data['applicant'] = Applicant::select('id','full_name','email')->where('id',$request->id)->get();


     
 
        foreach($data['applicant'] as $item)
        {
            $data['applicant_skill'] = DB::table('applicant_info as a')
            ->join('skills_jobs as s', 's.id', '=', 'a.skills_id')
            ->select('s.title')
            ->where('a.applicant_id', '=', $item->id)
            ->get();
   
            $data['applicant_exp'] = DB::table('applicant_info as a')
            ->join('work_experience_jobs as wj', 'wj.id', '=', 'a.work_experience_id')
            ->select('wj.description')
            ->where('a.applicant_id', '=', $item->id)
            ->get();     
        }

  

        // $applicant_skills = Applicant_info::select('skills_id')->where('job_id',$request->id)->get();



        return $data; 

    }
        
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Ending ng pagkuha at pagmatch~~~~~~~~~~~~~~~~~~~~`

        // ~~~~~~~~~~~~~`pag display ni applicant after magmatch yung mga data/information sa specific job~~~~~~~~~~~~~~~~~~~~

    public function get_applicants(Request $request)
    {
        $data['applicant'] = Applicant::join('applicant_info', 'applicant.id', '=', 'applicant_info.applicant_id')
        ->join('jobs', 'jobs.id', '=', 'applicant_info.job_id')
        ->select('applicant.full_name', 'applicant.email','jobs.Level_ID','applicant.id')
        ->where('applicant_info.job_id', $request->id)
        ->groupBy('applicant.full_name', 'applicant.email','jobs.Level_ID','applicant.id')
        ->get();

    


       // Get job educational background and work experience
        $jobs_skills = Skills_jobs::select('title')->where('job_id', $request->id)->get();
        $work_exp = Work_experience_jobs::select('description')->where('job_id', $request->id)->get();

        foreach ($data['applicant'] as $applicant) {
            // Get applicant work experience and educational background
            $applicant_work_exp = DB::table('applicant_info as a')
                ->join('work_experience_jobs as exp', 'exp.id', '=', 'a.work_experience_id')
                ->select('exp.description')
                ->where('exp.job_id', '=', $request->id)
                ->where('a.applicant_id', '=', $applicant->id)
                ->get();

                $applicant_skills = DB::table('applicant_info as a')
                ->join('skills_jobs as s', 's.id', '=', 'a.skills_id')
                ->select('s.title')
                ->where('s.job_id', '=', $request->id)
                ->where('a.applicant_id', '=', $applicant->id)
                ->get();


            // computation para makuha yung percent ni applicant (work exp + educ bg)

            // Get matching experience percentage
            $applicant_descriptions = collect($applicant_work_exp)->pluck('description');
            $matching_experience_count = $applicant_descriptions->intersect($work_exp->pluck('description'))->count();
            $total_experience_count = $work_exp->count();
            $matching_experience_percentage = $total_experience_count > 0 ? ($matching_experience_count / $total_experience_count) * 0.6 : 0;
            // $matching_experience_percentage = $total_experience_count > 0 ? ($matching_experience_count / $total_experience_count) * 100 : 0;


            // Get matching Educational Background percentage
            $applicant_titles = collect($applicant_skills)->pluck('title');
            $matching_skills_count = $applicant_titles->intersect($jobs_skills->pluck('title'))->count();
            $total_skills_count = $jobs_skills->count();
            $matching_skills_percentage = $total_skills_count > 0 ? ($matching_skills_count / $total_skills_count) * 0.4 : 0;
            // $matching_skills_percentage = $total_skills_count > 0 ? ($matching_skills_count / $total_skills_count) * 100 : 0;
            
    
            // Calculate match percentage
            $match_percentage = ($matching_experience_percentage + $matching_skills_percentage) *100;
            // $match_percentage = ($matching_experience_percentage + $matching_skills_percentage) / 2 ;

            // Add match percentage to data array
            $data['match'][] = ceil($match_percentage);
        }

        // $applicant_skills = Applicant_info::select('skills_id')->where('job_id',$request->id)->get();


        // match percentage yung irereturn
        return $data; 

        //~~~~~~~~~~~~~~~~~~~Ending ng pagkuha ng match percentage~~~~~~~~~~~~~~~~~~~~~~~~~

    }

        // pag extract ng information sa pdf file

    public function upload(Request $request)
    {


        $full_name = $request->firstName." ". $request->middleName. ' ' . $request->lastName; 

     
        $fullname = "";
        $date = Carbon::now();
        $mainfile = $request->file('file');
        if( $mainfile->getClientOriginalExtension() == "pdf")
        {

   

          if ($request->hasFile('file')) {
            $file = $request->file('file');
            // Validate the uploaded file
            $request->validate([
              'file' => 'required|mimes:pdf|max:10000',
            ]);
   
    
            // Save the file information to the database
  
     
    
      
          } 
      

        $file = $request->file('file');
        $fileName1 = $date->format('Y-m-d')."_job".$request->id."_".$file->getClientOriginalName();
    
    
        $parser = new Parser();
        $pdf = $parser->parseFile($file);

        $text = $pdf->getText();
    
       

        $skills = Skills_jobs::select('id','title')->where('job_id',$request->id)->get();
 
        $exp = Work_experience_jobs::select('id','description','job_id')->where('job_id',$request->id)->get();

    $data = [
        'NAME' => '',
        'PHONE' => '',
        'EMAIL' =>'',
        'SKILLS' =>'',
        ];
        
        $cleanedInput = str_replace(' ', '', $text);

        // extarcting ng may mga words na name, email, phone, address inside ng resume

        if (preg_match('/Name: (.*)/i', $cleanedInput, $matches)) {
            $name = $matches[1];
            $remove_array = array("ADDRESS: ", "EMAIL: ", "PHONE: ", "Address", "Email");
            foreach ($remove_array as $remove) {
                if (strpos($name, $remove) !== false) {
                    $name = preg_replace('/' . preg_quote($remove) . '.*\s/', '', $name, 1);
                }
            }
            $data['NAME'] = $name;
        }

        // ~~~~~~~~~~~~~~~~~~~~~~`Ending ng extarcting ng may mga words na name, email, phone, address inside ng resume~~~~~~~~~~~

        // pagkuha ng phone number sa loob ng resume 

        if (preg_match('/Phone: (.*)/i', $text, $matches)){
            $phone = $matches[1];
            $remove_array = array( "ADDRESS: ", "EMAIL: ",  "Email: ");
            foreach ($remove_array as $remove) {
                if (strpos($phone, $remove) !== false) {
                    $phone = preg_replace('/' . preg_quote($remove) . '.*\s/', '',  $phone, 1);
                }
            }
             $data['PHONE'] = $phone;
        }

        

       if( preg_match('/\b\d{3}-\d{3}-\d{4}\b/', $text, $matches)){
        $data['PHONE'] = trim($matches[0]);
       }

       // ~~~~~~~~~~ending ng pagkuha ng phone number sa loon ng resume~~~~~~~~~~~~

       
       if (preg_match('/WORK EXPERIENCES\n(.*?)\n(?:\w|\d)/s', $cleanedInput, $matches)) {
        $work = $matches[1];
        $remove_array = array("ADDRESS: ", "EMAIL: ", "PHONE: ", "Address", "Email", "SKILLS", "Skills");
        foreach ($remove_array as $remove) {
            if (strpos($work, $remove) !== false) {
                $work = preg_replace('/' . preg_quote($remove) . '.*\s/', '', $work, 1);
            }
        }
        $data['WORK_EXPERIENCE'] = $work;

    }
    if (preg_match('/WORK EXPERIENCES(.*?)SKILLS/s', $cleanedInput, $matches)) {
        $work = trim($matches[1]);
        $data['WORK_EXPERIENCE'] = $work;
    }
  
   


        if (preg_match('/Email: (.*)/i', $text, $matches) || preg_match('/@: (.*)/i', $text, $matches)) {
            $email = $matches[1];
            if (strpos($email, '.com') !== false) {
                $email = preg_replace('/\.com.*$/', '.com', $email);
            }
            $data['EMAIL'] = $email;
          }

          $skill_ids = [];
          foreach ($skills as $skill) {
            $title_parts = explode(" ", $skill->title); // split the skill title into an array of words
            $match = true;
            foreach ($title_parts as $part) {
              if (stripos($cleanedInput, $part) === false) { // check if the input contains each word in the skill title
                $match = false;
                break;
              }
            }
            if ($match) {
              array_push($skill_ids, $skill->id);
            }
          }
       

          
          $work_ids = [];
          foreach ($exp as $exps) {
            $title_parts = explode(" ", $exps->description); // split the skill title into an array of words
            $match = true;
            foreach ($title_parts as $part) {
              if (stripos($cleanedInput, $part) === false) { // check if the input contains each word in the skill title
                $match = false;
                break;
              }
            }
            if ($match) {
              array_push($work_ids, $exps->id);
            }
          }
       
       
                //  $work_ids = [];
                //   foreach ($exp as $exps) {
                //     if (stripos($cleanedInput, $exps->description) !== false) {
                //       array_push($work_ids, $exps->id);
                     
                //     }
                //   }


                if($data['PHONE'] == "")
                {
                    $pattern = "/\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/";

                    // Use preg_match_all to extract all phone numbers from the text
                    preg_match_all($pattern, $cleanedInput, $matches);
    
                    // Check if any phone numbers were found
                    if (!empty($matches[0])) {
                        // Print the extracted phone numbers
                        $data['PHONE'] = $matches[0];
                        
                    }
                }
             

                    
               

          $originalName = $file->getClientOriginalName();
            $fileName = pathinfo($originalName, PATHINFO_FILENAME);

      if($data['NAME'] == "")
          $fullname =   $fileName;
          else 
          $fullname = $data['NAME'];
        
    
 
    

        
            $file->storeAs('public/resumes', $fileName1);
            $email = $data['EMAIL'];
            $phone = $data['PHONE'];


            if($email == "" || $email == NULL)
            {
               
             

                if (preg_match('/Email:\s*([\w.-]+@[\w.-]+\.[a-zA-Z]{2,})/', $text, $matches)) {
                    $email = $matches[0];
                }

                if (preg_match('/[a-z0-9_\-\+\.]+@[a-z0-9\-]+\.([a-z]{2,3})(?:\.[a-z]{0})?/i', $text, $matches)) {
                  
                    $email = $matches[0];
                             }


            }

   
            if (preg_match('/\d{4}-\d{3}-\d{4}/', $text, $matches)) {
                $phone = $matches[0];
            } 
            else{
                $phone = NULL;
            }

            if($phone == NULL)
            {

                if (preg_match('/Phon\s*e:\s*(\d{4})\s*-\s*(\d{3})\s*-\s*(\d{4})/', $text, $matches)) {
                  
                   $phone = $matches[1] . '-' . $matches[2] . '-' . $matches[3];
                             }
    
              

                            } 
    

            $applicant = Applicant::where('full_name', $full_name)->first();
            if($applicant)
            {
                // $applicant = Applicant::insert([
                //     'full_name' => $fileName,
                //     'email' => $email,
                //     'phone' => $phone
                // ]);
                $applicant = Applicant::where('full_name', $full_name)->first();
        

 
            
      
            $jobs = Resume::insert([
                'file_name' => $fileName1,
                'applicant_id' => $applicant->id
            ]);
    
    
            $resume = Resume::orderBy('id', 'desc')->first();
            
            foreach ($skill_ids as $skill_id) {
                Applicant_info::insert([
                    'applicant_id' => $applicant->id,
                    'job_id' => $request->id,
                    'skills_id' => $skill_id,
                    'resumes_id' => $resume->id
                ]);
            }
    
    
                   
            foreach ($work_ids as $work_id) {
                Applicant_info::insert([
                    'applicant_id' => $applicant->id,
                    'job_id' => $request->id,
                    'work_experience_id' => $work_id,
                    'resumes_id' => $resume->id
                ]);
            }
          
        }
          
           
            foreach ($data as $key => $value) {
                echo "<br>{$key}: {$value}<br>";
                }  
               
       
       
       
   
         
             
            }
             

    else if($mainfile->getClientOriginalExtension() == "docx") {

                if ($request->hasFile('file')) {
                    $file = $request->file('file');
                    // Validate the uploaded file
                    $request->validate([
                      'file' => 'required|mimes:docx|max:10000',
                    ]);
    
              
                  } 
              
        
                $file = $request->file('file');
                $fileName1 = $date->format('Y-m-d')."_job".$request->id."_".$file->getClientOriginalName();
           
          
                $phpWord = \PhpOffice\PhpWord\IOFactory::load($file);

                $text = '';
                foreach ($phpWord->getSections() as $section) {
                    foreach ($section->getElements() as $element) {
                        if ($element instanceof \PhpOffice\PhpWord\Element\Text) {
                            $text .= $element->getText();
                        } elseif ($element instanceof \PhpOffice\PhpWord\Element\TextRun) {
                            foreach ($element->getElements() as $runElement) {
                                if ($runElement instanceof \PhpOffice\PhpWord\Element\Text) {
                                    $text .= $runElement->getText();
                                }
                            }
                        }
                    }
                }
             
              
                $skills = Skills_jobs::select('id','title')->where('job_id',$request->id)->get();
                $exp = Work_experience_jobs::select('id','description','job_id')->where('job_id',$request->id)->get();
        
            $data = [
                'NAME' => '',
                'PHONE' => '',
                'EMAIL' =>'',
                'SKILLS' =>'',
                ];
                
                $cleanedInput = str_replace(' ', '', $text);
        
                if (preg_match('/Name: (.*)/i', $text, $matches)) {
                    $name = $matches[1];
                    $remove_array = array("ADDRESS: ", "EMAIL: ", "PHONE: ", "Address", "Email");
                    foreach ($remove_array as $remove) {
                        if (strpos($name, $remove) !== false) {
                            $name = preg_replace('/' . preg_quote($remove) . '.*\s/', '', $name, 1);
                        }
                    }
                    $data['NAME'] = $name;
                }
        
        
                if (preg_match('/Phone: (.*)/i', $text, $matches)){
                    $phone = $matches[1];
                    $remove_array = array( "ADDRESS: ", "EMAIL: ",  "Email: ");
                    foreach ($remove_array as $remove) {
                        if (strpos($phone, $remove) !== false) {
                            $phone = preg_replace('/' . preg_quote($remove) . '.*\s/', '',  $phone, 1);
                        }
                    }
                     $data['PHONE'] = $phone;
                }
      
          
         

        
               if (preg_match('/WORK EXPERIENCES\n(.*?)\n(?:\w|\d)/s', $text, $matches)) {
                $work = $matches[1];
                $remove_array = array("ADDRESS: ", "EMAIL: ", "PHONE: ", "Address", "Email", "SKILLS", "Skills");
                foreach ($remove_array as $remove) {
                    if (strpos($work, $remove) !== false) {
                        $work = preg_replace('/' . preg_quote($remove) . '.*\s/', '', $work, 1);
                    }
                }
                $data['WORK_EXPERIENCE'] = $work;
        
            }
            if (preg_match('/WORK EXPERIENCES(.*?)SKILLS/s', $text, $matches)) {
                $work = trim($matches[1]);
                $data['WORK_EXPERIENCE'] = $work;
            }
        
                if (preg_match('/Email: (.*)/i', $text, $matches) || preg_match('/@: (.*)/i', $text, $matches)) {
                    $email = $matches[1];
                    if (strpos($email, '.com') !== false) {
                        $email = preg_replace('/\.com.*$/', '.com', $email);
                    }
                    $data['EMAIL'] = $email;
                  }
        

                 
                  $skill_ids = [];
                  foreach ($skills as $skill) {
                    $title_parts = explode(" ", $skill->title); // split the skill title into an array of words
                    $match = true;
                    foreach ($title_parts as $part) {
                      if (stripos($cleanedInput, $part) === false) { // check if the input contains each word in the skill title
                        $match = false;
                        break;
                      }
                    }
                    if ($match) {
                      array_push($skill_ids, $skill->id);
                    }
                  }
               
        
                  
                  $work_ids = [];

              
                  foreach ($exp as $exps) {
                    
                    $title_parts = explode(" ", $exps->description); // split the skill title into an array of words
                    $match = true;

                 
                    foreach ($title_parts as $part) {
                       
                      if (stripos($text, $part) === false) { // check if the input contains each word in the skill title
                        $match = false;
                        break;
                      }
                    }
                    if ($match) {
                      array_push($work_ids, $exps->id);
                    }
                  }
    
               
        
                  $originalName = $file->getClientOriginalName();
                    $fileName = pathinfo($originalName, PATHINFO_FILENAME);
        
                
                  $applicant_name = Applicant::where('full_name', $fullname)->first();
                  if( $applicant_name)
                $checkifexisting = Applicant_info::where('applicant_id', $applicant_name->id)->get();
                else
                $checkifexisting = [];

             
                if(count($checkifexisting) < 1)
                {
                    $file->storeAs('public/resumes', $fileName1);
                    $email = $data['EMAIL'];
         
                    if($email == "" || $email == NULL)
                    {
                                 if (preg_match('/Email:\s*([\w.-]+@[\w.-]+\.[a-zA-Z]{2,})/', $text, $matches)) {
                  
                        $email = $matches[1];
                                 }

                                 if (preg_match('/[a-z0-9_\-\+\.]+@[a-z0-9\-]+\.([a-z]{2,3})(?:\.[a-z]{0})?/i', $text, $matches)) {
                  
                                    $email = $matches[0];
                                             }
            
        
                    }

                  

               
                    if (preg_match('/\d{4}-\d{3}-\d{4}/', $text, $matches)) {
                        $phone = $matches[0];
                    } 
                    else{
                        $phone = NULL;
                    }

                  
                    if($phone == NULL )
                    {
                        if (preg_match('/Phon\s*e:\s*(\d{4})\s*-\s*(\d{3})\s*-\s*(\d{4})/', $text, $matches)) {
                  
                            $phone = $matches[1] . '-' . $matches[2] . '-' . $matches[3];
                                      }
                    }

                    
                

              
                    $applicant = Applicant::where('full_name', $full_name)->first();
                    if(!$applicant)
                    {
                        // $applicant = Applicant::insert([
                        //     'full_name' => $fileName,
                        //     'email' => $email,
                        //     'phone' => $phone
                        // ]);
                        $applicant = Applicant::where('full_name', $full_name)->first();
                
        
         
                    
              
                    $jobs = Resume::insert([
                        'file_name' => $fileName1,
                        'applicant_id' => $applicant->id
                    ]);
            
            
                    $resume = Resume::orderBy('id', 'desc')->first();
                    
                    foreach ($skill_ids as $skill_id) {
                        Applicant_info::insert([
                            'applicant_id' => $applicant->id,
                            'job_id' => $request->id,
                            'skills_id' => $skill_id,
                            'resumes_id' => $resume->id
                        ]);
                    }
            
            
                           
                    foreach ($work_ids as $work_id) {
                        Applicant_info::insert([
                            'applicant_id' => $applicant->id,
                            'job_id' => $request->id,
                            'work_experience_id' => $work_id,
                            'resumes_id' => $resume->id
                        ]);
                    }
                  
                }
                  
                    
                    foreach ($data as $key => $value) {
                        echo "<br>{$key}: {$value}<br>";
                        }  
                       
                }
                else{ return "exist"; }
               
                    

      
      



  
}
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~Ending ng pag extract~~~~~~~~~~~~~~~~~~~~~~~~~~```

    // kinukuha yung mga na extract

    public function get_all(Request $request)
    {

     
        $data['jobs'] = Jobs::where('id', $request->id)->get();
        $data['skills'] = Skills_jobs::where('job_id', $request->id)->get();
        $data['exp'] = Work_experience_jobs::where('job_id', $request->id)->get();

        return $data;

    }

    //~~~~~~~~~~~~~~~~ending ng pagkuha~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    

    // Create ng new job

    public function save_jobs(Request $request)
    {

     
        

        try {
            $ifexists = $jobs = Jobs::select('title')->where('title', $request->jobTitle)->get();
         
            if(count($ifexists)  <= 0)
            {
                
            $jobs = Jobs::insert([
                'description' => $request->jobDescription,
                'title' => $request->jobTitle,
                'Level_ID' => $request->id,
                'Status' => $request->status
            ]);
         
        


            if ($jobs) {
                $last_job = Jobs::select('id')->orderBy('id', 'desc')->limit(1)->first();

                $cid = $last_job->id;
             
              
              foreach ($request->skills as $item) {    
              $skills = Skills_jobs::insert([
                    'title' => $item,
                    'job_id' => $cid
                ]);
              }

              foreach ($request->workExperience as $item) {    
                $skills = Work_experience_jobs::insert([
                      'description' => $item,
                      'job_id' => $cid
                  ]);
                }

            }
            return "Success";
            }
            else{
                return "exists";
            }

          } catch (\Exception $e) {
            // Handle the exception
            return($e);
          }
        
         
       
        
    }

    // ~~~~~~~~~~~~~~~~~~~~~Ending ng create new job~~~~~~~~~~~~~~~~~

    // pag get ng mga job depending sa category
    public function get_jobs(Request $request){

        return Jobs::where('Level_ID',$request->id)->get();
    }
    // ~~~~~~~~~~~~~~~~~Ending ng pagkuha ng job~~~~~~~~~~~~~~~~~~~~~

    // update ng jobs

    public function update_jobs(Request $request)
    {

        
     
        try{
            
      
            $jobs = Jobs::where('id',$request->id)->update([
                'title' => $request->jobTitle,
                'description' => $request->jobDescription,
                'status' => $request->status
            ]);

            $noteixtid = [];
            $exp_id = [];

            foreach ($request->skills as $item) {    


                $skillsupdate = Skills_jobs::updateOrCreate(
                    ['title' => $item, 'job_id' => $request->id],
                    ['title' => $item]
                );

                $skills = Skills_jobs::where('title', $item)->where('job_id', $request->id)->get();

                // If skills were found, add their IDs to the array
                if ($skillsupdate) {
                    foreach ($skills as $skill) {
                        $noteixtid[] = $skill->id;
                    }
                }
             

            
                }

             

                foreach ($request->workExperience as $item) {    
                    $exp = Work_experience_jobs::updateOrCreate(
                        ['job_id' => $request->id, 'description' => $item],
                        ['description' => $item]
                    );

                    $word_exp = Work_experience_jobs::where('description', $item)->where('job_id', $request->id)->get();
                    if ($exp) {
                        foreach ($word_exp as $word_exps) {
                            $exp_id[] = $word_exps->id;
                        }
                    }
                 
                    }

               
                    Skills_jobs::where('job_id', $request->id)->whereNotIn('id', $noteixtid)->delete();
                    Applicant_info::where('job_id', $request->id)->whereNotIn('skills_id', $noteixtid)->delete();
                    Work_experience_jobs::where('job_id', $request->id)->whereNotIn('id', $exp_id)->delete();
                    Applicant_info::where('job_id', $request->id)->whereNotIn('work_experience_id', $exp_id)->delete();
                    return $noteixtid;
         
                }
                catch (\Exception $e) {
                    // Handle the exception
                    return($e);
                  }




    }

    // ~~~~~~~~~~~~~~~~~~~~~Ending pag update ng jobs~~~~~~~~~~~~~~~~~~~~~~~~~~

    // pagdisplay ng mga hinahanap na qualifications per job posting

    public function get_jobs_by_id(Request $request){


        $data['jobs'] = Jobs::where('id',$request->id)->get();
        $data['skills'] = Skills_jobs::select('title')->where('job_id',$request->id)->get();
        $data['exp'] = Work_experience_jobs::select('description')->where('job_id',$request->id)->get();
        return  $data;
    }

    // ~~~~~~~~~~~~~~~~~~~ending ng pagdisplay per job posting~~~~~~~~~~~~~~~~~~~~~

    // pagkuha ng percentage ni applicant na ididisplay sa sorted applicants per category (with their matched information)
 
    public function get_percentage(Request $request)
    {
        $data['jobs'] = Jobs::where('id',$request->id)->get();
        $data['skills'] = Skills_jobs::select('title')->where('job_id',$request->id)->get();
        $data['exp'] = Work_experience_jobs::select('description')->where('job_id',$request->id)->get();
        $data['app_info_skills'] =  Applicant_info::select('skills_id')->where('job_id',$request->id)->get();

        return  $data;
    }

    //~~~~~~~~~~~~~~~~~ending ng pag display ng percentage~~~~~~~~~~~~~~~~~~~~~~~~

    // pagdisplay ng job per category
    public function get_level_by_id(Request $request){

        return DB::table('level')->select('title')->where('id',$request->id)->get();
    }

    //~~~~~~~~~~~~end ng pagdisplay~~~~~~~~~~~~~~~~``

    // para ma display if active or not active si job
    public function jobs(){

        return Jobs::where('Status',1)->get();
    }
    // ~~~~~~~~~~~ending ng pagdisplay if active or not~~~~~~~~~~~~~

}
