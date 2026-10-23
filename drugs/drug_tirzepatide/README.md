<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;tirzepatide&quot;}]"></div>

# tirzepatide

- **generic name:** tirzepatide
- **ATC codes:** `A10BX16`
- **DrugBank:** [DB15171](https://go.drugbank.com/drugs/DB15171) · **PubChem:** none
- **groups:** approved, investigational

## About

Tirzepatide is a blood glucose lowering drug used to treat type 2 diabetes, and also obesity and overweight. It is an approved medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q108324770](https://www.wikidata.org/wiki/Q108324770) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tirzepatide | parent | 4813.53 | C225H348N48O68 | PubChem | [163285897](https://pubchem.ncbi.nlm.nih.gov/compound/163285897) | Schneck_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Schneck_2024_reference](drugs/drug_tirzepatide/Tirzepatide_Schneck2024_reference.md) | — | 2-compartment (no model) | 0 | Schneck K et al., Population pharmacokinetics of the GIP/…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13099](https://doi.org/10.1002/psp4.13099) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Chigutsa_2025_FFM](drugs/drug_tirzepatide/pd_Chigutsa_2025_FFM.md) | fat-free mass ← tirzepatide · indirect response — drug inhibits the production of fat-free mass | — | Chigutsa E et al., A Pharmacometric Method for Quantitativ…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3750](https://doi.org/10.1002/cpt.3750) |
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Chigutsa_2025_fat_mass](drugs/drug_tirzepatide/pd_Chigutsa_2025_fat_mass.md) | fat mass ← tirzepatide · indirect response — drug inhibits the production of fat mass | — | Chigutsa E et al., A Pharmacometric Method for Quantitativ…, Clinical pharmacology and t… (2025) | [10.1002/cpt.3750](https://doi.org/10.1002/cpt.3750) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **APOE** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Song_2025](drugs/drug_tirzepatide/pgx_Song_2025_APOE_Q100.md) | Song Z et al., Pharmacogenomics of Tirzepatide: Genomi…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18091261](https://doi.org/10.3390/ph18091261) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **GLP1R** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Song_2025](drugs/drug_tirzepatide/pgx_Song_2025_GLP1R_Q100.md) | Song Z et al., Pharmacogenomics of Tirzepatide: Genomi…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18091261](https://doi.org/10.3390/ph18091261) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **IL6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Song_2025](drugs/drug_tirzepatide/pgx_Song_2025_IL6_Q100.md) | Song Z et al., Pharmacogenomics of Tirzepatide: Genomi…, Pharmaceuticals (Basel, Swi… (2025) | [10.3390/ph18091261](https://doi.org/10.3390/ph18091261) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **GIPR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Su_2026](drugs/drug_tirzepatide/pgx_Su_2026_GIPR_Q100.md) | Su QJ et al., Genetic predictors of GLP1 receptor ago…, Nature (2026) | [10.1038/s41586-026-10330-z](https://doi.org/10.1038/s41586-026-10330-z) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **GLP1R** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Su_2026](drugs/drug_tirzepatide/pgx_Su_2026_GLP1R_Q100.md) | Su QJ et al., Genetic predictors of GLP1 receptor ago…, Nature (2026) | [10.1038/s41586-026-10330-z](https://doi.org/10.1038/s41586-026-10330-z) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tirzepatide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: APOE (target), GIPR (target), GLP1R (target), IL6 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 04:58 | 7:49 | 0/1/0 | 1/0/0 | 0/0/5 | 160,427/16,465 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 0/10 | 10/0 | 1 |

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 7  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aminorroaya_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of cardiometabolic efficacy outcomes (metabolic syndrome, BMI, lipids) and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for tirzepatide. |
| popPK | Barrett_2025 | irrelevant | 0 | 0 | The study is a health economics and outcomes research analysis comparing weight loss and costs, containing no pharmacokinetic parameters for tirzepatide. |
| popPK | Borlaug_2025 | irrelevant | 0 | 0 | The paper is a clinical outcome analysis of the SUMMIT trial focusing on heart failure endpoints and weight loss, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for tirzepatide. |
| popPK | Chigutsa_2025 | relevant | 8 | 2 | The paper describes a population PK/PD model for tirzepatide in humans and provides the NONMEM code with structural parameters (allometric exponents, fixed fractions), but the specific numeric estimates for Clearance (CL), Volume (V), and Absorption Rate (ka) are not present in the provided text or code (they are referenced as being in a separate publication or Table 1 which is not included). |
| popPK | Garg_2025 | irrelevant | 0 | 0 | The study is a retrospective chart review of clinical outcomes (weight, HbA1c, biomarkers) and does not report any pharmacokinetic parameters for tirzepatide. |
| popPK | Gonzalez_2026 | irrelevant | 0 | 0 | The study is a clinical outcomes analysis of glycemic and weight changes, not a pharmacokinetic study, and reports no PK parameters for tirzepatide. |
| PGx | Kuryłowicz_2026 | not_relevant | 2 | 0 | The paper is a narrative review that mentions a GWAS on GLP1R/GIPR variants but explicitly states the findings are hypothesis-generating and unreplicated, without providing specific quantitative PK/PD effect sizes for tirzepatide. |
| PGx | Lang_2026 | not_relevant | 0 | 0 | The paper is a clinical case series reporting weight loss outcomes in patients with hypothalamic obesity and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Nicze_2026 | not_relevant | 2 | 3 | The paper is a narrative review discussing general factors in obesity treatment failure and mentions pharmacogenomic variants qualitatively, but it does not report specific quantitative PK/PD parameter changes for tirzepatide. |
| PGx | Shin_2026 | not_relevant | 5 | 5 | The paper is a narrative review summarizing genetic predictors of clinical efficacy (glycemic/weight response) rather than reporting a specific pharmacokinetic or pharmacodynamic parameter change driven by a gene variant. |
| popPK | Sikorska_2026 | irrelevant | 0 | 0 | The paper is a clinical service evaluation reporting weight loss and metabolic outcomes, containing no pharmacokinetic parameters (CL, V, ka, etc.) for tirzepatide. |
| PGx | Song_2025 | not_relevant | 2 | 2 | The paper is a review that discusses hypothetical gene-disease-drug interaction models and qualitative associations (e.g., reduced weight loss) without reporting fitted quantitative pharmacokinetic or pharmacodynamic effect sizes for specific genotypes. |
| PGx | Yamanouchi_2025 | not_relevant | 0 | 0 | The paper is a comprehensive review of incretin physiology and cardiovascular effects, mentioning tirzepatide only as a therapeutic example without reporting any pharmacogenomic data or genotype-specific PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btirzepatide%5D&body=Drug%3A%20tirzepatide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tirzepatide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-05 04:52 UTC</sub>
