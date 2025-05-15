-- Add more herbs to the herbs table
INSERT INTO herbs (name, description, image_url, benefits, category, growing_conditions, preparation_methods)
VALUES
  ('Basil', 'Aromatic herb commonly used in Italian cuisine. Has anti-inflammatory and antioxidant properties.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/basil.jpg', 
   'Digestive aid,Anti-inflammatory,Antioxidant', 'Culinary',
   '{"light":"Full sun","soil":"Rich, moist","water":"Regular","temperature":"Warm"}',
   '[{"title":"Fresh","description":"Add to salads and pasta dishes"},{"title":"Pesto","description":"Blend with olive oil, pine nuts, and parmesan"}]'),
  
  ('Thyme', 'Aromatic herb with antiseptic properties. Used in cooking and medicinal preparations.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/thyme.jpg', 
   'Respiratory health,Antimicrobial,Immune support', 'Culinary',
   '{"light":"Full sun","soil":"Well-draining","water":"Low","temperature":"Warm"}',
   '[{"title":"Cooking","description":"Add to soups and meat dishes"},{"title":"Tea","description":"Steep for respiratory support"}]'),
  
  ('Oregano', 'Mediterranean herb with strong flavor and antimicrobial properties.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/oregano.jpg', 
   'Antimicrobial,Antioxidant,Digestive aid', 'Culinary',
   '{"light":"Full sun","soil":"Well-draining","water":"Low","temperature":"Warm"}',
   '[{"title":"Cooking","description":"Add to Italian and Greek dishes"},{"title":"Oil of oregano","description":"Use diluted for immune support"}]'),
  
  ('Lemon Balm', 'Calming herb with citrus scent. Used for anxiety, insomnia, and digestive issues.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/lemon-balm.jpg', 
   'Calming,Sleep aid,Digestive support', 'Medicinal',
   '{"light":"Partial shade","soil":"Rich, moist","water":"Regular","temperature":"Moderate"}',
   '[{"title":"Tea","description":"Steep fresh or dried leaves"},{"title":"Tincture","description":"Take for anxiety relief"}]'),
  
  ('Valerian', 'Known for its sedative effects. Used for insomnia and anxiety disorders.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/valerian.jpg', 
   'Sleep aid,Anxiety relief,Muscle relaxant', 'Medicinal',
   '{"light":"Full sun to partial shade","soil":"Rich, well-draining","water":"Regular","temperature":"Cool to moderate"}',
   '[{"title":"Tincture","description":"Take before bedtime"},{"title":"Tea","description":"Steep root for sleep support"}]'),
  
  ('Calendula', 'Bright orange flower with skin-healing properties. Used in salves and creams.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/calendula.jpg', 
   'Skin healing,Anti-inflammatory,Wound care', 'Medicinal',
   '{"light":"Full sun","soil":"Well-draining","water":"Moderate","temperature":"Cool to moderate"}',
   '[{"title":"Salve","description":"Apply to minor cuts and irritations"},{"title":"Oil infusion","description":"Use in skincare preparations"}]'),
  
  ('Cilantro', 'Herb with distinctive flavor. Used in cooking and for detoxification.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/cilantro.jpg', 
   'Detoxification,Digestive aid,Anti-inflammatory', 'Culinary',
   '{"light":"Partial shade","soil":"Rich, well-draining","water":"Regular","temperature":"Cool"}',
   '[{"title":"Fresh","description":"Add to salsas and Asian dishes"},{"title":"Juice","description":"Blend with water for detox support"}]'),
  
  ('Nettle', 'Nutrient-rich herb used for allergies, arthritis, and as a general tonic.', 
   'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/nettle.jpg', 
   'Allergy relief,Nutritive,Joint health', 'Medicinal',
   '{"light":"Partial shade","soil":"Rich, moist","water":"Regular","temperature":"Cool to moderate"}',
   '[{"title":"Tea","description":"Steep dried leaves for allergy relief"},{"title":"Food","description":"Cook young leaves like spinach"}]'),
  
  ('Lavender', 'Fragrant purple flower known for its calming properties and pleasant aroma.', 
    'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/lavender.jpg', 
    'Anxiety relief,Sleep aid,Skin care', 'Medicinal',
    '{"light":"Full sun","soil":"Well-draining","water":"Low","temperature":"Warm"}',
    '[{"title":"Essential oil","description":"Use in diffuser for relaxation"},{"title":"Sachets","description":"Place dried flowers under pillow for sleep"}]'),
  
  ('Rosemary', 'Aromatic evergreen herb with needle-like leaves and cognitive benefits.', 
    'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/rosemary.jpg', 
    'Memory enhancement,Antioxidant,Hair health', 'Culinary',
    '{"light":"Full sun","soil":"Well-draining","water":"Low","temperature":"Warm"}',
    '[{"title":"Cooking","description":"Add to roasted meats and vegetables"},{"title":"Hair rinse","description":"Use cooled tea as a final rinse for hair"}]'),
  
  ('Chamomile', 'Daisy-like flowers with calming properties, commonly used as a gentle sleep aid.', 
    'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/chamomile.jpg', 
    'Sleep aid,Digestive support,Skin soothing', 'Medicinal',
    '{"light":"Full sun","soil":"Well-draining","water":"Moderate","temperature":"Cool to moderate"}',
    '[{"title":"Tea","description":"Steep dried flowers for relaxation"},{"title":"Compress","description":"Apply cooled tea to skin irritations"}]'),
  
  ('Mint', 'Refreshing herb with cooling properties, used for digestion and breath freshening.', 
    'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/mint.jpg', 
    'Digestive aid,Breath freshener,Cooling', 'Culinary',
    '{"light":"Partial shade","soil":"Rich, moist","water":"Regular","temperature":"Moderate"}',
    '[{"title":"Tea","description":"Steep fresh leaves for digestive support"},{"title":"Culinary","description":"Add to desserts and beverages"}]'),
  
  ('Echinacea', 'Purple coneflower used to boost immunity and fight infections.', 
    'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/echinacea.jpg', 
    'Immune support,Cold prevention,Anti-inflammatory', 'Medicinal',
    '{"light":"Full sun","soil":"Well-draining","water":"Moderate","temperature":"Cool to moderate"}',
    '[{"title":"Tincture","description":"Take at first sign of illness"},{"title":"Tea","description":"Steep roots and flowers for immune support"}]'),
  
  ('Ginger', 'Spicy root used for nausea, inflammation, and as a warming digestive aid.', 
    'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/ginger.jpg', 
    'Anti-nausea,Anti-inflammatory,Circulation enhancer', 'Culinary',
    '{"light":"Partial shade","soil":"Rich, moist","water":"Regular","temperature":"Warm"}',
    '[{"title":"Tea","description":"Steep fresh root for digestive support"},{"title":"Cooking","description":"Add to stir-fries and baked goods"}]'),
  
  ('Turmeric', 'Golden spice with powerful anti-inflammatory properties.', 
    'https://xgzptvuuuowpgbhcqcgs.supabase.co/storage/v1/object/public/herb-images/turmeric.jpg', 
    'Anti-inflammatory,Antioxidant,Joint health', 'Culinary',
    '{"light":"Partial shade","soil":"Rich, well-draining","water":"Regular","temperature":"Warm"}',
    '[{"title":"Golden milk","description":"Mix with milk and honey"},{"title":"Cooking","description":"Add to curries and rice dishes"}]');