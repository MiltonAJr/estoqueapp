import { AutenticarRequestModel } from "src/app/models/usuarios/autenticar.request.model";
import { AutenticarResponseModel } from "src/app/models/usuarios/autenticar.response.model";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { makeRequest } from "../commons/commons.service";

export function postAutenticar(request: AutenticarRequestModel): Observable<AutenticarResponseModel> {
    /*
    return new Observable<AutenticarResponseModel>(observer => {
        axios.post<AutenticarResponseModel>(`${environment.apiUsuarios}/autenticar`, request)
            .then(
                response => {
                    observer.next(response.data);
                    observer.complete();
                }
            )
            .catch(
                e => { observer.error(e) }
            )
    });
    */
   //Refatorando....

   const config = {
    method: 'post',
    url: `${environment.apiUsuarios}/autenticar`,
    data: request
    };
    return makeRequest<AutenticarResponseModel>(config);
}





    

