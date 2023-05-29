input.onGesture(Gesture.EightG, function () {
    state = 5
})
input.onGesture(Gesture.FreeFall, function () {
    state = 3
})
input.onGesture(Gesture.Shake, function () {
    state += -1
})
let timeAlive = 0
let compassState = 0
let state = 0
state = 0
basic.forever(function () {
    compassState = input.compassHeading()
    basic.pause(5000)
    if (input.compassHeading() == compassState) {
        state += 1
    }
})
basic.forever(function () {
    if (state == 0) {
        basic.showIcon(IconNames.Happy)
    }
    if (state == 1) {
        basic.showIcon(IconNames.Asleep)
    }
    if (state == 2) {
        basic.showIcon(IconNames.Sad)
    }
    if (state == 3) {
        basic.showIcon(IconNames.Confused)
    }
    if (state == 4) {
        basic.showIcon(IconNames.Angry)
    }
    if (state == 5) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(5000)
        basic.showString("Time Alive ")
        basic.showNumber(timeAlive)
        game.gameOver()
    }
})
basic.forever(function () {
	
})
loops.everyInterval(5000, function () {
    if (state == 0) {
        timeAlive += 1
    }
})
