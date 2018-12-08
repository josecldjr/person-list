

export class Person {

  private _id?: number;
  private _name: string;
  private _email: string;
  private _cpf: string;
  private _sexo;
  private _phones: Array<String>;
  private _tags: Array<String>;
  private _description: string;
  private _birthDate: Date;
  private _creationDate: Date;
  private _lastUpdate: Date;

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
  public getAge(truncate?: boolean): number {
    const r =  (new Date().getTime() - this._birthDate.getTime() ) / 1000 / 60 / 60 / 24 / 365;

    return truncate ? Math.trunc(r) : r;
  }

  // getters e setters

  /**
   * GETTER : id
   */
  public get id(): number {
    return this._id;
  }
  /**
  * SETTER : id
  */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * GETTER : name
   */
  public get name(): string {
    return this._name;
  }
  /**
   * SETTER : name
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * GETTER : email
   */
  public get email(): string {
    return this._email;
  }
  /**
   * SETTER : email
   */
  public set email(value: string) {
    this._email = value;
  }

  /**
   * GETTER : cpf
   */
  public get cpf(): string {
    return this._cpf;
  }
  /**
   * SETTER : cpf
   */
  public set cpf(value: string) {
    this._cpf = value;
  }

  /**
   * GETTER : sexo
   */
  public get sexo() {
    return this._sexo;
  }
  /**
   * SETTER : sexo
   */
  public set sexo(value) {
    this._sexo = value;
  }

  /**
   * GETTER : phones
   */
  public get phones(): Array<String> {
    return this._phones;
  }
  /**
   * SETTER : phones
   */
  public set phones(value: Array<String>) {
    this._phones = value;
  }

  /**
   * SETTER : tags
   */
  public get tags(): Array<String> {
    return this._tags;
  }
  /**
   * SETTER : tags
   */
  public set tags(value: Array<String>) {
    this._tags = value;
  }

  /**
   * GETTER : description
   */
  public get description(): string {
    return this._description;
  }
  /**
   * SETTER : description
   */
  public set description(value: string) {
    this._description = value;
  }

  /**
   * GETTER
   */
  public get creationDate(): Date {
    return this._creationDate;
  }
  /**
   * SETTER
   */
  public set creationDate(value: Date) {
    this._creationDate = value;
  }

  /**
   * GETTER
   */
  public get lastUpdate(): Date {
    return this.lastUpdate;
  }
  /**
   * SETTER
   */
  public set lastUpdate(value: Date) {
    this._lastUpdate = value;
  }

  /**
   * GETTER
   */
  public get birthDate(): Date {
    return this._birthDate;
  }
  /**
   * SETTER
   */
  public set birthDate(value: Date) {
    this._birthDate = value;
  }
}
