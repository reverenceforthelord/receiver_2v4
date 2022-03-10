radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        start = 1
        basic.showString("A")
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.analogWritePin(AnalogPin.P0, speed)
    }
    if (receivedString == "B") {
        start = 0
        basic.showString("B")
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.analogWritePin(AnalogPin.P0, 0)
    }
})
radio.onReceivedValue(function (name, value) {
    if (start == 1) {
        if (name == "x") {
            angle = right_angle + pins.map(
            value,
            -1024,
            1023,
            0 - angle_range,
            angle_range
            )
            pins.servoWritePin(AnalogPin.P8, angle)
        }
        if (name == "y") {
            speed = pins.map(
            value,
            -1024,
            1023,
            min_speed,
            1000
            )
            pins.analogWritePin(AnalogPin.P0, speed)
        }
    }
})
let speed = 0
let min_speed = 0
let angle = 0
let angle_range = 0
let right_angle = 0
let start = 0
radio.setGroup(1)
start = 0
right_angle = 100
angle_range = 37
angle = right_angle
min_speed = 450
speed = 500 + min_speed / 2
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
pins.analogWritePin(AnalogPin.P0, speed)
