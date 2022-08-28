import { Component, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'landing_page_angular_multi_languages';

  language:string = "en";

  changeLanguage(language:string){
    this.translate.use(language);
  } 

  constructor(public translate: TranslateService){
    this.translate.addLangs(['en', 'es']);
    this.translate.setDefaultLang('en');
    this.translate.use(this.language);
  }
}
