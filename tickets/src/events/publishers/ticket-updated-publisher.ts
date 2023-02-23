import { Publisher, Subjects, TicketUpdatedEvent } from "@pmagas.develop/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
