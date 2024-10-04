import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserPayload, UsersService } from '../../core/services/users.service';
import { User } from '../../core/interfaces/user';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.css'
})
export class UserEditComponent implements OnInit {
  private route = inject(ActivatedRoute)
  private usersService = inject(UsersService)
  private builder = inject(FormBuilder)
  
  user = {} as User
  propName = new FormControl()
  form = this.builder.group({
    name: this.propName,
    username: '',
    email: ''
  })

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    //const usersList = this.route.snapshot.data['usersList']
    this.usersService.get(id).subscribe((user) => {
      this.user = user
      // this.propName.setValue(this.user.name)
      // this.form.get('username')?.setValue(this.user.username)
      this.form.patchValue(this.user)
    })
  }

  edit() {
    this.usersService.update(
        this.user.id, 
        this.form.value as UserPayload
    ).subscribe((userModified) => {
      this.user = {
        ...this.user,
        ...userModified,
      } // fusion avec un potentiel objet partiel
    })
  }
}
