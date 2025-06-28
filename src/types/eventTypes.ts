export type EventType = 'virtual' | 'presencial' | 'hibrido';

export interface Event {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  type: EventType;
  location?: string;
}
