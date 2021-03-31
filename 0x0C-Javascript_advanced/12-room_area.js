//Create an object named roomDimensions
let roomDimensions = {
    width: 50,
    length: 100,
    getArea() {
        return width * length;
    }
};

let boundGetArea = roomDimensions.getArea.bind(roomDimensions);
boundGetArea();