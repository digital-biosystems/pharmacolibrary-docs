<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;perampanel&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Perampanel_Jing2023_reference&quot;,&quot;label&quot;:&quot;Jing_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_perampanel/Perampanel_Jing2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# perampanel

- **generic name:** perampanel
- **ATC codes:** `N03AX22`
- **DrugBank:** [DB08883](https://go.drugbank.com/drugs/DB08883)
- **groups:** approved, investigational

## About

**Description.** Perampanel is a noncompetitive AMPA glutamate receptor antagonist. It is marketed under the name Fycompa™ and is indicated as an adjunct in patients over 12 years old for the treatment of partial-onset seizures that may or may not occur with generalized seizures. The FDA label includes an important black-boxed warning of serious or life-threatening behavioral and psychiatric reactions in patients taking Fycompa™.

**Indication.** Perampanel is indicated for the treatment of partial-onset seizures with or without secondarily generalized seizures in epileptic patients four years of age and older. It is also indicated as an adjunct in the treatment of primary generalized tonic-clonic seizures in epileptic patients aged 12 years and older.[L40913]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 01:33 | 1:39 | 1/0/0 | 0/0/0 | 0/0/0 | 50,522/3,260 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Jing_2023_reference](drugs/drug_perampanel/Perampanel_Jing2023_reference.md) | Jing S et al., A Single- and Multiple-Dose Pharmacokin…, Clinical drug investigation (2023) | [10.1007/s40261-022-01241-8](https://doi.org/10.1007/s40261-022-01241-8) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=perampanel) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` inducer/substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…Perampanel is eliminated mostely in the feces (48%) and to a lesser exten in the urine (22…”</sub> | prose |
| excretion | kidney | <sub>“…ted mostely in the feces (48%) and to a lesser exten in the urine (22%).…”</sub> | prose |

<sub>Actors without a tissue in the table: GRIA1 (target), GRIA2 (inhibitor), GRIA3 (inhibitor), GRIA4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 11 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2024.pdf` | Li S et al., Population pharmacokinetics and dosing…, Epilepsia (2024) | popPK | 10 | [10.1111/epi.17954](https://doi.org/10.1111/epi.17954) | [38572689](https://pubmed.ncbi.nlm.nih.gov/38572689) | The study reports quantitative population PK parameters (CL and V) for perampanel in children with epilepsy, and the numeric values are explicitly present in the abstract text. |
| `Silva_2023.pdf` | Silva R et al., Population Pharmacokinetic Analysis of…, Pharmaceutics (2023) | popPK | 10 | [10.3390/pharmaceutics15061704](https://doi.org/10.3390/pharmaceutics15061704) | [37376153](https://pubmed.ncbi.nlm.nih.gov/37376153) | The paper reports a population PK model for perampanel with explicit numeric values for clearance (0.419 L/h) and volume of distribution (29.50 L) in the text. |
| `Takenaka_2018.pdf` | Takenaka O et al., Pharmacokinetic/pharmacodynamic analysi…, Acta neurologica Scandinavi… (2018) | popPK | 10 | [10.1111/ane.12874](https://doi.org/10.1111/ane.12874) | [29171002](https://pubmed.ncbi.nlm.nih.gov/29171002) | The paper reports a population PK model for perampanel with specific numeric values for apparent clearance (CL/F) provided in the text. |
| `Yang_2025.pdf` | Yang J et al., Population Pharmacokinetics of Perampan…, Therapeutic drug monitoring (2025) | popPK | 10 | [10.1097/FTD.0000000000001296](https://doi.org/10.1097/FTD.0000000000001296) | [39902756](https://pubmed.ncbi.nlm.nih.gov/39902756) | The paper reports a population pharmacokinetic model for perampanel with explicit numeric values for clearance (0.84 L/h) and volume of distribution (64.35 L) in the text. |

<sub>queue written 2026-09-10T01:32:13.148900+00:00</sub>

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-10 01:32 UTC</sub>
