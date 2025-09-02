import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ClipboardList, AlertTriangle, Clock, CheckCircle } from "lucide-react";
import BackButton from "@/components/BackButton";

const Dashboard = () => {
  // Mock data for counters
  const stats = {
    totalEmployees: 12,
    openTasks: 28,
    dueSoon: 8,
    urgent: 3,
    emergency: 1
  };

  return (
    <div className="min-h-screen bg-dashboard">
      <div className="container mx-auto p-6 space-y-6">
        {/* Back Button */}
        <div className="flex items-center justify-start">
          <BackButton to="/" label="Back to Home" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Task Management Dashboard</h1>
            <p className="text-muted-foreground mt-1">Manage your team and track project progress</p>
          </div>
          <Button variant="manager" size="lg">
            Run Reminders Now
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
              <Users className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalEmployees}</div>
              <p className="text-xs text-success mt-1">+2 this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Open Tasks</CardTitle>
              <ClipboardList className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">{stats.openTasks}</div>
              <p className="text-xs text-muted-foreground mt-1">Active projects</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Due in 7 Days</CardTitle>
              <Clock className="h-4 w-4 text-alert" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-alert">{stats.dueSoon}</div>
              <p className="text-xs text-alert-foreground mt-1">Need attention</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Urgent (3 Days)</CardTitle>
              <AlertTriangle className="h-4 w-4 text-urgent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-urgent">{stats.urgent}</div>
              <p className="text-xs text-urgent-foreground mt-1">High priority</p>
            </CardContent>
          </Card>

          <Card className="shadow-soft hover:shadow-medium transition-all duration-300 border-emergency">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Emergency (1 Day)</CardTitle>
              <AlertTriangle className="h-4 w-4 text-emergency" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emergency">{stats.emergency}</div>
              <p className="text-xs text-emergency-foreground mt-1">Critical!</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="manager" className="h-20 flex flex-col gap-2">
                <Users className="h-6 w-6" />
                Add Employee
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <ClipboardList className="h-6 w-6" />
                Add Task
              </Button>
              <Button variant="secondary" className="h-20 flex flex-col gap-2">
                <Users className="h-6 w-6" />
                Import CSV
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <CheckCircle className="h-6 w-6" />
                View Reports
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity Placeholder */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-success-light rounded-lg">
                <CheckCircle className="h-4 w-4 text-success" />
                <span className="text-sm">Task "Monthly Report" completed by John Doe</span>
                <span className="text-xs text-muted-foreground ml-auto">2 hours ago</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-alert-light rounded-lg">
                <Clock className="h-4 w-4 text-alert" />
                <span className="text-sm">Task "Client Presentation" due in 2 days</span>
                <span className="text-xs text-muted-foreground ml-auto">1 day ago</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm">New employee "Sarah Wilson" added to team</span>
                <span className="text-xs text-muted-foreground ml-auto">3 days ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;