// src/pages/Register.tsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast";
import { CheckSquare, Mail, Lock, User } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuthStore();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "", // Backend expects "name"
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Passwords do not match",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      await register(formData.name, formData.email, formData.password);
      toast({
        title: "Account created!",
        description: "Your account has been created successfully.",
      });
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Registration failed",
        description:
          error?.response?.data?.message ||
          "Failed to create account. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: `rgb(var(--theme-background))` }}
    >
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div 
              className="h-12 w-12 rounded-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, rgb(var(--theme-primary)), rgb(var(--theme-secondary)))`
              }}
            >
              <CheckSquare className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 
            className="text-3xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage: `linear-gradient(135deg, rgb(var(--theme-primary)), rgb(var(--theme-secondary)))`
            }}
          >
            TaskFlow
          </h1>
          <p className="text-[rgb(var(--theme-text-secondary))] mt-2">Create your account</p>
        </div>

        <Card 
          className="border shadow-lg"
          style={{
            backgroundColor: `rgb(var(--theme-surface))`,
            borderColor: `rgb(var(--theme-border))`
          }}
        >
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-[rgb(var(--theme-text))]">Sign Up</CardTitle>
            <CardDescription className="text-center text-[rgb(var(--theme-text-secondary))]">
              Create an account to get started
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[rgb(var(--theme-text))]">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-[rgb(var(--theme-text-secondary))]" />
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                    style={{
                      backgroundColor: `rgb(var(--theme-surface))`,
                      borderColor: `rgb(var(--theme-border))`,
                      color: `rgb(var(--theme-text))`
                    }}
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[rgb(var(--theme-text))]">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-[rgb(var(--theme-text-secondary))]" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    style={{
                      backgroundColor: `rgb(var(--theme-surface))`,
                      borderColor: `rgb(var(--theme-border))`,
                      color: `rgb(var(--theme-text))`
                    }}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-[rgb(var(--theme-text))]">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[rgb(var(--theme-text-secondary))]" />
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-10"
                    style={{
                      backgroundColor: `rgb(var(--theme-surface))`,
                      borderColor: `rgb(var(--theme-border))`,
                      color: `rgb(var(--theme-text))`
                    }}
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-[rgb(var(--theme-text))]">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-[rgb(var(--theme-text-secondary))]" />
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="pl-10"
                    style={{
                      backgroundColor: `rgb(var(--theme-surface))`,
                      borderColor: `rgb(var(--theme-border))`,
                      color: `rgb(var(--theme-text))`
                    }}
                    placeholder="Confirm Password"
                    required
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button
                type="submit"
                className="w-full text-white"
                style={{
                  background: `linear-gradient(135deg, rgb(var(--theme-primary)), rgb(var(--theme-secondary)))`
                }}
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </Button>
              
              <p className="text-center text-sm text-[rgb(var(--theme-text-secondary))]">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="transition-colors"
                  style={{ color: `rgb(var(--theme-primary))` }}
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
