/**
 * Created by ivanezko on 25.04.16.
 */


function scanBarCode(mode) {
    cordova.plugins.barcodeScanner.scan(
        function (result) {

            if (mode == 'save') {
                save(result.text, 'dummy');
            }

            if (mode == 'check') {
                check(result.text);
            }

            /*alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);*/
        },
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}
