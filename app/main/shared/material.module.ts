import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatDialogModule } from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { MatTabsModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
@NgModule({
  declarations: [

  ],
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }
