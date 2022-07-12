import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit {

    course?: Course;

    /*Através do activateRoute conseguimos pegar informações das rotas que estão ativas*/
    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {

    }
    
    ngOnInit(): void {
        /*No momento de iniciar a nova rota, pego o ID da rota que está ativa e chamando essa nova rota.
          O sinal de "+" transforma a atribuição em NUMBER.
        */
        this.course = this.courseService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!);  
    }

}