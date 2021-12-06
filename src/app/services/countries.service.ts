import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from './../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService
{
  constructor(private httpClient: HttpClient)
  {
  }

  getCountries(): Observable<Country[]>
  {
    return this.httpClient.get<Country[]>("/api/countries", { responseType: "json" });
  }

  getCountryByCountryID(CountryID: number): Observable<Country>
  {
    return this.httpClient.get<Country>("/api/countries/searchbycountryid/" + CountryID, { responseType: "json" });
  }

  insertCountry(newCountry: Country): Observable<Country>
  {
    return this.httpClient.post<Country>("/api/countries", newCountry, { responseType: "json" });
  }

  updateCountry(existingCountry: Country): Observable<Country>
  {
    return this.httpClient.put<Country>("/api/countries", existingCountry, { responseType: "json" });
  }

  deleteCountry(CountryID: number): Observable<string>
  {
    return this.httpClient.delete<string>("/api/countries?CountryID=" + CountryID);
  }
}
