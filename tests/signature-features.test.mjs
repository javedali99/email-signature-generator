import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

function uniqueMatches(pattern) {
    return [...new Set([...html.matchAll(pattern)].map(match => match[1]))];
}

function runTest(name, fn) {
    try {
        fn();
        console.log(`ok - ${name}`);
    } catch (error) {
        console.error(`not ok - ${name}`);
        throw error;
    }
}

runTest('exposes at least 30 signature layout choices', () => {
    const staticTemplates = uniqueMatches(/data-template="([^"]+)"/g);
    const dynamicTemplates = uniqueMatches(/id:\s*'([^']+)'/g);
    const templates = new Set([...staticTemplates, ...dynamicTemplates]);

    assert.ok(
        templates.size >= 30,
        `expected at least 30 layout choices, found ${templates.size}`
    );
});

runTest('additional layout choices have renderers', () => {
    const dynamicTemplates = uniqueMatches(/id:\s*'([^']+)'/g);
    const rendererTemplates = uniqueMatches(/\n\s{16}([A-Za-z0-9_]+):\s*\(\)\s*=>/g);
    const missingRenderers = dynamicTemplates.filter(template => !rendererTemplates.includes(template));

    assert.deepEqual(missingRenderers, []);
});

runTest('new layouts do not hard-code photo pixel sizes', () => {
    assert.doesNotMatch(html, /profilePhoto\('\d+px'/);
    assert.doesNotMatch(html, /photoImg\('\d+px'/);
});

runTest('rail layout is not offered', () => {
    assert.doesNotMatch(html, /id:\s*'rail'/);
    assert.doesNotMatch(html, />Rail</);
});

runTest('photo crop controls are wired into rendered signature images', () => {
    assert.match(html, /id="photoCropX"/);
    assert.match(html, /id="photoCropY"/);
    assert.match(html, /photoCropX:\s*50/);
    assert.match(html, /photoCropY:\s*50/);
    assert.match(html, /state\.design\.photoCropX\s*=\s*getVal\('photoCropX'\)/);
    assert.match(html, /state\.design\.photoCropY\s*=\s*getVal\('photoCropY'\)/);
    assert.match(html, /object-position:\s*\$\{deg\.photoCropX\}%\s+\$\{deg\.photoCropY\}%/);
});

runTest('photo position controls move the whole profile photo frame', () => {
    assert.match(html, /id="photoOffsetX"/);
    assert.match(html, /id="photoOffsetY"/);
    assert.match(html, /photoOffsetX:\s*0/);
    assert.match(html, /photoOffsetY:\s*0/);
    assert.match(html, /state\.design\.photoOffsetX\s*=\s*getVal\('photoOffsetX'\)/);
    assert.match(html, /state\.design\.photoOffsetY\s*=\s*getVal\('photoOffsetY'\)/);
    assert.match(html, /left:\s*\$\{photoOffsetX\}px/);
    assert.match(html, /top:\s*\$\{photoOffsetY\}px/);
});
