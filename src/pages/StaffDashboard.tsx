import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, Clock, User, Calendar, Building2 } from "lucide-react";

const StaffDashboard = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<string>("");

  // Mock employees data
  const employees = [
    { id: "1", name: "John Doe", email: "john.doe@company.com" },
    { id: "2", name: "Sarah Wilson", email: "sarah.wilson@company.com" },
    { id: "3", name: "Mike Johnson", email: "mike.johnson@company.com" },
    { id: "4", name: "Lisa Brown", email: "lisa.brown@company.com" },
  ];

  // Mock tasks data grouped by urgency
  const tasksByUrgency = {
    emergency: [
      {
        id: "1",
        title: "Critical Bug Fix",
        client: "TechCorp Inc",
        dueDate: "2025-01-15",
        priority: "High",
        daysLeft: 0,
        description: "Fix authentication issue in production"
      }
    ],
    urgent: [
      {
        id: "2",
        title: "Monthly Financial Report",
        client: "ABC Industries",
        dueDate: "2025-01-17",
        priority: "High",
        daysLeft: 2,
        description: "Prepare Q4 financial summary"
      },
      {
        id: "3",
        title: "Client Presentation",
        client: "XYZ Solutions",
        dueDate: "2025-01-18",
        priority: "Normal",
        daysLeft: 3,
        description: "Quarterly business review presentation"
      }
    ],
    alert: [
      {
        id: "4",
        title: "Website Redesign",
        client: "Creative Agency",
        dueDate: "2025-01-22",
        priority: "Normal",
        daysLeft: 7,
        description: "Complete homepage mockups"
      }
    ],
    upcoming: [
      {
        id: "5",
        title: "Database Migration",
        client: "DataFlow Ltd",
        dueDate: "2025-02-01",
        priority: "Low",
        daysLeft: 17,
        description: "Migrate legacy database to new system"
      }
    ],
    completed: [
      {
        id: "6",
        title: "Security Audit",
        client: "SecureBank",
        dueDate: "2025-01-10",
        priority: "High",
        daysLeft: -5,
        description: "Complete security assessment report"
      }
    ]
  };

  const TaskCard = ({ task, urgencyType }: { task: any; urgencyType: string }) => {
    const getUrgencyColor = (type: string) => {
      switch (type) {
        case 'emergency': return 'emergency';
        case 'urgent': return 'urgent';
        case 'alert': return 'alert';
        case 'completed': return 'success';
        default: return 'primary';
      }
    };

    const getUrgencyText = (type: string) => {
      switch (type) {
        case 'emergency': return 'EMERGENCY';
        case 'urgent': return 'URGENT';
        case 'alert': return 'ALERT';
        case 'completed': return 'COMPLETED';
        default: return 'UPCOMING';
      }
    };

    return (
      <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg font-semibold">{task.title}</CardTitle>
            <Badge variant={getUrgencyColor(urgencyType)} className="text-xs font-bold">
              {getUrgencyText(urgencyType)}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Building2 className="h-4 w-4" />
              {task.client}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {task.dueDate}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">{task.description}</p>
          <div className="flex items-center justify-between">
            <Badge variant="outline" className={`text-${getUrgencyColor(urgencyType)}`}>
              {task.priority} Priority
            </Badge>
            {task.daysLeft >= 0 ? (
              <span className={`text-sm font-medium ${
                task.daysLeft <= 1 ? 'text-emergency' : 
                task.daysLeft <= 3 ? 'text-urgent' : 
                task.daysLeft <= 7 ? 'text-alert' : 'text-muted-foreground'
              }`}>
                {task.daysLeft === 0 ? 'Due Today' : 
                 task.daysLeft === 1 ? '1 day left' : 
                 `${task.daysLeft} days left`}
              </span>
            ) : (
              <span className="text-sm font-medium text-success">
                Completed
              </span>
            )}
          </div>
        </CardContent>
      </Card>
    );
  };

  if (!selectedEmployee) {
    return (
      <div className="min-h-screen bg-dashboard flex items-center justify-center">
        <Card className="w-full max-w-md shadow-strong">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="h-8 w-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold">Welcome to Task Management</CardTitle>
            <p className="text-muted-foreground">Select your name to view your assigned tasks</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select onValueChange={setSelectedEmployee}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Select your name..." />
              </SelectTrigger>
              <SelectContent>
                {employees.map((employee) => (
                  <SelectItem key={employee.id} value={employee.id}>
                    {employee.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button 
              variant="staff" 
              size="lg" 
              className="w-full" 
              disabled={!selectedEmployee}
            >
              View My Tasks
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const employeeName = employees.find(emp => emp.id === selectedEmployee)?.name || "Employee";

  return (
    <div className="min-h-screen bg-dashboard">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Welcome, {employeeName}</h1>
            <p className="text-muted-foreground mt-1">Here are your assigned tasks</p>
          </div>
          <Button variant="outline" onClick={() => setSelectedEmployee("")}>
            Switch Employee
          </Button>
        </div>

        {/* Task Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="shadow-soft border-emergency">
            <CardContent className="p-4 text-center">
              <AlertTriangle className="h-8 w-8 text-emergency mx-auto mb-2" />
              <div className="text-2xl font-bold text-emergency">{tasksByUrgency.emergency.length}</div>
              <p className="text-sm text-emergency-foreground">Emergency</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-urgent">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-urgent mx-auto mb-2" />
              <div className="text-2xl font-bold text-urgent">{tasksByUrgency.urgent.length}</div>
              <p className="text-sm text-urgent-foreground">Urgent</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-alert">
            <CardContent className="p-4 text-center">
              <AlertTriangle className="h-8 w-8 text-alert mx-auto mb-2" />
              <div className="text-2xl font-bold text-alert">{tasksByUrgency.alert.length}</div>
              <p className="text-sm text-alert-foreground">Alert</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-soft border-success">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">{tasksByUrgency.completed.length}</div>
              <p className="text-sm text-success-foreground">Completed</p>
            </CardContent>
          </Card>
        </div>

        {/* Tasks by Urgency */}
        <Tabs defaultValue="emergency" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="emergency" className="data-[state=active]:bg-emergency data-[state=active]:text-emergency-foreground">
              Emergency
            </TabsTrigger>
            <TabsTrigger value="urgent" className="data-[state=active]:bg-urgent data-[state=active]:text-urgent-foreground">
              Urgent
            </TabsTrigger>
            <TabsTrigger value="alert" className="data-[state=active]:bg-alert data-[state=active]:text-alert-foreground">
              Alert
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="completed" className="data-[state=active]:bg-success data-[state=active]:text-success-foreground">
              Completed
            </TabsTrigger>
          </TabsList>

          {Object.entries(tasksByUrgency).map(([urgency, tasks]) => (
            <TabsContent key={urgency} value={urgency} className="space-y-4">
              {tasks.length === 0 ? (
                <Card className="shadow-soft">
                  <CardContent className="p-8 text-center">
                    <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No {urgency} tasks at the moment</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} urgencyType={urgency} />
                  ))}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default StaffDashboard;