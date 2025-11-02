/**
 * mqScoreboard blocks
 */
namespace mqlib {
    let _leftName = '';
    let _rightName = '';
    let _leftScore = 0;
    let _rightScore = 0;
    let _scoreboardStr = '';

    //% subcategory="计分板"
    //% block="初始化计分板 左边名字 $leftName 右边名字 $rightName"
    export function initScoreboard(leftName: string, rightName: string) {
        _leftName = leftName;
        _rightName = rightName;
    }
    //% subcategory="计分板"
    //% block="左边分数加1"
    export function setScoreboardLeftScoreAdd() {
        _leftScore ++;
    }
    //% subcategory="计分板"
    //% block="右边分数加1"
    export function setScoreboardRightScoreAdd() {
        _rightScore ++;
    }

    //% subcategory="计分板"
    //% block="计分板内容"
    export function getScoreboardStr(): string {
        _scoreboardStr = `${_leftName} ${_leftScore}:${_rightScore} ${_rightName}`;
        return _scoreboardStr;
    }
    //% subcategory="计分板"
    //% block="左边分数"
    export function getScoreboardLeftScore(): number {
        return _leftScore;
    }
    //% subcategory="计分板"
    //% block="右边分数"
    export function getScoreboardRightScore(): number {
        return _rightScore;
    }

}