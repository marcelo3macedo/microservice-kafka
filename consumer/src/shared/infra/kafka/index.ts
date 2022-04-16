import { MicroserviceOptions, Transport } from '@nestjs/microservices';

const microServiceOptions = <MicroserviceOptions> {
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

export default microServiceOptions;