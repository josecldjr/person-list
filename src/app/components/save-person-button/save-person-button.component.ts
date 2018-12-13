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

  /** referência ao componente de lista de pessoas */
  @Input()
  personsListComponent: PersonsListComponent;

  /** Pessoa atualmente selecionada */
  @Input()
  selectedPerson = {
    id: null, name: null, email: null, cpf: null, sexo: null, phones: [],
    tags: [], description: null, birthDate: null, creationDate: null, lastUpdate: null
  };

  constructor() { }

  ngOnInit() {

  }

  /**
   * Cria uma pessoa (caso id seja igual a null ) ou altera uma já existente
   */
  savePerson() {
    if (!this.selectedPerson.id) {
      this.personsListComponent.createContact(new Person(this.selectedPerson));
    } else {
      this.personsListComponent.updateContact(new Person(this.selectedPerson));
    }

    this.resetSelectedperson();
  }

  /**
   * Reseta a pessoa selecionada no momente // desseleciona a atual
   */
  private resetSelectedperson() {
    this.selectedPerson = {
      id: null, name: null, email: null, cpf: null, sexo: null, phones: [],
      tags: [], description: null, birthDate: null, creationDate: null, lastUpdate: null
    };
  }

  /**
   * Abre o modal de criar pessoa
   */
  open() {
    $('#save-person-modal').modal('show');
  }

  /**
   * Fecha o modal de cria pessoa
   */
  close() {
    $('#save-person-modal').modal('hide');

    this.resetSelectedperson();
  }

}
