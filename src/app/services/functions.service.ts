import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { myFunctions } from './../../assets/js/functions.js';
import { SharedService } from './shared.service';

@Injectable()
export class FunctionsService {

  constructor() { }

  reset_page_state() {
    myFunctions.reset_page_state();
  }
  
  hide_comments_counter(){
    myFunctions.hide_comments_counter();
  }
  
  CustomSelect() {
    myFunctions.CustomSelect();
  }

  OnFormSubmit(formId:string) {
    myFunctions.OnFormSubmit(formId);
  }

  SlideshowSwiper() {
    myFunctions.SlideshowSwiper();
  }

  OnTabClick(catIndex:number, contentClass:string){
    myFunctions.OnTabClick(catIndex, contentClass);
  }

  SliderSingleSwiper(){
    myFunctions.SliderSingleSwiper();
  }
  
  load_error_image(obj, defaultImage: string) {
    myFunctions.load_error_image(obj, defaultImage);
  }

  load_fb_comments(id:string){
    myFunctions.load_fb_comments(id);
  }

  ImageAsBgJs(){
    myFunctions.ImageAsBgJs();
  }

  ArticleAsBgJs(){
    myFunctions.ArticleAsBgJs();
  }

  UpdateImageBgJs(obj){
    myFunctions.UpdateImageBgJs(obj);
  }

  getFacebookCounterAjax(urlBrowser:string){
    myFunctions.getFacebookCounterAjax(urlBrowser);
  }

  timeSince(date:any){
    return myFunctions.timeSince(date);
  }

  loadScript(src:string){
    myFunctions.loadScript(src);
  }

  loadStylesheet(src:string){
    myFunctions.loadStylesheet(src);
  }

  FlipBook(){
    myFunctions.FlipBook();
  }
  
  InitializeNavigation(){
    myFunctions.InitializeNavigation();
  }

  HideLoadMore(){
    myFunctions.HideLoadMore();
  }

  CloseMenuOnMobile(){
    myFunctions.CloseMenuOnMobile();
  }

}
