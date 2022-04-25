 function createAnalytics () {
    let counter = 0;
    let isDestoyed = false
    const listener = ()=>{
        counter++
    }
    document.addEventListener('click', listener);
    return {
        destroy () {
            isDestoyed = true
            document.removeEventListener('clic', listener)
        },
        getClicks () {
            if(isDestoyed) {
                return 'Anal is Destroyed'
            }
            return counter;
        }
    }
 }
 window.analytics = createAnalytics( );