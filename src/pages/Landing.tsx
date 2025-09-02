import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ClipboardList, Shield, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-4xl space-y-8">
        {/* Logo and Title */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-strong">
            <ClipboardList className="h-10 w-10 text-primary-foreground" />
          </div>
          <h1 className="text-5xl font-bold text-primary-foreground tracking-tight">
            Task Management System
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Streamline your workflow, manage your team, and never miss a deadline. 
            Choose your role to get started.
          </p>
        </div>

        {/* Entry Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Manager Login */}
          <Card className="shadow-strong hover:shadow-medium transition-all duration-300 transform hover:scale-105 border-0 bg-white/95 backdrop-blur">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Manager Access</CardTitle>
              <p className="text-muted-foreground">
                Full administrative access to manage employees, tasks, and system settings
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Manage employees and teams</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-primary" />
                  <span>Create and assign tasks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>View reports and analytics</span>
                </div>
              </div>
              <Button 
                variant="manager" 
                size="lg" 
                className="w-full text-lg font-semibold"
                onClick={() => navigate('/manager')}
              >
                Enter as Manager
              </Button>
            </CardContent>
          </Card>

          {/* Staff Login */}
          <Card className="shadow-strong hover:shadow-medium transition-all duration-300 transform hover:scale-105 border-0 bg-white/95 backdrop-blur">
            <CardHeader className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto">
                <Briefcase className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Staff Access</CardTitle>
              <p className="text-muted-foreground">
                View and manage your assigned tasks with priority-based organization
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-accent" />
                  <span>View your assigned tasks</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-accent" />
                  <span>Track task priorities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-accent" />
                  <span>Monitor deadlines</span>
                </div>
              </div>
              <Button 
                variant="staff" 
                size="lg" 
                className="w-full text-lg font-semibold"
                onClick={() => navigate('/staff')}
              >
                Enter as Staff
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features Preview */}
        <div className="text-center space-y-4">
          <h3 className="text-lg font-semibold text-primary-foreground/90">
            Key Features
          </h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/80">
            <span className="bg-white/20 px-3 py-1 rounded-full">Local Database Storage</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Automated Reminders</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">CSV Import/Export</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Priority Management</span>
            <span className="bg-white/20 px-3 py-1 rounded-full">Team Collaboration</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;