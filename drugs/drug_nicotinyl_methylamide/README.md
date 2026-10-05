<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;nicotinyl methylamide&quot;}]"></div>

# nicotinyl methylamide

- **generic name:** nicotinyl methylamide
- **ATC codes:** `A05AB01`
- **DrugBank:** [DB08840](https://go.drugbank.com/drugs/DB08840) · **PubChem:** not captured
- **molar mass:** 136.1512 g/mol (C7H8N2O) — DrugBank
- **groups:** investigational

## About

**Description.** N-methylnicotinamide is an experimental drug with no approved indication or marketed formulation. It is a metabolite of niacinamide/nicotinamide and niacin/nicotinic acid (vitamin B3), and as such N-methylnicotinamide is used to diagnose niacin deficiency by measuring N-methylnicotinamide in the urine.

**Indication.** N-methylnicotinamide is an experimental drug with no approved indication.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:30 | 1:15 | 0/0/0 | 0/0/0 | 0/0/0 | 60,218/481 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/4 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nicotinyl_methylamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `AOX1` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` unknown, `SLC47A1` substrate, `SLC47A2` substrate | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Greco_2022 | irrelevant | 0 | 0 | The study investigates FAAH inhibitors (ARN14633 and ARN14280) in a rat migraine model and does not involve nicotinyl_methylamide. |
| PD | Greco_2022 | not_relevant | 0 | 0 | The paper studies FAAH inhibitors (ARN14633, ARN14280) and does not mention nicotinyl methylamide or provide any pharmacodynamic modeling or numeric PD parameters. |
| popPK | Jena_2026 | irrelevant | 0 | 0 | The paper describes the computational design of a peptide-ligand conjugate for Nipah virus and does not involve nicotinyl_methylamide or any pharmacokinetic parameters. |
| PD | Jena_2026 | not_relevant | 0 | 0 | The paper is a computational study on peptide-ligand conjugate design for Nipah virus and does not contain any pharmacodynamic or exposure-response data for nicotinyl methylamide. |
| popPK | Liu_2026 | irrelevant | 0 | 0 | The paper is a molecular dynamics study of SARS-CoV-2 protease inhibitors and does not involve nicotinyl_methylamide or pharmacokinetics. |
| PD | Liu_2026 | not_relevant | 0 | 0 | The paper focuses on molecular dynamics simulations and binding free energy calculations for SARS-CoV-2 Mpro mutants, containing no pharmacokinetic or pharmacodynamic data for nicotinyl methylamide. |
| popPK | Plisson_2009 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of the PET tracer GSK189254 in pigs, not nicotinyl_methylamide. |
| popPK | Wichka_2024 | irrelevant | 0 | 0 | The paper is a computational study on Transglutaminase 2 inhibitors for celiac disease and does not involve nicotinyl_methylamide or pharmacokinetic parameters. |
| PD | Wichka_2024 | not_relevant | 0 | 0 | The paper describes a computational machine learning model for predicting Transglutaminase 2 inhibition (IC50) based on molecular features, but it does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or dose-effect curves for nicotinyl methylamide or any other specific drug in a biological system. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
