/*class Library {
    items:Array<Item> = [];

    constructor(){
        let matrix  = new Movie("Matrix","thriller","tell em some",16,"PG");
        let mobyDick = new Book("Moby Dick",new Author("Herman Malville"),"Drama","About a big fish");

        this.items.push(matrix);
        this.items.push(mobyDick);
    }

    static fromJSON(data: any) : Library {
       // todo Initialise the two arrays with the external json resource
        return null
    }

    publishItems():void{

        let itemContainer: HTMLElement = document.getElementById("items");
        this.items.forEach(item => item.render(itemContainer));
    }
}*/
class Library{
    books : Array<Book>;
    movies : Array<Movie>;
    items:Array<Item> = [];

    constructor(books : Array<Book>,movies :Array<Movie>){
        this.books = books;
        this.movies = movies;
    }

    static fromJSON(data: any) : Library {
        let books: Array<Book> = data.books.map(val => Book.fromJSON(val));
        let movies: Array<Movie> = data.movies.map(val => Movie.fromJSON(val));

        return new Library(books,movies);
    }

    getAll(): Array<Item>{
        this.books.forEach(book => this.items.push(book));
        this.movies.forEach(movie => this.items.push(movie));
        return this.items;
    }
}

/*
constructor(public books: Array<Book>,public movies:Array<Movie>){

}*/

/*
getAll(): Array<Item> {
    this.items = (<Item[]>this.books).concat(this.movies);
return this.items;
}*/