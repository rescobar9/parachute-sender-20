radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(receivedNumber)
    serial.writeLine("")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("start")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("stop")
})
radio.setGroup(1)
