<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;eptinezumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Eptinezumab_Baker2020_reference&quot;,&quot;label&quot;:&quot;Baker_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# eptinezumab

- **generic name:** eptinezumab
- **ATC codes:** `N02CD05`
- **DrugBank:** [DB14040](https://go.drugbank.com/drugs/DB14040) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Eptinezumab is a monoclonal antibody used to prevent migraine attacks. It is an authorised medicine in the European Union and is also approved elsewhere, given as an infusion by healthcare professionals.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28208949](https://www.wikidata.org/wiki/Q28208949) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Start here

> **Baker_2020_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> patients with episodic or chronic migraine, n = ,
    "condition": "episodic or chronic migraine",
    "species": "human",
    "compounds": [
      {
        "name": "eptinezumab",
        "role": "parent",
        "dosed": "yes",
        "measured": "yes",
        "has_parameters": "yes"
      }
    ],
    "links": "none"
  },
  "links": []
}. [Run it in the simulator](drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md?tab=Simulation) · [record](drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.0062 | L/h | 0.0062 L h−1 | patients with episodic or chronic migraine | ,     "condition": "episodic or chronic migraine",     "species": "human",     "compounds": [       {         "name": "eptinezumab",         "role": "parent",         "dosed": "yes",         "measured": "yes",         "has_parameters": "yes"       }     ],     "links": "none"   },   "links": [] } | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Baker_2020_reference](drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md) |
| V | V | 3.64 | L | 3.64 L | patients with episodic or chronic migraine | ,     "condition": "episodic or chronic migraine",     "species": "human",     "compounds": [       {         "name": "eptinezumab",         "role": "parent",         "dosed": "yes",         "measured": "yes",         "has_parameters": "yes"       }     ],     "links": "none"   },   "links": [] } | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Baker_2020_reference](drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Baker_2020_reference](drugs/drug_eptinezumab/Eptinezumab_Baker2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 7 | Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020) | [10.1002/prp2.567](https://doi.org/10.1002/prp2.567) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Baker_2020_MMD](drugs/drug_eptinezumab/pd_Baker_2020_MMD.md) | change in the frequency of monthly migraine days (MMD) over weeks 1–12 ← eptinezumab · direct Emax (saturable) effect | — | Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020) | [10.1002/prp2.567](https://doi.org/10.1002/prp2.567) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Baker_2020_50_migraine_responder_rate_weeks_1_12](drugs/drug_eptinezumab/pd_Baker_2020_50_migraine_responder_rate_weeks_1_12.md) | ≥50% migraine responder rate (weeks 1–12) ← eptinezumab · categorical (graded) response model | — | Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020) | [10.1002/prp2.567](https://doi.org/10.1002/prp2.567) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Baker_2020_75_migraine_responder_rate_weeks_1_12](drugs/drug_eptinezumab/pd_Baker_2020_75_migraine_responder_rate_weeks_1_12.md) | ≥75% migraine responder rate (weeks 1–12) ← eptinezumab · categorical (graded) response model | — | Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020) | [10.1002/prp2.567](https://doi.org/10.1002/prp2.567) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Baker_2020_75_migraine_responder_rate_weeks_1_4](drugs/drug_eptinezumab/pd_Baker_2020_75_migraine_responder_rate_weeks_1_4.md) | ≥75% migraine responder rate (weeks 1–4) ← eptinezumab · categorical (graded) response model | — | Baker B et al., Population pharmacokinetic and exposure…, Pharmacology research & per… (2020) | [10.1002/prp2.567](https://doi.org/10.1002/prp2.567) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=eptinezumab).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CALCA (antibody), CALCA (binder), CALCB (antibody), CALCB (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:33 | 1:18 | 1/0/0 | 1/0/0 | 0/0/0 | 51,199/4,757 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Areberg_2024.pdf` | Areberg J et al., Population pharmacokinetics of eptinezu…, Basic & clinical pharmacolo… (2024) | popPK | 10 | [10.1111/bcpt.14076](https://doi.org/10.1111/bcpt.14076) | [39206528](https://pubmed.ncbi.nlm.nih.gov/39206528) | The paper describes a relevant PopPK study for eptinezumab, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-07T06:32:47.055969+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Areberg_2024 | relevant | 10 | 0 | The paper describes a relevant PopPK study for eptinezumab, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract text. |
| PGx | Szkutnik-Fiedler_2020 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions and does not report pharmacogenomic effects (gene variants) on the PK/PD of eptinezumab. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 06:32 UTC</sub>
