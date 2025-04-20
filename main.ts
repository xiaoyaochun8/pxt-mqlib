
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
//% groups=['Servo270','Servo180','Led','others']
namespace mqlib {

    let _ledRedPin = 0;
    let _ledGreenPin = 0;
    let _ledBluePin = 0; //blue and yellow
    let _ledYellowPin = 0; //blue and yellow

    /**
     * 输入270度转为180度
     * @param v describe
     */
    //% subcategory="Servo"
    //% block='/\\ 270度模式：输入0～270 $v'
    //% group='Servo270'
    //% weight=10
    //% v.min=0 v.max=270 v.defl=0
    export function arc270(v: number): number {
        return Math.map(v, 0, 270, 0, 180);
    }

    /**
     * 设置270度舵机角度-270
     * @param v describe
     */
    //% subcategory="Servo"
    //% block='/\\ 270度模式：设置 $p 舵机角度 $v'
    //% group='Servo270'
    //% weight=9
    //% v.min=0 v.max=270 v.defl=0
    export function setSteer270(p: AnPins, v: number): void {
        pins.servoWritePin(p, Math.map(v, 0, 270, 0, 180));
    }

    /**
     * 设置270度舵机角度-10
     * @param v describe
     */
    //% subcategory="Servo"
    //% block='——!—— 180度模式：设置 $p 舵机角度 $v'
    //% group='Servo180'
    //% weight=10
    //% v.shadow="protractorPicker"
    export function setSteer180_180(p: AnPins, v: number): void {
        pins.servoWritePin(p, Math.map(v, 0, 180, 35, 145));
    }

    /**
     * Get the color wheel field editor for rgb
     * @param color color
     */
    //% subcategory="RgbLight"
    //% blockId=colorNumberPickerRgb block="rgb %value"
    //% blockHidden=true
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.defl='0xff0000'
    //% value.fieldOptions.colours='["#ff0000","#00ff00","#0000ff","#ffff00"]'
    //% value.fieldOptions.columns=4
    export function __colorNumberPickerRgb(value: number) {
        return value;
    }
    /**
     * 设置RgbLed灯引脚和颜色
     * @param v describe
     */
    //% subcategory="RgbLight"
    //% block='设置RgbLed灯引脚 $p 颜色 $color'
    //% color.shadow="colorNumberPickerRgb"
    export function initLedPinsRgb(p: DgPins, color: number): void {
        if (color == 16711680) {
            _ledRedPin = p;
        } else if (color == 65280) {
            _ledGreenPin = p;
        } else if (color == 32767 || color == 16776960) {
            _ledBluePin = p;
        }
    }
    /**
     * 设置RgbLed灯引脚和颜色
     * @param v describe
     */
    //% subcategory="RgbLight"
    //% block='控制RgbLed灯颜色 $color'
    //% color.shadow="colorNumberPickerRgb"
    export function setLedColorRgb(color: number): void {
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

    /**
     * Get the color wheel field editor for rgy
     * @param color color
     */
    //% subcategory="RgyLight"
    //% blockId=colorNumberPickerRgy block="rgy %value"
    //% blockHidden=true
    //% value.fieldEditor="colornumber" value.fieldOptions.decompileLiterals=true
    //% value.defl='0xff0000'
    //% value.fieldOptions.colours='["#ff0000","#00ff00","#0000ff","#ffff00"]'
    //% value.fieldOptions.columns=4
    export function __colorNumberPickerRgy(value: number) {
        return value;
    }
    /**
     * 设置RgyLed灯引脚和颜色
     * @param v describe
     */
    //% subcategory="RgyLight"
    //% block='设置RgyLed灯引脚 $p 颜色 $color'
    //% color.shadow="colorNumberPickeRgy"
    export function initLedPinsRgy(p: DgPins, color: number): void {
        if (color == 16711680) {
            _ledRedPin = p;
        } else if (color == 65280) {
            _ledGreenPin = p;
        } else if (color == 32767 || color == 16776960) {
            _ledBluePin = p;
        }
    }
    /**
     * 设置RgyLed灯引脚和颜色
     * @param v describe
     */
    //% subcategory="RgyLight"
    //% block='控制RgyLed灯颜色 $color'
    //% color.shadow="colorNumberPickerRgy"
    export function setLedColorRgy(color: number): void {
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
