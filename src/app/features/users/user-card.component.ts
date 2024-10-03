import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { User } from '../../core/interfaces/user';
import { LangPipe } from '../../shared/pipes/lang.pipe';

@Component({
  selector: 'app-user-card',
  template: `
    <article>
      <ng-content select=".title" />
      <header>{{ user.name }}</header>
      {{ user.email }}
      <footer>
        <ng-content />
        <button (click)="remove()">{{ 'REMOVE' | lang : 'fr' }}</button>
      </footer>
    </article>
  `,
  standalone: true,
  imports: [LangPipe],
})
export class UserCardComponent implements OnInit, AfterContentInit {
  @Input() user: User = {} as User;
  @Output() eventDelete: EventEmitter<number> = new EventEmitter();
  // @ContentChild('title') refTitle!: ElementRef<HTMLElement>
  @ContentChildren('title') refTitle!: QueryList<ElementRef<HTMLElement>>;

  ngOnInit() {}

  ngAfterContentInit(): void {
    console.log(this.refTitle.toArray());
  }

  remove() {
    this.eventDelete.emit(this.user.id);
  }
}
