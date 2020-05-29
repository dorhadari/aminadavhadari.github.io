class Draggable{

    constructor(){
    this.selector = ".note";
    this.handle = ".pin";
    this.onMouseMove = this.onMouseMove.bind(this);
    }
    onMouseMove(e){
     const target = this.target;
    
            const pose = {
                x: e.clientX,
                y: e.clientY
            }
            console.log(pose)
            target.style.top = pose.y + 'px';
            target.style.left = pose.x + 'px';
    }
    START(){
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
                    window.removeEventListener('mousemove', this.onMouseMove);
                })
    
            })
    }
}
    
    const drag = new Draggable();
    drag.START();