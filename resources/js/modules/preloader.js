
import consoleHello from './consoleHello';
import getCookie from './getCookie';

const preloader = () => {
    
    //consoleHello('preloader');
    const preloader = document.getElementById("preloader");

    if (preloader) {

        var preloaderCookie = getCookie('preloadershowed');
        //var preloaderCookie = null;
        var createCookie = false;
        
        if( preloaderCookie === null ) {
            createCookie = true;
        } 

        if( createCookie ) {
            var now = new Date();
            var created = now.toUTCString();
            var time = now.getTime();
            var expireTime = time + 1000*3600*24*30; //One month
            now.setTime(expireTime);
            document.cookie = 'preloadershowed='+created+';expires='+now.toUTCString()+';path=/;SameSite=Strict';
            
            //consoleHello(document.cookie);  // 'Wed, 21 Apr 2021 17:42:22 GMT'
            //consoleHello('Launch preloader'); 
            preloader.classList.remove('hidden');

        } else {
            //consoleHello('Hide preloader'); 
            preloader.classList.add('hidden');
        }      
        
        //Temporary Force preloader to show always
        //preloader.classList.remove('hidden');
        
    } else {
        //consoleHello('No preloader');
    }

}

export default preloader;