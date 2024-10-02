import LoginForm from '../../ui/login-form';
export default function LoginPage(){
    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-gray-800 dark:to-gray-900 dark:text-white">
            <div className="w-full max-w-sm p-4 bg-white  rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-900 dark:border-gray-700">
                <LoginForm/>
            </div>
        </div>
    )
}