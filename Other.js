class Draggable{

    constructor(){
    this.onMouseMove = this.onMouseMove.bind(this);
    this.Zindex = 1;
    }
    onMouseMove(e){
     const target = this.target;
    
            const pose = {
                x: e.clientX,
                y: e.clientY
            }
            target.style.top = pose.y + 'px';
            target.style.left = pose.x + 'px';
    }
    START(options){
        if(!options){
            return;
        }
        if(options.selector && options.handle){
            this.selector = options.selector;
            this.handle = options.handle;
              Array.from(document.querySelectorAll(this.selector)).forEach(el => {
    
                el.addEventListener('mousedown', (e) => {
                    const target = e.target;
                    const handle = target.closest(this.handle);
                    if(handle){
                        const __target = target.closest(this.selector);
                        if(__target){
                        this.target = __target;
                       window.addEventListener('mousemove', this.onMouseMove);
                        }
                    
                    }
               
    
                })
                window.addEventListener('mouseup', (e) => {
                    this.Zindex = this.Zindex +1;
                    debugger
                    this.target.style.zIndex = this.Zindex;
                    window.removeEventListener('mousemove', this.onMouseMove);
                })
    
            })
        }
       
    }
}
    

    const drag = new Draggable();
    // selector => position: absolute || fixed
    drag.START({selector:".note",handle:".pin"});