'use client';

import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import emailjs from '@emailjs/browser';

import { Button } from '@/components/index';
import { Input } from './Input';
import { Textarea } from './Textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './Form';

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Name must be at least 2 characters.',
    })
    .max(30, {
      message: 'Name must not be longer than 30 characters.',
    }),
  email: z.string().email(),
  message: z.string().max(160).min(10, {
    message: 'Message must be longer than 10 characters.',
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const defaultValues: Partial<ContactFormValues> = {
  name: '',
  email: '',
  message: '',
};

export function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(
    () => emailjs.init(process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string),
    [],
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
    mode: 'onChange',
  });

  const onSubmit = (values: ContactFormValues) => {
    const templateParams = {
      from_name: values.name,
      from_email: values.email,
      message: values.message,
    };
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        templateParams,
      )
      .then(() => {
        setFormSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('error: ', error);
        setLoading(false);
      });
  };

  return !!formSubmitted ? (
    <div className="h-full flex items-center">
      <h2>Message sent successfully!</h2>
    </div>
  ) : (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-6 mb-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Message"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mx-auto md:mx-0 w-fit">
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
}
