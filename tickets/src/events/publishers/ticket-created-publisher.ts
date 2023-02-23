import { Publisher, Subjects, TicketCreatedEvent } from "@pmagas.develop/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
