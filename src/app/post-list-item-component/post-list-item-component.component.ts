import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.css']
})
export class PostListItemComponentComponent implements OnInit {

@Input() postTitle : string;
@Input() postContent: string;
@Input() postDate : Date;
@Input() postLoveIts : number;


  constructor() { }

  ngOnInit() {
    console.log('date  ' +this.postDate)
  }

onAddLike() {
  this.postLoveIts = this.postLoveIts+1;
  console.log('loveIts count : ' + this.postLoveIts);
}

onRemoveLike() {
  this.postLoveIts = this.postLoveIts-1;
  console.log('loveIts count :  ' + this.postLoveIts);
}


}
