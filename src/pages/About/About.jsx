import { Link } from "react-router-dom"
import DebouncedInput from "../../components/Debouncing/DebouncedInput"
import DebouncedResizeHandler from "../../components/Debouncing/DebouncedResizeHandler"

const About = () => {
  return (
    <div className="bg-gray-300 w-screen h-screen">

        <DebouncedInput />

        <DebouncedResizeHandler />
        <div className="flex flex-col items-center mt-24 h-full">
            <h1 className="text-4xl font-bold text-gray-800">About</h1>
            <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Home</Link>

            <Link to="/contact" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">Contact</Link>

            <Link to="/notfound" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">NotFound</Link>

        </div>
    </div>
  )
}
export default About