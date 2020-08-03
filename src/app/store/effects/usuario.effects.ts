import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';


@Injectable()
export class UsuarioEffects {

constructor(

    private actions$: Actions, //observable que esta escuchando todas las acciones
    private usuarioService: UsuarioService

) {}

    cargarUsuario$ = createEffect(
        () => this.actions$.pipe(
            ofType( usuariosActions.cargarUsuario ),
            mergeMap( 
                ( action ) => this.usuarioService.getUserById( action.id )
                    .pipe(
                        // tap( data => console.log( 'getUsers$ effect', data ) ) // muestra resultado
                        map( user => usuariosActions.cargarUsuarioSuccess({ usuario: user })),
                        catchError( err => of(usuariosActions.cargarUsuarioError({ payload: err })))
                    )
             )
        )
    )
}