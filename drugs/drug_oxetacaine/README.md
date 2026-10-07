<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;oxetacaine&quot;}]"></div>

# oxetacaine

- **generic name:** oxetacaine
- **ATC codes:** `C05AD06`
- **DrugBank:** [DB12532](https://go.drugbank.com/drugs/DB12532) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Oxetacaine is a local anesthetic used topically, notably for the treatment of hemorrhoids and anal fissures. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2412605](https://www.wikidata.org/wiki/Q2412605) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:50 | 0:31 | 0/0/0 | 0/0/0 | 0/0/0 | 11,329/367 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=oxetacaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GAST (inhibition of synthesis).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Iwase_2017 | irrelevant | 0 | 0 | The study investigates the in-vitro CYP inhibition of oxethazaine (not oxetacaine) and does not report pharmacokinetic parameters for oxetacaine. |
| PGx | Iwase_2017 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP inhibition) of gastrointestinal drugs, not the effect of genetic variants on oxetacaine pharmacokinetics or pharmacodynamics. |
| popPK | Mai_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contractility and does not report any pharmacokinetic parameters for oxetacaine. |
| PD | Mai_1996 | not_relevant | 0 | 0 | The paper studies pentacaine and its derivatives, not oxetacaine, and provides no numeric PD parameters for the target drug. |
| popPK | Moreira-Filho_2021 | irrelevant | 0 | 0 | The paper is a review on drug discovery for schistosomiasis and does not contain pharmacokinetic data for oxetacaine. |
| PD | Moreira-Filho_2021 | not_relevant | 0 | 0 | The paper is a review on drug discovery methods for schistosomiasis and does not contain any pharmacodynamic or exposure-response data for oxetacaine. |
| popPK | Prado_2017 | irrelevant | 0 | 0 | The study focuses on physicochemical complexation and in vivo analgesia, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for oxetacaine. |
| PD | Prado_2017 | not_relevant | 2 | 1 | The paper reports an IC50 for cytotoxicity and a qualitative comparison of analgesic duration, but does not provide a concentration-effect or dose-response curve with numeric PD parameters (e.g., Emax, EC50) for the analgesic effect. |
| popPK | Ravaynia_2020 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay for antischistosomal drugs and does not report pharmacokinetic parameters for oxetacaine. |
| PD | Ravaynia_2020 | not_relevant | 0 | 0 | The paper describes an impedance-based platform for antischistosomal drugs and does not mention oxetacaine or report any pharmacodynamic parameters for it. |
| popPK | Tani_1997 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of oxethazaine (not oxetacaine) on muscarinic receptors in parietal cells and does not report pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
