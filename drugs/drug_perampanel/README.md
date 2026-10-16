<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;perampanel&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Perampanel_Silva2023_base&quot;,&quot;label&quot;:&quot;Silva_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_perampanel/Perampanel_Silva2023_base.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Perampanel_Silva2023_final&quot;,&quot;label&quot;:&quot;Silva_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_perampanel/Perampanel_Silva2023_final.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Perampanel_Jing2023_reference&quot;,&quot;label&quot;:&quot;Jing_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_perampanel/Perampanel_Jing2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Perampanel_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_perampanel/Perampanel_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# perampanel

- **generic name:** perampanel
- **ATC codes:** `N03AX22`
- **DrugBank:** [DB08883](https://go.drugbank.com/drugs/DB08883) · **PubChem:** [CID 9924495](https://pubchem.ncbi.nlm.nih.gov/compound/9924495)
- **molar mass:** 349.393 g/mol (C23H15N3O) — DrugBank
- **groups:** approved, investigational

## About

Perampanel is an antiepileptic medicine used to treat epilepsy, including partial seizures and tonic–clonic seizures. It is authorised in the European Union and is an approved drug, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q868658](https://www.wikidata.org/wiki/Q868658) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| perampanel | parent | 349.393 | C23H15N3O | DrugBank | [9924495](https://pubchem.ncbi.nlm.nih.gov/compound/9924495) | Li_2024, Silva_2023, Takenaka_2018, Yang_2025, Yu_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:40 | 4:26 | 2/1/4 | 1/0/0 | 0/0/0 | 104,055/68,113 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Silva_2023_base](drugs/drug_perampanel/Perampanel_Silva2023_base.md) | ▶ model + simulator | 1-compartment, IV | 2 | Silva R et al., Population Pharmacokinetic Analysis of…, Pharmaceutics (2023) | [10.3390/pharmaceutics15061704](https://doi.org/10.3390/pharmaceutics15061704) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Silva_2023_final](drugs/drug_perampanel/Perampanel_Silva2023_final.md) | ▶ model + simulator | 1-compartment, IV | 2 | Silva R et al., Population Pharmacokinetic Analysis of…, Pharmaceutics (2023) | [10.3390/pharmaceutics15061704](https://doi.org/10.3390/pharmaceutics15061704) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (partly confirmed, agreement 0.7). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Jing_2023_reference](drugs/drug_perampanel/Perampanel_Jing2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Jing S et al., A Single- and Multiple-Dose Pharmacokin…, Clinical drug investigation (2023) | [10.1007/s40261-022-01241-8](https://doi.org/10.1007/s40261-022-01241-8) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Takenaka_2018_reference](drugs/drug_perampanel/Perampanel_Takenaka2018_reference.md) | — | 1-compartment (no model) | 2 | Takenaka O et al., Pharmacokinetic/pharmacodynamic analysi…, Acta neurologica Scandinavi… (2018) | [10.1111/ane.12874](https://doi.org/10.1111/ane.12874) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.5). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Yang_2025_reference](drugs/drug_perampanel/Perampanel_Yang2025_reference.md) | — | 1-compartment (no model) | 3 | Yang J et al., Population Pharmacokinetics of Perampan…, Therapeutic drug monitoring (2025) | [10.1097/FTD.0000000000001296](https://doi.org/10.1097/FTD.0000000000001296) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Yu_2025_reference](drugs/drug_perampanel/Perampanel_Yu2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Yu L et al., Development and Validation of a Populat…, Drug design, development an… (2025) | [10.2147/DDDT.S499085](https://doi.org/10.2147/DDDT.S499085) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Li_2024_reference](drugs/drug_perampanel/Perampanel_Li2024_reference.md) | — | 1-compartment (no model) | 0 | Li S et al., Population pharmacokinetics and dosing…, Epilepsia (2024) | [10.1111/epi.17954](https://doi.org/10.1111/epi.17954) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Takenaka_2018_percent_reduction_in_28_day_average_seizure_frequency_from_baseline](drugs/drug_perampanel/pd_Takenaka_2018_percent_reduction_in_28_day_average_seizure_fr.md) | percent reduction in 28-day average seizure frequency from baseline ← perampanel · direct linear effect | — | Takenaka O et al., Pharmacokinetic/pharmacodynamic analysi…, Acta neurologica Scandinavi… (2018) | [10.1111/ane.12874](https://doi.org/10.1111/ane.12874) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Takenaka_2018_responder_probability](drugs/drug_perampanel/pd_Takenaka_2018_responder_probability.md) | responder probability ← perampanel · stimulation effect | — | Takenaka O et al., Pharmacokinetic/pharmacodynamic analysi…, Acta neurologica Scandinavi… (2018) | [10.1111/ane.12874](https://doi.org/10.1111/ane.12874) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=perampanel).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2B6` inducer/substrate, `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GRIA1 (target), GRIA2 (inhibitor), GRIA3 (inhibitor), GRIA4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 11 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 2  ·  needs_review 4  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fujita_2023.pdf` | Fujita Y et al., Population Pharmacokinetic Analysis of…, Therapeutic drug monitoring (2023) | popPK | 10 | [10.1097/FTD.0000000000001055](https://doi.org/10.1097/FTD.0000000000001055) | [36645709](https://pubmed.ncbi.nlm.nih.gov/36645709) | The paper reports a population PK model for perampanel, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided text, abstract, or tables. |
| `Li_2024.pdf` | Li S et al., Population pharmacokinetics and dosing…, Epilepsia (2024) | popPK | 10 | [10.1111/epi.17954](https://doi.org/10.1111/epi.17954) | [38572689](https://pubmed.ncbi.nlm.nih.gov/38572689) | The study is a population pharmacokinetic analysis of perampanel in humans, and key numeric values for apparent clearance and volume of distribution are explicitly provided in the abstract. |
| `Takenaka_2018.pdf` | Takenaka O et al., Pharmacokinetic/pharmacodynamic analysi…, Acta neurologica Scandinavi… (2018) | popPK | 10 | [10.1111/ane.12874](https://doi.org/10.1111/ane.12874) | [29171002](https://pubmed.ncbi.nlm.nih.gov/29171002) | The study is a population PK/PK analysis for perampanel in humans reporting key quantitative parameters such as apparent clearance (CL/F) and model structure. |
| `Yang_2025.pdf` | Yang J et al., Population Pharmacokinetics of Perampan…, Therapeutic drug monitoring (2025) | popPK | 10 | [10.1097/FTD.0000000000001296](https://doi.org/10.1097/FTD.0000000000001296) | [39902756](https://pubmed.ncbi.nlm.nih.gov/39902756) | The abstract explicitly reports numeric values for clearance (0.84 L/h) and volume of distribution (64.35 L) from the final population pharmacokinetic model. |

<sub>queue written 2026-10-14T19:36:02.323074+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dono_2026 | irrelevant | 0 | 0 | The paper is a clinical comparative effectiveness study of seizure outcomes and retention rates, containing no pharmacokinetic or pharmacodynamic parameter data for perampanel. |
| popPK | Fujita_2023 | relevant | 10 | 0 | The paper reports a population PK model for perampanel, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided text, abstract, or tables. |
| popPK | Helling_2025 | irrelevant | 0 | 0 | The study focuses on TMS-evoked potentials and cortical excitability biomarkers, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for perampanel. |
| popPK | Liu_2026 | irrelevant | 2 | 0 | The study uses existing population PK models for perampanel (among 14 other drugs) for simulation purposes, but no original quantitative PK parameter values for perampanel are reported in the provided text (they are cited from external literature or supplementary tables). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 19:39 UTC</sub>
