
/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

/**
 * mqMath blocks
 */
namespace mqlib {
    let _a = 0;
    let _b = 0;
    let _symbol = '';

    //% subcategory="mqMath"
    //% block="我的计算结果是？$v"
    export function checkRet(v: number) {
        if (_symbol == 'p' && v == _a + _b) {
            basic.showIcon(IconNames.Yes);
            music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone);
        } else if (_symbol == 's' && v == _a - _b) {
            basic.showIcon(IconNames.Yes);
            music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone);
        } else {
            basic.showIcon(IconNames.No);
            music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone);
        }
    }
    //% subcategory="mqMath"
    //% block="a - b = ?"
    export function setA_Sub_B() {
        _symbol = 's';
    }
    //% subcategory="mqMath"
    //% block="a + b = ?"
    export function setA_Plus_B() {
        _symbol = 'p';
    }
    //% subcategory="mqMath"
    //% block="b = $v"
    //% v.defl=2
    export function setB(v: number) {
        _b = v;
    }
    //% subcategory="mqMath"
    //% block="a = $v"
    //% v.defl=1
    export function setA(v: number) {
        _a = v;
    }
}