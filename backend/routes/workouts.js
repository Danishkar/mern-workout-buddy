const express = require("express");
const Workout = require("../models/workoutModel");
const router = express.Router()
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require("../controllers/workoutController")
// GET all workouts
router.get('/',getWorkouts)

// Get a single workout
router.get("/:id",getWorkout)

// post a new workout
router.post("/", createWorkout )

// delete a workout
router.delete("/:id",deleteWorkout)
 
// update a workout
router.patch("/:id",updateWorkout)


module.exports = router;