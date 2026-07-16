import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Administrateur } from '../../Entity/administrateur';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../../Services/admin-service';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
admin:Administrateur={
  id:0,
  nom:'',
  motDePasse:'',
}
constructor( private adminiService:AdminService,private route:Router){}
connexion(){
this.adminiService.login(this.admin).subscribe({
  next:(reponse)=>{
    console.log('Connexion reussi'),
    console.log(reponse),
    this.route.navigate(['/admin/dashbord'])
  },
  error:(err)=>{
    console.log("Erreur");
    console.log(err);
  }
  
  
})

}
}
