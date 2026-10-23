<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Durlobactam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durlobactam_Onita2026_reference&quot;,&quot;label&quot;:&quot;Onita_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durlobactam/Durlobactam_Onita2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Durlobactam

- **generic name:** Durlobactam
- **ATC codes:** none (no WHO ATC code)
- **DrugBank:** [DB16704](https://go.drugbank.com/drugs/DB16704) · **PubChem:** none
- **molar mass:** 277.25 g/mol (C8H11N3O6S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Durlobactam is a diazabicyclooctane non-beta-lactam, beta-lactamase inhibitor. It is typically given in combination with [sulbactam] to protect it from degradation by certain serine-beta-lactamases.[L47336] The combination product of durlobactam and sulbactam was first approved by the FDA in May 2023.[A263306] It is used to treat hospital-acquired bacterial pneumonia and ventilator-associated bacterial pneumonia (HABP/VABP), caused by susceptible isolates of _Acinetobacter baumannii-calcoaceticus_ complex.[L47336]

**Indication.** In combination with [sulbactam], durlobactam is indicated in adults for the treatment of hospital-acquired bacterial pneumonia and ventilator-associated bacterial pneumonia (HABP/VABP), caused by susceptible isolates of _Acinetobacter baumannii-calcoaceticus_ complex.[L47336]

<p><small>Source: <a href="https://go.drugbank.com/drugs/DB16704">DrugBank DB16704</a> · <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| durlobactam | parent | 277.25 | C8H11N3O6S | DrugBank | — | Cammarata_2025 |

## Start here

> **Onita_2026_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/drug_durlobactam/Durlobactam_Onita2026_reference.md?tab=Simulation) · [record](drugs/drug_durlobactam/Durlobactam_Onita2026_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 7.65 | L/h | 7.65 L/h | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Onita_2026_reference](drugs/drug_durlobactam/Durlobactam_Onita2026_reference.md) |
| V | V1 | 4.75 | L | 4.75 L | review reference | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Onita_2026_reference](drugs/drug_durlobactam/Durlobactam_Onita2026_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Onita_2026_reference](drugs/drug_durlobactam/Durlobactam_Onita2026_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Onita T et al., Cerebrospinal Pharmacokinetic and Pharm…, Journal of the Pediatric In… (2026) | [10.1093/jpids/piag017](https://doi.org/10.1093/jpids/piag017) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub> | [Cammarata_2025_final](drugs/drug_durlobactam/Durlobactam_Cammarata2025_final.md) | — | general linear (no model) | 10 (+1 cov.) | Cammarata AP et al., Population pharmacokinetic analyses for…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00485-24](https://doi.org/10.1128/aac.00485-24) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ final_final_model_shrink](drugs/drug_durlobactam/Durlobactam_Cammarata2025_final_final_model_shrink.md) | — | general linear (no model) | 0 |  |  |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=durlobactam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-22 10:36 | 6:38 | 1/2/0 | 0/0/0 | 0/0/0 | 235,833/15,594 | einfracz / qwen3.8-27b | 26 | 0/12 | 26/0 | 0 |

## Coverage

- **PubMed hits:** 82 matched, 54 returned
- **screened:** 5  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abouelhassan_2025 | relevant | 9 | 3 | The paper reports quantitative ex-vivo transmembrane clearance (CLTM) and AUC values for durlobactam, but the specific population PK parameters (CL, V) are stated to be from an established model "on file" rather than listed in the text. |
| popPK | Cojutti_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of piperacillin and tazobactam, not durlobactam. |
| PGx | Gatti_2026 | not_relevant | 0 | 0 | The paper is a clinical review on real-world evidence for antibiotic use and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The study evaluates FL058, not durlobactam. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on bacterial resistance selection dynamics using beta-lactam inhibitors (clavulanic acid, sulbactam, tazobactam), not a pharmacokinetic study reporting disposition parameters for durlobactam. |
| popPK | Mezcord_2026 | irrelevant | 0 | 0 | The paper investigates cefiderocol resistance mechanisms in Acinetobacter baumannii and only mentions durlobactam in passing as a last-line antimicrobial agent, providing no pharmacokinetic data. |
| popPK | ODonnell_2024 | irrelevant | 1 | 2 | This is an in vitro pharmacodynamic (PD) study using hollow fiber and one-compartment infection models, not a pharmacokinetic study reporting population parameters (CL, V) or half-life for the drug in a biological system. |
| popPK | Onita_2026 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for sulbactam, not durlobactam, which is only mentioned as a co-administered agent in the introduction. |
| popPK | Pai_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ceftolozane and tazobactam; durlobactam is only mentioned in the discussion as another approved drug. |
| popPK | Zasheva_2024 | irrelevant | 0 | 0 | The paper is a review of market access and regulatory approval timelines for new antibacterial drugs, containing no pharmacokinetic data for durlobactam. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdurlobactam%5D&body=Drug%3A%20durlobactam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_durlobactam/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-22 10:31 UTC</sub>
