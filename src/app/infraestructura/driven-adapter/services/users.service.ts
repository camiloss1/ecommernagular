import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/User/gateway/user-gateway';
import { User } from 'src/app/domain/models/User/user';
import { GenericService } from '../../helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements UserGateway{

  constructor(private genericService: GenericService) { }
  signup(user: User): Observable<User> {
   return this.genericService.post<User>('https://run.mocky.io/v3/414bf8aa-3bff-4192-9421-2f87115fd663','',user);
  }

  login(email: string, password: string) : Observable<User> {
    return this.genericService.get<User>('https://run.mocky.io/v3/414bf8aa-3bff-4192-9421-2f87115fd663');
  }
}
