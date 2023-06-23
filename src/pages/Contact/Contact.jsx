import { Link } from "react-router-dom"
import ThrottledButton from "../../components/Throttling/ThrottledButton"
import ThrottledScrollHandler from "../../components/Throttling/ThrottledScrollHandler"

const Contact = () => {
    return (
        <div className="bg-gray-300 w-screen">
            <ThrottledButton />

            <ThrottledScrollHandler />
            <div className="flex flex-col items-center mt-16">
                <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
                <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Home</Link>
    
                <Link to="/about" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">About</Link>
    
                <Link to="/notfound" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">NotFound</Link>
    
            </div>
            <div className="h-[400vh]">

            </div>
        </div>
      )
}
export default Contact