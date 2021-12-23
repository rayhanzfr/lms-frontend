import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllLocationsResDto } from '../../dto/locations/get-all-locations-res-dto';
import { GetByCodeLocationsResDto } from '../../dto/locations/get-by-code-locations-res-dto';
import { GetByIdLocationsResDto } from '../../dto/locations/get-by-id-locations-res-dto';
import { Locations } from '../../dto/locations/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<GetAllLocationsResDto> {
    return this.http.get<GetAllLocationsResDto>('http://localhost:8888/locations/');
  }

  getById(): Observable<GetByIdLocationsResDto> {
    return this.http.get<GetByIdLocationsResDto>('http://localhost:8888/locations/id');
  }

  getByCode(): Observable<GetByCodeLocationsResDto> {
    return this.http.get<GetByCodeLocationsResDto>('http://localhost:8888/locations/code');
  }

  save(locations: Locations): Observable<Locations> {
    return this.http.post<Locations>('http://localhost:8888/locations/', locations);
  }

  update(locations: Locations): Observable<Locations> {
    return this.http.put<Locations>('http://localhost:8888/locations/', locations);
  }

  delete(id: string): Observable<Locations> {
    return this.http.delete<Locations>('http://localhost:8888/locations/' + id);
  }

}
