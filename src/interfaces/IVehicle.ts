import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number().positive().gte(1900).lte(2022),
  color: z.string().min(3),
  status: z.boolean().optional(),
  buyValue: z.number().positive(),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { IVehicle, VehicleZodSchema };