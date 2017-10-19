/*
 * @Author: Thunderball.Wu 
 * @Date: 2017-10-19 18:04:13 
 * @Last Modified by: Thunderball.Wu
 * @Last Modified time: 2017-10-19 18:22:18
 * 一些都有的方法 都放到这里
 */

export const commonMethods = {
    updateOption: function (option) {
        this.Option = util.extend(option, this.Option);
        this.bus.dispatch('update', 'no');
    },
    upDetect: function () {
        this._isChoosed = false;
    },
    /**
     * 
     * 
     * @param {any} lineCap 线端点
     * @param {any} lineJoin 线连接
     * @param {any} lineDash 虚线
     */
    setLine: function (lineCap, lineJoin, lineDash) { //设置线
        this.UnOption.lineCap = lineCap;
        this.UnOption.lineJoin = lineJoin;
        this.UnOption.lineDash = lineDash;
    },
    setRotateOrigin: function (loc) {//设置旋转中心
        this.rotateOrigin = loc;
    }
}