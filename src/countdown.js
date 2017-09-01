/**
 * Created by Javier on 8/31/2017.
 */
module.exports = function countdown(tick) {
    var count = 10;
    var timer = setInterval(function (_) {
        tick(count--);
        if (count === 0) {
            clearInterval(timer);
        }
    }, 1000);
};
//# sourceMappingURL=countdown.js.map