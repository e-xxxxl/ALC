/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  badge?: string;
  longDescription: string;
  benefits: string[];
  whoItsFor: string[];
  image: string;
  iconName?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  requirements: string[];
}
