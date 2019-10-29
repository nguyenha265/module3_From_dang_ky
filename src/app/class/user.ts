import {EmailValidator} from '@angular/forms';

export class User {
  private name: string;
  private email: EmailValidator;
  private password: string;
  private confirmPassword: string;

  setName(name: string) {
    this.name = name;
  }
}
