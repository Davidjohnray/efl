'use client';
import React from 'react';
import { FileText, ArrowLeft, AlertTriangle, CheckCircle, XCircle, Scale, Users, Mail } from 'lucide-react';

export default function TermsOfServicePage() {
  const lastUpdated = "February 7, 2026";

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
              <FileText className="w-6 h-6 text-orange-400" />
              <span className="text-white font-bold">Terms of Service</span>
            </div>
            <div className="w-16"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full mb-6 shadow-lg shadow-orange-500/30">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-400">
            EFL League One & Two Hub
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <p className="text-slate-300 leading-relaxed">
            Welcome to EFL League One & Two Hub ("we", "us", "our"). These Terms of Service ("Terms") govern 
            your access to and use of our website at <span className="text-orange-400">www.lowerleaguehub.com</span> (the "Service"). 
            By accessing or using our Service, you agree to be bound by these Terms.
          </p>
          <p className="text-slate-300 leading-relaxed mt-4">
            Please read these Terms carefully before using our Service. If you do not agree with any part of 
            these Terms, you may not access the Service.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">1. Acceptance of Terms</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              By accessing or using our Service, you confirm that you are at least 13 years old and have the 
              legal capacity to enter into these Terms. If you are under 18, you confirm that you have obtained 
              parental or guardian consent to use the Service.
            </p>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of any material 
              changes by updating the "Last updated" date. Your continued use of the Service after such 
              modifications constitutes acceptance of the updated Terms.
            </p>
          </div>
        </div>

        {/* Description of Service */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">2. Description of Service</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              EFL League One & Two Hub provides football-related content and services including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Live scores, fixtures, and match results</li>
              <li>League tables and player statistics</li>
              <li>Match predictions and leaderboards</li>
              <li>Weekly quizzes and trivia games</li>
              <li>Fan forums and community discussions</li>
              <li>Club information and away guides</li>
              <li>Links to official club websites and podcasts</li>
            </ul>
            <p>
              Our Service is provided for informational and entertainment purposes. We strive to provide 
              accurate information but cannot guarantee the accuracy of all data, particularly live scores 
              which depend on third-party data providers.
            </p>
          </div>
        </div>

        {/* User Accounts */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">3. User Accounts</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Some features of our Service require you to create an account. When creating an account, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorised access</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that violate these Terms or engage in 
              inappropriate behaviour.
            </p>
          </div>
        </div>

        {/* Acceptable Use */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">4. Acceptable Use</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>You agree to use our Service only for lawful purposes and in accordance with these Terms. You agree NOT to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Post abusive, offensive, discriminatory, or hateful content</li>
              <li>Harass, bully, or intimidate other users</li>
              <li>Impersonate any person or entity</li>
              <li>Share spam, malware, or malicious content</li>
              <li>Attempt to gain unauthorised access to our systems</li>
              <li>Use automated tools to scrape or collect data</li>
              <li>Interfere with the proper functioning of the Service</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </div>
        </div>

        {/* Prohibited Content */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
              <XCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">5. Prohibited Content</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              The following content is strictly prohibited on our platform:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Racist, sexist, homophobic, or otherwise discriminatory content</li>
              <li>Threats of violence or incitement to violence</li>
              <li>Personal attacks or doxxing of other users</li>
              <li>Sexually explicit or pornographic material</li>
              <li>Content that promotes illegal activities</li>
              <li>Copyrighted material without proper authorisation</li>
              <li>False information presented as fact</li>
            </ul>
            <p>
              We reserve the right to remove any content that violates these guidelines and to suspend or 
              ban users who repeatedly violate our policies.
            </p>
          </div>
        </div>

        {/* Predictions & Competitions */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">6. Predictions & Competitions</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Our prediction games and quizzes are provided for entertainment purposes only. By participating, you agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Predictions are not a form of gambling and no real money is involved</li>
              <li>Leaderboard rankings are based on our scoring system and are final</li>
              <li>We may modify scoring rules or competition formats at any time</li>
              <li>Any prizes or rewards are offered at our discretion</li>
              <li>Cheating or manipulation of results will result in disqualification</li>
            </ul>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">7. Intellectual Property</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              The Service and its original content, features, and functionality are owned by EFL League One & 
              Two Hub and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              Club logos, names, and related trademarks are the property of their respective owners and are 
              used for informational purposes. We are not affiliated with, endorsed by, or officially connected 
              with the EFL or any individual football clubs.
            </p>
            <p>
              Content you submit to the Service (such as forum posts) remains yours, but you grant us a 
              non-exclusive licence to use, display, and distribute that content on our platform.
            </p>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">8. Disclaimers</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER 
              EXPRESS OR IMPLIED.
            </p>
            <p>
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>The Service will be uninterrupted or error-free</li>
              <li>All information will be accurate or up-to-date</li>
              <li>The Service will meet your specific requirements</li>
              <li>Any errors or defects will be corrected</li>
            </ul>
            <p>
              Live scores and statistics are provided by third-party data providers and may occasionally 
              contain errors or delays. We are not responsible for any decisions made based on this information.
            </p>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">9. Limitation of Liability</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              To the fullest extent permitted by law, EFL League One & Two Hub shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising out of or related to 
              your use of the Service.
            </p>
            <p>
              This includes, but is not limited to, damages for loss of profits, data, or other intangible 
              losses, even if we have been advised of the possibility of such damages.
            </p>
          </div>
        </div>

        {/* Third-Party Links */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">10. Third-Party Links</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              Our Service contains links to third-party websites, including official club websites, podcasts, 
              and external resources. We are not responsible for the content, privacy policies, or practices 
              of these third-party sites.
            </p>
            <p>
              We encourage you to review the terms and privacy policies of any third-party sites you visit.
            </p>
          </div>
        </div>

        {/* Termination */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-700 rounded-lg flex items-center justify-center">
              <XCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">11. Termination</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              We reserve the right to terminate or suspend your access to the Service immediately, without 
              prior notice or liability, for any reason, including breach of these Terms.
            </p>
            <p>
              Upon termination, your right to use the Service will immediately cease. All provisions of these 
              Terms which by their nature should survive termination shall survive.
            </p>
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white">12. Governing Law</h2>
          </div>
          <div className="space-y-4 text-slate-300 leading-relaxed">
            <p>
              These Terms shall be governed by and construed in accordance with the laws of England and Wales, 
              without regard to its conflict of law provisions.
            </p>
            <p>
              Any disputes arising from these Terms or your use of the Service shall be subject to the 
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-orange-900/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-6 mt-8 border border-orange-700/50">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-orange-400" />
            <h2 className="text-2xl font-bold text-white">Contact Us</h2>
          </div>
          <p className="text-slate-300 leading-relaxed mb-4">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <p className="text-slate-300">
              <span className="text-slate-400">Website:</span>{' '}
              <span className="text-orange-400">www.lowerleaguehub.com</span>
            </p>
            <p className="text-slate-300 mt-2">
              <span className="text-slate-400">Email:</span>{' '}
              <span className="text-orange-400">contact@lowerleaguehub.com</span>
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