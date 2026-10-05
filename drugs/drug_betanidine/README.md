<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;betanidine&quot;}]"></div>

# betanidine

- **generic name:** betanidine
- **ATC codes:** `C02CC01`
- **DrugBank:** [DB00217](https://go.drugbank.com/drugs/DB00217) · **PubChem:** not captured
- **groups:** approved

## About

Bethanidine is a peripherally acting antiadrenergic (sympatholytic) drug that has been used to treat arterial hypertension. It is an approved guanidine-derivative antihypertensive, though this older medicine is now only rarely used in practice.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q794152](https://www.wikidata.org/wiki/Q794152) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 05:57 | 0:43 | 0/1/0 | 0/0/0 | 0/0/0 | 2,195/1,788 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 5/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Corder_1979_reference](drugs/drug_betanidine/Betanidine_Corder1979_reference.md) | — | 1-compartment (no model) | 0 | Corder CN, Bethanidine elimination from plasma, Journal of clinical pharmac… (1979) | [10.1002/j.1552-4604.1979.tb02504.x](https://doi.org/10.1002/j.1552-4604.1979.tb02504.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=betanidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRB1 (target), KCNJ1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Corder_1979.pdf` | Corder CN, Bethanidine elimination from plasma, Journal of clinical pharmac… (1979) | popPK | 10 | [10.1002/j.1552-4604.1979.tb02504.x](https://doi.org/10.1002/j.1552-4604.1979.tb02504.x) | [489762](https://pubmed.ncbi.nlm.nih.gov/489762) | The evidence explicitly reports quantitative pharmacokinetic parameters (half-lives, volume of distribution) for bethanidine in human subjects. |
| `Shen_1975.pdf` | Shen D et al., Pharmacokinetics of bethanidine in hype…, Clinical pharmacology and t… (1975) | popPK | 9 | [10.1002/cpt1975173363](https://doi.org/10.1002/cpt1975173363) | [1120401](https://pubmed.ncbi.nlm.nih.gov/1120401) | The study reports quantitative pharmacokinetic parameters for bethanidine, including terminal half-lives (7-11 hr), renal clearance relative to plasma flow, and urinary excretion percentages, all of which are explicitly stated in the provided text. |
| `Chremos_1976.pdf` | Chremos AN et al., Time-dependent change in renal clearanc…, Journal of pharmaceutical s… (1976) | popPK | 8 | [10.1002/jps.2600650136](https://doi.org/10.1002/jps.2600650136) | [1255421](https://pubmed.ncbi.nlm.nih.gov/1255421) | The paper describes a pharmacokinetic study of bethanidine in humans, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |

<sub>queue written 2026-09-30T05:56:47.334707+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Briant_1974 | irrelevant | 0 | 0 | The study focuses on a different drug (Ciba 34276-Ba) and only mentions bethanidine (likely a typo for betanidine) in the context of a clinical interaction case without providing any pharmacokinetic parameters for it. |
| popPK | Chremos_1976 | relevant | 8 | 0 | The paper describes a pharmacokinetic study of bethanidine in humans, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| popPK | Dring_1977 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 22:06 UTC</sub>
