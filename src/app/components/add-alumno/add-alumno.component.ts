import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno.model';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {

  constructor(private service:AlumnoService) { }


  alumno : Alumno = {};

  saveAlumno(){
    console.log(">>> Save Alumno");
    console.log(this.alumno);

    this.service.create(this.alumno).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      error => {
        console.log(error);
      },

    );
  }

  ngOnInit(): void {
  }


}
