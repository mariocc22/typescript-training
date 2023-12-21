// define the interface for the list item, which is the structure of the object that will be stored in the list
export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  // the constructor will set the default values for the properties and it encapsulates the properties as private so they can only be accessed through the getters and setters
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get item(): string {
    return this._item;
  }

  set item(item: string) {
    this._item = item;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(checked: boolean) {
    this._checked = checked;
  }
}
