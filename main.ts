input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("goBackward")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("stop")
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("goRight")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("goLeft")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("goForward")
})
radio.setGroup(1)
