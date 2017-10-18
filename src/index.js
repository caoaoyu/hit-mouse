(function(){
    (function(index) {
        Laya.init(800, 600, Laya.WebGL)

        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_HORIZONTAL;

        Laya.stage.bgColor = "#ffcccc"
        Laya.loader.load("res/atlas/comp.json", Laya.Handler.create(this, onloaded), null, Laya.Loader.ATLAS);
    })();
    function onloaded () {
        index.gameStart = new GameStart();
        Laya.SoundManager.playMusic("sounds/bg-music.mp3")
        Laya.stage.addChild(index.gameStart);
    }
})(window.index || (window.index = {}));