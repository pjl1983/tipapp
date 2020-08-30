import { Component, OnInit } from '@angular/core';
import { MemberModel } from '../../shared/models/member.model';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  member: MemberModel;

  constructor(private memberService: MemberService) {
  }

  ngOnInit(): void {
    this.memberService.getMemberData().subscribe((member: MemberModel) => {
      this.member = member;
    });
  }

}
