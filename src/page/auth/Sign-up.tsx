import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Logo from "@/components/logo";
import GoogleOauthButton from "@/components/auth/google-oauth-button";

// Commented out imports related to react-hook-form and validation
/*
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { registerMutationFn } from "@/lib/api";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
*/

const SignUp = () => {
  // Commented out form and mutation logic
  /*
  const { mutate, isPending } = useMutation({
    mutationFn: registerMutationFn,
  });

  const formSchema = z.object({
    name: z.string().trim().min(1, { message: "Name is required" }),
    email: z.string().trim().email("Invalid email address").min(1, {
      message: "Workspace name is required",
    }),
    password: z.string().trim().min(1, { message: "Password is required" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (isPending) return;
    mutate(values, {
      onSuccess: () => {
        navigate("/");
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };
  */

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link to="/" className="flex items-center gap-2 self-center font-medium">
          <Logo />
          Team Sync.
        </Link>
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Create an account</CardTitle>
              <CardDescription>Signup with your Google account</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Google OAuth button */}
              <div className="flex flex-col gap-6">
                <GoogleOauthButton label="Signup" />
              </div>

              {/* Commented out email/password form */}
              {/*
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  ... your form fields here ...
                </form>
              </Form>
              */}

              {/* Message informing users */}
              <div className="mt-6 text-center text-sm text-muted-foreground">
                Email/password signup is temporarily disabled. Please use Google signup.
              </div>

              {/* Sign in link */}
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link to="/" className="underline underline-offset-4">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
          <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
