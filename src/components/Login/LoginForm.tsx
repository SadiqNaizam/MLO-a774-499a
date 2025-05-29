import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

// Define the form schema using Zod
const formSchema = z.object({
  username: z.string().min(1, { message: 'Username is required.' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

type LoginFormValues = z.infer<typeof formSchema>;

interface LoginFormProps {
  className?: string;
  // Example prop for handling successful login if needed in a larger app context
  // onLoginSuccess?: (data: LoginFormValues) => void;
  // Example prop for handling sign up navigation
  // onSignUpClick?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const [apiError, setApiError] = useState<string | null>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    setApiError(null);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Example login logic:
    if (values.username === 'testuser' && values.password === 'password123') {
      console.log('Login successful:', values);
      // Callbacks like onLoginSuccess could be invoked here
      // e.g., onLoginSuccess?.(values);
    } else {
      setApiError('Invalid username or password. Please try again.');
      form.resetField('password'); // Clear password field on error to allow re-entry
    }
  };

  const handleSignUpClick = () => {
    console.log('Navigate to sign up page');
    // onSignUpClick?.(); // Call callback for navigation
  };

  return (
    <Card className={cn('w-[350px] rounded-lg shadow-md', className)}>
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-card-foreground">
          Log in
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-card-foreground">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username"
                      {...field}
                      className="bg-card border-border focus:ring-ring text-card-foreground placeholder:text-muted-foreground"
                      autoComplete="username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-card-foreground">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Password"
                      {...field}
                      className="bg-card border-border focus:ring-ring text-card-foreground placeholder:text-muted-foreground"
                      autoComplete="current-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {apiError && (
              <p className="text-sm text-destructive text-center">{apiError}</p>
            )}

            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Log in'
              )}
            </Button>
          </form>
        </Form>
        <p className="text-sm text-center text-muted-foreground">
          or,{' '}
          <Button
            variant="link"
            type="button"
            className="p-0 h-auto font-medium text-primary hover:underline focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-card"
            onClick={handleSignUpClick}
          >
            sign up
          </Button>
        </p>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
