
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/store/authStore";

export default function Settings() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-6 max-w-2xl">
      <h1 className="text-3xl font-bold text-[rgb(var(--theme-text))]">Settings</h1>

      {/* Profile Settings */}
      <Card 
        className="shadow-sm border"
        style={{
          backgroundColor: `rgb(var(--theme-surface))`,
          borderColor: `rgb(var(--theme-border))`
        }}
      >
        <CardHeader>
          <CardTitle className="text-[rgb(var(--theme-text))]">Profile Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[rgb(var(--theme-text))]">First Name</Label>
              <Input
                id="firstName"
                defaultValue={user?.name?.split(' ')[0] || ''}
                style={{
                  backgroundColor: `rgb(var(--theme-surface))`,
                  borderColor: `rgb(var(--theme-border))`,
                  color: `rgb(var(--theme-text))`
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[rgb(var(--theme-text))]">Last Name</Label>
              <Input
                id="lastName"
                defaultValue={user?.name?.split(' ')[1] || ''}
                style={{
                  backgroundColor: `rgb(var(--theme-surface))`,
                  borderColor: `rgb(var(--theme-border))`,
                  color: `rgb(var(--theme-text))`
                }}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-[rgb(var(--theme-text))]">Email</Label>
            <Input
              id="email"
              type="email"
              defaultValue={user?.email || ''}
              style={{
                backgroundColor: `rgb(var(--theme-surface))`,
                borderColor: `rgb(var(--theme-border))`,
                color: `rgb(var(--theme-text))`
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role" className="text-[rgb(var(--theme-text))]">Role</Label>
            <Input
              id="role"
              defaultValue={user?.role || ''}
              style={{
                backgroundColor: `rgb(var(--theme-surface))`,
                borderColor: `rgb(var(--theme-border))`,
                color: `rgb(var(--theme-text))`
              }}
            />
          </div>
          <Button 
            className="text-white"
            style={{
              background: `linear-gradient(135deg, rgb(var(--theme-primary)), rgb(var(--theme-secondary)))`
            }}
          >
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card 
        className="shadow-sm border"
        style={{
          backgroundColor: `rgb(var(--theme-surface))`,
          borderColor: `rgb(var(--theme-border))`
        }}
      >
        <CardHeader>
          <CardTitle className="text-[rgb(var(--theme-text))]">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-[rgb(var(--theme-text))]">Email Notifications</Label>
              <p className="text-sm text-[rgb(var(--theme-text-secondary))]">
                Receive notifications via email
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator style={{ backgroundColor: `rgb(var(--theme-border))` }} />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-[rgb(var(--theme-text))]">Task Reminders</Label>
              <p className="text-sm text-[rgb(var(--theme-text-secondary))]">
                Get reminded about upcoming deadlines
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator style={{ backgroundColor: `rgb(var(--theme-border))` }} />
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-[rgb(var(--theme-text))]">Weekly Reports</Label>
              <p className="text-sm text-[rgb(var(--theme-text-secondary))]">
                Receive weekly progress reports
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card 
        className="shadow-sm border"
        style={{
          backgroundColor: `rgb(var(--theme-surface))`,
          borderColor: `rgb(var(--theme-border))`
        }}
      >
        <CardHeader>
          <CardTitle className="text-[rgb(var(--theme-text))]">Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            variant="outline" 
            style={{ 
              borderColor: `rgb(var(--theme-border))`,
              color: `rgb(var(--theme-text))`
            }}
          >
            Change Password
          </Button>
          <Button 
            variant="outline"
            style={{ 
              borderColor: `rgb(var(--theme-border))`,
              color: `rgb(var(--theme-text))`
            }}
          >
            Enable Two-Factor Authentication
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
