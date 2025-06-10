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
  TrendingDown,
  FileJson,
  FastForward,
  SmilePlus,
  ChartGantt,
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

  html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 11px;
    line-height: 1.4;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
  }

  .print\\:hidden {
    display: none !important;
  }

  /* Typography */
  .text-4xl { font-size: 1.3rem !important; line-height: 1.2 !important; }
  .text-2xl { font-size: 1rem !important; line-height: 1.2 !important; }
  .text-xl { font-size: 0.9rem !important; line-height: 1.2 !important; }
  .text-lg { font-size: 0.8rem !important; }

  /* Spacing adjustments */
  .p-8, .p-6 { padding: 0.4rem !important; }
  .mb-6, .mb-4 { margin-bottom: 0.4rem !important; }

  .space-y-8 > * + * { margin-top: 0.8rem !important; } /* Increased for section separation */
  .space-y-6 > * + * { margin-top: 0.6rem !important; }
  .space-y-4 > * + * { margin-top: 0.4rem !important; }
  .space-y-3 > * + * { margin-top: 0.3rem !important; }
  .space-y-2 > * + * { margin-top: 0.2rem !important; }

  .gap-6, .gap-4 { gap: 0.3rem !important; }

  /* Padding inside sections */
  .card-content, .CardContent, .print-padded-section {
    padding: 0.5rem !important;
  }

  /* Margin between main sections like Core Competencies and Professional Experience */
  .print-main-section + .print-main-section {
    margin-top: 1rem !important;
  }

  /* Reduce image/profile picture size */
  .w-36, .h-36 { width: 6rem !important; height: 6rem !important; margin-top: 2.5rem  }

  /* Layout refinements */
  .max-w-4xl { max-width: 100% !important; }
  .grid-cols-4, .md\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
  .border-l-4 { border-left-width: 2px !important; }
  .pl-6 { padding-left: 0.4rem !important; }
  .flex-wrap { flex-wrap: wrap !important; }
  .gap-2 { gap: 0.125rem !important; }
  .leading-relaxed { line-height: 1.3 !important; }

  /* Background and shadow adjustments */
  .shadow-lg {
    box-shadow: none !important;
    border: 1px solid #e5e7eb !important;
  }

  .bg-gradient-to-br {
    background: white !important;
  }

  /* Optional: prevent page breaks inside key sections */
  .no-break {
    break-inside: avoid;
  }
}


`}</style>
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <Card className="border-0 shadow-lg print-main-section">
          {/* Print Button */}
          <CardContent className="p-8">
            <div>
              <div className="flex  flex-row gap-6 items-start">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">Benjamin Pirotte</h1>
                  <h2 className="text-xl text-blue-600 font-semibold mb-4">
                    Senior Product Manager
                  </h2>
                  <div className="text-gray-600 eading-relaxed">
                    <p className="mb-6">
                        Results-driven Product Manager with 15+ years of experience building products that solve real customer problems. Former software engineer turned product leader, driven by the belief that technology is just a means to deliver outcomes. <br/> I thrive in collaborative environments where customer impact, business goals, technical excellence, ownership, and autonomy drive success.
                    </p>
                  </div>
                </div>
                <div className="w-36 h-36 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full items-center justify-center text-white text-2xl font-bold">
                  <img width="200" className="rounded-full p2" alt="Benjamin Pirotte profile picture" src="/profile.png"/>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex flex-1 flex-col md:flex-row gap-6 items-start">
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      <a href="mailto:benjamin.pirotte1@gmail.com">benjamin.pirotte1@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span>+32 493 74 53 73</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span>Belgium (remote)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-green-600" />
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
        <Card className="border-0 shadow-lg print-main-section ">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-600" />
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
              <div className="space-y-3 print-padded-section">
                <h4 className="font-semibold text-gray-800">Product Strategy</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Product Vision</Badge>
                  <Badge variant="secondary">OKR definition</Badge>
                  <Badge variant="secondary">Value-based prioritization</Badge>
                  <Badge variant="secondary">Roadmapping</Badge>
                </div>
              </div>
              <div className="space-y-3 print-padded-section">
                <h4 className="font-semibold text-gray-800">Product Discovery</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Analysis</Badge>
                  <Badge variant="secondary">User Research</Badge>
                  <Badge variant="secondary">Usability Testing</Badge>
                  <Badge variant="secondary">A/B Testing</Badge>
                </div>
              </div>
              <div className="space-y-3 print-padded-section">
                <h4 className="font-semibold text-gray-800">Product Delivery</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Lean Development</Badge>
                  <Badge variant="secondary">Agile frameworks </Badge>
                  <Badge variant="secondary">Workflow Optimization</Badge>                 
                </div>
              </div>
              <div className="space-y-3 print-padded-section">
                <h4 className="font-semibold text-gray-800">Technical expertise</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Frontend technology</Badge>
                  <Badge variant="secondary">API Integration</Badge>
                  <Badge variant="secondary">Data Integration</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="border-0 shadow-lg print-padded-section">
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
                    <p className="text-blue-600 font-medium"><a target="_blank" href="https://soda.io">Soda</a></p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Apr 2022 – Present</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>As the product organization was in its early stages, I helped accelerate delivery, establish structure and processes, and create feedback loops with customers, shifting prioritization from gut feeling to a value-driven approach.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Soda’s initial focus was on the engineering persona. I led the development of a commercial product offering for business users, helping grow the customer base by over 10x.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChartGantt className="w-4 h-4 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Currently, I’m leading the next-generation of Soda’s product, designed to bridge business and engineering needs with a streamlined model that drives faster adoption, reduces onboarding costs, and ultimately supports product-led growth.</span>
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l-4 border-blue-500 pl-6 print-padded-section">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Head of Product</h4>
                    <p className="text-blue-600 font-medium"><a target="_blank" href="https://www.ricemedia.co/aaqua-failed-startup-singapore/">Aaqua</a></p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Nov 2020 – Apr 2022</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700 ">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>For a new global social platform focused on the Asian market (Singapore based), I defined and led the Trust & Safety product strategy alongside the T&S expert team. I collaborated with creators and partners to build tools empowering them to manage communities..</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingDown className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>The project was ultimately discontinued shortly after I left due to organizational challenges, and the company ceased operations before launch.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <SmilePlus className="w-4 h-4 mt-1 text-purple-600 flex-shrink-0" />
                    <span>On a personal note, it’s where I met my wife—so while the product didn’t ship, it led to my greatest project.</span>
                  </li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="border-l-4 border-blue-500 pl-6 print-padded-section">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Product Manager</h4>
                    <p className="text-blue-600 font-medium"><a target="_blank" href="https://collibra.com">Collibra</a></p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Oct 2017 – Nov 2020</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                   <li className="flex items-start gap-2">
                    <ChartGantt className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>I started at Collibra as a Front-End Engineer, then transitioned into Product Management after one year, driven by a desire to focus on product outcomes rather than technology alone. </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Drove product development for Collibra’s Data Intelligence Platform, enabling integration and extensibility. This platform allowed Collibra to respond quickly to market demands and empowered teams to deliver custom capabilities that helped close strategic, high-value deals (worth over $1 million in ARR).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FastForward className="w-4 h-4 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Led the team’s shift from no front-end tests to full coverage (unit and end-to-end), enabling continuous integration and deployment—critical for Collibra’s transition from on-premise to a cloud-based platform. This eliminated month-long code freezes and manual testing bottlenecks.</span>
                  </li>
                </ul>
              </div>

              {/* Job 4 */}
              <div className="border-l-4 border-blue-500 pl-6 print-padded-section">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Front-End Developer - E-marketing</h4>
                    <p className="text-blue-600 font-medium"><a href="https://www.idweaver.com/" target="blank">IDWeaver</a>, <a href="https://www.synchrone.be/" target="blank">Synchrone</a>, Outlet-Avenue </p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>2011 – 2017</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <FileJson className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                    Worked in digital agencies to design and develop websites across diverse industries, including e-commerce platforms, crowdfunding platforms, social networks, and marketing websites. Also supported e-marketing efforts through email campaigns and digital ads.

                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education & Interests */}
        <div className="grid grid-cols-3 gap-6 items-stretch">
          <Card className="border-0 shadow-lg main-section h-full flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="flex flex-col flex-grow h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">Multimedia design</h4>
                    <p className="text-gray-600">IFAPME</p>
                    <p className="text-sm text-gray-500">2011 - 2013</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg main-section h-full flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="flex flex-col flex-grow h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Language</h3>
                <div className="space-y-4">
                  <div>
                    <Badge variant="secondary">English</Badge>
                    <Badge className="mr-2" variant="secondary">French (Native)</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-lg main-section h-full flex flex-col">
            <CardContent className="p-6 flex flex-col flex-1">
              <div className="flex flex-col flex-grow h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interests</h3>
                <div className="space-y-3">
                  <Badge variant="secondary">Raising a little human</Badge>
                  <Badge variant="secondary">Exploring the world and different cultures</Badge>
                  <Badge variant="secondary">Hiking and nature</Badge>
                  <Badge variant="secondary">Music and live experience</Badge>
                </div>
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
