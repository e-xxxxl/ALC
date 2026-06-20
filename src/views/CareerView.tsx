/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Award, 
  Upload, 
  FileText, 
  CheckCircle2, 
  CheckCircle, 
  Search, 
  ChevronRight, 
  X,
  AlertCircle 
} from 'lucide-react';
import { RECENT_JOBS } from '../data/site-data';

export default function CareerView() {
  const [selectedJob, setSelectedJob] = useState<typeof RECENT_JOBS[0] | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "0-1",
    message: ""
  });

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    setErrorMsg("");

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const validTypes = ['.pdf', '.doc', '.docx'];
      const fileExt = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
      
      if (validTypes.includes(fileExt) || file.type === "application/pdf" || file.type === "application/msword") {
        setUploadedFile(file);
      } else {
        setErrorMsg("Please upload a PDF or Microsoft Word resume (.pdf / .docx)");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMsg("");
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg("Please complete all required fields (*).");
      return;
    }

    if (!uploadedFile) {
      setErrorMsg("Please attach or drag-drop your CV / Resume to submit.");
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // clean state
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "0-1",
        message: ""
      });
      setUploadedFile(null);
    }, 1500);
  };

  return (
    <div className="pt-[73px] md:pt-[103px] overflow-hidden">
      
      {/* Intro Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-slate-100 relative">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 space-y-6">
          <span className="text-[10px] font-bold font-mono tracking-widest text-[#122e42]
] bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
            Join Our Team
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-950 tracking-tight leading-tight">
            Careers: Deliver Care With Heart
          </h1>
          <p className="text-gray-650 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            Want to build a heartwarming, stable, and deeply satisfying career supporting Bedfordshire neighbors? Discover our open positions. We provide full paid training, DBS checks support, and competitive mileage.
          </p>
        </div>
      </section>

      {/* Main Jobs Listing & interactive application modal/form */}
      <section className="py-16 md:py-24 bg-white" id="careers-openings">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left side Open Roles list */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-heading font-bold text-[#122e42]
] text-xl flex items-center gap-2">
                <Briefcase size={20} className="text-[#e9cb8d]" /> Available Job Positions
              </h2>
              <p className="text-gray-500 font-light text-xs -mt-3">
                Click any role to load details inside our application panel on the right.
              </p>

              <div className="space-y-4">
                {RECENT_JOBS.map((job) => {
                  const isSelected = selectedJob?.id === job.id;
                  return (
                    <button
                      key={job.id}
                      onClick={() => {
                        setSelectedJob(job);
                        setSubmitted(false);
                        setErrorMsg("");
                      }}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                        isSelected 
                          ? "border-[#122e42] bg-sky-50/40 shadow-sm ring-1 ring-[#122e42]/15" 
                          : "border-slate-200 hover:border-slate-300 hover:bg-slate-50/40 bg-white"
                      }`}
                      id={`job-card-btn-${job.id}`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-2">
                          <span className="inline-block bg-sky-50 text-[10px] text-[#122e42]font-mono font-bold px-2.5 py-1 rounded-full outline-1 outline-sky-200">
                            {job.department}
                          </span>
                          <h4 className="font-heading font-bold text-[#122e42] text-base leading-snug">
                            {job.title}
                          </h4>
                          
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500 font-light">
                            <span className="flex items-center gap-1"><MapPin size={13} className="text-[#e9cb8d]" /> {job.location}</span>
                            <span className="flex items-center gap-1"><Clock size={13} className="text-[#e9cb8d]" /> {job.type}</span>
                          </div>
                        </div>

                        <ChevronRight size={18} className={`text-gray-400 mt-1 transition-transform ${isSelected ? "rotate-90 text-[#122e42]" : ""}`} />
                      </div>

                      <div className="pt-3 border-t border-slate-100/80 mt-3 text-xs text-[#e9cb8d] font-semibold flex items-center justify-between">
                        <span>Salary: {job.salary}</span>
                        <span className="text-[10px] text-gray-400 font-normal">Click to apply &rarr;</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right side Detail Panel + Application Form */}
            <div className="lg:col-span-6">
              {selectedJob ? (
                <div className="bg-slate-50/60 p-6 md:p-10 rounded-3xl border border-slate-150/80 shadow-sm space-y-6 relative">
                  
                  {/* Job Header */}
                  <div className="border-b border-slate-200 pb-5 space-y-2.5 relative">
                    <button 
                      onClick={() => setSelectedJob(null)}
                      className="absolute top-0 right-0 p-1.5 rounded-full hover:bg-slate-200 text-gray-400 transition"
                      aria-label="Close job details"
                    >
                      <X size={16} />
                    </button>

                    <span className="text-xs font-mono font-bold text-[#e9cb8d]">{selectedJob.department}</span>
                    <h3 className="font-heading font-bold text-gray-950 text-xl leading-tight">
                      {selectedJob.title}
                    </h3>
                    <div className="text-xs text-gray-500 flex flex-wrap gap-x-4 gap-y-1">
                      <span><strong>Type:</strong> {selectedJob.type}</span>
                      <span><strong>Geography:</strong> {selectedJob.location}</span>
                      <span><strong>Salary:</strong> {selectedJob.salary}</span>
                    </div>
                  </div>

                  {submitted ? (
                    <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                        <CheckCircle2 size={32} />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-heading font-semibold text-gray-900 text-xl">CV Uploaded Successfully</h4>
                        <p className="text-gray-600 text-xs font-light leading-relaxed max-w-sm mx-auto">
                          Thank you for applying for the <strong>{selectedJob.title}</strong> role. Our recruitment manager will inspect your CV and reach back inside 48 business hours to organize interviews.
                        </p>
                      </div>
                      <div className="pt-2">
                        <button 
                          onClick={() => setSubmitted(false)}
                          className="bg-[#122e42] text-white text-xs font-semibold px-5 py-2.5 rounded-lg"
                        >
                          Submit another CV
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleApplySubmit} className="space-y-5">
                      
                      {/* Job Description details inside scroll */}
                      <div className="max-h-48 overflow-y-auto bg-white/70 p-4 rounded-2xl border border-slate-200 text-xs font-light text-gray-600 space-y-3">
                        <p><strong>Description:</strong> {selectedJob.description}</p>
                        <div>
                          <strong className="block text-[#122e42]
] mb-1">Key Requirements & Vetting standard:</strong>
                          <ul className="list-disc pl-4 space-y-1.5">
                            {selectedJob.requirements.map((req, i) => <li key={i}>{req}</li>)}
                          </ul>
                        </div>
                      </div>

                      <div className="border-t border-slate-200 pt-4">
                        <h4 className="font-heading font-bold text-[#122e42]
] text-sm mb-3">Apply Online For This Role</h4>
                      </div>

                      {errorMsg && (
                        <div className="bg-red-50 text-red-700 text-xs p-3.5 rounded-xl border border-red-150 flex items-center gap-2">
                          <AlertCircle size={15} />
                          <span>{errorMsg}</span>
                        </div>
                      )}

                      <div className="space-y-4">
                        {/* Name and Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-700 block" htmlFor="applicant-name">Your Name *</label>
                            <input 
                              type="text" 
                              id="applicant-name"
                              name="name"
                              required
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Name"
                              className="w-full bg-white border border-gray-200 focus:border-[#122e42]
] focus:ring-1 focus:ring-[#122e42]
]/10 rounded-xl px-3 py-2.5 text-xs outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-700 block" htmlFor="applicant-email">Email Address *</label>
                            <input 
                              type="email" 
                              id="applicant-email"
                              name="email"
                              required
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Email"
                              className="w-full bg-white border border-gray-200 focus:border-[#122e42]
] focus:ring-1 focus:ring-[#122e42]
]/10 rounded-xl px-3 py-2.5 text-xs outline-none transition-all"
                            />
                          </div>
                        </div>

                        {/* Phone and Experience dropdown */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-700 block" htmlFor="applicant-phone">Phone Number *</label>
                            <input 
                              type="tel" 
                              id="applicant-phone"
                              name="phone"
                              required
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Phone"
                              className="w-full bg-white border border-gray-200 focus:border-[#122e42]
] focus:ring-1 focus:ring-[#122e42]
]/10 rounded-xl px-3 py-2.5 text-xs outline-none transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-xs font-semibold text-gray-700 block" htmlFor="applicant-experience">Care Experience Duration</label>
                            <select 
                              id="applicant-experience"
                              name="experience"
                              value={formData.experience}
                              onChange={handleInputChange}
                              className="w-full bg-white border border-gray-200 focus:border-[#122e42]
] focus:ring-1 focus:ring-[#122e42]
]/10 rounded-xl px-3 py-2.5 text-xs outline-none cursor-pointer"
                            >
                              <option value="0-1">Less than 1 year</option>
                              <option value="1-3">1 to 3 years</option>
                              <option value="4+">Over 4 years experience</option>
                            </select>
                          </div>
                        </div>

                        {/* File Upload Box - Drag & Drop OR Manual Click selection */}
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-700 block">Attach CV / Resume (PDF / Word) *</label>
                          
                          <div
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                            onClick={triggerFileInput}
                            className={`border-2 border-dashed rounded-2xl p-5 text-center transition-all cursor-pointer flex flex-col items-center justify-center space-y-2 ${
                              isDragActive 
                                ? "border-[#122e42] bg-sky-50 shadow-inner" 
                                : uploadedFile 
                                ? "border-emerald-300 bg-emerald-50/30" 
                                : "border-slate-300 hover:border-slate-400 bg-white"
                            }`}
                            id="cv-drag-drop-zone"
                          >
                            <input 
                              ref={fileInputRef}
                              type="file"
                              accept=".pdf,.doc,.docx"
                              onChange={handleFileChange}
                              className="hidden"
                              id="career-cv-file-input"
                            />

                            {uploadedFile ? (
                              <div className="flex items-center gap-2 text-emerald-700 bg-white border border-emerald-150 px-4 py-2.5 rounded-xl text-xs shadow-sm" onClick={(e) => e.stopPropagation()}>
                                <FileText size={16} />
                                <span className="font-semibold max-w-[180px] truncate">{uploadedFile.name}</span>
                                <button
                                  type="button" 
                                  onClick={removeFile}
                                  className="p-1 rounded-full hover:bg-slate-100 text-gray-400 transition"
                                  aria-label="Remove uploaded CV"
                                >
                                  <X size={14} />
                                </button>
                              </div>
                            ) : (
                              <>
                                <div className="w-10 h-10 rounded-full bg-slate-100 text-gray-700 flex items-center justify-center">
                                  <Upload size={16} className="text-[#122e42]
]" />
                                </div>
                                <div className="space-y-0.5">
                                  <p className="text-xs font-semibold text-neutral-800">
                                    Drag &amp; drop file here, or <span className="text-[#122e42]
] underline hover:text-[#122e42]
]/80">browse</span>
                                  </p>
                                  <p className="text-[10px] text-neutral-400">PDF, DOC, DOCX up to 10MB</p>
                                </div>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Brief explanation message context */}
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-gray-700 block" htmlFor="applicant-message">Cover message / Key attributes</label>
                          <textarea 
                            id="applicant-message" 
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Why would you be a wonderful addition to our local care team?"
                            className="w-full bg-white border border-gray-200 focus:border-[#122e42]
] focus:ring-1 focus:ring-[#122e42]
]/10 rounded-xl px-3 py-2 text-xs outline-none resize-none"
                          ></textarea>
                        </div>

                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-[#122e42]
] hover:bg-[#122e42]
]/95 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl shadow-md transition disabled:bg-slate-300 disabled:cursor-not-allowed cursor-pointer"
                        id="submit-applicant-cv"
                      >
                        {submitting ? "Uploading file details..." : "Submit applications CV & profile"}
                      </button>

                    </form>
                  )}

                </div>
              ) : (
                <div className="h-full min-h-[350px] border border-dashed border-gray-300 rounded-3xl bg-slate-50/30 flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-sky-50 text-[#122e42]
] flex items-center justify-center shadow-sm">
                    <Award size={24} />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-heading font-semibold text-gray-950 text-base">Select a Job Position</h4>
                    <p className="text-gray-500 font-light text-xs max-w-xs mx-auto leading-relaxed">
                      Please click on any available vacancy on the left panel to review duties, training modules, and wage plans, then upload your CV securely.
                    </p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
