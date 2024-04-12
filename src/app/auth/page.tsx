import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
    return (
        <section className='container mx-auto'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto'>
                <div className='flex mb-8 flex-col md:flex-row item-center justify-between'>
                    <h1 className='text-xl font-bold loading-tight tracking-tight md:text-2xl '>Create an account</h1>
                    <p>OR</p>
                    <span className="inline-flex items-center"></span>
                    <AiFillGithub className='mr-1 text-4xl cursor-pointer text-black dark:text-white' />

                    <FcGoogle className='ml-3 text-4xl cursor-pointer' />
                </div>
            </div>
        </section>
    )
}

export default Auth;