export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      herbs: {
        Row: {
          id: string;
          name: string;
          description: string;
          image_url: string;
          benefits: string | null;
          category: string | null;
          growing_conditions: Json | null;
          preparation_methods: Json | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          image_url: string;
          benefits?: string | null;
          category?: string | null;
          growing_conditions?: Json | null;
          preparation_methods?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          image_url?: string;
          benefits?: string | null;
          category?: string | null;
          growing_conditions?: Json | null;
          preparation_methods?: Json | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
