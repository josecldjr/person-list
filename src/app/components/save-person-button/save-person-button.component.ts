import { PersonsListComponent } from './../../pages/persons-list/persons-list.component';
import { Person } from './../../services/person/Person';
import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-save-person-button',
  templateUrl: './save-person-button.component.html',
  styleUrls: ['./save-person-button.component.scss']
})
export class SavePersonButtonComponent implements OnInit {

  @Input()
  personsListComponent: PersonsListComponent ;

  constructor() { }

  ngOnInit() {


  }

  savePerson() {
    this.personsListComponent.createContact(new Person({
      name: 'Nome de teste',
      email: 'ajsdiajs@mail',
      cpf: '19478978564',
      birthDate: new Date('1999-06-12 00:00:00') ,
      description: 'descriççao',
      sexo: 'M',
      tags: ['teste', 'seilá', 'zuero'],
      phones: ['03146797845', '031987644687'],
      lastUpdate: new Date('2018-12-05 12:45:13')  ,
      creationDate: new Date('2018-12-05 11:24:23')
    }));

  }

  open() {
    $('#save-person-modal').modal('show');
  }

  close() {
    $('#save-person-modal').modal('hide');
  }

}
