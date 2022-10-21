import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number({
    required_error: 'Doors quantity is required',
    invalid_type_error: 'Doors quantity must be a number',
  }).gte(2, { message: 'Doors quantity must be more than 2 or equal' })
    .lte(4, { message: 'Doors quantity must be less than 4 or equal' })
    .int({ message: 'Doors quantity must be an integer' })
    .positive(),

  seatsQty: z.number({
    required_error: 'Seats quantity is required',
    invalid_type_error: 'Seats quantity must be a number',
  })
    .gte(2, { message: 'Seats quantity must be more than 2 or equal' })
    .lte(7, { message: 'Seats quantity must be less than 7 or equal' })
    .int({ message: 'Seats quantity must be an integer' })
    .positive(),
    
});

type ICar = z.infer<typeof CarZodSchema>;

export { ICar, CarZodSchema };

// https://stackoverflow.com/questions/72867815/wrap-up-zod-validations-for-reuse