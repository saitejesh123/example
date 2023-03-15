import { Component, OnInit } from '@angular/core';
import { StdinfoService } from '../stdinfo.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
selector: 'app-create',
templateUrl: './create.component.html',
styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

form!: FormGroup;

/*------------------------------------------
Created constructor
--------------------------------------------*/
constructor(
public stdinfoService: StdinfoService,
private router: Router
) { }

/**

Write code on Method
@return response()
*/
ngOnInit(): void {
this.form = new FormGroup({
stdid: new FormControl('', Validators.required),
stdname: new FormControl('', Validators.required),
address: new FormControl('', Validators.required),
phoneno: new FormControl('', Validators.required),
email: new FormControl('', Validators.required),
password: new FormControl('', Validators.required),
confirm_password: new FormControl('', Validators.required),
usertype: new FormControl('', Validators.required)
});
}
/**

Write code on Method
@return response()
*/
get f(){
return this.form.controls;
}
/**

Write code on Method
@return response()
*/
submit(){
console.log(this.form.value);
this.stdinfoService.create(this.form.value).subscribe((res:any) => {
console.log('Post created successfully!');
this.router.navigateByUrl('stdinfo/index');
})
}
}





