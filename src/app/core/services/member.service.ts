import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberModel } from '../../shared/models/member.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) {
  }

  getMemberData(): Observable<MemberModel> {
    return this.http.get<MemberModel>('api/member');
  }
}
