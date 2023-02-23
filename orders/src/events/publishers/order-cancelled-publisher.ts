import { Subjects, Publisher, OrderCancelledEvent } from "@pmagas.develop/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
