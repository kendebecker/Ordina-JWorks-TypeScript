class JSONParser{

    getJSON(uri:string, fn: (data: any) => void): void {
        let request = new XMLHttpRequest();
        request.open('GET', uri, true);

        request.onload = function() {
            if (this.status >= 200 && this.status < 400) {
                fn(JSON.parse(this.response));
            } else {
                console.error(this);
            }
        };

        request.onerror = function() {
            console.error(this);
        };
        request.send();
    }
}



