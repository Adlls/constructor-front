import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [MatCardModule, HttpClientModule],
  exports: [HttpClientModule]

})
export class SharedModule {

}
