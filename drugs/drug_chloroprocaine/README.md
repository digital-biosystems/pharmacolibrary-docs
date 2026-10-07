<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01B&quot;,&quot;href&quot;:&quot;atc/N01B.md&quot;},{&quot;label&quot;:&quot;chloroprocaine&quot;}]"></div>

# chloroprocaine

- **generic name:** chloroprocaine
- **ATC codes:** `N01BA04`, `S01HA08`
- **DrugBank:** [DB01161](https://go.drugbank.com/drugs/DB01161) · **PubChem:** [CID 8612](https://pubchem.ncbi.nlm.nih.gov/compound/8612)
- **molar mass:** 270.755 g/mol (C13H19ClN2O2) — DrugBank
- **groups:** approved, investigational

## About

Chloroprocaine is a local anesthetic used to prevent or relieve pain, for example during procedures. It is an approved medicine, available as a local anesthetic for nerve blocks and in eye drops, and is used mainly in the United States rather than the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2964133](https://www.wikidata.org/wiki/Q2964133) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:04 | 0:19 | 0/0/0 | 0/0/0 | 0/0/0 | 30,786/1,321 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chloroprocaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | `BCHE` substrate | DrugBank actor |
| metabolism | liver | `BCHE` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ATP1A1 (blocker), SCN1A (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Camann_1991 | irrelevant | 0 | 0 | The study evaluates the analgesic efficacy of epidural nalbuphine using chloroprocaine only as a co-administered local anesthetic, with no pharmacokinetic parameters reported for chloroprocaine. |
| popPK | Casati_2006 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy and dose-response of intrathecal chloroprocaine (2-chloroprocaine) for spinal anesthesia, reporting onset and block duration times, but does not provide quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Coda_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and electrophysiology, not a pharmacokinetic study. |
| popPK | Columb_1997 | irrelevant | 0 | 0 | The study reports the minimum local analgesic concentration (MLAC), which is a pharmacodynamic efficacy measure, not a pharmacokinetic disposition parameter like clearance or volume of distribution. |
| popPK | Grant_2000 | irrelevant | 1 | 0 | The study evaluates the duration of anesthesia (pharmacodynamics) in mice rather than pharmacokinetic disposition parameters for chloroprocaine. |
| popPK | Guntz_2022 | irrelevant | 1 | 0 | The study determines ED95 for intrathecal 2-chloroprocaine (an anesthetic dose-response study) and does not report pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Lai_2025 | irrelevant | 0 | 0 | The study is a dose-finding trial for efficacy (ED50/ED95 for pain prevention) and does not report any pharmacokinetic parameters (clearance, volume, half-life, etc.) for chloroprocaine. |
| popPK | Perez-Castro_2009 | irrelevant | 0 | 0 | This is an in vitro cytotoxicity study measuring cell viability and calcium responses, not a pharmacokinetic study reporting quantitative disposition parameters for chloroprocaine. |
| popPK | Polley_1996 | irrelevant | 0 | 0 | The study measures the Minimum Local Analgesic Concentration (MLAC/EC50), which is a pharmacodynamic efficacy endpoint, not a pharmacokinetic parameter such as clearance or volume of distribution. |
| popPK | Smith_2004 | irrelevant | 1 | 0 | The study reports clinical outcomes (block height, duration) rather than quantitative pharmacokinetic parameters (CL, V, t1/2, etc.). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
