import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private sharedService: SharedService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.sharedService.setLoading(true);

    return next.handle(request).pipe(
      finalize(() => {
        this.sharedService.setLoading(false);
      })
    );
  }
}
