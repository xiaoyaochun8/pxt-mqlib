/**
 * mqMath blocks
 */
namespace mqlib {
    let _a = 0;
    let _b = 0;
    let _symbol = '';

    //% subcategory="计分板"
    //% block="a = $v"
    //% v.defl=1
    export function test(v: number) {
        _a = v;
    }
}