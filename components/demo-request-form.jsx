"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { RefreshCw } from "lucide-react";

export function DemoRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    country: "India",
    message: "",
    captcha: "",
    privacy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaText, setCaptchaText] = useState("ABC123");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Demo request submitted successfully! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      source: "",
      country: "India",
      message: "",
      captcha: "",
      privacy: false,
    });
    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateCaptcha = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setFormData(prev => ({ ...prev, captcha: "" })); // Clear the input
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Name *</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          required
          placeholder="Enter your full name"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Work Email *</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
          placeholder="your.email@company.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone No * (+91 xxxxxxxxxx)</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          required
          placeholder="+91 9876543210"
        />
      </div>


      <div className="space-y-2">
        <Label htmlFor="source">How did you hear about Finnexus? *</Label>
        <Select value={formData.source} onValueChange={(value) => handleInputChange("source", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select source" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="google">Google Search</SelectItem>
            <SelectItem value="social">Social Media</SelectItem>
            <SelectItem value="referral">Referral</SelectItem>
            <SelectItem value="advertisement">Advertisement</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="India">India</SelectItem>
            <SelectItem value="USA">USA</SelectItem>
            <SelectItem value="UK">UK</SelectItem>
            <SelectItem value="Canada">Canada</SelectItem>
            <SelectItem value="Australia">Australia</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Tell us what you're looking for</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Describe your requirements..."
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="captcha">Captcha</Label>
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded text-sm font-mono flex-1 text-center">
            {captchaText}
          </div>
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={generateCaptcha}
            className="shrink-0"
            aria-label="Refresh captcha"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Input
            id="captcha"
            value={formData.captcha}
            onChange={(e) => handleInputChange("captcha", e.target.value)}
            placeholder="Enter the captcha"
            className="flex-1"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="privacy"
          checked={formData.privacy}
          onCheckedChange={(checked) => handleInputChange("privacy", checked)}
        />
        <Label htmlFor="privacy" className="text-sm">
          By clicking Submit, you agree to our{" "}
          <a href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          .
        </Label>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting || !formData.privacy}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}
