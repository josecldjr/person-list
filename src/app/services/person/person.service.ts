import { Person } from './Person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personStorageKey = 'person-storage';

  constructor() { console.log('construtor');

    // checa se locasStorage está disponível e avisa ao usuário caso não esteja
    if (localStorage) {
      console.log('local storage');

      // caso não haja uma chave no banco local ela será criada
      if (!localStorage[this.personStorageKey]) { console.log('criando local storage');

        // cria um vetor vazio
        localStorage[this.personStorageKey] = '[]';
      }
    } else {
      // mensagem de alerta
      alert('A funcionalidade locasStorage não está disponível, isso pode influenciar no funcionamento da aplicação.');
    }

   }

   /**
    * Lista todos os contatos no banco local
    */
  list(): Array<Person> {
    // lista que armazena os contatos
    let personsList: Array<Person>;

    // lê os contatos do banco local
    personsList = JSON.parse(localStorage[this.personStorageKey]);

    // return a lista
    return personsList;
  }

  /**
   *  Adiciona uma pessoa ao banco local
   * @param person Objeto que será adicionado
   */
  create( person: Person): Person {
    // lista que armazena os contatos que já estão no banco
    let personsList: Array<Person>;

    // lê os contatos no banco
    personsList = this.list();

    // adiciona uma pessoa à lista
    personsList.push(person);

    // armazena a lista novamente no banco
    localStorage[this.personStorageKey] = JSON.stringify(personsList);

    // retorna o valor que foi adicionado
    return Object.assign({id: 0}, person);
  }


}
