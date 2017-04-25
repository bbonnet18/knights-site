export class Field {
	address:Address;
	constructor (public name:string, address?:Address){
		
	}
}

export class Address{
	location:string;
	zip:number;
	constructor(location:string,zip:number){
		
	}
}