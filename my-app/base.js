 const fs = require('fs');
const path = require('path');

function embedMarkdownFile(sourcePath, obsidianVaultPath) {
    try {
        // Check if source file exists
        if (!fs.existsSync(sourcePath)) {
            throw new Error('Source file does not exist');
        }

        // Read the source markdown file
        const content = fs.readFileSync(sourcePath, 'utf8');

        // Get filename from source
        const fileName = path.basename(sourcePath);

        // Create destination path in Obsidian vault
        const destPath = path.join(obsidianVaultPath, fileName);

        // Write to Obsidian vault
        fs.writeFileSync(destPath, content);

        console.log(`Successfully embedded ${fileName} into Obsidian vault`);
        return true;

    } catch (error) {
        console.error('Error embedding file:', error.message);
        return false;
    }
}

// Example usage:
const sourcePath = 'C:/path/to/your/source.md';
const obsidianVaultPath = 'C:/Users/YourUsername/Documents/ObsidianVault';

embedMarkdownFile(sourcePath, obsidianVaultPath);