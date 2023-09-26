import './App.css'

function Construction() {

    var currentdate = new Date();
    var datetime = 
        "Current Time: " + 
        (currentdate.getMonth() + 1) + "/"
        + currentdate.getDate() + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();


    return (
        <>
            <h5>{datetime}</h5>
            <h1>Site Under Construction</h1>
            <h2>Expected Return: Wednesday 9/27/2023</h2>

        </>
    )
}

export default Construction
