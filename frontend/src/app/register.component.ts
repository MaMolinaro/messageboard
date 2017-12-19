import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  moduleId: module.id,
  selector: 'register',
  templateUrl: 'register.component.html',
  styleUrls: ['./app.component.css']
})
export class RegisterComponent {
    form;

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        }, { validators: matchingFields('password', 'confirmPassword')})
    }

    onSubmit() {
        console.log(this.form.errors);
        console.log(this.form.valid);
    }

    isValid(control) {
        return this.form.controls[control].invalid && this.form.controls[control].touched;
    }
}

function matchingFields(field1, field2) {
    return form => {
        if (form.constrols[field1].value !== form.constrols[field2].value) 
            return { mismatchedFields: true }
    }
}
