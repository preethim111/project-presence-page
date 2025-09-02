import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, Users, MapPin } from 'lucide-react';

const Awards = () => {
  const awards = [
    {
      title: 'DataHacks 2025 Hackathon Winner',
      organization: 'University of California, San Diego',
      date: 'April 2025',
      description: 'First place winner in competitive data science hackathon with 20+ participating teams',
      achievements: [
        'Developed innovative mood-based music recommendation system',
        'Demonstrated excellence in machine learning model development',
        'Showcased strong teamwork and presentation skills',
        'Impressed judges with technical implementation and business value'
      ],
      type: 'Competition',
      icon: '🏆'
    },
    {
      title: 'Undergraduate Research Scholarship Recipient',
      organization: 'University of California, San Diego',
      date: 'September 2025',
      description: 'Awarded $2,250 grant for undergraduate research excellence and academic achievement',
      achievements: [
        'Selected based on academic merit and research potential',
        'Recognized for outstanding performance in data science coursework',
        'Funded to pursue independent research projects',
        'Demonstrates commitment to advancing knowledge in the field'
      ],
      type: 'Scholarship',
      icon: '🎓'
    }
  ];

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Awards & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for excellence in data science and innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {awards.map((award, index) => (
            <Card key={index} className="bg-gradient-to-br from-success/5 to-primary/5 shadow-strong hover:shadow-glow transition-all duration-300 border border-success/20">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">{award.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {award.title}
                        </h3>
                        <p className="text-lg text-success font-semibold">
                          {award.organization}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{award.date}</span>
                      </div>
                      <Badge variant="secondary" className="bg-success/10 text-success border-success/20 w-fit">
                        <Trophy className="h-4 w-4 mr-1" />
                        {award.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {award.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Key Highlights:</h4>
                      <ul className="space-y-3">
                        {award.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 bg-success rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Celebration Effect - Only for competition awards */}
                {award.type === 'Competition' && (
                  <div className="text-center mt-8 p-6 bg-gradient-to-r from-success/10 to-primary/10 rounded-lg border border-success/20">
                    <div className="text-2xl mb-2">🎉 🏆 🎉</div>
                    <p className="text-success font-semibold">
                      Winner among 50+ competing teams
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;