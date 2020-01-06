import { Observable, of, forkJoin } from 'rxjs';

export class Base {
    log(message: string) {
        return message;
      }
    
    handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        }
      }
}