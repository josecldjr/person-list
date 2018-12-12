import { PersonsListComponent } from './../../pages/persons-list/persons-list.component';
import { Person } from './../../services/person/Person';
import { Component, OnInit, Input, } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-save-person-button',
  templateUrl: './save-person-button.component.html',
  styleUrls: ['./save-person-button.component.scss']
})
export class SavePersonButtonComponent implements OnInit {

  @Input()
  personsListComponent: PersonsListComponent;

  @Input()
  selectedPerson = {
    id: null, name: null, email: null, cpf: null, sexo: null, phones: [],
    tags: [], description: null, birthDate: null, creationDate: null, lastUpdate: null
  };

  constructor() { }

  ngOnInit() {

  }

  savePerson() {
    this.personsListComponent.createContact(new Person(this.selectedPerson));

    this.resetSelectedperson();
  }

  private resetSelectedperson() {
    this.selectedPerson = {
      id: null, name: null, email: null, cpf: null, sexo: null, phones: [],
      tags: [], description: null, birthDate: null, creationDate: null, lastUpdate: null
    };
  }

  open() {
    $('#save-person-modal').modal('show');
  }

  close() {
    $('#save-person-modal').modal('hide');

    this.resetSelectedperson();
  }

}
