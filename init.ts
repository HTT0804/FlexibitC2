/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/


/**
* Custom blocks
*/
//% weight=100 color=#037c28 icon="\uf079"
namespace Flexibit {
    /**
    * To enable compatibility towards robotbit
    */
    //% block
    export function HighPowerDriverC2(): void {

        let i2c_id = 40
        let dr4 = 0x2008 /* send 32(dex) to reg A8 */
        let dr5 = 0x0806 /* send 8(dex) to reg A6 */
        let dr10 = 0x2402 /* send 36(dex) to reg A2 */
        let dr11 = 0x2400 /* send 36(dex) to reg A0 */
        pins.i2cWriteNumber(
            i2c_id,
            dr4,
            NumberFormat.UInt16LE,
            false
        )
        basic.pause(500)
 
        pins.i2cWriteNumber(
            i2c_id,
            dr5,
            NumberFormat.UInt16LE,
            false
        )
        basic.pause(500)
        
        pins.i2cWriteNumber(
            i2c_id,
            dr11,
            NumberFormat.UInt16LE,
            false
        )
        basic.pause(500)
        
            pins.i2cWriteNumber(
            i2c_id,
            dr10,
            NumberFormat.UInt16LE,
            false
        )
        basic.pause(500)
        basic.pause(500)
        basic.showLeds(`
        # # # # #
        . # # . .
        # # # # #
        . # # . #
        # # # # #
        `)


    }

    
}

