
export class ConfigGoogleForm {
	public id: string;
	public updateTime: string;
	public items: Array<ItemGoogleForm>;
	
	constructor(id: string){
		this.id = id;
		this.items = [];
	}
}

export class ItemGoogleForm {
	public entry: string;
	public label: string;
	public description: string;
	public required: boolean;
	public type: Type;
	
	constructor(entry: string){
		this.entry = entry;
	}
}

export enum Type {
	TEXT, COMBO, MULTI, DATE, TIME	
}
