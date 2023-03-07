import { useEffect, useState } from "react"

// components
import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

const Home = () => {
    const [count, setCount] = useState(0);
    const [workouts,setWorkouts] = useState(null)
    
    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            const response = await fetch("/api/workouts")
            console.log(response)
            const json = await response.json()
            console.log(json)
            if (response.ok){
                setWorkouts(json)
            }
        }
        fetchWorkouts()
        console.log("use effect ran");
    },[count]);

    const handleFetchClick = ()=>{
        setCount((prevCount)=>{
            return(
                prevCount = prevCount+1
            )
        })
        // console.log("fetch click")
    }
    return ( 
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout)=>{
                    return(
                        <WorkoutDetails key={workout._id} workout = {workout} handleFetchClick = {handleFetchClick}/>
                    )
                })}
            </div>
            <WorkoutForm handleFetchClick = {handleFetchClick}/>
        </div>
    );
}
 
export default Home;