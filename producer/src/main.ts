import { NestFactory } from '@nestjs/core';
import { CreateInvoiceModule } from './modules/invoice/useCases/createInvoice/CreateInvoiceModule';

async function bootstrap() {
  const app = await NestFactory.create(CreateInvoiceModule)
  await app.listen(3000);
}
bootstrap();
