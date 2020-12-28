// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoModule } from './todos/todo.module';

// components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

// ngRx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    TodoModule,
    StoreModule.forRoot({
      todos: todoReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
