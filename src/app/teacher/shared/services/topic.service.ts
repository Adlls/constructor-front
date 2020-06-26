import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {Course, Topic} from '../../../shared/interfaces/interfaces';

@Injectable()
export class TopicService {
  constructor(private http: HttpClient) { }

  getAllTopics(): Observable<any> {
    return this.http.get(`${environment.host}/topics?page=0`).pipe();
  }

  findTopicById(idTopic: string): Observable<any> {
    return this.http.get(`${environment.host}/topic/${idTopic}`).pipe()
  }

  updateCourse(idTopic: string, bodyTopic: Topic): Observable<any> {
    let updateTopic = {
      "title": bodyTopic.title,
      "tags": [
        "string"
      ],
      "fgos": [
        {
          "description": "string",
          "numFgos": "string",
          "title": "string"
        }
      ],
      "profStandard": [
        {
          "description": "string",
          "numProfStandard": "string",
          "title": "string"
        }
      ],
      "relations": {
        "refLessons": [
          {
            "IdLesson": "string",
            "idLesson": "string",
            "typeRelation": "EXTENDED"
          }
        ],
        "refTopics": [
          {
            "IdTopic": "string",
            "idTopic": "string",
            "typeRelation": "EXTENDED"
          }
        ]
      }
    };
    console.log(bodyTopic.title);
    return this.http.put(`${environment.host}/topic/${idTopic}`, updateTopic).pipe();
  }

  deleteTopic(idTopic):Observable<any> {
    return this.http.delete(`${environment.host}/topic/${idTopic}`);
  }

  createTopic(topic: Topic): Observable<any> {
    return this.http.post(`${environment.host}/topic`, {
      "title": topic.title,
      "tags": [
        "string"
      ],
      "author": {
        "id": "string"
      },
      "course": {
        "id": topic.course.id
      },
      "fgos": [
        {
          "description": "string",
          "numFgos": "string",
          "title": "string"
        }
      ],
      "profStandard": [
        {
          "description": "string",
          "numProfStandard": "string",
          "title": "string"
        }
      ],
      "relations": {
        "refLessons": [
          {
            "IdLesson": "string",
            "idLesson": "string",
            "typeRelation": "EXTENDED"
          }
        ],
        "refTopics": [
          {
            "IdTopic": "string",
            "idTopic": "string",
            "typeRelation": "EXTENDED"
          }
        ]
      }
    }).pipe();
  }

}
