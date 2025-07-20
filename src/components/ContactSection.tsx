import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Github, Linkedin, Send, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Hello Ayush - ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:31860csaiml@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: '31860csaiml@gmail.com',
      action: () => window.location.href = 'mailto:31860csaiml@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7275514139',
      action: () => window.location.href = 'tel:+917275514139'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'ayush8312',
      action: () => window.open('https://github.com/ayush8312', '_blank')
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ayush-mishra',
      action: () => window.open('https://www.linkedin.com/in/ayush-mishra-4a9a8a185', '_blank')
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl font-orbitron font-bold hero-text-glow mb-4">
            INITIATE CONTACT
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to assemble the next great project? Let's connect and build something extraordinary.
          </p>
          <div className="w-32 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Iron Man HUD Style */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <Card className="jarvis-panel tech-card p-8">
              <CardContent className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-orbitron font-bold text-primary mb-2">
                    COMMUNICATION PROTOCOL
                  </h3>
                  <div className="flex justify-center">
                    <Send className="w-6 h-6 text-accent" />
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                        Agent Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-muted/50 border-primary/30 focus:border-primary text-foreground"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                        Transmission Frequency
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-muted/50 border-primary/30 focus:border-primary text-foreground"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                        Mission Brief
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-muted/50 border-primary/30 focus:border-primary text-foreground min-h-[120px]"
                        placeholder="Describe your project or inquiry..."
                        required
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="power-button w-full font-orbitron font-bold">
                    <Send className="w-5 h-5 mr-2" />
                    TRANSMIT MESSAGE
                  </Button>
                </form>

                {/* Quick Contact Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="holographic flex-1"
                    onClick={() => window.location.href = 'mailto:31860csaiml@gmail.com?subject=Hello Ayush&body=I saw your amazing Avengers portfolio!'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    QUICK EMAIL
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="holographic flex-1"
                    onClick={() => window.location.href = 'tel:+917275514139'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    CALL NOW
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="space-y-6">
              <Card className="holographic tech-card p-8">
                <CardContent className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-orbitron font-bold text-primary mb-2">
                      DIRECT CHANNELS
                    </h3>
                    <p className="text-muted-foreground">
                      Multiple pathways to establish communication
                    </p>
                  </div>

                  <div className="space-y-4">
                    {contactInfo.map((contact, index) => {
                      const IconComponent = contact.icon;
                      return (
                        <div 
                          key={contact.label}
                          className="group cursor-pointer"
                          onClick={contact.action}
                        >
                          <div className="flex items-center p-4 rounded-lg bg-muted/30 hover:bg-primary/10 transition-all duration-300 border border-primary/20 hover:border-primary/50">
                            <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300 mr-4">
                              <IconComponent className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-accent uppercase tracking-wider text-sm">
                                {contact.label}
                              </h4>
                              <p className="text-foreground font-medium">
                                {contact.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Location Info */}
              <Card className="holographic tech-card p-6">
                <CardContent className="text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/20 w-fit mx-auto">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold text-accent mb-2">HEADQUARTERS</h4>
                    <p className="text-muted-foreground">
                      Available for remote collaboration<br />
                      India • UTC+5:30
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Download Resume */}
              <Card className="holographic tech-card p-6">
                <CardContent className="text-center space-y-4">
                  <h4 className="font-orbitron font-bold text-accent mb-4">MISSION DOSSIER</h4>
                  <Button 
                    size="lg" 
                    className="power-button w-full font-orbitron font-bold"
                    onClick={() => window.open('https://ayush8312.github.io/Ayush-Mishra-Portfolio/', '_blank')}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    ACCESS PORTFOLIO
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};