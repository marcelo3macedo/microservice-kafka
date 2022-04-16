import { ClientOptions, Transport } from '@nestjs/microservices';

const clientOptions = <ClientOptions> {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [ 'kafka-internal.io:9092' ]
      },
      consumer: {
        groupId: 'ec-consumer-server'
      }
    }
}

export default clientOptions;