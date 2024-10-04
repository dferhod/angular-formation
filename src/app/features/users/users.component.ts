import {
  Component,
  ElementRef,
  inject,
  Input,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { UserCardComponent } from './user-card.component';
import { User } from '../../core/interfaces/user';
import { PluralPipe } from '../../shared/pipes/plural.pipe';
import { FormsModule, NgForm } from '@angular/forms';
import { Extensionpipe } from '../../shared/pipes/extension.pipe';
import { LoaderComponent } from '../../atomics/loader/loader.component';
import { AlphaRangeComponent } from '../../atomics/alpha-range/alpha-range.component';
import { UsersService } from '../../core/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  standalone: true,
  imports: [
    UserCardComponent,
    PluralPipe,
    FormsModule,
    Extensionpipe,
    LoaderComponent,
    AlphaRangeComponent
  ],
})
export class UsersComponent implements OnInit {
  private usersService = inject(UsersService)

  @ViewChildren('refUser') propCards!: QueryList<ElementRef<HTMLDivElement>>;

  nbSelected = 0;
  extSelected = '';
  extensions: string[] = ['tv', 'biz', 'io', 'me'];
  cardIndex = 0;
  errorMessage = '';
  listLoading = false;
  createLoading = false
  users = this.usersService.usersFiltered

  
  ngOnInit(): void {
    // this.usersService.getAll().subscribe(() => {
    //   this.listLoading = false;
    // })
  }

  createUser(form: NgForm) {
    if (form.invalid) return
    this.createLoading = true
    this.usersService.create(form.value).subscribe({
      next: () => {
        this.createLoading = false
        form.resetForm()
      },
      error: (err) => {
        this.createLoading = false
      },
      // complete: () => {

      // }
    })
  }

  deleteUser(id: number) {
     this.usersService.delete(id).subscribe()
  }

  scrollToUser() {
    const arrayElementCards = this.propCards.toArray();
    const elementCard = arrayElementCards[this.cardIndex];
    if (!elementCard) {
      this.errorMessage = 'Index invalide';
      return;
    }
    this.errorMessage = '';
    elementCard.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
}
