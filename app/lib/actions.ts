'use server';
 
import { z } from 'zod';
import { sql } from '@vercel/postgres';

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string()
})

const CreateInvoice = FormSchema.omit({id: true, date: true})

export async function createInvoice(formData: FormData) {
  
  const raFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  }
  const { customerId, amount, status } = CreateInvoice.parse(formData)

  const amountInCents = amount * 100; // Convert to cents
  const date = new Date().toISOString().split('T')[0];
  await sql`
  INSERT INTO invoices (customer_id, amount, status, date)
  VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
`;
}
