import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DeleteLocationsResDto } from '../../dto/locations/delete-locations-res-dto';
import { GetAllLocationsResDto } from '../../dto/locations/get-all-locations-res-dto';
import { GetByCodeLocationsResDto } from '../../dto/locations/get-by-code-locations-res-dto';
import { GetByIdLocationsResDto } from '../../dto/locations/get-by-id-locations-res-dto';
import { Locations } from '../../dto/locations/locations';
import { SaveLocationsResDto } from '../../dto/locations/save-locations-res-dto';
import { UpdateLocationsResDto } from '../../dto/locations/update-locations-res-dto';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Locations[]> {
    return this.http.get<Locations[]>('http://localhost:8888/locations/');
  }

  getById(id: string): Observable<GetByIdLocationsResDto> {
    return this.http.get<GetByIdLocationsResDto>('http://localhost:8888/locations/id?id=' + id);
  }

  getByCode(code: string): Observable<GetByCodeLocationsResDto> {
    return this.http.get<GetByCodeLocationsResDto>('http://localhost:8888/locations/code?code=' + code);
  }

  save(locations: Locations): Observable<SaveLocationsResDto> {
    return this.http.post<SaveLocationsResDto>('http://localhost:8888/locations/', locations);
  }

  update(locations: Locations): Observable<UpdateLocationsResDto> {
    return this.http.put<UpdateLocationsResDto>('http://localhost:8888/locations/', locations);
  }

  delete(id: string): Observable<DeleteLocationsResDto> {
    return this.http.delete<DeleteLocationsResDto>('http://localhost:8888/locations/' + id);
  }

}
