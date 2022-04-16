import { Controller, Post } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateInvoiceUseCases } from './CreateInvoiceUseCases';

@Controller()
export class CreateInvoiceController {
  constructor(private createInvoiceUseCases: CreateInvoiceUseCases) {}

  @Post()
  createInvoice(@Payload() payload) {
    this.createInvoiceUseCases.execute(payload);
  }
}
