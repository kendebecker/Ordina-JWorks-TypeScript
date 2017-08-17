class Library {

    items:Array<Item>;

    constructor(public books: Array<Book>,public movies:Array<Movie>){

    }

    static fromJSON(data: any) : Library {
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books,movies);
    }
    getAll(): Array<Item> {
        this.items = (<Item[]>this.books).concat(this.movies);
        return this.items;
    }
    addMovie(elementID : string):void{
        this.items.push(new Movie("some movie","horror","dont look behind you",18,"Adults only"));
        let element : HTMLElement = document.getElementById(elementID);
        this.items.forEach(value => value.render(element));
    }
    addBook(elementID : string):void{
        this.items.push(new Book("some book",new Author("some guy"),"drama","guaranteed bestseller"));
        let element : HTMLElement = document.getElementById(elementID);
        this.items.forEach(value => value.render(element));
    }
}