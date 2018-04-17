/*
    Project for bluetooth board case.
    All dimensions are in mm, tolerance is 0.1mm.
*/

const board = {
    dimensions: {
        width: 61.7,
        length: 58.3,
        thickness: 1.6,
        heightFromBoardTop: 12.5,
        heightFromBoardBottom: 1.7,
        microUsbGap: 7.5,
        headphoneGap: 9.3,
        holesDiameter: 2.5,
        topRightHole: {
            top: 15.4,
            right: 2.5
        },
        topLeftHole: {
            top: 2.5,
            left: 3.4
        },
        bottomLeftHole: {
            bottom: 2.5,
            left: 3.6
        }
    }
};

const boardCase = {
    wallThickness: 2,
    usbGapHeight: 4.9,
    audioJackHeight: 8.4,
    boltType: "M2.5 , HEX CAP",
    boltHeadDimensions: {
        diameter: 5,
        height: 1.7
    }
};