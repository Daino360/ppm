import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  
  A_Click(){
    console.log("A");
  }
  
  B_Click(){
    console.log("B");
  }
  
  X_Click(){
    console.log("X");
  }
  
  Y_Click(){
    console.log("Y");
  }
  
  UP_Click(){
    console.log("UP");
  }
  
  DOWN_Click(){
    console.log("gio");
  }
  
  RIGHT_Click(){
    console.log("RIGHT");
  }
  
  LEFT_Click(){
    console.log("LEFT");
  }

}
