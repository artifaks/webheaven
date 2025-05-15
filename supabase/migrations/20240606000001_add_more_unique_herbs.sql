-- This migration adds more unique herbs to the herbs table

INSERT INTO herbs (name, scientific_name, description, image_url, benefits, category, growing_conditions, medicinal_uses)
VALUES
  ('Chamomile', 'Matricaria chamomilla', 'A gentle herb known for its calming properties and apple-like aroma.', 'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&q=80', ARRAY['Sleep aid', 'Digestive health', 'Stress relief'], 'Medicinal', 'Full sun to partial shade, well-draining soil', ARRAY['Sleep aid', 'Digestive support', 'Anxiety relief']),
  
  ('Mint', 'Mentha', 'A refreshing herb with cooling properties and a distinctive aroma.', 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=400&q=80', ARRAY['Digestive aid', 'Breath freshener', 'Cooling effect'], 'Culinary', 'Partial shade, moist soil', ARRAY['Digestive aid', 'Respiratory support', 'Headache relief']),
  
  ('Turmeric', 'Curcuma longa', 'A golden-colored spice with powerful anti-inflammatory properties.', 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&q=80', ARRAY['Anti-inflammatory', 'Antioxidant', 'Joint health'], 'Medicinal', 'Warm climate, rich soil, partial shade', ARRAY['Anti-inflammatory', 'Immune support', 'Joint health']),
  
  ('Lavender', 'Lavandula', 'A fragrant herb with beautiful purple flowers known for its calming effects.', 'https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//lavender-.jpg', ARRAY['Relaxation', 'Sleep aid', 'Skin care'], 'Aromatic', 'Full sun, well-draining soil', ARRAY['Anxiety relief', 'Sleep aid', 'Skin care']),
  
  ('Cilantro', 'Coriandrum sativum', 'Also known as coriander, this herb has a distinctive flavor used in many cuisines.', 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=400&q=80', ARRAY['Digestive aid', 'Detoxification', 'Rich in vitamins'], 'Culinary', 'Full sun to partial shade, well-draining soil', ARRAY['Digestive aid', 'Heavy metal detoxification', 'Antioxidant']),
  
  ('Oregano', 'Origanum vulgare', 'A flavorful herb with antimicrobial properties commonly used in Mediterranean cuisine.', 'https://images.unsplash.com/photo-1600512264242-a0811b188e06?w=400&q=80', ARRAY['Antimicrobial', 'Antioxidant', 'Digestive aid'], 'Culinary', 'Full sun, well-draining soil', ARRAY['Respiratory support', 'Antimicrobial', 'Immune support']),
  
  ('St. John\'s Wort', 'Hypericum perforatum', 'A yellow-flowering herb traditionally used for mood support.', 'https://images.unsplash.com/photo-1596807025292-0c0c33e9c9c8?w=400&q=80', ARRAY['Mood support', 'Wound healing', 'Antiviral'], 'Medicinal', 'Full sun, well-draining soil', ARRAY['Mood support', 'Nerve pain relief', 'Wound healing']),
  
  ('Astragalus', 'Astragalus membranaceus', 'An adaptogenic herb used in traditional Chinese medicine to support immune function.', 'https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&q=80', ARRAY['Immune support', 'Energy', 'Longevity'], 'Medicinal', 'Full sun, well-draining soil', ARRAY['Immune support', 'Stress adaptation', 'Energy']);
