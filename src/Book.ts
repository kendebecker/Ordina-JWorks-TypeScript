class Book extends Item{

     _author : Author;



    constructor(author :Author,title : string,genre : string,description : string){
        super(title,genre,description);
        this._author = author;

    }
    render(element: HTMLElement): void {
        let article: HTMLElement = document.createElement("article");
        article.innerHTML =
            "<h3>" + this._title + "</h3>" +
            "<p>" + this._genre + "</p>" +
            "<p>" + this._author._name + "</p>" +
            "<span>" + this._description+ "</span>"+


        element.appendChild(article);

    }

}