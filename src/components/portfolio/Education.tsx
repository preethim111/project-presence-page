import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Data Science',
      institution: 'University of California San Diego',
      location: 'Los Angeles, California',
      period: 'Sep. 2023 – June 2027',
      status: 'In Progress',
      gpa: null, // Add if available
      relevantCoursework: [
        'Data Structures & Algorithms',
        'Statistical Methods',
        'Machine Learning Foundations',
        'Data Management Systems',
        'Systems for Scalable Analytics',
        'Data Visualization',
        'Theoretical Foundations of Data Science',
        'Linear Algebra',
        'Time Complexity Analysis'
      ],
      highlights: [
        'Active member of Data Science Department as Instructional Assistant',
        'Winner of DataHacks 2025 Hackathon (April 2025)',
        'Supporting 120+ students in core computer science concepts',
        'Specializing in Machine Learning and Data Analytics'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation in data science and computer science principles
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <GraduationCap className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {edu.institution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.period}</span>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary w-fit">
                        {edu.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Academic Highlights
                  </h4>
                  <ul className="space-y-3">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-4">
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {edu.relevantCoursework.map((course, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-accent-foreground rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Excellence Badge */}
                <div className="mt-8 text-center p-4 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg border border-primary/20">
                  <div className="text-xl mb-2">🎓</div>
                  <p className="text-primary font-semibold">
                    Expected Graduation: June 2027
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;