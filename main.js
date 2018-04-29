const list = [2, 4, 8, 16, 32, 64, 128]

console.log(list)

function PlayMain(PlayList) {
    console.log('欢迎！');
    this.list = PlayList;
    this.RealList = [2, 4, 8, 16, 32, 64, 128]
    this.map = [];
    this.NumberMap = []
}
//游戏初始化
PlayMain.prototype.init = function () {
    this.map.length = 16;
    for (let i = 0; i < this.map.length; i++) {
        this.map[i] = 0;
    }
    this.NumberMap.length = 16;
    for (let i = 0; i < this.NumberMap.length; i++) {
        this.NumberMap[i] = 2;
    }
}
//在空余地图上开辟两个新区域
PlayMain.prototype.start = function () {
    let first = parseInt(Math.random() * (8 + 1), 10);
    let second = parseInt(Math.random() * (8 + 1), 10);
    if (this.map[first] == 0 && this.map[second] == 0 && first != second) {
        this.map[first] = 1;
        this.map[second] = 1;
        this.NumberDetection(first, second)
    } else(
        this.start()
    )
}
//RealList刷新
PlayMain.prototype.NumberDetection = function (first, second) {
    const RealList = this.RealList;
    RealList.forEach((val, index) => {
        if (index == first || index == second) {
            RealList[index] = val * val;
        }       
    });
    PlayMain.show();
}
//界面渲染刷新
PlayMain.prototype.show = function (index) {
    const number = document.getElementsByClassName('number');
    const RealList = this.RealList;
    RealList.forEach((val,id) => {
        number[id].innerHTML = list[id]
    })
}
var a = new PlayMain(list);
a.init();