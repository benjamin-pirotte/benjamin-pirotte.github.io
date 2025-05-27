"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Calendar,
  Building,
  TrendingUp,
  Users,
  Database,
  BarChart3,
  Target,
  Lightbulb,
  Printer,
  Globe,
} from "lucide-react"

export default function ResumePage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <style jsx global>{`
  @media print {
    @page {
      size: A4;
      margin: 0.4in;
    }
    
    body {
      -webkit-print-color-adjust: exact;
      color-adjust: exact;
      font-size: 12px;
    }
    
    .print\\:hidden {
      display: none !important;
    }
    
    .shadow-lg {
      box-shadow: none !important;
      border: 1px solid #e5e7eb !important;
    }
    
    .bg-gradient-to-br {
      background: white !important;
    }
    
    .space-y-8 > * + * {
      margin-top: 0.75rem !important;
    }
    
    .space-y-6 > * + * {
      margin-top: 0.5rem !important;
    }
    
    .space-y-4 > * + * {
      margin-top: 0.25rem !important;
    }
    
    .space-y-3 > * + * {
      margin-top: 0.25rem !important;
    }
    
    .space-y-2 > * + * {
      margin-top: 0.125rem !important;
    }
    
    .text-4xl {
      font-size: 1.5rem !important;
      line-height: 1.2 !important;
    }
    
    .text-2xl {
      font-size: 1.125rem !important;
      line-height: 1.2 !important;
    }
    
    .text-xl {
      font-size: 1rem !important;
      line-height: 1.2 !important;
    }
    
    .text-lg {
      font-size: 0.875rem !important;
    }
    
    .p-8 {
      padding: 0.5rem !important;
    }
    
    .p-6 {
      padding: 0.375rem !important;
    }
    
    .mb-6 {
      margin-bottom: 0.5rem !important;
    }
    
    .mb-4 {
      margin-bottom: 0.375rem !important;
    }
    
    .mb-3 {
      margin-bottom: 0.25rem !important;
    }
    
    .mb-2 {
      margin-bottom: 0.125rem !important;
    }
    
    .max-w-4xl {
      max-width: 100% !important;
    }
    
    .grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    }
    
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
    }
    
    .gap-4 {
      gap: 0.25rem !important;
    }
    
    .gap-6 {
      gap: 0.375rem !important;
    }
    
    .w-32 {
      width: 4rem !important;
    }
    
    .h-32 {
      height: 4rem !important;
    }
    
    .leading-relaxed {
      line-height: 1.3 !important;
    }
    
    .border-l-4 {
      border-left-width: 2px !important;
    }
    
    .pl-6 {
      padding-left: 0.5rem !important;
    }
    
    .flex-wrap {
      flex-wrap: wrap !important;
    }
    
    .gap-2 {
      gap: 0.125rem !important;
    }
  }
`}</style>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <Card className="border-0 shadow-lg">
          {/* Print Button */}
          <CardContent className="p-8">
            <div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">Benjamin Pirotte</h1>
                  <h2 className="text-xl text-blue-600 font-semibold mb-4">
                    Senior Product Manager
                  </h2>
                  <div className="text-gray-600 eading-relaxed">
                    <p className="mb-6">
                        Results-driven Product Manager with 15+ years of experience building products that solve real customer problems. Former software engineer turned product leader, driven by the belief that technology is just a means to deliver outcomes. I thrive in collaborative environments where customer impact, business goals, technical excellence, ownership, and autonomy drive success.
                    </p>
                  </div>
                </div>
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full items-center justify-center text-white text-2xl font-bold">
                  <img width="200" className="rounded-full p2" alt="Benjamin Pirotte profile picture" src="/profile.png"/>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-1 flex-col md:flex-row gap-6 items-start">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      <a href="mailto:benjamin.pirotte1@gmail.com">benjamin.pirotte1@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <span>+32 493 74 53 73</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Belgium</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      <a target="_blank" href="https://linkedin.com/in/benjaminpirotte" >linkedin.com/in/benjaminpirotte</a>
                    </div>
                  </div>
                </div>
                <div className="flex-0 justify-end print:hidden">
                  <Button onClick={handlePrint} className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">                    
                    <Printer className="w-4 h-4" />
                    Save Resume
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* Core Skills */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" />
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Product Strategy</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Product Discovery</Badge>
                  <Badge variant="secondary">OKR definition</Badge>
                  <Badge variant="secondary">Value-based prioritization</Badge>
                  <Badge variant="secondary">Roadmapping</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Data/Feedback-Driven</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Analysis</Badge>
                  <Badge variant="secondary">User Research</Badge>
                  <Badge variant="secondary">Usability Testing</Badge>
                  <Badge variant="secondary">A/B Testing</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Delivery</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Lean Developmentn</Badge>
                  <Badge variant="secondary">Agile frameworks </Badge>
                  <Badge variant="secondary">Workflow Optimization</Badge>                 
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Technical expretise</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">API Integration</Badge>
                  <Badge variant="secondary">Data Integration</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Building className="w-6 h-6 text-blue-600" />
              Professional Experience
            </h3>

            <div className="space-y-8">
              {/* Job 1 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Product Manager</h4>
                    <p className="text-blue-600 font-medium">Soda</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Apr 2022 – Present</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Leading the product vision and roadmap for Soda’s Data Quality and Data Contracts platform.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Driving cross-functional collaboration with engineering, design, and go-to-market teams to deliver customer-centric solutions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-4 h-4 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Launched Soda’s Data Contracts product, enabling data teams to define and enforce data expectations at scale.</span>
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Head of Product</h4>
                    <p className="text-blue-600 font-medium">Aaqua</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Mar 2021 – Apr 2022</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Defined and led the Trust & Safety product strategy for a new global social platform.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Collaborated with stakeholders to build a safe environment for users and partners.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-4 h-4 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Delivered moderation tools and dashboards empowering creators and partners to manage communities.</span>
                  </li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Product Manager</h4>
                    <p className="text-blue-600 font-medium">Collibra</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Oct 2018 – Nov 2020</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Drove product development for Collibra’s Data Intelligence Platform, enabling integration and extensibility.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Collaborated with customers and internal stakeholders to deliver secure, scalable solutions.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-4 h-4 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Contributed to platform capabilities, empowering data governance and business insights.</span>
                  </li>
                </ul>
              </div>

              {/* Job 4 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Front-End Developer & Web Specialist</h4>
                    <p className="text-blue-600 font-medium">Various Companies</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>2011 – 2018</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Developed user-centric features for SaaS, e-commerce, and CMS platforms.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Collaborated with teams to deliver custom solutions for clients in retail, finance, and digital services.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-4 h-4 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Worked with diverse technologies and platforms to build modern web applications and enhance user experience.</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Multimedia design</h4>
                  <p className="text-gray-600">IFAPME</p>
                  <p className="text-sm text-gray-500">2011 - 2013</p>
                </div>
              </div>
              <h3 className="text-xl mt-4 font-bold text-gray-900 mb-4">Language</h3>
              <div className="space-y-4">
                <div>
                  <Badge className="mr-2" variant="secondary">French (Native)</Badge>
                  <Badge variant="secondary">English</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interests</h3>
              <div className="space-y-3">
                <Badge variant="secondary">Raising a 1yo little human</Badge>
                <Badge variant="secondary">Exploring the world and different cultures</Badge>
                <Badge variant="secondary">Hiking and nature</Badge>
                <Badge variant="secondary">Music and live experience</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white print:hidden">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Let’s Drive Impact Together</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I help teams build products that solve meaningful problems for users and deliver real business results. Let’s connect and explore how we can work together to drive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:benjamin.pirotte1@gmail.com">
                <Button variant="secondary" size="lg" className="text-blue-600">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
