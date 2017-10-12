var layaSameple = (function(){
    (function() {
        Laya.init(800, 600, Laya.WebGL)
        Laya.stage.bgColor = "#ffcccc"
        Laya.loader.load("res/atlas/comp.json", Laya.Handler.create(this, onloaded), null, Laya.Loader.ATLAS);
    })();
    function onloaded () {
        var game = new Game()
        Laya.stage.addChild(game)
    }
})();