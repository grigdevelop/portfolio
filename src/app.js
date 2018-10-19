function State(){
    var self = this;

    this.preload = function(){
        console.log('onload');
    }
}
var state = new State();
window.onload = function(){
    new Game();
};