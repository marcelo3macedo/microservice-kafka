import { Injectable } from "@nestjs/common";
import { Client, ClientKafka } from "@nestjs/microservices";
import clientOptions from "src/shared/infra/kafka";

@Injectable()
export class CreateInvoiceUseCases {
  constructor() {}

@Client(clientOptions)
  client: ClientKafka

async execute({ id }) {
    this.client.emit('storage-ec', {
      id
    })
  }
}
