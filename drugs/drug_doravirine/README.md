<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;doravirine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doravirine_Thoueille2024_reference&quot;,&quot;label&quot;:&quot;Thoueille_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# doravirine

- **generic name:** doravirine
- **ATC codes:** `J05AG06`, `J05AR24`
- **DrugBank:** [DB12301](https://go.drugbank.com/drugs/DB12301) · **PubChem:** [CID 58460047](https://pubchem.ncbi.nlm.nih.gov/compound/58460047)
- **molar mass:** 425.749 g/mol (C17H11ClF3N5O3) — DrugBank
- **groups:** approved, investigational

## About

Doravirine is an antiviral medicine used to treat HIV infections, acting as a non-nucleoside reverse transcriptase inhibitor. It is authorised in the European Union and is used in combination antiviral treatment for HIV.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6885419](https://www.wikidata.org/wiki/Q6885419) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doravirine | parent | 425.749 | C17H11ClF3N5O3 | DrugBank | [58460047](https://pubchem.ncbi.nlm.nih.gov/compound/58460047) | Thoueille_2024 |

## Start here

> **Thoueille_2024_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> real-world people with HIV, n = 146. [Run it in the simulator](drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md?tab=Simulation) · [record](drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 3.98 | L/h | 3.98 L/h | real-world people with HIV | 146 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Thoueille_2024_reference](drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md) |
| V | V | 82.2 | L | 82.2 L | real-world people with HIV | 146 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Thoueille_2024_reference](drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md) |
| ka | kabs | 1.9 | 1/h | 1.9 h⁻¹ | real-world people with HIV | 146 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Thoueille_2024_reference](drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>stale — current check: Not simulated</sub> | [Thoueille_2024_reference](drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+1 cov.) | Thoueille P et al., Population pharmacokinetic analysis of…, British journal of clinical… (2024) | [10.1111/bcp.15975](https://doi.org/10.1111/bcp.15975) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=doravirine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:32 | 1:24 | 1/0/0 | 0/0/0 | 0/0/0 | 96,244/5,268 | ollama / glm-5.3-flash | 3 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yee_2019.pdf` | Yee KL et al., Population Pharmacokinetics of Doraviri…, Antimicrobial agents and ch… (2019) | popPK | 10 | [10.1128/AAC.02502-18](https://doi.org/10.1128/AAC.02502-18) | [30745394](https://pubmed.ncbi.nlm.nih.gov/30745394) | Population PK model of doravirine in humans, but no numeric parameter values (CL, V, etc.) appear in the evidence provided. |
| `Fromage_2024.pdf` | Fromage Y et al., In Silico Pharmacokinetics Evaluation o…, Therapeutic drug monitoring (2024) | popPK | 6 | [10.1097/FTD.0000000000001169](https://doi.org/10.1097/FTD.0000000000001169) | [38158596](https://pubmed.ncbi.nlm.nih.gov/38158596) | Simulation study using population PK models for doravirine, but only simulated concentrations are reported; the actual PK parameter values (CL, V, etc.) live in the underlying published models, not in this evidence. |

<sub>queue written 2026-10-07T16:31:27.418290+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fromage_2024 | relevant | 6 | 3 | Simulation study using population PK models for doravirine, but only simulated concentrations are reported; the actual PK parameter values (CL, V, etc.) live in the underlying published models, not in this evidence. |
| popPK | Li_2022 | irrelevant | 2 | 1 | This is a review of HIV RT inhibitors; doravirine is discussed qualitatively with no quantitative PK parameters (CL, V, ka, or population-PK model) for doravirine present in the evidence. |
| popPK | Moltó_2022 | irrelevant | 3 | 4 | This is a dialysis removal study reporting extraction ratio and concentrations, not disposition PK parameters (CL, V, half-life, or a PK model) for doravirine. |
| popPK | Sun_2024 | irrelevant | 2 | 3 | Doravirine is only a comparator; only T1/2 and F are given (no CL/V/compartmental model), and the PK data appear to be from animal testing of the novel compound. |
| popPK | Vaddady_2020 | relevant | 8 | 4 | Population PK model for doravirine in humans, but final model parameter values (CL/F, V/F) are in Table S1 of supplemental material not provided; only AUC/C24/Cmax summary values appear. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | Medicinal chemistry study of doravirine analogs/prodrugs with only potency and solubility data; no PK parameters. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | Doravirine is only a potency comparator; the paper studies a different drug (compound 11h) with in vitro data, no PK disposition parameters for doravirine. |
| popPK | Yee_2019 | relevant | 10 | 3 | Population PK model of doravirine in humans, but no numeric parameter values (CL, V, etc.) appear in the evidence provided. |
| popPK | Zhao_2022 | irrelevant | 3 | 4 | Doravirine is only the comparator/lead scaffold; only F and T1/2 (no CL/V or PK model) are reported for it, with the new analog ZLM-66 as the subject. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 16:31 UTC</sub>
