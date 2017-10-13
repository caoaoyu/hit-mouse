(function(){
    (function(index) {
        Laya.init(800, 600, Laya.WebGL)
        Laya.stage.bgColor = "#ffcccc"
        Laya.loader.load("res/atlas/comp.json", Laya.Handler.create(this, onloaded), null, Laya.Loader.ATLAS);
    })();
    function onloaded () {
        index.gameStart = new GameStart();
        Laya.stage.addChild(index.gameStart);
    }
})(window.index || (window.index = {}));