/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

enum OledFace {
    //% block="开心"
    Happy,
    //% block="伤心"
    Sad,
    //% block="生气"
    Angry,
    //% block="惊讶"
    Amazed,
    //% block="睡觉"
    Sleep,
}

/**
 * mqOled blocks
 */
//% groups=['oled-形状','oled-表情','oled-画图']
namespace mqlib {
    //% subcategory="oled"
    //% group='oled-形状'
    //% block="oled画正方形 $iSize"
    //% iSize.min=1 iSize.max=3 iSize.defl=1
    export function oledDrawSquare(iSize: Number): void {
        OLED12864_I2C.init(60);
        if (iSize == 3) {
            OLED12864_I2C.rect(0, 0, 30, 30, 1);
        } else if (iSize == 2) {
            OLED12864_I2C.rect(0, 0, 20, 20, 1);
        } else {
            OLED12864_I2C.rect(0, 0, 10, 10, 1);
        }
    }
    //% subcategory="oled"
    //% group='oled-形状'
    //% block="oled画长方形 $iSize"
    //% iSize.min=1 iSize.max=3 iSize.defl=1
    export function oledDrawRectangle(iSize: Number): void {
        OLED12864_I2C.init(60);
        if (iSize == 3) {
            OLED12864_I2C.rect(0, 0, 60, 30, 1);
        } else if (iSize == 2) {
            OLED12864_I2C.rect(0, 0, 40, 20, 1);
        } else {
            OLED12864_I2C.rect(0, 0, 20, 10, 1);
        }
    }
    //% subcategory="oled"
    //% group='oled-表情'
    //% block="oled画表情 $oledFace"
    //% gesture.fieldEditor="gridpicker"
    //% gesture.fieldOptions.width=220
    //% gesture.fieldOptions.columns=3
    export function oledDrawFace(oledFace: OledFace): void {
        OLED12864_I2C.init(60);
        let im = `
# · ·
# · ·
# · ·
        `;
        if (oledFace == OledFace.Happy) {
            //im = '';
        }
        for (let y = 0; y < 32; y++) {
            for (let x = 0; x < 64; x++) {
                //if (im.pixel(x, y)) {
                OLED12864_I2C.pixel(x, y, 1)
                //}
            }
        }
    }

    /**
     * Create a 128x64 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-画图'
    //% block="oled点阵128x64"
    //% imageLiteral=1
    //% imageLiteralColumns=64
    //% imageLiteralRows=32
    //% imageLiteralScale=1
    //% shim=images::createImage
    export function oledCharacterPixels12864(i: string): Image {
        return <Image><any>i;
    }

    /**
     * Create a 128x64 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-画图'
    //% block="oled画图128x64 $im"
    export function oledDrawImgWithPixels12864(im: Image): void {
        OLED12864_I2C.init(60)
        for (let y = 0; y < 32; y++) {
            for (let x = 0; x < 64; x++) {
                if (im.pixel(x, y)) {
                    OLED12864_I2C.pixel(x, y, 1)
                }
            }
        }
    }

    /**
     * Create a 13x13 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-画图'
    //% block="oled点阵13x13"
    //% imageLiteral=1
    //% imageLiteralColumns=13
    //% imageLiteralRows=13
    //% imageLiteralScale=1
    //% shim=images::createImage
    export function oledCharacterPixels1313(i: string): Image {
        return <Image><any>i;
    }
}
