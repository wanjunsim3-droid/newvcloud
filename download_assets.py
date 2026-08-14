import os
import re
import urllib.request
from pathlib import Path
import urllib.error
import urllib.parse

html_files = [str(p) for p in Path('.').rglob('*.html') if 'node_modules' not in str(p) and 'dist' not in str(p)]
downloaded_urls = set()

def download_file(url, local_path):
    if url in downloaded_urls: return
    try:
        os.makedirs(os.path.dirname(local_path), exist_ok=True)
        if not os.path.exists(local_path):
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(local_path, 'wb') as out_file:
                out_file.write(response.read())
        downloaded_urls.add(url)
        print(f"Downloaded: {url}")
    except urllib.error.HTTPError as e:
        print(f"HTTP Error {e.code}: {url}")
    except Exception as e:
        print(f"Failed: {url} - {e}")

pattern = re.compile(r'https://newvcloudhills\.co\.kr/(m/)?assets/([^"\')\s]+)')

for filepath in html_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    matches = pattern.findall(content)
    for match in matches:
        is_m = match[0] # 'm/' or ''
        rest_of_path = match[1].split('?')[0] # remove query params
        # URL encode the rest_of_path to handle Korean characters in filenames
        encoded_path = urllib.parse.quote(rest_of_path)
        url = f"https://newvcloudhills.co.kr/{is_m}assets/{encoded_path}"
        local_path = f"public/{is_m}assets/{rest_of_path}"
        download_file(url, local_path)
    
    # Replace in HTML
    new_content = re.sub(r'https://newvcloudhills\.co\.kr/(m/)?assets/', r'/newvcloud/public/\1assets/', content)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)

print("HTML processing complete. Downloading CSS background images...")

# Parse downloaded CSS files
css_files = [str(p) for p in Path('public').rglob('*.css')]
for filepath in css_files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    urls = re.findall(r'url\((.*?)\)', content)
    for u in urls:
        u = u.strip('\'"').split('?')[0].split('#')[0]
        if u.startswith('data:') or u.startswith('http'): continue
        if not u: continue
        
        css_dir = os.path.dirname(filepath)
        local_img_path = os.path.normpath(os.path.join(css_dir, u))
        
        try:
            rel_path = os.path.relpath(local_img_path, 'public').replace('\\', '/')
            encoded_rel_path = urllib.parse.quote(rel_path)
            remote_url = f"https://newvcloudhills.co.kr/{encoded_rel_path}"
            download_file(remote_url, local_img_path)
        except Exception as e:
            pass

print("All downloads complete.")
