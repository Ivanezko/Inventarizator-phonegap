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
                var res = check(result.text);
                if (res) {
                    alert(res);
                } else {
                    alert('not found');
                }
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
