import { Person } from './Person';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersonService {

  personStorageKey = 'person-storage';

  constructor() {

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
   * retorna uma pessoa à partir do id
   */
  getById(id: number) {
    // busca pessoas no banco de dados
    const personList = this.list();
    // variável de retorno
    let r = null;

    // percorre o vetor procurando pelo id especificado
    personList.forEach( (e) => {

      if (e.id === id) { // id = index?
        // retorna o element
        r = e;
       }
    });

    // retorna null, caso não haja o id não esteja presente no vetor
    return r;
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

     // adiciona um id ao retorn
     person['id'] = Math.floor( Math.random() * 99999);

    // adiciona uma pessoa à lista
    personsList.push(person);

    // armazena a lista novamente no banco
    localStorage[this.personStorageKey] = JSON.stringify(personsList);

    // retorna o valor que foi adicionado
    return  person;
  }

  deletePerson(id: number){
    let personList = this.list();

    personList.forEach( e => {
      // TODO: IMPLEMENTAR DELEÇÃO
    })
  }


}
