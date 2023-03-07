import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const WorkoutDetails = ( props) => {
    const handleClick = async() =>{
        const response = await fetch("/api/workouts/"+props.workout._id,{
            method:"DELETE"
        })
        const json = await response.json();
        props.handleFetchClick()
    }
    return ( 
        <div className="workout-details">
            <h4>{props.workout.title}</h4>
            <p><strong>Load (kg): </strong>{props.workout.load}</p>
            <p><strong>Number of reps: </strong>{props.workout.reps}</p>
            <p>{props.workout.createdAt}</p>
            <DeleteRoundedIcon onClick={handleClick}/>
            {/* <span onClick={handleClick}>delete</span> */}
        </div>
    );
}
 
export default WorkoutDetails;