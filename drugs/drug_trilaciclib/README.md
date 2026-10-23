<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;trilaciclib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trilaciclib_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trilaciclib/Trilaciclib_Li2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# trilaciclib

- **generic name:** trilaciclib
- **ATC codes:** `V03AF12`
- **DrugBank:** [DB15442](https://go.drugbank.com/drugs/DB15442) · **PubChem:** none
- **molar mass:** 446.559 g/mol (C24H30N8O) — DrugBank
- **groups:** approved, investigational

## About

Trilaciclib is a kinase inhibitor used in patients with small cell lung cancer, where it acts as a detoxifying agent for antineoplastic treatment. It is an approved drug, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q105592965](https://www.wikidata.org/wiki/Q105592965) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trilaciclib | parent | 446.559 | C24H30N8O | DrugBank | — | Dai_2024, Li_2022 |

## Start here

> **Li_2022_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> patients with extensive-stage small-cell lung cancer, n = 114. [Run it in the simulator](drugs/drug_trilaciclib/Trilaciclib_Li2022_reference.md?tab=Simulation) · [record](drugs/drug_trilaciclib/Trilaciclib_Li2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 157 | L/h | 157 L/h | Chinese and non-Chinese patients with ES-SCLC | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dai_2024_reference](drugs/drug_trilaciclib/Trilaciclib_Dai2024_reference.md) |
| V | V1 | 218 | L | 218 L | Chinese and non-Chinese patients with ES-SCLC | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Dai_2024_reference](drugs/drug_trilaciclib/Trilaciclib_Dai2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Dai_2024_reference](drugs/drug_trilaciclib/Trilaciclib_Dai2024_reference.md) | — | 2-compartment (no model) | 6 (+1 cov.) | Dai HR et al., Trilaciclib dosage in Chinese patients…, Acta pharmacologica Sinica (2024) | [10.1038/s41401-024-01297-6](https://doi.org/10.1038/s41401-024-01297-6) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T1_cmax</sub><br><sub>blocking: T1_tmax</sub> | [Li_2022_reference](drugs/drug_trilaciclib/Trilaciclib_Li2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Li C et al., Pharmacokinetic Drug-Drug Interaction S…, Clinical drug investigation (2022) | [10.1007/s40261-022-01179-x](https://doi.org/10.1007/s40261-022-01179-x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Li_2023_antitumour_efficacy](drugs/drug_trilaciclib/pd_Li_2023_antitumour_efficacy.md) | antitumour efficacy ← trilaciclib · model not identified | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Li_2023_headache](drugs/drug_trilaciclib/pd_Li_2023_headache.md) | headache ← trilaciclib · model not identified | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Li_2023_injection_site_reactions](drugs/drug_trilaciclib/pd_Li_2023_injection_site_reactions.md) | injection site reactions ← trilaciclib · model not identified | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Li_2023_myeloprotective_efficacy_myelosuppression_endpoints](drugs/drug_trilaciclib/pd_Li_2023_myeloprotective_efficacy_myelosuppression_endpoints.md) | myeloprotective efficacy (myelosuppression endpoints) ← trilaciclib · model not identified | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Li_2023_phlebitis_thrombophlebitis](drugs/drug_trilaciclib/pd_Li_2023_phlebitis_thrombophlebitis.md) | phlebitis/thrombophlebitis ← trilaciclib · model not identified | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Li_2023_time_to_event_safety_efficacy_endpoints](drugs/drug_trilaciclib/pd_Li_2023_time_to_event_safety_efficacy_endpoints.md) | time-to-event safety/efficacy endpoints ← trilaciclib · time-to-event model | — | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=trilaciclib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate, `SLC22A2` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` substrate, `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CDK2 (inhibitor), CDK4 (inhibitor), CDK5 (inhibitor), CDK6 (inhibitor), CDK7 (inhibitor), CDK9 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 20:03 | 2:22 | 2/0/0 | 1/0/0 | 0/0/0 | 66,266/11,203 | ollama / glm-5.3-flash | 2 | 1/1 | 1/1 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2023.pdf` | Li C et al., Population pharmacokinetics and exposur…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15549](https://doi.org/10.1111/bcp.15549) | [36180417](https://pubmed.ncbi.nlm.nih.gov/36180417) | Population PK (three-compartment) of trilaciclib in humans, but no numeric parameter values (CL, V, Q) appear in the evidence — likely in tables/supplement not provided. |
| `Cheng_2024.pdf` | Cheng Y et al., Myeloprotection with trilaciclib in Chi…, Lung cancer (Amsterdam, Net… (2024) | popPK | 7 | [10.1016/j.lungcan.2023.107455](https://doi.org/10.1016/j.lungcan.2023.107455) | [38224653](https://pubmed.ncbi.nlm.nih.gov/38224653) | PK of trilaciclib was a primary endpoint with NCA analysis, but no numeric parameter values (CL, V, t½) appear in the evidence provided. |
| `Li_2024.pdf` | Li C et al., Effect of Hepatic Impairment on Trilaci…, Journal of clinical pharmac… (2024) | popPK | 7 | [10.1002/jcph.2435](https://doi.org/10.1002/jcph.2435) | [38639103](https://pubmed.ncbi.nlm.nih.gov/38639103) | A dedicated trilaciclib PK study in hepatic impairment, but the evidence gives only relative exposure changes (% higher AUC) without numeric CL/V or compartmental parameter values, which may be in tables/figures not provided. |

<sub>queue written 2026-10-07 20:00 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2024 | relevant | 7 | 2 | PK of trilaciclib was a primary endpoint with NCA analysis, but no numeric parameter values (CL, V, t½) appear in the evidence provided. |
| popPK | Li_2023 | relevant | 10 | 2 | Population PK (three-compartment) of trilaciclib in humans, but no numeric parameter values (CL, V, Q) appear in the evidence — likely in tables/supplement not provided. |
| popPK | Li_2024 | relevant | 7 | 3 | A dedicated trilaciclib PK study in hepatic impairment, but the evidence gives only relative exposure changes (% higher AUC) without numeric CL/V or compartmental parameter values, which may be in tables/figures not provided. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btrilaciclib%5D&body=Drug%3A%20trilaciclib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_trilaciclib/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 20:01 UTC</sub>
