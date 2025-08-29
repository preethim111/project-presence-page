import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'Farmer\'s Insurance',
      location: 'Woodland Hills, CA',
      period: 'June 2025 – Present',
      type: 'Internship',
      achievements: [
        'Developed an XGBClassifier predictive model on Amazon SageMaker to predict the likelihood of winback leads converting to policy binds within 90 days, enabling agents to prioritize high-potential leads and improve conversion efficiency.',
        'Owned the ETL migration/raw load data from PostgreSQL to Snowflake, engineered features, and materialized a curated training table by joining/cleaning multiple source tables',
        'Built lift charts and SHAP plots to validate performance and explain key drivers to sales leadership',
        'Automated the reporting pipeline by writing optimized SQL queries in Snowflake, developing stored procedures, and chaining tasks to run end-to-end workflows; results fed into KPI dashboards in Power BI.'
      ],
      skills: ['Python', 'XGBoost', 'Amazon SageMaker', 'PostgreSQL', 'Snowflake', 'SQL', 'Power BI', 'SHAP']
    },
    {
      title: 'Instructional Assistant',
      company: 'UCSD Data Science Department',
      location: 'La Jolla, CA',
      period: 'March 2025 – Present',
      type: 'Academic',
      achievements: [
        'Tutored core data structures and algorithmic concepts including BFS, DFS, time complexity analysis, hashing, graph algorithms (Kruskal, Prim\'s, Bellman-Ford)',
        'Led office hours and one-on-one sessions to support over 120 students with coursework, conceptual understanding, and debugging',
        'Graded homework and exams, delivering timely, constructive feedback to support learning'
      ],
      skills: ['Data Structures', 'Algorithms', 'Python', 'Teaching', 'Mentoring']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise in data science and machine learning through hands-on experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center text-primary mb-2">
                      <Building className="h-5 w-5 mr-2" />
                      <span className="font-semibold text-lg">{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="bg-accent/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;