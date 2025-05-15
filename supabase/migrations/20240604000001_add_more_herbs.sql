-- Add more herbs to the herbs table
INSERT INTO herbs (name, description, image_url, benefits, category, growing_conditions, prep)
VALUES
  ('Sage', 'Aromatic herb with gray-green leaves and powerful medicinal properties.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/sage.jpg', 
   'Memory enhancement,Antimicrobial,Menopausal support', 'Medicinal',
   '{"light":"Full sun","soil":"Well-draining","water":"Low","temperature":"Warm"}',
   '[{"title":"Cooking","description":"Add to stuffing and meat dishes"},{"title":"Tea","description":"Steep leaves for sore throat relief"}]'),
  
  ('Dandelion', 'Common weed with powerful detoxifying properties for liver and kidney health.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/dandelion.jpg', 
   'Liver support,Detoxification,Digestive aid', 'Medicinal',
   '{"light":"Full sun","soil":"Any","water":"Moderate","temperature":"Cool to moderate"}',
   '[{"title":"Tea","description":"Steep roots for liver support"},{"title":"Salad","description":"Add young leaves to salads"}]'),
  
  ('Peppermint', 'Cooling herb with high menthol content, excellent for digestive issues.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/peppermint.jpg', 
   'Digestive aid,Headache relief,Breath freshener', 'Culinary',
   '{"light":"Partial shade","soil":"Rich, moist","water":"Regular","temperature":"Cool to moderate"}',
   '[{"title":"Tea","description":"Steep fresh leaves for digestive relief"},{"title":"Essential oil","description":"Apply diluted to temples for headache"}]'),
  
  ('St. John''s Wort', 'Yellow-flowered herb traditionally used for mood support and nerve pain.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/st-johns-wort.jpg', 
   'Mood support,Nerve pain relief,Wound healing', 'Medicinal',
   '{"light":"Full sun","soil":"Well-draining","water":"Moderate","temperature":"Moderate"}',
   '[{"title":"Tincture","description":"Take for mood support"},{"title":"Oil infusion","description":"Apply to minor wounds and burns"}]'),
  
  ('Fennel', 'Licorice-flavored herb used for digestive issues and lactation support.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/fennel.jpg', 
   'Digestive aid,Lactation support,Anti-spasmodic', 'Culinary',
   '{"light":"Full sun","soil":"Well-draining","water":"Moderate","temperature":"Moderate"}',
   '[{"title":"Cooking","description":"Add bulb and seeds to dishes"},{"title":"Tea","description":"Steep seeds for digestive relief"}]'),
  
  ('Astragalus', 'Immune-boosting root used in traditional Chinese medicine.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/astragalus.jpg', 
   'Immune support,Energy boost,Longevity', 'Medicinal',
   '{"light":"Full sun","soil":"Well-draining","water":"Moderate","temperature":"Cool to moderate"}',
   '[{"title":"Decoction","description":"Simmer roots for immune support"},{"title":"Powder","description":"Add to smoothies and foods"}]'),
  
  ('Lemongrass', 'Fragrant tropical herb with citrus flavor used in cooking and aromatherapy.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/lemongrass.jpg', 
   'Digestive aid,Antimicrobial,Stress relief', 'Culinary',
   '{"light":"Full sun","soil":"Rich, well-draining","water":"Regular","temperature":"Warm"}',
   '[{"title":"Cooking","description":"Add to soups and curries"},{"title":"Tea","description":"Steep fresh stalks for relaxation"}]'),
  
  ('Milk Thistle', 'Spiky purple flower with powerful liver-protective properties.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/milk-thistle.jpg', 
   'Liver protection,Detoxification,Antioxidant', 'Medicinal',
   '{"light":"Full sun","soil":"Well-draining","water":"Low to moderate","temperature":"Moderate"}',
   '[{"title":"Capsules","description":"Take seeds for liver support"},{"title":"Tea","description":"Steep crushed seeds for detoxification"}]');