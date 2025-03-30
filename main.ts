
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
    P2 = AnalogPin.P2
}

/**
 * mqlib blocks
 */
//% weight=100 color=#5c2d91 icon=""
//% groups=['servo','others']
namespace mqlib {

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


}
