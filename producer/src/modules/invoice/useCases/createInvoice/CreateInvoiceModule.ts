import { Module } from '@nestjs/common';
import { CreateInvoiceController } from './CreateInvoiceController';
import { CreateInvoiceUseCases } from './CreateInvoiceUseCases';

@Module({
  controllers: [CreateInvoiceController],
  providers: [CreateInvoiceUseCases],
  imports: []
})
export class CreateInvoiceModule {}
