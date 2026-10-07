<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;hepatitis A immunoglobulin&quot;}]"></div>

# hepatitis A immunoglobulin

- **generic name:** hepatitis A immunoglobulin
- **ATC codes:** `J06BB11`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Hepatitis A immunoglobulin is a specific immunoglobulin used to provide passive protection against hepatitis A infection. It is classified under immune sera and immunoglobulins for systemic use, and remains an established option for post-exposure prophylaxis, though detailed usage information is limited.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:16 | 0:30 | 0/0/0 | 0/0/0 | 0/0/0 | 33,562/926 | ollama / glm-5.3-flash | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 20 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ercan_1994 | irrelevant | 1 | 1 | This is a biodistribution/imaging study of 99mTc-HIG in mice with abscesses, not a PK study of hepatitis A immunoglobulin, and no disposition parameters are reported. |
| popPK | Ercan_1994_2 | irrelevant | 1 | 1 | Imaging/biodistribution study of 99Tcm-glutathione vs 99Tcm-HIG in rabbits/mice; no PK disposition parameters for hepatitis A immunoglobulin. |
| popPK | Fowler_2009 | irrelevant | 0 | 0 | This is a lymphoscintigraphy/sentinel node mapping study using radiolabeled HIG as a tracer; no PK disposition parameters (CL, V, half-life, model) for hepatitis A immunoglobulin are reported. |
| popPK | Fowler_2010 | irrelevant | 1 | 1 | This is a lymphatic drainage mapping study using labeled immunoglobulin as a tracer, not a PK study of hepatitis A immunoglobulin disposition parameters. |
| popPK | Han_2017 | irrelevant | 0 | 8 | This is a population PK study of anti-hepatitis B immunoglobulin (HBIG), a different drug from hepatitis A immunoglobulin, though numeric parameters (Vd 3.20 L, CL 0.0064 L/h, half-life 19.8 h) are present in the text. |
| popPK | Manin_1980 | irrelevant | 0 | 0 | Study reports cortisol PK parameters in guinea-pigs, not hepatitis A immunoglobulin. |
| popPK | McVoy_2018 | irrelevant | 0 | 0 | The paper concerns HCMV hyperimmune globulin and mAb TRL345, not hepatitis A immunoglobulin; no PK parameters for hepatitis A immunoglobulin are reported. |
| popPK | OMahony_2006 | irrelevant | 0 | 0 | This is a lymphoscintigraphy imaging study using 99mTc-labeled IgG as a tracer, not a PK study of hepatitis A immunoglobulin; no disposition parameters reported. |
| popPK | Peters_2009 | irrelevant | 0 | 0 | Study of lymphatic node arrangement using radiolabeled HIG as a tracer, not a PK study of hepatitis A immunoglobulin disposition; no CL/V/half-life parameters reported. |
| popPK | Shimpi_1995 | irrelevant | 2 | 1 | This is a biodistribution/imaging study of 99Tcm-labelled immunoglobulin in rabbits with no quantitative PK parameters (CL, V, half-life) reported. |
| popPK | Svensson_1999 | irrelevant | 1 | 2 | This is a lymphoscintigraphy imaging study using 99mTc-HIG as a diagnostic tracer, not a PK study of hepatitis A immunoglobulin; only local injection-site clearance percentages are given, no disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
