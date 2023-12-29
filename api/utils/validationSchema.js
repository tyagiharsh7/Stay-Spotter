import { z } from "zod";

const userSchema = z.object({
    username: z
        .string()
        .min(3)
        .max(30)
        .refine(Boolean, { message: "Username is required" }),
    password: z
        .string()
        .min(5)
        .refine(Boolean, { message: "Password is required" }),
});

const userRegisterSchema = userSchema.extend({
    email: z
        .string()
        .email()
        .refine(Boolean, { message: "Email is required when registering" }),
});

const hotelSchema = z.object({
    name: z
        .string()
        .min(3)
        .max(100)
        .refine(Boolean, { message: "Name is required" }),
    type: z
        .string()
        .min(3)
        .max(50)
        .refine(Boolean, { message: "Type is required" }),
    city: z
        .string()
        .min(3)
        .max(50)
        .refine(Boolean, { message: "City is required" }),
    address: z
        .string()
        .min(5)
        .max(200)
        .refine(Boolean, { message: "Address is required" }),
    distance: z
        .string()
        .min(1)
        .max(50)
        .refine(Boolean, { message: "Distance is required" }),
    title: z
        .string()
        .min(5)
        .max(200)
        .refine(Boolean, { message: "Title is required" }),
    description: z
        .string()
        .min(10)
        .max(1000)
        .refine(Boolean, { message: "Description is required" }),
    rating: z.number().min(0).max(5),
    rooms: z.array(z.string()).optional(),
    cheapestPrice: z
        .number()
        .int()
        .positive()
        .refine(Boolean, { message: "Cheapest price is required" }),
    featured: z.boolean().default(false),
});

const hotelCreateSchema = hotelSchema;
const hotelUpdateSchema = hotelSchema.partial();

const roomSchema = z.object({
    title: z.string().min(5).max(100),
    price: z.number().int().positive(),
    maxPeople: z.number().int().positive(),
    description: z.string().min(10).max(1000),
    roomNumbers: z.array(
        z.object({
            number: z.number().int(),
            unavailableDates: z.array(z.date()).optional(),
        })
    ),
});

const roomCreateSchema = roomSchema;
const roomUpdateSchema = roomCreateSchema.partial();

export {
    userSchema,
    userRegisterSchema,
    hotelCreateSchema,
    hotelUpdateSchema,
    roomCreateSchema,
    roomUpdateSchema,
};
