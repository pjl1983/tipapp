import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../core/services/member.service';
import { MemberModel } from '../../shared/models/member.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  member: MemberModel;

  constructor(private memberService: MemberService) {
  }

  ngOnInit(): void {
    this.memberService.getMemberData().subscribe((member: MemberModel) => {
      this.member = member;
    });
  }

}
