import { PersonService } from './../../services/person/person.service';
import { Person } from './../../services/person/Person';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SavePersonButtonComponent } from '../../components/save-person-button/save-person-button.component';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  /** Lista de contatos */
  public contactList: Array<Person> =  new Array<Person>();

  @ViewChild('savePerson')
  public p;

  constructor( private personService: PersonService) {
    this.getContactList();
   }

  ngOnInit() {
  }

  /**
   * Busca a lista de contatos do banco local
   */
  getContactList() {
    this.contactList = this.personService.list();
  }

  /**
   * Adiciona um contato
   * @param person pessoa que será criada
   */
  createContact(person: Person) {
    // resultado da operação de criar contato
    const resultPerson = this.personService.create(person);

    // adiciona o contato criado à lista para visualização
    this.contactList.push(resultPerson);
  }

  /**
   * Altera um contato já existente à partir do id do mesmo
   * @param person pessoa que será alterada
   */
  updateContact(person: Person) {
    // armazena o resultado da operação
    const resultPerson = this.personService.update(person);

    // altera a lista de pessoas caso o resultado seja positivo
    if (resultPerson) {
      this.contactList.forEach((e, i) => {
        if (e.id === person.id) {
          this.contactList[i] = person;
        }
      });
    }
  }

  /**
   * Deleta uma pessoa à partir do id
   * @param id id da pesoa que será deletada
   */
  deleteContact(id: number) {
    const deleteResult = this.personService.deletePerson(id);

    if (deleteResult) {
      this.contactList.forEach((e, i) => {
        if (e.id === id) {
          this.contactList.splice(i, 1);
        }
      });
    }
  }

  /**
   * Seleciona um contato à partir do id
   * @param id id do contato
   */
  selectContactFromList(id: number) {

    this.p.open();

    this.contactList.forEach( e => {
      if (e.id === id) {
        this.p.selectedPerson = e;
      }
    });

  }

}
