import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Cloud, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: ['Python', 'JavaScript', 'HTML/CSS', 'SQL', 'TypeScript']
    },
    {
      title: 'Machine Learning & Data Science',
      icon: <Brain className="h-6 w-6" />,
      skills: ['scikit-learn', 'TensorFlow', 'XGBoost', 'Pandas', 'Amazon SageMaker', 'Natural Language Processing', 'Computer Vision', 'Statistical Methods', 'Data Modeling', 'Linear Algebra']
    },
    {
      title: 'Technologies & Frameworks',
      icon: <Database className="h-6 w-6" />,
      skills: ['React', 'Node.js', 'Next.js', 'Flask', 'Express', 'D3.js', 'MediaPipe', 'Tailwind CSS', 'Figma']
    },
    {
      title: 'Data & Cloud Technologies',
      icon: <Cloud className="h-6 w-6" />,
      skills: ['PostgreSQL', 'Snowflake', 'MongoDB', 'SQLite', 'Hadoop', 'Spark', 'Dask', 'Power BI', 'CI/CD', 'Agile']
    }
  ];

  const certifications = [
    'AWS Certified Cloud Practitioner',
    'AWS Certified Machine Learning Engineer - Associate'
  ];

  const coursework = [
    'Data Structures',
    'Algorithms', 
    'Data Management',
    'Systems for Scalable Analytics',
    'Data Visualization',
    'Theoretical Foundations of Data Science'
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across data science, machine learning, and full-stack development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-accent/70 hover:bg-accent transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Coursework */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <Card className="bg-gradient-card shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                <div className="p-2 bg-success/10 rounded-lg text-success">
                  <Award className="h-6 w-6" />
                </div>
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-success rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Relevant Coursework */}
          <Card className="bg-gradient-card shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <Code className="h-6 w-6" />
                </div>
                Relevant Coursework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {coursework.map((course, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;