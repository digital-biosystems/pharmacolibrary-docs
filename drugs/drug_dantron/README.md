<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;dantron&quot;}]"></div>

# dantron

- **generic name:** dantron
- **ATC codes:** `A06AB03`
- **DrugBank:** [DB04816](https://go.drugbank.com/drugs/DB04816) · **PubChem:** [CID 2950](https://pubchem.ncbi.nlm.nih.gov/compound/2950)
- **molar mass:** 240.2109 g/mol (C14H8O4) — DrugBank
- **groups:** approved, withdrawn

## About

**Description.** Withdrawn from the Canadian, US, and UK markets in 1998 due to genotoxicity.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 15:18 | 0:22 | 0/0/0 | 0/0/0 | 0/0/0 | 12,283/356 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dantron) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dong_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rhubarb and gardenia markers (genipin, rhein, etc.) in rats, not dantron. |
| popPK | Ren_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of rhein, not dantron. |
| popPK | Shi_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Morinda officinalis components (monotropein, rubiadin, rubiadin 1-methyl ether) in rats, not dantron. |
| popPK | Yan_2007 | irrelevant | 0 | 0 | The study focuses on the quantification of five different anthraquinones (aloe-emodin, rhein, emodin, chrysophanol, and physcion) and does not mention dantron. |
| popPK | Yang_2022 | irrelevant | 0 | 0 | The study focuses on the antibacterial activity and toxicity of a dantron-copper complex, not on the pharmacokinetic disposition parameters of dantron itself. |
| PD | Yang_2022 | not_relevant | 3 | 2 | The paper reports MIC/MBC values and qualitative therapeutic outcomes at specific doses, but lacks a formal dose-response curve or numeric PD parameters (e.g., Emax, EC50) for the drug itself. |
| popPK | Yang_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of polydatin, resveratrol, and emodin in rats, not dantron. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
