import { Inject, Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

import { LoaderService } from '@app/core.module';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

  constructor(@Inject(LoaderService) private loaderService: LoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess({ httpReq: request, next }));
  }
  private handleAccess({ httpReq, next }: { httpReq: HttpRequest<any>; next: HttpHandler }): Observable<HttpEvent<any>> {
    this.loaderService.showLoader(true);
    const headers = httpReq.headers.set('Content-Type', 'application/json');
    const customReq = httpReq.clone({
      headers
    });
    return next.handle(customReq).pipe(
      catchError((error: HttpErrorResponse) =>
        throwError(error)
      ),
      finalize(() => this.loaderService.showLoader(false))
    );
  }
}