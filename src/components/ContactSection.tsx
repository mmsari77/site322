import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Clock, MapPin, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните имя и номер телефона",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Я перезвоню вам в течение 5 минут"
      });
      setFormData({ name: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact-form" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Закажите ремонт
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Сломалась техника? Оставьте номер, я перезвоню в течение 5 минут!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-service-card-bg rounded-2xl p-8 shadow-card border border-border/50">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Оставить заявку
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                  Ваше имя *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Как к вам обращаться?"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                  Номер телефона *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 (777) 123-45-67"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Опишите проблему (необязательно)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Какая техника сломалась и какие симптомы?"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full h-24"
                />
              </div>

              <Button 
                type="submit" 
                size="lg"
                className="w-full text-lg py-6 shadow-button hover:shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Отправка...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Отправить заявку
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-text-secondary mt-4 text-center">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-service-card-bg rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Свяжитесь со мной
              </h3>
              
              <div className="space-y-6">
                <a 
                  href="tel:+77771234567"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-200 group"
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full group-hover:scale-110 transition-transform duration-200">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Позвонить</div>
                    <div className="text-primary text-lg font-bold">+7 (777) 123-45-67</div>
                  </div>
                </a>

                <a 
                  href="https://wa.me/77771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-success/5 hover:bg-success/10 transition-colors duration-200 group"
                >
                  <div className="bg-success text-success-foreground p-3 rounded-full group-hover:scale-110 transition-transform duration-200">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">WhatsApp</div>
                    <div className="text-success">Быстрый ответ</div>
                  </div>
                </a>

                <a 
                  href="mailto:master@repair-astana.kz"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-200 group"
                >
                  <div className="bg-primary text-primary-foreground p-3 rounded-full group-hover:scale-110 transition-transform duration-200">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary">Email</div>
                    <div className="text-primary">master@repair-astana.kz</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-section-bg rounded-2xl p-8 border border-border/50">
              <h4 className="text-xl font-bold text-text-primary mb-6">
                График работы
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-text-primary">Пн-Вс: 8:00 - 22:00</div>
                    <div className="text-sm text-text-secondary">Без выходных и праздников</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-text-primary">Астана и пригород</div>
                    <div className="text-sm text-text-secondary">Выезд в любую точку города</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-xl">
                <div className="text-center">
                  <div className="text-primary font-bold text-lg">
                    Экстренный выезд 24/7
                  </div>
                  <div className="text-sm text-text-secondary">
                    Для критичных поломок холодильников
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;