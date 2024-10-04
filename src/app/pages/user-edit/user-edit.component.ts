import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../core/services/users.service';
import { User } from '../../core/interfaces/user';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private usersService = inject(UsersService)
  user = {} as User

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    //const usersList = this.route.snapshot.data['usersList']
    this.usersService.get(id).subscribe((user) => {
      this.user = user
    })
  }
}
