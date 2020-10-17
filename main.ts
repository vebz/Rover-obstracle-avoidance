let distance = 0
basic.forever(function () {
    distance = Rover.Ultrasonic()
    if (distance >= 15) {
        Rover.Move(100)
    } else {
        Rover.MotorRunDual(-100, 100)
    }
})
