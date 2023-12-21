import ListItem from "./ListItem";

// define the interface for the list, which is the structure of the object that will be stored in the list
interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clearList(): void;
  addItem(itemObj: ListItem): void;
  removeItem(id: string): void;
}

// this will be a singleton class, that means that there will be only one instance of this class
export default class FullList implements List {
  // this static instance will be the only instance of this class
  static instance: FullList = new FullList();

  private constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList");
    if (typeof storedList !== "string") return;

    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList);
    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem(
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );

      FullList.instance.addItem(newListItem);
    });
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = [];
    this.save();
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id);
    this.save();
  }
}
