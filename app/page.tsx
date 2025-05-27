import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Globe,
  Calendar,
  Building,
  TrendingUp,
  Users,
  Database,
  BarChart3,
  Target,
  Lightbulb,
} from "lucide-react"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Header Section */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Name</h1>
                <h2 className="text-xl text-blue-600 font-semibold mb-4">
                  Senior Product Manager - Data & B2B Solutions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Results-driven Product Manager with 5+ years of experience building data-driven B2B products.
                  Specialized in transforming complex data insights into user-friendly solutions that drive business
                  growth and improve customer outcomes.
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span>your.email@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    <span>linkedin.com/in/yourname</span>
                  </div>
                </div>
              </div>

              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                YN
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
                  <Badge variant="secondary">Roadmapping</Badge>
                  <Badge variant="secondary">OKRs</Badge>
                  <Badge variant="secondary">Go-to-Market</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Data & Analytics</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">Tableau</Badge>
                  <Badge variant="secondary">A/B Testing</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">B2B Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SaaS</Badge>
                  <Badge variant="secondary">Enterprise</Badge>
                  <Badge variant="secondary">APIs</Badge>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Leadership</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Agile</Badge>
                  <Badge variant="secondary">Stakeholder Mgmt</Badge>
                  <Badge variant="secondary">Cross-functional</Badge>
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
                    <h4 className="text-xl font-semibold text-gray-900">Senior Product Manager</h4>
                    <p className="text-blue-600 font-medium">TechCorp Analytics</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 2022 - Present</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>
                      Led development of enterprise data visualization platform, increasing customer retention by 35%
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 mt-1 text-blue-600 flex-shrink-0" />
                    <span>Managed cross-functional team of 12 engineers, designers, and data scientists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-4 h-4 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Launched real-time analytics API serving 10M+ requests daily with 99.9% uptime</span>
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Product Manager</h4>
                    <p className="text-green-600 font-medium">DataFlow Solutions</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Mar 2020 - Dec 2021</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <BarChart3 className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>
                      Built B2B dashboard product from 0 to 1, acquiring 150+ enterprise customers in first year
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Lightbulb className="w-4 h-4 mt-1 text-yellow-600 flex-shrink-0" />
                    <span>
                      Implemented data-driven feature prioritization framework, improving development velocity by 40%
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 mt-1 text-red-600 flex-shrink-0" />
                    <span>
                      Achieved 95% customer satisfaction score through user research and iterative product improvements
                    </span>
                  </li>
                </ul>
              </div>

              {/* Job 3 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900">Associate Product Manager</h4>
                    <p className="text-purple-600 font-medium">StartupXYZ</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Jun 2019 - Feb 2020</span>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Database className="w-4 h-4 mt-1 text-purple-600 flex-shrink-0" />
                    <span>Designed and launched customer data integration platform for SMB market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 mt-1 text-green-600 flex-shrink-0" />
                    <span>Increased user engagement by 60% through A/B testing and user behavior analysis</span>
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
                  <h4 className="font-semibold text-gray-800">MBA, Technology Management</h4>
                  <p className="text-gray-600">Stanford Graduate School of Business</p>
                  <p className="text-sm text-gray-500">2017 - 2019</p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold text-gray-800">BS, Computer Science</h4>
                  <p className="text-gray-600">UC Berkeley</p>
                  <p className="text-sm text-gray-500">2013 - 2017</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Product Manager of the Year 2023</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Led $50M ARR product line</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Certified Scrum Product Owner</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Speaker at ProductCon 2023</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm passionate about creating data-driven B2B products that solve real business problems. Let's discuss
              how I can help drive your product vision forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="text-blue-600">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Globe className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
