import { Component, OnInit } from '@angular/core';
import { StdinfoService } from '../stdinfo.service';
import { Stdinfo } from '../stdinfo';
      
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
      
  stdinfos: Stdinfo [] = [];
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(public stdinfoService: StdinfoService) { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.stdinfoService.getAll().subscribe((data: Stdinfo[])=>{
      this.stdinfos = data;
      console.log(this.stdinfos);
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  deletePost(id:number){
    this.stdinfoService.delete(id).subscribe(res => {
         this.stdinfos = this.stdinfos.filter(item => item.stdid !== id);
         console.log('Post deleted successfully!');
    })
  }
    
}