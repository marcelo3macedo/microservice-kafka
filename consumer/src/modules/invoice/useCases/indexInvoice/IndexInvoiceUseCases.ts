import { Injectable } from "@nestjs/common";

@Injectable()
export class IndexInvoiceUseCases {
  constructor() {}

async execute({ value }) {
    const { id } = JSON.parse(value) || {}
    console.log(`Invoice ${id} processed`)
  }
}
