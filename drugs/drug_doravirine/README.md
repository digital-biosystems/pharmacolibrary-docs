<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;doravirine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doravirine_Thoueille2024_reference&quot;,&quot;label&quot;:&quot;Thoueille_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# doravirine

- **generic name:** doravirine
- **ATC codes:** `J05AG06`, `J05AR24`
- **DrugBank:** [DB12301](https://go.drugbank.com/drugs/DB12301) · **PubChem:** [CID 58460047](https://pubchem.ncbi.nlm.nih.gov/compound/58460047)
- **molar mass:** 425.749 g/mol (C17H11ClF3N5O3) — DrugBank
- **groups:** approved, investigational

## About

Doravirine is a non-nucleoside reverse transcriptase inhibitor used to treat HIV/AIDS. It is taken orally as a tablet and is well absorbed from the gut. It is authorised in the European Union and used in combination with other HIV drugs.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q6885419](https://www.wikidata.org/wiki/Q6885419), [Wikipedia](https://en.wikipedia.org/wiki/Doravirine?oldid=1369634234) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doravirine | parent | 425.749 | C17H11ClF3N5O3 | DrugBank | [58460047](https://pubchem.ncbi.nlm.nih.gov/compound/58460047) | Thoueille_2024 |

## Start here

> **Thoueille_2024_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> real-world people with HIV, n = 146. [Run it in the simulator](drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md?tab=Simulation) · [record](drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: T1_cmax</sub><br><sub>blocking: unreported model parameter default(s): F</sub> | [Thoueille_2024_reference](drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+1 cov.) | Thoueille P et al., Population pharmacokinetic analysis of…, British journal of clinical… (2024) | [10.1111/bcp.15975](https://doi.org/10.1111/bcp.15975) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yee_2019_proportion_of_individuals_achieving_50_copies_ml](drugs/drug_doravirine/pd_Yee_2019_proportion_of_individuals_achieving_50_copies_ml.md) | proportion of individuals achieving &lt;50 copies/ml ← doravirine · categorical (graded) response model | — | Yee KL et al., Population Pharmacokinetics of Doraviri…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02502-18](https://doi.org/10.1128/AAC.02502-18) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yee_2019_virologic_failure](drugs/drug_doravirine/pd_Yee_2019_virologic_failure.md) | virologic failure ← doravirine · categorical (graded) response model | — | Yee KL et al., Population Pharmacokinetics of Doraviri…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02502-18](https://doi.org/10.1128/AAC.02502-18) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:42 | 0:09 | 1/0/0 | 2/0/0 | 0/0/0 | 9,483/826 | einfracz / qwen3.8-27b | 3 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fromage_2024 | irrelevant | 0 | 0 | The study is an in silico simulation using pre-existing models and does not report the original quantitative pharmacokinetic parameter estimates (CL, V, etc.) for doravirine. |
| PGx | Fromage_2024 | not_relevant | 0 | 0 | The paper is an in silico pharmacokinetic simulation of drug forgiveness (adherence impact) and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Li_2022 | irrelevant | 1 | 0 | This is a review article, and while it mentions doravirine, the provided text snippet does not contain specific quantitative population-pharmacokinetic parameter values (CL, V, etc.) for doravirine. |
| PGx | Li_2022 | not_relevant | 0 | 0 | The paper is a general review of HIV RT inhibitors and does not report any pharmacogenomic effects on the PK or PD of doravirine. |
| popPK | Moltó_2022 | irrelevant | 2 | 3 | The study reports dialysis extraction ratios and point plasma concentrations but does not provide quantitative compartmental pharmacokinetic parameters (e.g., CL, Vd) or a population PK model for doravirine. |
| PGx | Moltó_2022 | not_relevant | 0 | 0 | The paper investigates the effect of haemodialysis on doravirine clearance, not the impact of any genetic variant or genotype. |
| popPK | Sun_2024 | irrelevant | 3 | 1 | The paper focuses on a new compound (10n) and uses doravirine only as a comparator, providing no disposition parameters (CL, V) for doravirine itself. |
| PGx | Sun_2024 | not_relevant | 0 | 0 | The paper reports the discovery and PK/PD profiles of a new compound (10n) compared to doravirine, but does not investigate pharmacogenomic effects of gene variants on doravirine's PK or PD parameters. |
| popPK | Vaddady_2020 | relevant | 8 | 4 | Population PK model for doravirine in humans, but final model parameter values (CL/F, V/F) are in Table S1 of supplemental material not provided; only AUC/C24/Cmax summary values appear. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper reports in vitro biological evaluation (EC50) of doravirine derivatives and prodrugs, not pharmacokinetic disposition parameters. |
| PGx | Wang_2019 | not_relevant | 0 | 0 | The paper describes the design and in vitro biological evaluation of novel doravirine derivatives and prodrugs, but does not report pharmacogenomic effects on doravirine's PK or PD parameters. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and biological characterization of novel HIV inhibitors, with doravirine only mentioned as a comparator agent. |
| PGx | Wang_2024 | not_relevant | 0 | 0 | The paper describes the design and synthesis of new NNRTI compounds and does not report on pharmacogenomic effects on doravirine. |
| popPK | Yee_2019 | relevant | 10 | 0 | The paper describes a population PK model for doravirine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Yee_2019 | not_relevant | 0 | 0 | The paper analyzes standard demographic and physiological covariates (weight, age, renal function) but does not assess genetic variants or genotypes. |
| popPK | Zhao_2022 | relevant | 4 | 6 | The study reports pharmacokinetic parameters (half-life, bioavailability) for doravirine as a comparator in an animal model, providing quantitative context for the subject drug's disposition. |
| PGx | Zhao_2022 | not_relevant | 0 | 0 | The paper describes the discovery and pharmacokinetic comparison of a new analog (ZLM-66) to doravirine, but does not report any pharmacogenomic effects (gene variants) on doravirine's PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoravirine%5D&body=Drug%3A%20doravirine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_doravirine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 16:31 UTC</sub>
