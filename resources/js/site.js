import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'
import morph from '@alpinejs/morph'
import persist from '@alpinejs/persist'
import intersect from '@alpinejs/intersect'
import precognition from 'laravel-precognition-alpine';

//Custom Modules
import consoleHello from './modules/consoleHello';
import preloader from './modules/preloader';
import tinyslider from './modules/tinyslider';

// Call Alpine.
window.Alpine = Alpine
Alpine.plugin([collapse, focus, morph, persist, precognition, intersect])
Alpine.start()


// Call custom modules.
const CDG = {

    onreadyFunctions: function() {
        //consoleHello('CDG is ready');
        //preloader();
        tinyslider();

        window.addEventListener("resize", function(){
            //consoleHello('window has resized');
            if(window.innerWidth < 768){
                //consoleHello('narrow');
            }
            else{
                //consoleHello('wide');
            }
         });
    },

    onloadFunctions: function() {
        //consoleHello('CDG is loaded');
    }
};

CDG.onreadyFunctions();

window.onload = function(event) {
    CDG.onloadFunctions();
};
