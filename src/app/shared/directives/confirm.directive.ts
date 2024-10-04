import { Directive, EventEmitter, HostListener, Input, Output } from "@angular/core";

@Directive({
    selector: '[confirm]',
    standalone: true
})
export class ConfirmDirective {
    @Input('confirm') message = ''
    @Input() confirmUserName = ''
    @Output() eventConfirm: EventEmitter<void> = new EventEmitter()

    @HostListener('click')
    openDialog() {
        const bool = window.confirm(this.message + '...' + this.confirmUserName)
        if (bool) this.eventConfirm.emit()
    }
}