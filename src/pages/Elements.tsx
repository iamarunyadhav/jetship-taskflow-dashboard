
import { useState } from 'react';
import { DashboardLayout } from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { 
  Calendar as CalendarIcon, 
  Plus, 
  FileText, 
  CreditCard, 
  Table as TableIcon,
  MessageSquare,
  Bell,
  MessageCircle,
  Info,
  CheckCircle,
  AlertTriangle,
  XCircle
} from 'lucide-react';

const elementCategories = [
  {
    name: 'Calendar',
    icon: CalendarIcon,
    description: 'Date picker and calendar components',
    component: () => {
      const [date, setDate] = useState<Date | undefined>(new Date());
      return (
        <div className="p-4 bg-[rgb(var(--theme-surface))] rounded-lg border border-[rgb(var(--theme-border))]">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-[rgb(var(--theme-border))]"
          />
        </div>
      );
    }
  },
  {
    name: 'Forms',
    icon: FileText,
    description: 'Input fields and form components',
    component: () => (
      <div className="space-y-4 p-4 bg-[rgb(var(--theme-surface))] rounded-lg border border-[rgb(var(--theme-border))]">
        <div className="space-y-2">
          <Label htmlFor="sample-input" className="text-[rgb(var(--theme-text))]">Sample Input</Label>
          <Input
            id="sample-input"
            placeholder="Enter text here..."
            className="bg-[rgb(var(--theme-background))] border-[rgb(var(--theme-border))] text-[rgb(var(--theme-text))]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="sample-textarea" className="text-[rgb(var(--theme-text))]">Sample Textarea</Label>
          <Textarea
            id="sample-textarea"
            placeholder="Enter description..."
            className="bg-[rgb(var(--theme-background))] border-[rgb(var(--theme-border))] text-[rgb(var(--theme-text))]"
          />
        </div>
        <Button className="bg-[rgb(var(--theme-primary))] text-white hover:bg-[rgb(var(--theme-primary))]/90">
          Submit Form
        </Button>
      </div>
    )
  },
  {
    name: 'Cards',
    icon: CreditCard,
    description: 'Card layouts and containers',
    component: () => (
      <Card className="bg-[rgb(var(--theme-surface))] border-[rgb(var(--theme-border))]">
        <CardHeader>
          <CardTitle className="text-[rgb(var(--theme-text))]">Sample Card</CardTitle>
          <CardDescription className="text-[rgb(var(--theme-text-secondary))]">
            This is a sample card component with header and content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-[rgb(var(--theme-primary))] text-white">JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-[rgb(var(--theme-text))]">John Doe</p>
              <p className="text-xs text-[rgb(var(--theme-text-secondary))]">Software Engineer</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  },
  {
    name: 'Data Tables',
    icon: TableIcon,
    description: 'Table components for data display',
    component: () => (
      <div className="bg-[rgb(var(--theme-surface))] rounded-lg border border-[rgb(var(--theme-border))] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-[rgb(var(--theme-border))]">
              <TableHead className="text-[rgb(var(--theme-text))]">Name</TableHead>
              <TableHead className="text-[rgb(var(--theme-text))]">Status</TableHead>
              <TableHead className="text-[rgb(var(--theme-text))]">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-[rgb(var(--theme-border))]">
              <TableCell className="text-[rgb(var(--theme-text))]">John Doe</TableCell>
              <TableCell>
                <Badge className="bg-[rgb(var(--theme-success))] text-white">Active</Badge>
              </TableCell>
              <TableCell className="text-[rgb(var(--theme-text))]">Admin</TableCell>
            </TableRow>
            <TableRow className="border-[rgb(var(--theme-border))]">
              <TableCell className="text-[rgb(var(--theme-text))]">Jane Smith</TableCell>
              <TableCell>
                <Badge className="bg-[rgb(var(--theme-warning))] text-white">Pending</Badge>
              </TableCell>
              <TableCell className="text-[rgb(var(--theme-text))]">User</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    )
  },
  {
    name: 'Feedback',
    icon: Bell,
    description: 'Alerts, notifications, and feedback',
    component: () => (
      <div className="space-y-3">
        <Alert className="border-[rgb(var(--theme-info))] bg-[rgb(var(--theme-info))]/10">
          <Info className="h-4 w-4 text-[rgb(var(--theme-info))]" />
          <AlertTitle className="text-[rgb(var(--theme-text))]">Information</AlertTitle>
          <AlertDescription className="text-[rgb(var(--theme-text-secondary))]">
            This is an informational alert message.
          </AlertDescription>
        </Alert>
        <Alert className="border-[rgb(var(--theme-success))] bg-[rgb(var(--theme-success))]/10">
          <CheckCircle className="h-4 w-4 text-[rgb(var(--theme-success))]" />
          <AlertTitle className="text-[rgb(var(--theme-text))]">Success</AlertTitle>
          <AlertDescription className="text-[rgb(var(--theme-text-secondary))]">
            Operation completed successfully!
          </AlertDescription>
        </Alert>
        <Alert className="border-[rgb(var(--theme-warning))] bg-[rgb(var(--theme-warning))]/10">
          <AlertTriangle className="h-4 w-4 text-[rgb(var(--theme-warning))]" />
          <AlertTitle className="text-[rgb(var(--theme-text))]">Warning</AlertTitle>
          <AlertDescription className="text-[rgb(var(--theme-text-secondary))]">
            Please review this information carefully.
          </AlertDescription>
        </Alert>
        <Alert className="border-[rgb(var(--theme-error))] bg-[rgb(var(--theme-error))]/10">
          <XCircle className="h-4 w-4 text-[rgb(var(--theme-error))]" />
          <AlertTitle className="text-[rgb(var(--theme-text))]">Error</AlertTitle>
          <AlertDescription className="text-[rgb(var(--theme-text-secondary))]">
            Something went wrong. Please try again.
          </AlertDescription>
        </Alert>
      </div>
    )
  },
  {
    name: 'Comments',
    icon: MessageSquare,
    description: 'Comment and discussion components',
    component: () => (
      <div className="space-y-4 p-4 bg-[rgb(var(--theme-surface))] rounded-lg border border-[rgb(var(--theme-border))]">
        <div className="flex space-x-3">
          <Avatar>
            <AvatarFallback className="bg-[rgb(var(--theme-primary))] text-white">JD</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="bg-[rgb(var(--theme-background))] p-3 rounded-lg border border-[rgb(var(--theme-border))]">
              <p className="text-sm font-medium text-[rgb(var(--theme-text))]">John Doe</p>
              <p className="text-sm text-[rgb(var(--theme-text-secondary))] mt-1">
                This is a sample comment. Great work on this feature!
              </p>
            </div>
            <p className="text-xs text-[rgb(var(--theme-text-secondary))] mt-1">2 hours ago</p>
          </div>
        </div>
      </div>
    )
  },
  {
    name: 'Chat Box',
    icon: MessageCircle,
    description: 'Chat and messaging interfaces',
    component: () => (
      <div className="bg-[rgb(var(--theme-surface))] rounded-lg border border-[rgb(var(--theme-border))] p-4">
        <div className="space-y-3 max-h-48 overflow-y-auto">
          <div className="flex justify-start">
            <div className="bg-[rgb(var(--theme-background))] p-2 rounded-lg max-w-xs border border-[rgb(var(--theme-border))]">
              <p className="text-sm text-[rgb(var(--theme-text))]">Hello! How can I help you today?</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-[rgb(var(--theme-primary))] p-2 rounded-lg max-w-xs">
              <p className="text-sm text-white">I need help with my task management.</p>
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-[rgb(var(--theme-background))] p-2 rounded-lg max-w-xs border border-[rgb(var(--theme-border))]">
              <p className="text-sm text-[rgb(var(--theme-text))]">Sure! I'd be happy to assist you with that.</p>
            </div>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <Input
            placeholder="Type a message..."
            className="flex-1 bg-[rgb(var(--theme-background))] border-[rgb(var(--theme-border))] text-[rgb(var(--theme-text))]"
          />
          <Button size="sm" className="bg-[rgb(var(--theme-primary))] text-white hover:bg-[rgb(var(--theme-primary))]/90">
            Send
          </Button>
        </div>
      </div>
    )
  }
];

export default function Elements() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[rgb(var(--theme-text))]">UI Elements</h1>
            <p className="text-[rgb(var(--theme-text-secondary))] mt-1">
              Reusable components and design elements
            </p>
          </div>
          <Button className="bg-[rgb(var(--theme-primary))] text-white hover:bg-[rgb(var(--theme-primary))]/90">
            <Plus className="h-4 w-4 mr-2" />
            Add New Element
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {elementCategories.map((category) => (
            <Card key={category.name} className="bg-[rgb(var(--theme-surface))] border-[rgb(var(--theme-border))]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[rgb(var(--theme-primary))]/10">
                    <category.icon className="h-5 w-5 text-[rgb(var(--theme-primary))]" />
                  </div>
                  <div>
                    <CardTitle className="text-[rgb(var(--theme-text))]">{category.name}</CardTitle>
                    <CardDescription className="text-[rgb(var(--theme-text-secondary))]">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <category.component />
                  <div className="absolute inset-0 bg-transparent hover:bg-[rgb(var(--theme-primary))]/5 transition-colors cursor-pointer rounded-lg border-2 border-transparent hover:border-[rgb(var(--theme-primary))]/20" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
