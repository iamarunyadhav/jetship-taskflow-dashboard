
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast";
import { CheckSquare, Mail, Lock } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await login(formData.email, formData.password);
      toast({
        title: "Welcome back!",
        description: "You have been logged in successfully.",
      });
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Try: john@example.com / password",
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
          <p className="text-[rgb(var(--theme-text-secondary))] mt-2">Sign in to your account</p>
        </div>

        <Card 
          className="border shadow-lg"
          style={{
            backgroundColor: `rgb(var(--theme-surface))`,
            borderColor: `rgb(var(--theme-border))`
          }}
        >
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center text-[rgb(var(--theme-text))]">Sign In</CardTitle>
            <CardDescription className="text-center text-[rgb(var(--theme-text-secondary))]">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[rgb(var(--theme-text))]">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-[rgb(var(--theme-text-secondary))]" />
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
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
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    className="pl-10"
                    style={{
                      backgroundColor: `rgb(var(--theme-surface))`,
                      borderColor: `rgb(var(--theme-border))`,
                      color: `rgb(var(--theme-text))`
                    }}
                    placeholder="password"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to="/forgot-password"
                  className="text-sm transition-colors"
                  style={{ color: `rgb(var(--theme-primary))` }}
                >
                  Forgot password?
                </Link>
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
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
              
              <p className="text-center text-sm text-[rgb(var(--theme-text-secondary))]">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="transition-colors"
                  style={{ color: `rgb(var(--theme-primary))` }}
                >
                  Sign up
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>

        {/* Demo credentials */}
        <div className="text-center text-sm text-[rgb(var(--theme-text-secondary))]">
          <p>Demo credentials:</p>
          <p>Email: john@example.com</p>
          <p>Password: password</p>
        </div>
      </div>
    </div>
  );
}
