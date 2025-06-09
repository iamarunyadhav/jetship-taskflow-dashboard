
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone } from "lucide-react";

const mockTeamMembers = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'UI/UX Designer',
    status: 'active',
    avatar: '',
    phone: '+1 (555) 123-4567'
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    role: 'Frontend Developer',
    status: 'active',
    avatar: '',
    phone: '+1 (555) 234-5678'
  },
  {
    id: '3',
    name: 'Carol Davis',
    email: 'carol@example.com',
    role: 'Backend Developer',
    status: 'active',
    avatar: '',
    phone: '+1 (555) 345-6789'
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david@example.com',
    role: 'Project Manager',
    status: 'active',
    avatar: '',
    phone: '+1 (555) 456-7890'
  }
];

export default function Team() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Team Members</h1>
        <Badge className="bg-jetship-blue text-white">
          {mockTeamMembers.length} members
        </Badge>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockTeamMembers.map((member) => (
          <Card key={member.id} className="glass-card border-white/10">
            <CardHeader className="text-center">
              <Avatar className="w-16 h-16 mx-auto mb-4">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="gradient-primary text-white text-lg">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">{member.name}</CardTitle>
              <Badge className="bg-jetship-purple text-white w-fit mx-auto">
                {member.role}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{member.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{member.phone}</span>
              </div>
              <div className="flex justify-center pt-2">
                <Badge className="bg-jetship-green text-white">
                  {member.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
