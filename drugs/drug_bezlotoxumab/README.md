<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;bezlotoxumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bezlotoxumab_Yee2020_reference&quot;,&quot;label&quot;:&quot;Yee_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# bezlotoxumab

- **generic name:** bezlotoxumab
- **ATC codes:** `J06BB21`, `J06BC03`
- **DrugBank:** [DB13140](https://go.drugbank.com/drugs/DB13140) · **PubChem:** none
- **groups:** approved

## About

Bezlotoxumab, a monoclonal antibody, is used to help prevent recurrence of Clostridioides difficile infection (pseudomembranous enterocolitis). It is approved and authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4900370](https://www.wikidata.org/wiki/Q4900370) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Yee_2020_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> review reference. [Run it in the simulator](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md?tab=Simulation) · [record](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.01321 | L/h | 0.317 L/day | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Yee_2020_reference](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md) |
| V | V | 7.33 | L | 7.33 L | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Yee_2020_reference](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Yee_2020_reference](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Yee KL et al., A time-to-event analysis of the exposur…, Journal of pharmacokinetics… (2020) | [10.1007/s10928-019-09660-5](https://doi.org/10.1007/s10928-019-09660-5) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Yee_2019_reference](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2019_reference.md) | — | 1-compartment (no model) | 0 | Yee KL et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.01971-18](https://doi.org/10.1128/AAC.01971-18) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yee_2020_rCDI](drugs/drug_bezlotoxumab/pd_Yee_2020_rCDI.md) | recurrence of Clostridium difficile infection (time to event) ← bezlotoxumab · time-to-event model | — | Yee KL et al., A time-to-event analysis of the exposur…, Journal of pharmacokinetics… (2020) | [10.1007/s10928-019-09660-5](https://doi.org/10.1007/s10928-019-09660-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:59 | 0:30 | 1/1/0 | 1/0/0 | 0/0/0 | 55,515/1,931 | ollama / glm-5.3-flash | 5 | 2/3 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yee_2019.pdf` | Yee KL et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2019) | popPK | 10 | [10.1128/AAC.01971-18](https://doi.org/10.1128/AAC.01971-18) | [30455246](https://pubmed.ncbi.nlm.nih.gov/30455246) | A population PK two-compartment model for bezlotoxumab in humans is described, but no numeric parameter values (CL, V, t½) appear in the provided evidence. |
| `de_2023.pdf` | de Almeida C et al., Predicted Bezlotoxumab Exposure in Pati…, Clinical therapeutics (2023) | popPK | 8 | [10.1016/j.clinthera.2023.02.006](https://doi.org/10.1016/j.clinthera.2023.02.006) | [36906440](https://pubmed.ncbi.nlm.nih.gov/36906440) | Population PK modeling of bezlotoxumab in humans, but the evidence only reports a predicted exposure change (10.8%) with no CL/V or model parameter values, which likely reside in supplementary material not provided. |

<sub>queue written 2026-10-07 15:59 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kinoshita_2018 | irrelevant | 3 | 2 | This is a drug review of bezlotoxumab's pharmacology/efficacy; only Cmax (169 µg/mL), AUC (52,000 µg·h/mL) and t1/2 (~18 d) are mentioned in passing, with no PK model or full parameter set (values largely in figures/supplements not provided). |
| popPK | Peng_2019 | irrelevant | 0 | 0 | In vitro DARPin antitoxin study; bezlotoxumab only appears as a potency comparator (EC50), with no PK/disposition parameters. |
| popPK | Peritore-Galve_2025 | irrelevant | 0 | 0 | This is an efficacy/neutralization study of AZD5148 vs bezlotoxumab in mice; no PK parameters (CL, V, half-life, population-PK model) for bezlotoxumab are reported. |
| popPK | Simeon_2019 | irrelevant | 0 | 0 | This is a DARPin antitoxin engineering study; bezlotoxumab is only a comparator in EC50 potency assays, with no PK parameters (CL, V, half-life with volume, or PK model) reported. |
| popPK | Yee_2019 | relevant | 10 | 3 | A population PK two-compartment model for bezlotoxumab in humans is described, but no numeric parameter values (CL, V, t½) appear in the provided evidence. |
| popPK | de_2023 | relevant | 8 | 3 | Population PK modeling of bezlotoxumab in humans, but the evidence only reports a predicted exposure change (10.8%) with no CL/V or model parameter values, which likely reside in supplementary material not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbezlotoxumab%5D&body=Drug%3A%20bezlotoxumab%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bezlotoxumab/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 15:59 UTC</sub>
