(
    function(){
        var moduleName='square';
        
        function render(el){
            var color = document.querySelector('.square');
            color.addEventListener('click',function(e){
                    color.classList.toggle('squaretwo');
                });
        }
        exports(moduleName,render);    
    }
)();