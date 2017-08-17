class Movie extends Item implements Rating{
     _age: number;
     _name: string;



    constructor(title : string,
    genre : string,description : string,age:number,name:string){
        super(title,genre,description);
        this._age = age;
        this._name=name;
    }

    render(element: HTMLElement): void {
        let article: HTMLElement = document.createElement("article");
        article.innerHTML =
            "<h3>" + this._title + "</h3>" +
            "<p>" + this._genre + "</p>" +
            "<span>" + this._description+ "</span>"+
            "<p>" + this._age + "</p>"+
            "<p>" + this._name + "</p>";


        element.appendChild(article);

    }

}