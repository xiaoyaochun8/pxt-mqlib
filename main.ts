
/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

enum Pins {
    //% block="P0"
    P0 = AnalogPin.P0,
    //% block="P1"
    P1 = AnalogPin.P1,
    //% block="P2"
    P2 = AnalogPin.P2,
    //% block="P3"
    P3 = AnalogPin.P3
}

/**
 * mqlib blocks
 */
//% weight=100 color=#5c2d91 icon=""
//% groups=['servo','led','others']
namespace mqlib {

    let _ledRedPin = 0;
    let _ledGreenPin = 0;
    let _ledBluePin = 0; //blue and yellow

    /**
     * 输入270度转为180度
     * @param v describe
     */
    //% block='270度：输入0～270 $v'
    //% group='servo'
    //% v.min=0 v.max=270 v.defl=0
    export function arc270(v: number): number {
        return Math.map(v, 0, 270, 0, 180);
    }

    /**
     * 设置270度舵机角度
     * @param v describe
     */
    //% block='270度：设置 $p 舵机角度 $v'
    //% group='servo'
    //% v.min=0 v.max=270 v.defl=0
    export function setSteer270(p: Pins, v: number): void {
        pins.servoWritePin(p, Math.map(v, 0, 270, 0, 180));
    }

    /**
     * 设置270度舵机角度
     * @param v describe
     */
    //% block='100度：设置 $p 舵机角度 $v'
    //% group='servo'
    //% v.min=0 v.max=100 v.defl=0
    export function setSteer100(p: Pins, v: number): void {
        pins.servoWritePin(p, Math.map(v, 0, 270, 0, 100));
    }

    /**
     * 设置led灯引脚和颜色
     * @param v describe
     */
    //% block='设置led灯引脚 $p 颜色 $color'
    //% group='led'
    //% color.shadow="colorNumberPicker"
    export function initLedPins(p: Pins, color: number): void {
        if (color == 16711680) {
            _ledRedPin = p;
        } else if (color == 65280) {
            _ledGreenPin = p;
        } else if (color == 32767 || color == 16776960) {
            _ledBluePin = p;
        }
    }
    /**
     * 设置led灯引脚和颜色
     * @param v describe
     */
    //% block='控制led灯颜色 $color'
    //% group='led'
    //% color.shadow="colorNumberPicker"
    export function setLedColor(color: number): void {
        pins.digitalWritePin(_ledRedPin, 0)
        pins.digitalWritePin(_ledGreenPin, 0)
        pins.digitalWritePin(_ledBluePin, 0)
        if (color == 16711680) {
            pins.digitalWritePin(_ledRedPin, 1)
        } else if (color == 65280) {
            pins.digitalWritePin(_ledGreenPin, 1)
        } else if (color == 255 || color == 16776960) {
            pins.digitalWritePin(_ledBluePin, 1)
        }
    }

}
