<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;carbutamide&quot;}]"></div>

# carbutamide

- **generic name:** carbutamide
- **ATC codes:** `A10BB06`
- **DrugBank:** [DB13406](https://go.drugbank.com/drugs/DB13406) · **PubChem:** not captured
- **molar mass:** 271.34 g/mol (C11H17N3O3S) — DrugBank
- **groups:** investigational

## About

Carbutamide is a sulfonylurea that was developed as an anti-diabetic medication to lower blood glucose. It is not an approved medicine today; it is classified as investigational and has no European Union authorisation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5038107](https://www.wikidata.org/wiki/Q5038107) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 22:33 | 0:28 | 0/0/0 | 0/0/0 | 0/0/0 | 9,487/379 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=carbutamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Avedissian_2019 | irrelevant | 0 | 0 | The paper is a review of Polymyxin B pharmacokinetics and does not contain data for carbutamide. |
| PD | Avedissian_2019 | not_relevant | 0 | 0 | The paper is a review of Polymyxin B pharmacokinetics and does not mention carbutamide or report any pharmacodynamic parameters. |
| popPK | Michalcová_2016 | irrelevant | 0 | 0 | The study is an in-vitro binding affinity analysis (capillary electrophoresis) and does not report pharmacokinetic disposition parameters like clearance or volume. |
| PD | Michalcová_2016 | not_relevant | 0 | 0 | The paper reports protein binding constants (affinity) via capillary electrophoresis, not a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters like Emax or EC50. |
| popPK | Panel_2026 | irrelevant | 0 | 0 | The paper focuses on the identification of small-molecule agonists for neurotensin receptors and contains no pharmacokinetic data for carbutamide. |
| PD | Panel_2026 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding and functional assay data (EC50/Emax) for novel neurotensin receptor agonists, not pharmacodynamic or exposure-response data for the drug carbutamide. |
| popPK | Pogátsa_1988 | irrelevant | 0 | 0 | The study investigates the cardiotoxic effects of carbutamide on arrhythmias in animals and humans, not its pharmacokinetic disposition parameters. |
| popPK | Schwanstecher_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and channel inhibition, not a pharmacokinetic study reporting disposition parameters for carbutamide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
