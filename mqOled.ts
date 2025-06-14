/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

enum OledPic {
    //% block="表情-开心"
    Happy,
    //% block="表情-伤心"
    Sad,
    //% block="表情-睡觉"
    Sleep,
    //% block="表情-生气"
    Angry,
    //% block="表情-惊讶"
    Amazed,
    //% block="人物-小人"
    P1,
    //% block="人物-火柴人"
    P2,
    //% block="人物-机器人"
    P3,
    //% block="人物-海底小纵队队长"
    P4,
    //% block="人物-汪汪队天天"
    P5,
    //% block="动物-小仓鼠"
    a,
    //% block="动物-b"
    b,
    //% block="文字-大"
    Da,
    //% block="文字-中"
    Zhong,
    //% block="文字-小"
    Xiao,
    //% block="文字-奇"
    Qi,
    //% block="风景-山峰"
    Pic1,
    //% block="风景-河流"
    Pic2,
}

enum OledPic2 {
    //% block="人物-海底小纵队队长"
    P4,
    //% block="人物-汪汪队天天"
    P5,
}

/**
 * mqOled blocks
 */
//% groups=['oled-形状','oled-橡皮檫','oled-中文','oled-表情','oled-人物','oled-动画','oled-画图']
namespace mqlib {
    
    /**
     * Create a 128x64 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-画布'
    //% advanced=true
    //% imageLiteral=1
    //% imageLiteralColumns=128
    //% imageLiteralRows=64
    //% imageLiteralScale=1
    //% shim=images::createImage
    export function oledCharacterPixels12864(i: string): Image {
        return <Image><any>i;
    }
    /**
     * Create a 13x13 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-画布'
    //% advanced=true
    //% block="oled点阵13x13"
    //% imageLiteral=1
    //% imageLiteralColumns=13
    //% imageLiteralRows=13
    //% imageLiteralScale=1
    //% shim=images::createImage
    export function oledCharacterPixels1313(i: string): Image {
        return <Image><any>i;
    }
    /**
     * Create a 128x64 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% group='oled-使用画布画图'
    //% advanced=true
    export function oledDrawImgWithPixels12864(im: Image): void {
        for (let y = 0; y < 64; y++) {
            for (let x = 0; x < 128; x++) {
                // OLED12864_I2C.pixel(x, y, 0)
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
    //% group='oled-使用画布画图'
    //% advanced=true
    //% block="oled画图13x13 $im"
    export function oledDrawImgWithPixels1313(im: Image): void {
        for (let y = 0; y < 13; y++) {
            for (let x = 0; x < 13; x++) {
                if (im.pixel(x, y)) {
                    OLED12864_I2C.pixel(x+58, y+26, 1)
                }
            }
        }
    }
    export function oledDrawPicBy1024Hex(im: number[]): void {
        let _screen = pins.createBuffer(1025);
        _screen[0] = 0x40
        for (let i = 0; i < 1024; i++) {
            _screen[i + 1] = im[i]
            if(im[i] == 0){
                _screen[i + 1] = 0x00
            }
        }
        pins.i2cWriteBuffer(60, _screen)
        //todo-drawBmp
        // let _screen = pins.createBuffer(1025);
        // _screen[0] = 0x40
        // _screen[1] = 0xff
        // _screen[2] = 0x01
        // _screen[3] = 0x02
        // _screen[4] = 0x04
        // _screen[5] = 0x08
        // _screen[6] = 0x10
        // _screen[7] = 0x20
        // _screen[8] = 0x40
        // _screen[9] = 0x80
        // pins.i2cWriteBuffer(60, _screen)
    }
    
    //% subcategory="oled"
    //% group='oled-形状'
    //% block="oled画正方形 $iSize"
    //% iSize.min=1 iSize.max=3 iSize.defl=1
    export function oledDrawSquare(iSize: number): void {
        if (iSize == 3) {
            OLED12864_I2C.rect(0, 0, 63, 63, 1);
        } else if (iSize == 2) {
            OLED12864_I2C.rect(0, 0, 30, 30, 1);
        } else {
            OLED12864_I2C.rect(0, 0, 10, 10, 1);
        }
    }
    //% subcategory="oled"
    //% group='oled-形状'
    //% block="oled画长方形 $iSize"
    //% iSize.min=1 iSize.max=3 iSize.defl=1
    export function oledDrawRectangle(iSize: number): void {
        if (iSize == 3) {
            OLED12864_I2C.rect(0, 0, 127, 63, 1);
        } else if (iSize == 2) {
            OLED12864_I2C.rect(0, 0, 60, 30, 1);
        } else {
            OLED12864_I2C.rect(0, 0, 20, 10, 1);
        }
    }
    //% subcategory="oled"
    //% group='oled-橡皮檫'
    //% block="oled矩形区域橡皮檫 x$xTmp y$yTmp 宽度$iWidth 高度$iHeight"
    export function oledDrawRectAreaClean(xTmp: number, yTmp: number, iWidth: number, iHeight: number): void {
        for (let y = yTmp; y < yTmp+iHeight; y++) {
            for (let x = xTmp; x < xTmp+iWidth; x++) {
                OLED12864_I2C.pixel(x, y, 0);
            }
        }
    }
    //% subcategory="oled"
    //% group='oled-动画'
    //% block="oled直线动画1"
    export function oledDrawAnim(): void {
        let x = 0
        basic.forever(function () {
            if (x < 128) {
                OLED12864_I2C.pixel(x, 0, 1)
                x += 1
            } else {
                OLED12864_I2C.clear()
                x = 0
            }
        })
    }
    //% subcategory="oled"
    //% group='oled-动画'
    //% block="oled长方形动画2"
    export function oledDrawAnim2(): void {
        let x = 4
        basic.forever(function () {
            if (x < 128) {
                OLED12864_I2C.rect(0, 0, x, x/2, 1);
                x += 4
            } else {
                OLED12864_I2C.clear()
                x = 4
            }
        })
    }
    //% subcategory="oled"
    //% group='oled-动画'
    //% block="oled下雪动画3"
    export function oledDrawAnim3(): void {
        let x = 0;
        let y = 0;
        let cnt = 0;
        basic.forever(function () {
            x = Math.floor(Math.random() * 127);
            y = Math.floor(Math.random() * 63);
            OLED12864_I2C.pixel(x, y, 1);
            cnt ++;
            if(cnt > 128*10){
                OLED12864_I2C.clear();
                cnt = 0;
            }
        })
    }
    
}
