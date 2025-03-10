
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email address"
          className="flex-grow border-ikwezi-green/30 focus:border-ikwezi-green"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button 
          type="submit" 
          className="bg-ikwezi-green hover:bg-ikwezi-green/90 text-white"
          disabled={isLoading}
        >
          {isLoading ? 'Subscribing...' : 'Notify Me'}
        </Button>
      </div>
      <p className="text-xs text-gray-500 text-center">
        We'll notify you when our website is ready. No spam, we promise!
      </p>
    </form>
  );
};

export default NewsletterForm;
