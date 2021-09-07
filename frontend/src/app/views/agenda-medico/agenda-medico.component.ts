import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy,ViewChild, TemplateRef, } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, addMinutes,} from 'date-fns';

import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, } from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#2671c3',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};


@Component({
  selector: 'app-agenda-medico',
  templateUrl: './agenda-medico.component.html',
  styleUrls: ['./agenda-medico.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgendaMedicoComponent implements OnInit {

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  modalData: any = {
    action: 'string',
    event: 'CalendarEvent'
  };
  modalContent: any;

  ngOnInit(): void {
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [

    {
      start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 0) , 
      end: addMinutes(addHours(new Date('September 1, 2021'), 7), 30),
      title: 'Orden 1, Medico: 112, Paciente: 1090519942',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 0) , 
      end: addMinutes(addHours(new Date('September 1, 2021'), 7), 30),
      title: 'Orden 1, Medico: 112, Paciente: 1090519942',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },








    {
      start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 2), 0) , 
      
      end: addMinutes(addHours(new Date('September 2, 2021'), 2), 30),
      title: 'Examen 4',
      color: colors.blue,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 2), 0) , 
      
      end: addMinutes(addHours(new Date('September 3, 2021'), 2), 30),
      title: 'Examen 4',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 2), 0) , 
      
      end: addMinutes(addHours(new Date('September 6, 2021'), 2), 30),
      title: 'Examen 4',
      color: colors.red,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 2), 0) , 
      
      end: addMinutes(addHours(new Date('September 7, 2021'), 2), 30),
      title: 'Examen 4',
      color: colors.blue,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 2), 0) , 
      
      end: addMinutes(addHours(new Date('September 8, 2021'), 2), 30),
      title: 'Examen 4',
      color: colors.black,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 2), 0) , 
      
      end: addMinutes(addHours(new Date('September 9, 2021'), 2), 30),
      title: 'Examen 4',
      color: colors.red,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    },

  ];

  activeDayIsOpen: boolean = false;

  constructor(private modal: NgbModal) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }


  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

}
