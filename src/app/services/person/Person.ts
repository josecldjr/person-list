

export class Person {

  private id?: number;
  private name: string;
  private email: string;
  private cpf: string;
  private sexo;
  private phones: Array<String>;
  private tags: Array<String>;
  private description: string;
  private birthDate: Date;
  private creationDate: Date;
  private lastUpdate: Date;

  /**
   * Construtor
   * @param person Interface de Person
   */
  constructor ( person) {

    this.id = person.id ? person.id : null;
    this.name = person.name;
    this.email = person.email;
    this.cpf = person.cpf;
    this.sexo = person.sexo;
    this.phones = person.phones;
    this.tags = person.tags;
    this.description = person.description;
    this.birthDate = person.birthDate;
    this.creationDate = person.creationDate;
    this.lastUpdate = person.lastUpdate;

  }

  /**
   * Calcula a idade baseado na data de nascimento e na data atual
   * @param truncate retornar um número inteiro?
   */
  getAge(truncate?: boolean): number {
    const r =  (new Date().getTime() - this.birthDate.getTime() ) / 1000 / 60 / 60 / 24 / 365;

    return 1; // truncate ? Math.trunc(r) : r;
  }

  // getters e setters

}
