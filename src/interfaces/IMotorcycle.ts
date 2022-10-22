import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  
  engineCapacity: z.number({
    required_error: 'Engine capacity is required',
    invalid_type_error: 'Engine capacity must be a number',
  }).lte(2, { message: 'Engine capacity must be less than 2 or equal' })
    .int({ message: 'Engine capacity must be an integer' })
    .positive({ message: 'Engine capacity must be positive' }),
});

type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;

export { IMotorcycle, MotorcycleZodSchema };