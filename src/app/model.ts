export class Field {
	name:string;
	address:Address;
	constructor (name:string, address:Address){
		this.name = name;
		this.address = address;
	}
}
//class to break down the elements of an address
export class Address{
	place:string;// this is the street address 
	city:string;
	state:string;
	zip:number;
	constructor(place:string,city:string,state:string,zip:number){
		this.place = place;
		this.city = city;
		this.state = state;
		this.zip = zip;
	}
}


export class Game{
	
	gameDate:Date;
	opponent:string;
	field:Field;
	
	constructor(opponent:string, gameDate:Date, field:Field){
		this.gameDate = gameDate;
		this.opponent = opponent;
		this.field = field; 
	}
	
}


export class FieldAddresses{
		
	
	allFields:Field[];
	constructor(){
		let fieldAddress:Address = new Address('4201 Stringfellow Road','Chantilly','VA',20151); 
		let fieldOne:Field = new Field("Chantilly HS", fieldAddress);
		
		let fieldAddress2:Address = new Address('5801 Franconia Rd','Alexandria', 'VA',22310)
		let fieldTwo:Field = new Field('Edison HS',fieldAddress2);
		
		let fieldAddress3:Address = new Address('1089 Utterback Store Rd','Great Falls','VA',22066); 
		let fieldThree:Field = new Field("Nike Park Field #5", fieldAddress);
		
		let fieldAddress4:Address = new Address('7630 Telegraph Rd','Alexandria', 'VA',22315)
		let fieldFour:Field = new Field('Hayfield Secondary School',fieldAddress2);
		
		this.allFields = [fieldOne,fieldTwo,fieldThree,fieldFour];
	}
	
	getFieldsList():Field[]{
		return this.allFields;
	}

		

	
}

/* format for date with moment -  moment("2017-05-21 15:00").format("dddd, MMMM Do YYYY, h:mm a");*/