/**
 * Created by Javier on 8/31/2017.
 */
module.exports = function countdown(tick) {
    let count : number = 10;

    let timer = setInterval( _=> {
        tick(count--);
        if(count ===0) {
            clearInterval(timer);
        }
    }, 1000)
};
