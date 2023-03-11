<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\JobsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/applicantform/{id}', function () {
    return Inertia::render('EmployeeForm');
})->name('EmployeeForm');

Route::get('/joblist', function () {
    return Inertia::render('JobList');
})->middleware(['auth', 'verified'])->name('JobList');

Route::get('/applicants', function () {
    return Inertia::render('Applicants');
})->middleware(['auth', 'verified'])->name('Applicants');


Route::get('/Sortedresume', function () {
    return Inertia::render('SortedResume');
})->middleware(['auth', 'verified'])->name('SortedResume');

// Route::get('/department', function () {

//     return Inertia::render('Department');
// })->middleware(['auth', 'verified'])->name('department');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/level', function () {
    $data = DB::table('level')->get();
    return response()->json($data);
});


Route::post('/get_jobs', [JobsController::class, 'get_jobs'])->name('get.jobs');
Route::post('/get_jobs_by_id', [JobsController::class, 'get_jobs_by_id'])->name('get.get_jobs_by_id');
Route::get('/get_applicants_sorted', [JobsController::class, 'get_applicants_sorted'])->name('get_applicants_sorted');
Route::get('/jobs', [JobsController::class, 'jobs'])->name('jobs');
Route::post('/get_level_by_id', [JobsController::class, 'get_level_by_id'])->name('get_level_by_id');
Route::post('/downloadResume', [JobsController::class, 'downloadResume'])->name('downloadResume');
Route::post('/uploadApplicant', [JobsController::class, 'uploadApplicant'])->name('uploadApplicant');
Route::post('/getCSV', [JobsController::class, 'getCSV'])->name('getCSV');
Route::post('/save_jobs', [JobsController::class, 'save_jobs'])->name('save.jobs');
Route::post('/get_all', [JobsController::class, 'get_all'])->name('save.get_all');
Route::post('/get_applicants', [JobsController::class, 'get_applicants'])->name('save.get_applicants');

Route::post('/get_applicants_info', [JobsController::class, 'get_applicants_info'])->name('get_applicants_info');
Route::post('/update_jobs', [JobsController::class, 'update_jobs'])->name('save.update_jobs');
Route::post('/get_percentage', [JobsController::class, 'get_percentage'])->name('save.update_jobs');

Route::get('/getdepartment/{id}', function ($id) {
    $data = DB::table('department')->where('level_id', $id)->get();
    return response()->json($data);
    });

Route::post('/upload/resume', [JobsController::class, 'upload'])->name('save.upload');


require __DIR__.'/auth.php';
