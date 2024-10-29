import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import {  Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { Movie } from "../../../public/models/movie";

@Injectable()

export class MovieService{

    url="http://localhost:3000/movies"

    constructor(private http:HttpClient){


    }

    getMovies(): Observable<Movie[]>{
        return this.http.get<Movie[]>(this.url).pipe(
            tap(data=> console.log(data)),
            catchError(this.handleError)
        );
    }

    private handleError(error:HttpErrorResponse)
    {
        if(error.error instanceof ErrorEvent)
        {
                //client or network errors
        }
        else
        {   
            //server error backend
            switch(error.status)
            {
                case 404:
                    console.error("404 error");
                    break;
                    case 403:
                        console.error("403 error");
                        break;
                        case 500:
                            console.error("500 error");
break;
default:
    console.log("bilinmeyen bir hata");


            }
        }
        return throwError("bir hata oluştu");
    }
}