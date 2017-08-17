class Library {
    private _items: Array<Item> = new Array<Item>();

    constructor() {
        let inception: Movie = new Movie("Inception", "Thriller", "Dive into dreams",16, "PG");
        let frozen: Movie = new Movie("Frozen", "Family movie", "Let it go!",3, "Kids");
        let playerOne: Book = new Book(new Author("Ernest Cline"), "Ready player one", "Sfi-fi adventure", "Game on!");
        let gameOfThrones :Book = new Book(new Author("George RR Martin"),"Game of Thrones","Fantasy","Only play to win");
        this._items.push(inception);
        this._items.push(frozen);
        this._items.push(playerOne);
        this._items.push(gameOfThrones);
    }

    outputToHTML(): void {
        let element :HTMLElement = document.getElementById("items");
        this._items.forEach(item => item.render(element));

    }
}