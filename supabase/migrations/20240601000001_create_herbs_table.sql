-- Create herbs table
CREATE TABLE IF NOT EXISTS herbs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  benefits TEXT,
  category TEXT,
  growing_conditions JSONB,
  preparation_methods JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable row level security
ALTER TABLE herbs ENABLE ROW LEVEL SECURITY;

-- Create policy for public access
DO $ 
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policy 
    WHERE polname = 'Public herbs access' 
    AND polrelid = 'herbs'::regclass
  ) THEN
    DROP POLICY "Public herbs access" ON herbs;
  END IF;
END $;
CREATE POLICY "Public herbs access"
ON herbs FOR SELECT
USING (true);

-- Enable realtime
alter publication supabase_realtime add table herbs;

-- Insert sample data
INSERT INTO herbs (name, description, image_url, benefits, category, growing_conditions, preparation_methods)
VALUES
  ('Lavender', 'Known for its calming properties and pleasant aroma. Used in aromatherapy and sleep aids.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/lavender.jpg', 
   'Relaxation,Sleep aid,Skin care', 'Aromatic',
   '{"light":"Full sun","soil":"Well-draining","water":"Low","temperature":"Warm"}',
   '[{"title":"Tea","description":"Steep dried flowers in hot water for 5 minutes"},{"title":"Essential Oil","description":"Use in diffuser or diluted on skin"}]'),
  
  ('Chamomile', 'Popular for its soothing effects. Often used in teas to promote relaxation and sleep.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/chamomile.jpg', 
   'Sleep aid,Digestive health,Anti-inflammatory', 'Medicinal',
   '{"light":"Full sun to partial shade","soil":"Well-draining","water":"Moderate","temperature":"Cool to moderate"}',
   '[{"title":"Tea","description":"Steep dried flowers in hot water for 5 minutes"},{"title":"Compress","description":"Apply cooled tea to skin irritations"}]'),
  
  ('Peppermint', 'Refreshing herb used to aid digestion and relieve headaches. Popular in teas and essential oils.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/peppermint.jpg', 
   'Digestive aid,Headache relief,Breath freshener', 'Culinary',
   '{"light":"Partial shade","soil":"Rich, moist","water":"Regular","temperature":"Cool to moderate"}',
   '[{"title":"Tea","description":"Steep fresh or dried leaves in hot water"},{"title":"Essential Oil","description":"Dilute and apply to temples for headache relief"}]'),
  
  ('Echinacea', 'Known for immune-boosting properties. Often used to prevent and treat colds.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/echinacea.jpg', 
   'Immune support,Cold prevention,Anti-inflammatory', 'Medicinal',
   '{"light":"Full sun","soil":"Well-draining","water":"Low to moderate","temperature":"Hardy"}',
   '[{"title":"Tincture","description":"Take at first sign of cold"},{"title":"Tea","description":"Steep dried flowers and leaves"}]'),
  
  ('Ginger', 'Spicy root used to aid digestion, reduce nausea, and fight inflammation.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/ginger.jpg', 
   'Digestive aid,Anti-nausea,Anti-inflammatory', 'Culinary',
   '{"light":"Partial shade","soil":"Rich, moist","water":"Regular","temperature":"Warm"}',
   '[{"title":"Tea","description":"Steep fresh sliced root in hot water"},{"title":"Cooking","description":"Add to stir-fries and baked goods"}]'),
  
  ('Rosemary', 'Aromatic herb that improves memory and concentration. Also used in cooking.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/rosemary.jpg', 
   'Memory enhancement,Antioxidant,Hair health', 'Culinary',
   '{"light":"Full sun","soil":"Well-draining","water":"Low","temperature":"Warm"}',
   '[{"title":"Cooking","description":"Add to roasted meats and vegetables"},{"title":"Hair rinse","description":"Use cooled tea as a final rinse"}]'),
  
  ('Turmeric', 'Powerful anti-inflammatory and antioxidant. Used in cooking and medicinal preparations.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/turmeric.jpg', 
   'Anti-inflammatory,Antioxidant,Joint health', 'Medicinal',
   '{"light":"Partial shade","soil":"Rich, well-draining","water":"Regular","temperature":"Warm"}',
   '[{"title":"Golden milk","description":"Mix with warm milk and honey"},{"title":"Cooking","description":"Add to curries and rice dishes"}]'),
  
  ('Sage', 'Traditional herb used for digestive issues and sore throats. Has antimicrobial properties.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/sage.jpg', 
   'Digestive aid,Antimicrobial,Throat soother', 'Culinary',
   '{"light":"Full sun","soil":"Well-draining","water":"Low","temperature":"Warm"}',
   '[{"title":"Tea","description":"Steep leaves for sore throat relief"},{"title":"Cooking","description":"Add to stuffing and meat dishes"}]');
