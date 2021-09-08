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
   /*  {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    }, */
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [

    {
      start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 0),
      end: addMinutes(addHours(new Date('September 1, 2021'), 7), 30),
      title: 'Orden 1, Medico: 110, Paciente: 1090519942',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 30),
      end: addMinutes(addHours(new Date('September 1, 2021'), 8), 0),
      title: 'Orden 6, Medico: 110, Paciente: 38695045',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 0),
      end: addMinutes(addHours(new Date('September 1, 2021'), 8), 30),
      title: 'Orden 11, Medico: 110, Paciente: 38695045',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 30),
      end: addMinutes(addHours(new Date('September 1, 2021'), 9), 0),
      title: 'Orden 16, Medico: 110, Paciente: 38695045',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 0),
      end: addMinutes(addHours(new Date('September 1, 2021'), 9), 30),
      title: 'Orden 21, Medico: 110, Paciente: 1090547384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 30),
      end: addMinutes(addHours(new Date('September 1, 2021'), 10), 0),
      title: 'Orden 26, Medico: 110, Paciente: 1090563856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 0),
      end: addMinutes(addHours(new Date('September 1, 2021'), 10), 30),
      title: 'Orden 31, Medico: 110, Paciente: 1090547384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },


    {
      start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 30),
      end: addMinutes(addHours(new Date('September 1, 2021'), 11), 0),
      title: 'Orden 36, Medico: 110, Paciente: 1090563856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },





    {
      start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 0),
      end: addMinutes(addHours(new Date('September 2, 2021'), 7), 30),
      title: 'Orden 41, Medico: 110, Paciente: 1090194842',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 30),
      end: addMinutes(addHours(new Date('September 2, 2021'), 8), 0),
      title: 'Orden 46, Medico: 110, Paciente: 1090374837',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 0),
      end: addMinutes(addHours(new Date('September 2, 2021'), 8), 30),
      title: 'Orden 51, Medico: 110, Paciente: 1093495844',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 30),
      end: addMinutes(addHours(new Date('September 2, 2021'), 9), 0),
      title: 'Orden 56, Medico: 110, Paciente: 1090349539',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 0),
      end: addMinutes(addHours(new Date('September 2, 2021'), 9), 30),
      title: 'Orden 61, Medico: 110, Paciente: 1090534384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 30),
      end: addMinutes(addHours(new Date('September 2, 2021'), 10), 0),
      title: 'Orden 66, Medico: 110, Paciente: 1090563856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 0),
      end: addMinutes(addHours(new Date('September 2, 2021'), 10), 30),
      title: 'Orden 71, Medico: 110, Paciente: 1090547384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 30),
      end: addMinutes(addHours(new Date('September 2, 2021'), 11), 0),
      title: 'Orden 76, Medico: 110, Paciente: 1090563856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },





    {
      start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 0),
      end: addMinutes(addHours(new Date('September 3, 2021'), 7), 30),
      title: 'Orden 81, Medico: 110, Paciente: 1092304950',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 30),
      end: addMinutes(addHours(new Date('September 3, 2021'), 8), 0),
      title: 'Orden 86, Medico: 110, Paciente: 1090374567',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 0),
      end: addMinutes(addHours(new Date('September 3, 2021'), 8), 30),
      title: 'Orden 91, Medico: 110, Paciente: 10903459123',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 30),
      end: addMinutes(addHours(new Date('September 3, 2021'), 9), 0),
      title: 'Orden 96, Medico: 110, Paciente: 1090349519',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 0),
      end: addMinutes(addHours(new Date('September 3, 2021'), 9), 30),
      title: 'Orden 101, Medico: 110, Paciente: 1092534384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 30),
      end: addMinutes(addHours(new Date('September 3, 2021'), 10), 0),
      title: 'Orden 106, Medico: 110, Paciente: 1090233856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 0),
      end: addMinutes(addHours(new Date('September 3, 2021'), 10), 30),
      title: 'Orden 110, Medico: 110, Paciente: 1090237384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 30),
      end: addMinutes(addHours(new Date('September 3, 2021'), 11), 0),
      title: 'Orden 116, Medico: 110, Paciente: 1090233856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 0),
      end: addMinutes(addHours(new Date('September 6, 2021'), 7), 30),
      title: 'Orden 121, Medico: 110, Paciente: 1092304950',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 30),
      end: addMinutes(addHours(new Date('September 6, 2021'), 8), 0),
      title: 'Orden 126, Medico: 110, Paciente: 1090374567',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 0),
      end: addMinutes(addHours(new Date('September 6, 2021'), 8), 30),
      title: 'Orden 131, Medico: 110, Paciente: 10903459123',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 30),
      end: addMinutes(addHours(new Date('September 6, 2021'), 9), 0),
      title: 'Orden 136, Medico: 110, Paciente: 1090349519',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 0),
      end: addMinutes(addHours(new Date('September 6, 2021'), 9), 30),
      title: 'Orden 141, Medico: 110, Paciente: 1092534384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 30),
      end: addMinutes(addHours(new Date('September 6, 2021'), 10), 0),
      title: 'Orden 146, Medico: 110, Paciente: 1090233856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 0),
      end: addMinutes(addHours(new Date('September 6, 2021'), 10), 30),
      title: 'Orden 151, Medico: 110, Paciente: 1090237384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    
    {
      start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 30),
      end: addMinutes(addHours(new Date('September 6, 2021'), 11), 0),
      title: 'Orden 156, Medico: 110, Paciente: 1090233856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },




    {
      start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 0),
      end: addMinutes(addHours(new Date('September 7, 2021'), 7), 30),
      title: 'Orden 161, Medico: 110, Paciente: 1092304950',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 30),
      end: addMinutes(addHours(new Date('September 7, 2021'), 8), 0),
      title: 'Orden 166, Medico: 110, Paciente: 1090374567',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 0),
      end: addMinutes(addHours(new Date('September 7, 2021'), 8), 30),
      title: 'Orden 171, Medico: 110, Paciente: 10903459123',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 30),
      end: addMinutes(addHours(new Date('September 7, 2021'), 9), 0),
      title: 'Orden 176, Medico: 110, Paciente: 1090349519',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 0),
      end: addMinutes(addHours(new Date('September 7, 2021'), 9), 30),
      title: 'Orden 181, Medico: 110, Paciente: 1092534384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 30),
      end: addMinutes(addHours(new Date('September 7, 2021'), 10), 0),
      title: 'Orden 186, Medico: 110, Paciente: 1090233856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 0),
      end: addMinutes(addHours(new Date('September 7, 2021'), 10), 30),
      title: 'Orden 191, Medico: 110, Paciente: 1090237384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    
    {
      start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 30),
      end: addMinutes(addHours(new Date('September 7, 2021'), 11), 0),
      title: 'Orden 196, Medico: 110, Paciente: 1090233856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },



    {
      start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 0),
      end: addMinutes(addHours(new Date('September 8, 2021'), 7), 30),
      title: 'Orden 201, Medico: 110, Paciente: 1092304950',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 30),
      end: addMinutes(addHours(new Date('September 8, 2021'), 8), 0),
      title: 'Orden 206, Medico: 110, Paciente: 1090374567',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 0),
      end: addMinutes(addHours(new Date('September 8, 2021'), 8), 30),
      title: 'Orden 211, Medico: 110, Paciente: 10903459123',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 30),
      end: addMinutes(addHours(new Date('September 8, 2021'), 9), 0),
      title: 'Orden 216, Medico: 110, Paciente: 1090349519',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 0),
      end: addMinutes(addHours(new Date('September 8, 2021'), 9), 30),
      title: 'Orden 221, Medico: 110, Paciente: 1092534384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 30),
      end: addMinutes(addHours(new Date('September 8, 2021'), 10), 0),
      title: 'Orden 226, Medico: 110, Paciente: 1090233856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 0),
      end: addMinutes(addHours(new Date('September 8, 2021'), 10), 30),
      title: 'Orden 231, Medico: 110, Paciente: 1090237384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    
    {
      start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 30),
      end: addMinutes(addHours(new Date('September 8, 2021'), 11), 0),
      title: 'Orden 236, Medico: 110, Paciente: 1090233856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },



    {
      start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 0),
      end: addMinutes(addHours(new Date('September 9, 2021'), 7), 30),
      title: 'Orden 241, Medico: 110, Paciente: 1092304950',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 30),
      end: addMinutes(addHours(new Date('September 9, 2021'), 8), 0),
      title: 'Orden 246, Medico: 110, Paciente: 1090374567',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    {
      start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 0),
      end: addMinutes(addHours(new Date('September 9, 2021'), 8), 30),
      title: 'Orden 251, Medico: 110, Paciente: 10903459123',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 30),
      end: addMinutes(addHours(new Date('September 9, 2021'), 9), 0),
      title: 'Orden 256, Medico: 110, Paciente: 1090349519',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 0),
      end: addMinutes(addHours(new Date('September 9, 2021'), 9), 30),
      title: 'Orden 261, Medico: 110, Paciente: 1092534384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 30),
      end: addMinutes(addHours(new Date('September 9, 2021'), 10), 0),
      title: 'Orden 266, Medico: 110, Paciente: 1090233856',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },

    {
      start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 0),
      end: addMinutes(addHours(new Date('September 9, 2021'), 10), 30),
      title: 'Orden 171, Medico: 110, Paciente: 1090237384',
      color: colors.blue,
      actions: this.actions,
      resizable: {
          beforeStart: true,
          afterEnd: true,
      },
    },
    
    {
      start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 30),
      end: addMinutes(addHours(new Date('September 9, 2021'), 11), 0),
      title: 'Orden 176, Medico: 110, Paciente: 1090233856',
      color: colors.blue,
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
