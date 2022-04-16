import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { IndexInvoiceModule } from './modules/invoice/useCases/indexInvoice/IndexInvoiceModule';
import microServiceOptions from './shared/infra/kafka';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    IndexInvoiceModule,
    microServiceOptions    
  )
  await app.listen();
}
bootstrap();
