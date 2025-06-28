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

export interface EventCardProps {
  event: {
    id: number;
    title: string;
    imageUrl: string;
    date: string;
    type: string;
  };
}
