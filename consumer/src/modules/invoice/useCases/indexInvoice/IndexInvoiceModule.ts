import { Module } from '@nestjs/common';
import { IndexInvoiceController } from './IndexInvoiceController';
import { IndexInvoiceUseCases } from './IndexInvoiceUseCases';

@Module({
  controllers: [IndexInvoiceController],
  providers: [IndexInvoiceUseCases],
  imports: []
})
export class IndexInvoiceModule {}
