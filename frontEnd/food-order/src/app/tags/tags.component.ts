import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/modules/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
@Input()foodPageTags?:String[];
tags?:Tag[]
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.foodService.getAllTags()
  }

}
