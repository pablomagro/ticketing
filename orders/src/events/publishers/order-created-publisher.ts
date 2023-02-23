import { Publisher, OrderCreatedEvent, Subjects } from "@pmagas.develop/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
