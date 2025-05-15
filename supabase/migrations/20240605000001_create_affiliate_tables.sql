-- Create affiliate_products table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.affiliate_products (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    price DECIMAL(10,2),
    merchant TEXT,
    affiliate_url TEXT NOT NULL,
    category TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create affiliate_clicks table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.affiliate_clicks (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES public.affiliate_products(id),
    user_id UUID REFERENCES auth.users(id),
    clicked_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ip_address TEXT,
    user_agent TEXT,
    referrer TEXT
);

-- Enable realtime for these tables
alter publication supabase_realtime add table affiliate_products;
alter publication supabase_realtime add table affiliate_clicks;