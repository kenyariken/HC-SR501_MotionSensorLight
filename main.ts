basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        // 動きを検知したら表示
        basic.showIcon(IconNames.Heart)
        basic.pause(5000)
    } else {
        // 検知なしならLEDを消す
        basic.clearScreen()
    }
})
