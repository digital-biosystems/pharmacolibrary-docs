<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;tiomolibdic acid&quot;}]"></div>

# tiomolibdic acid

- **generic name:** tiomolibdic acid
- **ATC codes:** `A16AX22`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Tiomolibdic acid is a molybdenum-based compound that binds copper, studied as a treatment for Wilson's disease, a disorder of copper accumulation. It is not an established marketed medicine; it has been investigated in clinical studies rather than being widely used.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 03:05 | 0:43 | 0/0/0 | 0/0/0 | 0/0/0 | 1,414/170 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Botha_1995.pdf` | Botha CJ et al., Pharmacokinetics of ammonium tetrathiom…, Journal of the South Africa… (1995) | popPK | 10 | not captured | [7629788](https://pubmed.ncbi.nlm.nih.gov/7629788) | The study reports numeric disposition parameters for intravenously administered tetrathiomolybdate in sheep, including half-life, volume of distribution, and clearance. |
| `Chan_2015.pdf` | Chan CM et al., Pharmacologic evaluation of ammonium te…, American journal of veterin… (2015) | popPK | 9 | [10.2460/ajvr.76.5.445](https://doi.org/10.2460/ajvr.76.5.445) | [25909377](https://pubmed.ncbi.nlm.nih.gov/25909377) | The study reports readable numeric pharmacokinetic values for tetrathiomolybdate in dogs, including half-life, AUC, Cmax, and bioavailability. |

<sub>queue written 2026-09-30T03:05:23.594232+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cater_2011 | irrelevant | 0 | 0 | The study investigates clioquinol and uses tetrathiomolybdate only as a chelator, with no tiomolibdic_acid pharmacokinetic parameters. |
| popPK | Guo_2024 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of tetrathiomolybdate with no pharmacokinetic disposition parameters or numeric PK values. |
| popPK | Lewis_2026 | irrelevant | 1 | 0 | The study examines tetrathiomolybdate effects on copper PET uptake but reports no quantitative pharmacokinetic parameters or values for tiomolibdic_acid. |
| popPK | Plitz_2019 | irrelevant | 2 | 1 | The rat study reports WTX101 mass-balance excretion percentages but no quantitative CL, V, Q, ka, half-life, or compartmental/population-PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
