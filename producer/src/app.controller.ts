import { Controller, Get } from '@nestjs/common';
import { Client, ClientKafka, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Client({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [ 'kafka-internal.io:9093' ]
      },
      consumer: {
        groupId: 'ec-consumer'
      }
    }
  })
  client: ClientKafka

  @Get()
  sendToStorage() {
    return this.client.emit('storage-ec', {
      message: 'remove chicken from storage',
    });
  }
}
