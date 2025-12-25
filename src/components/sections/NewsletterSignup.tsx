"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { showSuccess, showError } from '@/utils/toast';

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type NewsletterFormValues = z.infer<typeof formSchema>;

const NewsletterSignup = () => {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: NewsletterFormValues) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (values.email === "error@example.com") {
          showError("Failed to subscribe. Please try again.");
        } else {
          showSuccess(`Thank you for subscribing, ${values.email}!`);
          form.reset();
        }
        resolve(null);
      }, 1500);
    });
  };

  return (
    <section className="py-20 bg-midnight-black text-white text-center">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Stay Ahead of the Curve
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Subscribe to our newsletter for exclusive updates, tips, and early access to new features.
        </motion.p>
        <motion.form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Input
            type="email"
            placeholder="Enter your email"
            {...form.register("email")}
            className="flex-grow bg-deep-charcoal border-deep-charcoal text-white placeholder-gray-500 focus:border-electric-violet focus:ring-electric-violet rounded-full px-6 py-3"
          />
          <Button
            type="submit"
            className="bg-electric-violet text-white hover:bg-electric-violet/90 rounded-full px-8 py-3 font-semibold"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </motion.form>
        {form.formState.errors.email && (
          <motion.p
            className="text-red-500 text-sm mt-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {form.formState.errors.email.message}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;