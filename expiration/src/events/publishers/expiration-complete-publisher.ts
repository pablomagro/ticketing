import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@pmagas.develop/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
