import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Trophy, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Mood-Based Music Recommender',
      period: 'Jan 2025 – June 2025',
      description: 'An intelligent music recommendation system that analyzes user emotions and preferences to suggest personalized playlists.',
      achievements: [
        '🏆 Won 1st place out of 20+ teams at university competition',
        'Scraped 2,000 YouTube songs and extracted 11-dimensional mood vectors using a fine-tuned RoBERTa model',
        'Designed a scalable SQLite database to store music metadata (title, artist, views, likes), user preferences, and feedback',
        'Clustered songs into 5 emotional groups using K-Means with multi-metric validation (Silhouette, CH Index, etc.)',
        'Mapped user input to the closest cluster via cosine similarity and retrieved top songs through intra-cluster search',
        'Applied XGBoost for adaptive re-ranking based on feedback, reducing validation error by 42% and achieving 89% user satisfaction'
      ],
      technologies: ['Python', 'scikit-learn', 'XGBoost', 'Natural Language Processing', 'Flask', 'React.js', 'SQLite', 'RoBERTa'],
      isWinner: true,
      teamSize: '20+ teams'
    },
    {
      title: 'FitSync',
      period: 'March 2025 – May 2025', 
      description: 'A real-time fitness application that provides instant feedback on exercise form using computer vision and pose detection.',
      achievements: [
        'Developed a real-time fitness application using React and TypeScript that provides instant feedback on exercise form by comparing user movements with reference poses',
        'Implemented computer vision using MediaPipe\'s pose detection API to track 12 limb vectors',
        'Developed a custom pose similarity algorithm using TensorFlow.js that calculates weighted cosine similarity between user and reference poses',
        'Implemented secure user authentication and data persistence using Supabase, allowing users to track their progress'
      ],
      technologies: ['Python', 'TensorFlow.js', 'MediaPipe', 'React', 'Node.js', 'Supabase', 'TypeScript', 'Computer Vision'],
      isWinner: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions combining machine learning, data science, and full-stack development
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-card shadow-medium hover:shadow-strong transition-all duration-300 border-0 ${
                project.isWinner ? 'ring-2 ring-success/20 bg-gradient-to-br from-success/5 to-primary/5' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                      {project.title}
                      {project.isWinner && <Trophy className="h-6 w-6 text-success" />}
                    </CardTitle>
                    
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{project.period}</span>
                      </div>
                      {project.teamSize && (
                        <div className="flex items-center text-muted-foreground">
                          <Users className="h-4 w-4 mr-2" />
                          <span>{project.teamSize}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements:</h4>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="bg-accent/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;