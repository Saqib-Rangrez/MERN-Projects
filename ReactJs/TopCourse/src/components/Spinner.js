import "./Spinner.css"
const Spinner = () => {
    return (
        <div className="flex justify-center items-center space-y-2 flex-col">
            <div className="custom-loader"></div>
            <p className="text-bgDark text-lg font-semibold">Loading...</p>
        </div>
    )
    
}

export default Spinner;