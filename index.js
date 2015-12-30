export default (condition, interval=20, timeout=20000)=> {
    return new Promise((res, rej)=>{
        if (condition()) {
            return res();
        }
        const intervalToken = setInterval(()=> {
            if(condition()) {
                clearInterval(intervalToken);
                res();
            }
        }, interval);

        if (timeout) {
            setTimeout(()=>{
                clearInterval(intervalToken);
                rej();
            }, timeout);
        }
    });
};
