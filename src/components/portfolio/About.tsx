import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Code, TrendingUp, Users, Download, Mail } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'Machine Learning Expertise',
      description: 'Experienced in developing predictive models using XGBoost, TensorFlow, and scikit-learn for real-world applications.'
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Full-Stack Development',
      description: 'Proficient in React, Node.js, and modern web technologies to create end-to-end data science solutions.'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Data Analytics',
      description: 'Skilled in data visualization, statistical analysis, and building automated reporting pipelines with Power BI.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Leadership & Teaching',
      description: 'Mentoring 120+ students as an Instructional Assistant and leading technical teams in hackathon competitions.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-5xl md:text-6xl text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate data scientist combining technical expertise with creative problem-solving
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile & Description */}
            <div className="space-y-8">
              <Card className="bg-gradient-card shadow-medium border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Data Science Student & ML Engineer
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        I'm a dedicated Data Science student at UC San Diego with a passion for leveraging 
                        machine learning and data analytics to solve complex real-world problems. Currently 
                        pursuing my Bachelor's degree while gaining hands-on experience through internships 
                        and academic research.
                      </p>
                      <p>
                        My experience spans from developing predictive models at Farmer's Insurance to 
                        creating innovative applications like mood-based music recommenders. I thrive in 
                        collaborative environments and have a proven track record of translating business 
                        requirements into technical solutions.
                      </p>
                      <p>
                        As an Instructional Assistant at UCSD, I help over 120 students understand complex 
                        data structures and algorithms, which has strengthened both my technical knowledge 
                        and communication skills.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-primary hover:bg-primary-glow shadow-medium">
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Me
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-300 border-0">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary w-fit">
                        {highlight.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">120+</div>
              <div className="text-muted-foreground">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-muted-foreground">Major Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1st</div>
              <div className="text-muted-foreground">Place Winner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;