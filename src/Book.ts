class Book extends Item {

    author:Author;
    constructor(title:string,author:Author,genre:string,description:string){
        super(title,genre,description)
        this.author = author;
    }
    render(element: HTMLElement):void {
        let article: HTMLElement = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<h4>" + this.author.name + "</h4>" +
            "<p>" + this.genre + "</p>" +
            "<span>" + this.description + "</span>";

        element.appendChild(article);
    }

    static fromJSON(data : any) : Book{
        let jsonObj = JSON.parse(data);
        for (var propName in jsonObj) {
            this[propName] = jsonObj[propName]
        }
    }
}