-- Create storage bucket for portfolio videos
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-videos', 'portfolio-videos', true);

-- Create RLS policies for portfolio videos
CREATE POLICY "Portfolio videos are publicly accessible"
ON storage.objects
FOR SELECT
USING (bucket_id = 'portfolio-videos');

CREATE POLICY "Authenticated users can upload portfolio videos"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'portfolio-videos' 
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Authenticated users can update their portfolio videos"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'portfolio-videos' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete portfolio videos"
ON storage.objects
FOR DELETE
USING (bucket_id = 'portfolio-videos' AND auth.role() = 'authenticated');