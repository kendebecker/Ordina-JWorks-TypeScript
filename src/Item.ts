abstract class Item{

      _title : string;
      _genre : string;
      _description : string;



    constructor(title: string, genre: string, description: string) {
        this._title = title;
        this._genre = genre;
        this._description = description;
    }
    abstract render(element : HTMLElement)  : void;
}