'use client';
import React from 'react';
import { Shield, ArrowLeft, Cookie, Database, Bell, Mail, Users, Eye } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const lastUpdated = "February 7, 2026";

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Information You Provide",
          text: "When you create an account or use our Members area, we may collect your username, email address, and any predictions or quiz scores you submit."
        },
        {
          subtitle: "Automatically Collected Information",
          text: "We automatically collect certain information when you visit our website, including your IP address, browser type, device information, and pages visited. This helps us improve our service and understand how users interact with our site."
        },
        {
          subtitle: "Local Storage",
          text: "We use your browser's local storage to save your preferences, such as selected teams for live score notifications and other settings. This data stays on your device and is not transmitted to our servers."
        }
      ]
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking Technologies",
      content: [
        {
          subtitle: "Essential Cookies",
          text: "We use essential cookies to enable basic website functionality, such as maintaining your login session and remembering your preferences."
        },
        {
          subtitle: "Analytics Cookies",
          text: "We may use analytics services to understand how visitors use our website. These services may set cookies to collect information about your visit, including pages viewed and time spent on the site."
        },
        {
          subtitle: "Advertising Cookies",
          text: "We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalised advertising by visiting Google's Ads Settings (adssettings.google.com)."
        }
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          subtitle: "Service Provision",
          text: "We use your information to provide and improve our services, including displaying live scores, maintaining leaderboards, tracking predictions, and personalising your experience."
        },
        {
          subtitle: "Communications",
          text: "If you've enabled notifications, we may send you alerts about live match events for your selected teams. You can disable these notifications at any time through the notification settings."
        },
        {
          subtitle: "Analytics and Improvements",
          text: "We analyse usage patterns to improve our website, fix issues, and develop new features that our users will find valuable."
        }
      ]
    },
    {
      icon: Users,
      title: "Information Sharing",
      content: [
        {
          subtitle: "Public Information",
          text: "Certain information may be publicly visible, such as your username on leaderboards, prediction scores, and forum posts. Please be mindful of the information you choose to share publicly."
        },
        {
          subtitle: "Third-Party Services",
          text: "We use third-party services including Google AdSense for advertising, Supabase for database services, and API-Sports for football data. These services have their own privacy policies governing their use of data."
        },
        {
          subtitle: "Legal Requirements",
          text: "We may disclose your information if required by law or if we believe such action is necessary to comply with legal obligations, protect our rights, or ensure the safety of our users."
        }
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        {
          subtitle: "Security Measures",
          text: "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction."
        },
        {
          subtitle: "Data Retention",
          text: "We retain your personal information for as long as necessary to provide our services and fulfil the purposes described in this policy, unless a longer retention period is required by law."
        }
      ]
    },
    {
      icon: Bell,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, correct, or delete your personal information. You can update your account information through your profile settings or contact us for assistance."
        },
        {
          subtitle: "Notification Preferences",
          text: "You can manage your notification preferences at any time by clicking the football icon in the bottom corner of any page and adjusting your settings."
        },
        {
          subtitle: "Cookie Preferences",
          text: "Most web browsers allow you to control cookies through their settings. Note that disabling certain cookies may affect the functionality of our website."
        },
        {
          subtitle: "Opt-Out of Personalised Ads",
          text: "You can opt out of personalised advertising by visiting Google's Ads Settings or the Network Advertising Initiative opt-out page."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-blue-400" />
              <span className="text-white font-bold">Privacy Policy</span>
            </div>
            <div className="w-16"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full mb-6 shadow-lg shadow-blue-500/30">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400">
            EFL League One & Two Hub ("we", "our", or "us")
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <p className="text-slate-300 leading-relaxed">
            Welcome to EFL League One & Two Hub. We are committed to protecting your privacy and ensuring 
            you understand how we collect, use, and safeguard your information. This Privacy Policy explains 
            our practices regarding data collection and usage when you use our website at{' '}
            <span className="text-blue-400">www.lowerleaguehub.com</span>.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            By using our website, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div 
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">
                        {item.subtitle}
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Children's Privacy */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mt-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
          <p className="text-slate-300 leading-relaxed">
            Our website is not intended for children under the age of 13. We do not knowingly collect 
            personal information from children under 13. If you are a parent or guardian and believe 
            your child has provided us with personal information, please contact us so we can take 
            appropriate action.
          </p>
        </div>

        {/* Changes to Policy */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mt-8 border border-slate-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
          <p className="text-slate-300 leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by 
            posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage 
            you to review this Privacy Policy periodically for any changes.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-blue-900/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 mt-8 border border-blue-700/50">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <p className="text-slate-300">
              <span className="text-slate-400">Website:</span>{' '}
              <span className="text-blue-400">www.lowerleaguehub.com</span>
            </p>
            <p className="text-slate-300 mt-2">
              <span className="text-slate-400">Email:</span>{' '}
              <span className="text-blue-400">contact@lowerleaguehub.com</span>
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-slate-500 text-sm">
          <p>© 2026 EFL League One & Two Hub. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
}