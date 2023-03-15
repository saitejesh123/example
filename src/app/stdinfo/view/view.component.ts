import { Component, OnInit } from '@angular/core';
import { StdinfoService } from '../stdinfo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stdinfo } from '../stdinfo';
    
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
     
  stdid!: number;
  stdinfo!: Stdinfo;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public stdinfoService: StdinfoService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.stdid = this.route.snapshot.params['stdinfostdid'];
        
    this.stdinfoService.find(this.stdid).subscribe((data: Stdinfo)=>{
      this.stdinfo = data;
    });
  }
    
}
