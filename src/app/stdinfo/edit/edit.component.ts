import { Component, OnInit } from '@angular/core';
import { StdinfoService } from '../stdinfo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stdinfo } from '../stdinfo';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  stdid!:number;
  id!: number;
  stdinfo!: Stdinfo;
  form!: FormGroup;

  constructor(
    public stdinfoService: StdinfoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.stdid = this.route.snapshot.params['stdinfoId'];
    this.stdinfoService.find(this.id).subscribe((data: Stdinfo) => {
      console.log(data);
      this.stdinfo = data;
    });

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

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.stdinfoService.update(this.stdid, this.form.value).subscribe((res: any) => {
      console.log('Post updated successfully!');
      this.router.navigateByUrl('stdinfo/index');
    })
  }
}
