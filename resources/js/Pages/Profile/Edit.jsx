import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
        auth={auth}
        header={<div style={{textAlign: 'right'}}>

    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
        Dashboard</NavLink>
        <NavLink href={route('JobList')} active={route().current('JobList')}>
        Job Posting</NavLink>
        <NavLink href={route('Applicants')} active={route().current('Applicants')}>
        Applicants</NavLink>
        </div>}>
        <Head title="Profile" />
        
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {/* <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div> */}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
