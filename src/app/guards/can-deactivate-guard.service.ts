import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import Swal from 'sweetalert2';

export interface CanComponentDeactivate
{
  canLeave: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(component: CanComponentDeactivate)
  {
    if (component.canLeave == true)
    {
      return true; //user can leave the current route
    }
    
    {
      return confirm("Do you want to discard changes?");

    }
  }
}
