"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

import { supabase } from "@/utils/supabase";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const formScheme = z.object({
  email: z.string(),
  message: z.string().min(2).max(200),
});

const ContractSection = () => {
  const [isLoading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formScheme>) => {
    setLoading(true);
    const res = await supabase.functions.invoke("resend", {
      body: {
        email: values.email,
        message: values.message,
      },
    });

    if (res.data) setLoading(false);
    form.reset();

    toast({
      title: "Send Completed",
      description: "Thank you for your email. I will look at the contents and respond.",
    });
  };

  return (
    <section>
      <h1 id="contract" className="mb-4 text-2xl font-bold">
        Contract Me
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" className="mb-4" placeholder="Your Email" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="mb-4 resize-none"
                    rows={4}
                    placeholder="Your Message"
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" variant="secondary" disabled={isLoading}>
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default ContractSection;
