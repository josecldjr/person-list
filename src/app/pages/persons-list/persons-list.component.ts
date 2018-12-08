import { PersonService } from './../../services/person/person.service';
import { Person } from './../../services/person/Person';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  /** Lista de contatos */
  public contactList: Array<Person> =  new Array<Person>();

  constructor( private personService: PersonService) {


    // this.createContact(new Person({
    //   name: 'Nome de teste',
    //   email: 'ajsdiajs@mail',
    //   cpf: '19478978564',
    //   birthDate: new Date('1999-06-12 00:00:00') ,
    //   description: 'descriççao',
    //   sexo: 'M',
    //   tags: ['teste', 'seilá', 'zuero'],
    //   phones: ['03146797845', '031987644687'],
    //   lastUpdate: new Date('2018-12-05 12:45:13')  ,
    //   creationDate: new Date('2018-12-05 11:24:23')
    // }));

    this.getContactList();
   }

  ngOnInit() {
  }

  getContactList() {
    this.contactList = this.personService.list();

    console.log(this.contactList);

  }

  createContact(person: Person) {
    const resultPerson = this.personService.create(person);

    this.contactList.push(resultPerson);
  }

}
