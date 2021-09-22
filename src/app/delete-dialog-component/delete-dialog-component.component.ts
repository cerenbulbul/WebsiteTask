import { Component, OnInit } from '@angular/core';
import { DocumentData, QuerySnapshot } from '@angular/fire/compat/firestore';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-delete-dialog-component',
  templateUrl: './delete-dialog-component.component.html',
  styleUrls: ['./delete-dialog-component.component.css']
})
export class DeleteDialogComponentComponent implements OnInit {

  constructor(private fb: FormBuilder, public UserService: UsersService) { }

  Users:any;
  Number: any;

    //New Users information
    deleteUser = this.fb.group({
      Number: [ Validators.required],
    });

    DeleteUserInformation() {
      
      this.UserService.deleteUsers(this.deleteUser.value.Number);
    
  
    }

  ngOnInit(): void {
  }

}
