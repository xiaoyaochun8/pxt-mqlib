
/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

enum AnPins {
    //% block="P0"
    P0 = AnalogPin.P0,
    //% block="P1"
    P1 = AnalogPin.P1,
    //% block="P2"
    P2 = AnalogPin.P2,
    //% block="P3"
    P3 = AnalogPin.P3
}

enum DgPins {
    //% block="P0"
    P0 = DigitalPin.P0,
    //% block="P1"
    P1 = DigitalPin.P1,
    //% block="P2"
    P2 = DigitalPin.P2,
    //% block="P3"
    P3 = DigitalPin.P3
}

/**
 * mqlib blocks
 */
//% weight=100 color=#5c2d91 icon=""
//% groups=['舵机270','Servo180','Led','others']
namespace mqlib {

    let _ledRedPin = 0;
    let _ledGreenPin = 0;
    let _ledBluePin = 0; //blue and yellow

    /**
     * 输入270度转为180度
     * @param v describe
     */
    //% group='舵机270'
    //% weight=10
    //% v.min=0 v.max=270 v.defl=0
    export function arc270(v: number): number {
        return Math.map(v, 0, 270, 0, 180);
    }

    /**
     * 设置270度舵机角度-270
     * @param v describe
     */
    //% block='/\\ 270度模式：设置 $p 舵机角度 $v'
    //% group='舵机270'
    //% weight=9
    //% v.min=0 v.max=270 v.defl=0
    export function setSteer270(p: AnPins, v: number): void {
        pins.servoWritePin(p, Math.map(v, 0, 270, 0, 180));
    }

    /**
     * 设置270度舵机角度-10
     * @param v describe
     */
    //% block='——!—— 180度模式：设置 $p 舵机角度 $v'
    //% group='舵机180'
    //% weight=10
    //% v.shadow="protractorPicker"
    export function setSteer180_180(p: AnPins, v: number): void {
        pins.servoWritePin(p, Math.map(v, 0, 180, 35, 145));
    }

    /**
     * 设置电机停止
     */
    //% block='设置 $p 电机停止'
    //% group='电机'
    //% weight=10
    export function setMotorStop(p: AnPins): void {
        pins.servoWritePin(p, 0);
    }

    /**
     * Get the color wheel field editor
     * @param color color
     */
    //% subcategory="红绿蓝黄灯"
    //% blockId=colorNumberPicker2 block="%value"
    //% blockHidden=true
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.defl='0xff0000'
    //% value.fieldOptions.colours='["#ff0000","#00ff00","#0000ff","#ffff00"]'
    //% value.fieldOptions.columns=4
    export function __colorNumberPicker2(value: number) {
        return value;
    }
    /**
     * 设置Led灯引脚和颜色
     * @param v describe
     */
    //% subcategory="红绿蓝黄灯"
    //% block='设置Led灯引脚 $p 颜色 $color'
    //% group='Led'
    //% weight=10
    //% color.shadow="colorNumberPicker2"
    export function initLedPins(p: DgPins, color: number): void {
        if (color == 16711680) {
            _ledRedPin = p;
        } else if (color == 65280) {
            _ledGreenPin = p;
        } else if (color == 32767 || color == 16776960) {
            _ledBluePin = p;
        }
    }
    /**
     * 设置Led灯引脚和颜色
     * @param v describe
     */
    //% subcategory="红绿蓝黄灯"
    //% block='控制Led灯颜色 $color'
    //% group='Led'
    //% weight=9
    //% color.shadow="colorNumberPicker2"
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
