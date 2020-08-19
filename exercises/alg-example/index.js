
function memoize (arg) {

    if(arg === 1){
        return 1;
    }
    else{
        return memoize(arg-1);
    }
}