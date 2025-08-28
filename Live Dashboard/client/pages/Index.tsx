import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie
} from "recharts";
import { 
  AlertTriangle, 
  Download, 
  FileText, 
  TrendingUp, 
  AlertCircle,
  Activity,
  BarChart3,
  Cpu,
  Thermometer,
  Gauge,
  Zap,
  Settings,
  Droplets,
  Timer,
  Target,
  Wrench,
  Signal,
  Home,
  Monitor,
  Brain,
  Shield,
  Bell,
  Menu,
  X,
  ChevronRight,
  Power,
  Database,
  TrendingDown,
  Eye,
  Layers
} from "lucide-react";

// Navigation items
const navItems = [
  { id: "overview", label: "Overview", icon: Home, color: "from-blue-500 to-cyan-500" },
  { id: "equipment", label: "Equipment", icon: Monitor, color: "from-purple-500 to-pink-500" },
  { id: "process", label: "Process", icon: Gauge, color: "from-green-500 to-emerald-500" },
  { id: "quality", label: "Quality", icon: Target, color: "from-orange-500 to-red-500" },
  { id: "ai-models", label: "AI Models", icon: Brain, color: "from-indigo-500 to-purple-500" },
  { id: "alerts", label: "Alerts", icon: Bell, color: "from-red-500 to-pink-500" },
  { id: "analytics", label: "Analytics", icon: BarChart3, color: "from-cyan-500 to-blue-500" }
];

// Enhanced data structures
const overviewStats = [
  { label: "Production Efficiency", value: "96.8%", change: "+2.3%", trend: "up", icon: TrendingUp },
  { label: "Equipment Health", value: "87.2%", change: "-1.2%", trend: "down", icon: Shield },
  { label: "Quality Score", value: "99.1%", change: "+0.5%", trend: "up", icon: Target },
  { label: "Energy Consumption", value: "342kW", change: "-5.2%", trend: "down", icon: Zap }
];

const equipmentData = [
  { name: "Pasteurizer Unit 1", health: 92, status: "optimal", temp: 72.5, efficiency: 96.8, alert: false },
  { name: "Centrifuge A", health: 76, status: "warning", temp: 65.2, efficiency: 89.3, alert: true },
  { name: "Homogenizer H-201", health: 88, status: "optimal", temp: 68.1, efficiency: 94.2, alert: false },
  { name: "Storage Tank T-101", health: 65, status: "critical", temp: 4.2, efficiency: 78.5, alert: true },
  { name: "Packaging Line", health: 84, status: "optimal", temp: 25.8, efficiency: 91.7, alert: false }
];

const realtimeData = [
  { time: "12:00", production: 5850, quality: 99.1, efficiency: 96.8 },
  { time: "12:05", production: 5920, quality: 99.0, efficiency: 97.1 },
  { time: "12:10", production: 5780, quality: 99.2, efficiency: 96.5 },
  { time: "12:15", production: 5890, quality: 98.9, efficiency: 96.9 },
  { time: "12:20", production: 5950, quality: 99.1, efficiency: 97.2 },
  { time: "12:25", production: 5870, quality: 99.0, efficiency: 96.7 }
];

const processHealthData = [
  { name: "Pasteurization", value: 95, fill: "#3b82f6" },
  { name: "Separation", value: 78, fill: "#f59e0b" },
  { name: "Homogenization", value: 92, fill: "#10b981" },
  { name: "Storage", value: 68, fill: "#ef4444" },
  { name: "Packaging", value: 89, fill: "#8b5cf6" }
];

export default function Index() {
  const [activeNav, setActiveNav] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "optimal": return "text-green-600 bg-green-50 border-green-200";
      case "warning": return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "critical": return "text-red-600 bg-red-50 border-red-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewStats.map((stat, index) => (
          <Card key={index} className="relative overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <div className={`flex items-center gap-1 text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {stat.change}
                  </div>
                </div>
                <div className={`p-3 rounded-lg bg-gradient-to-r ${navItems.find(item => item.icon === stat.icon)?.color || 'from-gray-500 to-gray-600'}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Real-time Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-600" />
              Real-time Production Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={realtimeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" fontSize={12} />
                <YAxis stroke="#6b7280" fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Line type="monotone" dataKey="production" stroke="#3b82f6" strokeWidth={3} dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="quality" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="efficiency" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Target className="h-5 w-5 text-green-600" />
              Process Health Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={processHealthData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="name"
                  stroke="#6b7280"
                  fontSize={12}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis
                  stroke="#6b7280"
                  fontSize={12}
                  domain={[0, 100]}
                  label={{ value: 'Health %', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  formatter={(value) => [`${value}%`, 'Health Score']}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {processHealthData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Equipment Status Grid */}
      <Card className="bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Monitor className="h-5 w-5 text-purple-600" />
            Equipment Status Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentData.map((equipment, index) => (
              <div key={index} className={`relative p-6 rounded-xl border ${getStatusColor(equipment.status)} hover:scale-105 transition-all duration-300`}>
                {equipment.alert && (
                  <div className="absolute -top-2 -right-2">
                    <div className="relative">
                      <AlertCircle className="h-6 w-6 text-red-500" />
                      <div className="absolute inset-0 animate-ping">
                        <AlertCircle className="h-6 w-6 text-red-500 opacity-75" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{equipment.name}</h4>
                    <Badge className={`${getStatusColor(equipment.status)} capitalize`}>
                      {equipment.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Health</span>
                      <span className="text-gray-900 font-medium">{equipment.health}%</span>
                    </div>
                    <Progress value={equipment.health} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Temp</span>
                      <p className="text-gray-900 font-medium">{equipment.temp}°C</p>
                    </div>
                    <div>
                      <span className="text-gray-600">Efficiency</span>
                      <p className="text-gray-900 font-medium">{equipment.efficiency}%</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeNav) {
      case "overview":
        return renderOverview();
      case "equipment":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Equipment Management</h2>
            <p className="text-gray-600">Detailed equipment monitoring and control systems coming soon...</p>
          </div>
        );
      case "process":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Process Control</h2>
            <p className="text-gray-600">Real-time process variable monitoring and control interface coming soon...</p>
          </div>
        );
      case "quality":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Quality Management</h2>
            <p className="text-gray-600">AI-powered quality prediction and analysis dashboard coming soon...</p>
          </div>
        );
      case "ai-models":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">AI Models</h2>
            <p className="text-gray-600">Machine learning model performance and management coming soon...</p>
          </div>
        );
      case "alerts":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Alert Management</h2>
            <p className="text-gray-600">Predictive alerts and notification system coming soon...</p>
          </div>
        );
      case "analytics":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Advanced Analytics</h2>
            <p className="text-gray-600">Deep analytics and reporting interface coming soon...</p>
          </div>
        );
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Background Effects */}
      <div className={"fixed inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ddd6fe\" fill-opacity=\"0.03\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"} />
      
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-white/90 border-gray-200 text-gray-800 hover:bg-gray-50"
        >
          {sidebarOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-white/95 backdrop-blur-xl border-r border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 p-6 border-b border-gray-200">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">DairyTech</h1>
              <p className="text-xs text-gray-600">Predictive Analytics</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  activeNav === item.id 
                    ? 'bg-gradient-to-r ' + item.color + ' text-white shadow-lg' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
                {activeNav === item.id && <ChevronRight className="h-4 w-4 ml-auto" />}
              </button>
            ))}
          </nav>

          {/* Status Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>System Online</span>
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64 min-h-screen">
        {/* Top Bar */}
        <div className="sticky top-0 z-30 bg-white/90 backdrop-blur-xl border-b border-gray-200 p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <div className="ml-12 lg:ml-0">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {navItems.find(item => item.id === activeNav)?.label || 'Overview'}
              </h1>
              <p className="text-gray-600 text-sm lg:text-base">
                Real-time monitoring and predictive analytics
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="bg-white border-gray-200 text-gray-700 hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AR</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-4 lg:p-8">
          {renderContent()}
        </div>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
