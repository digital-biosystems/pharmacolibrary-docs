<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;erdafitinib&quot;}]"></div>

# erdafitinib

- **generic name:** erdafitinib
- **ATC codes:** `L01EN01`
- **DrugBank:** [DB12147](https://go.drugbank.com/drugs/DB12147) · **PubChem:** [CID 67462786](https://pubchem.ncbi.nlm.nih.gov/compound/67462786)
- **molar mass:** 446.555 g/mol (C25H30N6O2) — DrugBank
- **groups:** approved, investigational

## About

Erdafitinib is an oral protein kinase inhibitor indicated for transitional cell carcinoma. It is administered as a film-coated tablet by mouth. The drug is authorised for use in the European Union for urological neoplasms.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27077213](https://www.wikidata.org/wiki/Q27077213), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| erdafitinib | parent | 446.555 | C25H30N6O2 | DrugBank | [67462786](https://pubchem.ncbi.nlm.nih.gov/compound/67462786) | Dosne_2020, Dosne_2022 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Dosne_2020_reference](drugs/drug_erdafitinib/Erdafitinib_Dosne2020_reference.md) | — | 1-compartment (no model) | 2 | Dosne AG et al., Population Pharmacokinetics of Total an…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1547](https://doi.org/10.1002/jcph.1547) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub> | [Dosne_2022_reference](drugs/drug_erdafitinib/Erdafitinib_Dosne2022_reference.md) | — | 1-compartment (no model) | 1 | Dosne AG et al., Erdafitinib's effect on serum phosphate…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12727](https://doi.org/10.1002/psp4.12727) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Tosca_2022_TGI](drugs/drug_erdafitinib/pd_Tosca_2022_TGI.md) | tumor growth ← erdafitinib · disease-progression model | — | Tosca EM et al., A translational model-based approach to…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04370-7](https://doi.org/10.1007/s00280-021-04370-7) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Dosne_2022_PO4](drugs/drug_erdafitinib/pd_Dosne_2022_PO4.md) | serum phosphate ← free erdafitinib · direct linear effect | — | Dosne AG et al., Erdafitinib's effect on serum phosphate…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12727](https://doi.org/10.1002/psp4.12727) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:58 | 0:05 | 2/0/0 | 1/1/0 | 0/0/0 | 3,983/166 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | De_2024 | irrelevant | 1 | 0 | The paper describes a simulation-based reinforcement learning framework using a literature PopPK model but does not report original quantitative PK parameter values for erdafitinib. |
| PGx | De_2024 | not_relevant | 0 | 0 | The paper focuses on reinforcement learning and PK-PD modeling for dosing optimization in a simulated population and does not report any pharmacogenomic effects or genetic variants influencing PK/PD parameters. |
| PGx | Dosne_2020 | not_relevant | 0 | 0 | The study identifies clinical covariates (sex, renal function, weight) but does not report any pharmacogenomic effects or gene variant associations on erdafitinib PK/PD. |
| popPK | Dosne_2022 | relevant | 9 | 3 | The paper describes a population PK-PD model for erdafitinib and reports apparent oral clearance and half-life in the text, but the full compartmental parameter estimates (V, Q, etc.) are not present in the provided evidence. |
| PGx | Dosne_2022 | not_relevant | 0 | 0 | The paper focuses on demographic and physiological covariates (e.g., sex, weight, renal function) and drug concentrations, but does not investigate or report any gene variants or genotypes. |
| popPK | Dosne_2022_2 | irrelevant | 2 | 1 | Human exposure–response analysis uses a previously developed PK-PD model but reports no erdafitinib disposition parameters; model details are cited and some results are in unprovided supplementary material. |
| popPK | Li_2020 | relevant | 9 | 4 | The paper describes a population PK analysis of erdafitinib and reports protein binding parameters (fu, binding constants) and qualitative clearance relationships, but specific CL, V, or Q values are not explicitly listed in the provided text. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The study analyzes the effect of plasma protein binding levels (AGP/albumin concentrations) on pharmacokinetics, not the effect of genetic variants or genotypes. |
| popPK | Tosca_2022 | relevant | 8 | 4 | Reports a compartmental PK model (one-compartment, linear absorption) for erdafitinib in animals with specific efficacy concentration ranges, though primary disposition parameters (CL, V) are not explicitly listed in the text provided. |
| PGx | Tosca_2022 | not_relevant | 0 | 0 | The paper describes a translational PK/PD modeling study using preclinical animal data to inform dosing, with no mention of human gene variants or pharmacogenomics. |
| popPK | Zhu_2024 | irrelevant | 2 | 0 | This is a drug-drug interaction study focusing on the PK of midazolam and metformin, not erdafitinib's own disposition parameters. |
| PGx | Zhu_2024 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (effect of erdafitinib on midazolam/metformin PK), not the effect of a gene variant/genotype on erdafitinib's PK or PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Berdafitinib%5D&body=Drug%3A%20erdafitinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_erdafitinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:57 UTC</sub>
