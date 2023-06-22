import { useState, useTransition, lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'


// import AdminDashboard from '../../components/AdminDashboard'

const AdminDashboard = lazy(() => import('../../components/AdminDashboard'))

const Home = () => {
    const [isAdmin, setIsAdmin] = useState(false)

    const [isPending, startTransition] = useTransition();

  return (
    <div className="bg-gray-300 w-screen h-screen">

        <button
            className="fixed top-0 right-0 m-4 px-4 py-2 bg-blue-500 text-white rounded-md"
            onClick={() => {
                startTransition(() => {
                    setIsAdmin(!isAdmin)
                })
            }}
        >
            Toggle Admin
        </button>

        <Suspense fallback={<div>Loading...</div>}>
            {
                isAdmin ? (
                    <div className="fixed top-0 left-0 m-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                        <AdminDashboard />
                    </div>
                ) : (
                    <div className={`fixed top-0 left-0 m-4 px-4 py-2 bg-red-500 text-white rounded-md ${isPending && 'opacity-50'}`}>
                        Not Admin
                    </div>
                )

            }
        </Suspense>


        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-gray-800">Home</h1>
            <Link to="/about" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">About</Link>

            <Link to="/contact" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Contact</Link>

            <Link to="/notfound" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">NotFound</Link>

        </div>
    </div>
  )
}
export default Home