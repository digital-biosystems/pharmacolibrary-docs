<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfalene&quot;}]"></div>

# sulfalene

- **generic name:** sulfalene
- **ATC codes:** `J01ED02`, `P01BF04`
- **DrugBank:** [DB00664](https://go.drugbank.com/drugs/DB00664) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Sulfalene is a long-acting sulfonamide antibiotic that was used as an anti-infective, including for urinary infections and malaria. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6577302](https://www.wikidata.org/wiki/Q6577302) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:55 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 6,300/284 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Geĭtman_1982.pdf` | Geĭtman IIa et al., [Sulfalene kinetics in the blood and ce…, Farmakologiia i toksikologi… (1982) | popPK | 5 | not captured | [7128796](https://pubmed.ncbi.nlm.nih.gov/7128796) | The study is a pharmacokinetic investigation of sulfalene in human patients (arachnoiditis) describing kinetic behavior (absorption, elimination, CSF penetration), but the provided evidence contains only qualitative descriptions without any specific numeric parameter values (e.g., CL, V, t1/2). |

<sub>queue written 2026-10-07T10:55:20.773675+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barkakaty_1990 | irrelevant | 0 | 0 | This is a clinical efficacy study for malaria treatment, not a pharmacokinetic study, and it reports no disposition parameters such as clearance, volume, or half-life. |
| popPK | Geĭtman_1982 | relevant | 5 | 0 | The study is a pharmacokinetic investigation of sulfalene in human patients (arachnoiditis) describing kinetic behavior (absorption, elimination, CSF penetration), but the provided evidence contains only qualitative descriptions without any specific numeric parameter values (e.g., CL, V, t1/2). |
| popPK | Krüger-Thiemer_1969 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
