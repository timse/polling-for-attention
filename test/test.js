import chai from 'chai';
import poll from '../index.js';

chai.should();

describe('polling for attention', ()=> {

    it('should resolve promise if condition function returns true', (done)=>{
        const timeoutToken = setTimeout(()=>{
            //should be finished already
            false.should.be.true;
            done();
        }, 10);

        poll(()=> true).then(()=>{
            clearTimeout(timeoutToken);
            true.should.be.true;
            done();
        });
    });

    it('should reject the promise if condition never returns true and times out', (done)=>{
        return poll(()=> { return false;}, 1, 5).then(()=>{
            false.should.be.true;
        }, ()=> {
            true.should.be.true;
            done();
        }).catch(done);
    });

    it('should try to call condition based on ms value given as second param', (done)=>{
        let count = 0;
        poll(()=> {
            count += 1;
            return false;
        }, 2, 13).then(()=> {
            true.should.be.false;
        }, ()=> {
            count.should.be.above(5);
            done();
        }).catch(done);
    });

    it('should abot the condition check if timeout is reached', (done)=>{

        const timeoutToken = setTimeout(()=>{
            //should be finished already
            done(false.should.be.true);
        }, 40);

        poll(()=> {
            return false;
        }, 10, 10).then(()=> {
            true.should.be.false;
        }, ()=> {
            clearTimeout(timeoutToken);
            true.should.be.true;
            done();
        }).catch(done);
    });
});
