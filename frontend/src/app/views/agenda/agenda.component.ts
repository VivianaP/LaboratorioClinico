import { Component, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ViewChild, TemplateRef, } from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, addMinutes, } from 'date-fns';

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
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgendaComponent implements OnInit {

    inputvalue:string="abr";

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
    
    ];

    refresh: Subject<any> = new Subject();

    events: CalendarEvent[] = [

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 7), 30),
            title: 'Orden 1, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 7), 30),
            title: 'Orden 2, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 7), 30),
            title: 'Orden 3, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 7), 30),
            title: 'Orden 4, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 7), 30),
            title: 'Orden 5, Medico: 114, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 8), 0),
            title: 'Orden 6, Medico: 110, Paciente: 38687596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 8), 0),
            title: 'Orden 7, Medico: 111, Paciente: 70395859',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 8), 0),
            title: 'Orden 8, Medico: 112, Paciente: 109239595',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 8), 0),
            title: 'Orden 9, Medico: 113, Paciente: 1095385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 8), 0),
            title: 'Orden 10, Medico: 114, Paciente: 63456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 8), 30),
            title: 'Orden 11, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 8), 30),
            title: 'Orden 12, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 8), 30),
            title: 'Orden 13, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 8), 30),
            title: 'Orden 14, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 8), 30),
            title: 'Orden 15, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 9), 0),
            title: 'Orden 16, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 9), 0),
            title: 'Orden 17, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 9), 0),
            title: 'Orden 18, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 9), 0),
            title: 'Orden 19, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 9), 0),
            title: 'Orden 20, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 9), 30),
            title: 'Orden 21, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 9), 30),
            title: 'Orden 22, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 9), 30),
            title: 'Orden 23, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 9), 30),
            title: 'Orden 24, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 9), 30),
            title: 'Orden 25, Medico: 115, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 10), 0),
            title: 'Orden 26, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 10), 0),
            title: 'Orden 27, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 10), 0),
            title: 'Orden 28, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 10), 0),
            title: 'Orden 29, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 10), 0),
            title: 'Orden 30, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        
        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 10), 30),
            title: 'Orden 31, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 10), 30),
            title: 'Orden 32, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 10), 30),
            title: 'Orden 33, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 10), 30),
            title: 'Orden 34, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 1, 2021'), 10), 30),
            title: 'Orden 35, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        
        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 11), 0),
            title: 'Orden 36, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 11), 0),
            title: 'Orden 37, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 11), 0),
            title: 'Orden 38, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 11), 0),
            title: 'Orden 39, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 1, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 1, 2021'), 11), 0),
            title: 'Orden 40, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 7), 30),
            title: 'Orden 41, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 7), 30),
            title: 'Orden 42, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 7), 30),
            title: 'Orden 43, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 7), 30),
            title: 'Orden 44, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 7), 30),
            title: 'Orden 45, Medico: 114, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 8), 0),
            title: 'Orden 46, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 8), 0),
            title: 'Orden 47, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 8), 0),
            title: 'Orden 48, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 8), 0),
            title: 'Orden 49, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 8), 0),
            title: 'Orden 50, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 8), 30),
            title: 'Orden 51, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 8), 30),
            title: 'Orden 52, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 8), 30),
            title: 'Orden 53, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 8), 30),
            title: 'Orden 54, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 8), 30),
            title: 'Orden 55, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 9), 0),
            title: 'Orden 56, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 9), 0),
            title: 'Orden 57, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 9), 0),
            title: 'Orden 58, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 9), 0),
            title: 'Orden 59, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 9), 0),
            title: 'Orden 60, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 9), 30),
            title: 'Orden 61, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 9), 30),
            title: 'Orden 62, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 9), 30),
            title: 'Orden 63, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 9), 30),
            title: 'Orden 64, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 9), 30),
            title: 'Orden 65, Medico: 115, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 10), 0),
            title: 'Orden 66, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 10), 0),
            title: 'Orden 67, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 10), 0),
            title: 'Orden 68, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 10), 0),
            title: 'Orden 69, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 10), 0),
            title: 'Orden 70, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 10), 30),
            title: 'Orden 71, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 10), 30),
            title: 'Orden 72, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 10), 30),
            title: 'Orden 73, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 10), 30),
            title: 'Orden 74, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 2, 2021'), 10), 30),
            title: 'Orden 75, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },
    
        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 11), 0),
            title: 'Orden 76, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 11), 0),
            title: 'Orden 77, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 11), 0),
            title: 'Orden 78, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 11), 0),
            title: 'Orden 79, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 2, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 2, 2021'), 11), 0),
            title: 'Orden 80, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },




        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 7), 30),
            title: 'Orden 81, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 7), 30),
            title: 'Orden 82, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 7), 30),
            title: 'Orden 83, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 7), 30),
            title: 'Orden 84, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 7), 30),
            title: 'Orden 85, Medico: 114, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 8), 0),
            title: 'Orden 86, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 8), 0),
            title: 'Orden 87, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 8), 0),
            title: 'Orden 88, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 8), 0),
            title: 'Orden 89, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 8), 0),
            title: 'Orden 90, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 8), 30),
            title: 'Orden 91, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 8), 30),
            title: 'Orden 92, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 8), 30),
            title: 'Orden 93, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 8), 30),
            title: 'Orden 94, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 8), 30),
            title: 'Orden 95, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 9), 0),
            title: 'Orden 96, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 9), 0),
            title: 'Orden 97, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 9), 0),
            title: 'Orden 98, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 9), 0),
            title: 'Orden 99, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 9), 0),
            title: 'Orden 100, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 9), 30),
            title: 'Orden 101, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 9), 30),
            title: 'Orden 102, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 9), 30),
            title: 'Orden 103, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 9), 30),
            title: 'Orden 104, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 9), 30),
            title: 'Orden 105, Medico: 115, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 10), 0),
            title: 'Orden 106, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 10), 0),
            title: 'Orden 107, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 10), 0),
            title: 'Orden 108, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 10), 0),
            title: 'Orden 109, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 10), 0),
            title: 'Orden 110, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        
        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 10), 30),
            title: 'Orden 111, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 10), 30),
            title: 'Orden 112, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 10), 30),
            title: 'Orden 113, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 10), 30),
            title: 'Orden 114, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 3, 2021'), 10), 30),
            title: 'Orden 115, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },
    
        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 11), 0),
            title: 'Orden 116, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 11), 0),
            title: 'Orden 117, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 11), 0),
            title: 'Orden 118, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 11), 0),
            title: 'Orden 119, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 3, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 3, 2021'), 11), 0),
            title: 'Orden 120, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 7), 30),
            title: 'Orden 121, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 7), 30),
            title: 'Orden 122, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 7), 30),
            title: 'Orden 123, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 7), 30),
            title: 'Orden 124, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 7), 30),
            title: 'Orden 125, Medico: 114, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },


        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 8), 0),
            title: 'Orden 126, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 8), 0),
            title: 'Orden 127, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 8), 0),
            title: 'Orden 128, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 8), 0),
            title: 'Orden 129, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 8), 0),
            title: 'Orden 130, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 8), 30),
            title: 'Orden 131, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 8), 30),
            title: 'Orden 132, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 8), 30),
            title: 'Orden 133, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 8), 30),
            title: 'Orden 134, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 8), 30),
            title: 'Orden 135, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 9), 0),
            title: 'Orden 136, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 9), 0),
            title: 'Orden 137, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 9), 0),
            title: 'Orden 138, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 9), 0),
            title: 'Orden 139, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 9), 0),
            title: 'Orden 140, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 9), 30),
            title: 'Orden 141, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 9), 30),
            title: 'Orden 142, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 9), 30),
            title: 'Orden 143, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 9), 30),
            title: 'Orden 144, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 9), 30),
            title: 'Orden 145, Medico: 115, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 10), 0),
            title: 'Orden 146, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 10), 0),
            title: 'Orden 147, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 10), 0),
            title: 'Orden 148, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 10), 0),
            title: 'Orden 149, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 10), 0),
            title: 'Orden 150, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 10), 30),
            title: 'Orden 151, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 10), 30),
            title: 'Orden 152, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 10), 30),
            title: 'Orden 153, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 10), 30),
            title: 'Orden 154, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 6, 2021'), 10), 30),
            title: 'Orden 155, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },
    
        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 11), 0),
            title: 'Orden 156, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 11), 0),
            title: 'Orden 157, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 11), 0),
            title: 'Orden 158, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 11), 0),
            title: 'Orden 159, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 6, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 6, 2021'), 11), 0),
            title: 'Orden 160, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },
        

        
        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 7), 30),
            title: 'Orden 161, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 7), 30),
            title: 'Orden 162, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 7), 30),
            title: 'Orden 163, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 7), 30),
            title: 'Orden 164, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 7), 30),
            title: 'Orden 165, Medico: 114, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 8), 0),
            title: 'Orden 166, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 8), 0),
            title: 'Orden 167, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 8), 0),
            title: 'Orden 168, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 8), 0),
            title: 'Orden 169, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 8), 0),
            title: 'Orden 170, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 8), 30),
            title: 'Orden 171, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 8), 30),
            title: 'Orden 172, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 8), 30),
            title: 'Orden 173, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 8), 30),
            title: 'Orden 174, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 8), 30),
            title: 'Orden 175, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 9), 0),
            title: 'Orden 176, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 9), 0),
            title: 'Orden 177, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 9), 0),
            title: 'Orden 178, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 9), 0),
            title: 'Orden 179, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 9), 0),
            title: 'Orden 180, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 9), 30),
            title: 'Orden 181, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 9), 30),
            title: 'Orden 182, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 9), 30),
            title: 'Orden 183, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 9), 30),
            title: 'Orden 184, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 9), 30),
            title: 'Orden 185, Medico: 115, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 10), 0),
            title: 'Orden 186, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 10), 0),
            title: 'Orden 187, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 10), 0),
            title: 'Orden 188, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 10), 0),
            title: 'Orden 189, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 10), 0),
            title: 'Orden 190, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 10), 30),
            title: 'Orden 191, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 10), 30),
            title: 'Orden 192, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 10), 30),
            title: 'Orden 193, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 10), 30),
            title: 'Orden 194, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 7, 2021'), 10), 30),
            title: 'Orden 195, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },
    
        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 11), 0),
            title: 'Orden 196, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 11), 0),
            title: 'Orden 197, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 11), 0),
            title: 'Orden 198, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 11), 0),
            title: 'Orden 199, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 7, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 7, 2021'), 11), 0),
            title: 'Orden 200, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },



        
        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 7), 30),
            title: 'Orden 201, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 7), 30),
            title: 'Orden 202, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 7), 30),
            title: 'Orden 203, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 7), 30),
            title: 'Orden 204, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 7), 30),
            title: 'Orden 205, Medico: 114, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 8), 0),
            title: 'Orden 206, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 8), 0),
            title: 'Orden 207, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 8), 0),
            title: 'Orden 208, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 8), 0),
            title: 'Orden 209, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 8), 0),
            title: 'Orden 210, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 8), 30),
            title: 'Orden 211, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 8), 30),
            title: 'Orden 212, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 8), 30),
            title: 'Orden 213, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 8), 30),
            title: 'Orden 214, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 8), 30),
            title: 'Orden 215, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 9), 0),
            title: 'Orden 216, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 9), 0),
            title: 'Orden 217, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 9), 0),
            title: 'Orden 218, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 9), 0),
            title: 'Orden 219, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 9), 0),
            title: 'Orden 220, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 9), 30),
            title: 'Orden 221, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 9), 30),
            title: 'Orden 222, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 9), 30),
            title: 'Orden 223, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 9), 30),
            title: 'Orden 224, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 9), 30),
            title: 'Orden 225, Medico: 115, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 10), 0),
            title: 'Orden 226, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 10), 0),
            title: 'Orden 227, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 10), 0),
            title: 'Orden 228, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 10), 0),
            title: 'Orden 229, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 10), 0),
            title: 'Orden 230, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 10), 30),
            title: 'Orden 231, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 10), 30),
            title: 'Orden 232, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 10), 30),
            title: 'Orden 233, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 10), 30),
            title: 'Orden 234, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 8, 2021'), 10), 30),
            title: 'Orden 235, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },
    
        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 11), 0),
            title: 'Orden 236, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 11), 0),
            title: 'Orden 237, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 11), 0),
            title: 'Orden 238, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 11), 0),
            title: 'Orden 239, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 8, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 8, 2021'), 11), 0),
            title: 'Orden 240, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 7), 30),
            title: 'Orden 241, Medico: 110, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 7), 30),
            title: 'Orden 242, Medico: 111, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 7), 30),
            title: 'Orden 243, Medico: 112, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 7), 30),
            title: 'Orden 244, Medico: 113, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 7), 30),
            title: 'Orden 245, Medico: 114, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 8), 0),
            title: 'Orden 246, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 8), 0),
            title: 'Orden 247, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 8), 0),
            title: 'Orden 248, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 8), 0),
            title: 'Orden 249, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 7), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 8), 0),
            title: 'Orden 250, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 8), 30),
            title: 'Orden 251, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 8), 30),
            title: 'Orden 252, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 8), 30),
            title: 'Orden 253, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 8), 30),
            title: 'Orden 254, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 8), 30),
            title: 'Orden 255, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 9), 0),
            title: 'Orden 256, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 9), 0),
            title: 'Orden 257, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 9), 0),
            title: 'Orden 258, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 9), 0),
            title: 'Orden 259, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 8), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 9), 0),
            title: 'Orden 260, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 9), 30),
            title: 'Orden 261, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 9), 30),
            title: 'Orden 262, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 9), 30),
            title: 'Orden 263, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 9), 30),
            title: 'Orden 264, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 9), 30),
            title: 'Orden 265, Medico: 115, Paciente: 1090834596',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 10), 0),
            title: 'Orden 266, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 10), 0),
            title: 'Orden 267, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 10), 0),
            title: 'Orden 268, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 10), 0),
            title: 'Orden 269, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 9), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 10), 0),
            title: 'Orden 270, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 10), 30),
            title: 'Orden 271, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 10), 30),
            title: 'Orden 272, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 10), 30),
            title: 'Orden 273, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 10), 30),
            title: 'Orden 274, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 0),
            end: addMinutes(addHours(new Date('September 9, 2021'), 10), 30),
            title: 'Orden 275, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },
    
        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 11), 0),
            title: 'Orden 276, Medico: 110, Paciente: 1090519942',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 11), 0),
            title: 'Orden 277, Medico: 111, Paciente: 49665697',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 11), 0),
            title: 'Orden 278, Medico: 112, Paciente: 1092527456',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 11), 0),
            title: 'Orden 279, Medico: 113, Paciente: 1090385734',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        {
            start: addMinutes(addHours(startOfDay(new Date('September 9, 2021')), 10), 30),
            end: addMinutes(addHours(new Date('September 9, 2021'), 11), 0),
            title: 'Orden 280, Medico: 114, Paciente: 53456765',
            color: colors.yellow,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
        },

        
    
        
        

    ];

    activeDayIsOpen: boolean = false;

    constructor(private modal: NgbModal) { }

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
