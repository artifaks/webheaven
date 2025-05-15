-- Update benefits column to JSONB type
ALTER TABLE herbs ADD COLUMN IF NOT EXISTS benefits TEXT;

-- Convert existing comma-separated benefits to JSON arrays
UPDATE herbs SET benefits = to_jsonb(string_to_array(benefits, ',')) WHERE benefits IS NOT NULL AND benefits != '';

-- Alter column type to JSONB
ALTER TABLE herbs ALTER COLUMN benefits TYPE JSONB USING coalesce(benefits::jsonb, '[]'::jsonb);