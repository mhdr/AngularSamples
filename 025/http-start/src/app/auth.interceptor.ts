import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqCopied = req.clone({
      headers: req.headers.append('', ''),
      params: req.params.set('', '')
    });
    return next.handle(reqCopied);
  }
}
