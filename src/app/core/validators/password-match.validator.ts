import { AbstractControl, FormGroup } from "@angular/forms";

export function passwordMatchValidator(form: AbstractControl<FormGroup>): { matchError: boolean } | null {
    const passwordValue = form.get('password')?.value
    const confirmPassValue = form.get('confirmPassword')?.value
    return passwordValue != confirmPassValue ? { matchError : true } : null
}