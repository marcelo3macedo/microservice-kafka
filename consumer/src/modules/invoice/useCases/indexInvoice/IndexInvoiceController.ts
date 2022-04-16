import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { IndexInvoiceUseCases } from './IndexInvoiceUseCases';

@Controller()
export class IndexInvoiceController {
  constructor(private indexInvoiceUseCases: IndexInvoiceUseCases) {}

  @MessagePattern('storage-ec')
  getInvoice(@Payload() message) {
    return this.indexInvoiceUseCases.execute(message);
  }
}
