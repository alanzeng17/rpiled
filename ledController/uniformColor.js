// we will need this eventually to actually control the lights
import ws281x from 'rpi-ws281x-native';

const setColor = (req, res, next) => {
    console.log('Here is where we would change the color of the LEDs.');
    let newColor = parseInt(`0x${req.params.color}`);
    res.status(200).json({
        data: {
            message: `Successfully changed color to: ${newColor}`
        }
    });
}

module.exports = setColor;