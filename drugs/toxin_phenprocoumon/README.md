<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phenprocoumon&quot;}]"></div>

# Phenprocoumon

- **generic name:** Phenprocoumon
- **T3DB:** [T3D3105](http://www.t3db.ca/toxins/T3D3105) · **DrugBank:** [DB00946](https://go.drugbank.com/drugs/DB00946) · **PubChem:** [CID 54680692](https://pubchem.ncbi.nlm.nih.gov/compound/54680692)
- **groups:** approved, investigational, withdrawn

## About

Phenprocoumon is only found in individuals that have used or taken this drug. It is a coumarin derivative that acts as a long acting oral anticoagulant. [PubChem] Phenprocoumon inhibits vitamin K reductase, resulting in depletion of the reduced form of vitamin K (vitamin KH2). As vitamin K is a cofactor for the carboxylation of glutamate residues on the N-terminal regions of vitamin K-dependent proteins, this limits the gamma-carboxylation and subsequent activation of the vitamin K-dependent coagulant proteins. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** ingestion, dermal. Bioavailability is close to 100%.
- **Sources and uses:** Phenprocoumon is an anticoagulant drug. Used for the prevention and treatment of thromboembolic disease including venous thrombosis, thromboembolism, and pulmonary embolism as well as for the prevention of ischemic stroke in patients with atrial fibrillation (AF).
- **Mechanism of toxicity:** Phenprocoumon inhibits vitamin K reductase, resulting in depletion of the reduced form of vitamin K (vitamin KH2). As vitamin K is a cofactor for the carboxylation of glutamate residues on the N-terminal regions of vitamin K-dependent proteins, this limits the gamma-carboxylation and subsequent activation of the vitamin K-dependent coagulant proteins. …
- **Health effects:** Phenprocoumon is an anticoagulant and may cause internal bleeding, leading to shock, loss of consciousness, and eventually death.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3105">T3DB T3D3105</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 435-97-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:50438">ChEBI 50438</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Abduljalil_2013_reference](drugs/toxin_phenprocoumon/Phenprocoumon_Abduljalil2013_reference.md) | — | 1-compartment (no model) | 0 | Abduljalil K et al., Quantifying the effect of covariates on…, Clinical pharmacokinetics (2013) | [10.1007/s40262-013-0043-z](https://doi.org/10.1007/s40262-013-0043-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">Reproduces with caveats</span> | [Abduljalil_2013_INR](drugs/toxin_phenprocoumon/pd_Abduljalil_2013_INR.md) | INR ← phenprocoumon · indirect response — drug inhibits the loss of INR | — | Abduljalil K et al., Quantifying the effect of covariates on…, Clinical pharmacokinetics (2013) | [10.1007/s40262-013-0043-z](https://doi.org/10.1007/s40262-013-0043-z) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hermann_2023_phenprocoumon](drugs/toxin_phenprocoumon/pd_Hermann_2023_phenprocoumon.md) | phenprocoumon ← phenprocoumon · model not identified | — | Hermann SA et al., Pharmacokinetics of a microdosed cockta…, BMJ paediatrics open (2023) | [10.1136/bmjpo-2022-001662](https://doi.org/10.1136/bmjpo-2022-001662) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Geisen_2011](drugs/toxin_phenprocoumon/pgx_Geisen_2011_CYP2C9_safety.md) | Geisen C et al., Prediction of phenprocoumon maintenance…, European journal of clinica… (2011) | [10.1007/s00228-010-0950-y](https://doi.org/10.1007/s00228-010-0950-y) |
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Rane_2010](drugs/toxin_phenprocoumon/pgx_Rane_2010_CYP2C9_safety.md) | Rane A et al., Pharmacogenetics of anticoagulants, Human genomics and proteomi… (2010) | [10.4061/2010/754919](https://doi.org/10.4061/2010/754919) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **VKORC1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Rane_2010](drugs/toxin_phenprocoumon/pgx_Rane_2010_VKORC1_Q100.md) | Rane A et al., Pharmacogenetics of anticoagulants, Human genomics and proteomi… (2010) | [10.4061/2010/754919](https://doi.org/10.4061/2010/754919) |
| <span class="pk-badge pk-badge--red" title="not accepted.">rejected</span> | **VKORC1** | `Q22` · CL | target | [Geisen_2011](drugs/toxin_phenprocoumon/pgx_Geisen_2011_VKORC1_Q22.md) | Geisen C et al., Prediction of phenprocoumon maintenance…, European journal of clinica… (2011) | [10.1007/s00228-010-0950-y](https://doi.org/10.1007/s00228-010-0950-y) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phenprocoumon).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder/regulator, `ORM1` unknown | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` safety_allele/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: VKORC1 (inhibitor), VKORC1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 18:01 | 12:09 | 0/1/0 | 2/0/0 | 2/1/1 | 232,814/9,655 | einfracz / qwen3.8-flash-next | 12 | 1/6 | 12/0 | 0 |

## Coverage

- **PubMed hits:** 201 matched, 112 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abduljalil_2013.pdf` | Abduljalil K et al., Quantifying the effect of covariates on…, Clinical pharmacokinetics (2013) | popPK | 9 | [10.1007/s40262-013-0043-z](https://doi.org/10.1007/s40262-013-0043-z) | [23519598](https://pubmed.ncbi.nlm.nih.gov/23519598) | The paper reports specific numeric clearance fractions for phenprocoumon derived from a population pharmacokinetic model in humans. |

<sub>queue written 2026-11-12 17:54 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Baranova_2014 | not_relevant | 2 | 1 | This is a narrative review of trial designs and clinical outcomes, not a primary study reporting fitted effect sizes for pharmacokinetic or pharmacodynamic parameters. |
| PGx | Bayoumy_2026 | not_relevant | 2 | 3 | The paper reports a drug-drug interaction (thiopurines affecting phenprocoumon) in a patient with a specific TPMT phenotype, but the primary finding is the interaction itself, not the direct effect of the genotype on PK/PD, and no quantitative effect sizes are provided. |
| PGx | Cullell_2018 | not_relevant | 1 | 0 | The text is a review primarily focused on warfarin; while it mentions phenprocoumon, it reports no specific pharmacogenomic PK/PD data or effect sizes for phenprocoumon. |
| popPK | Engelhardt_1989 | irrelevant | 1 | 2 | The paper reports clinical dosing guidelines and patient outcomes (complications, efficacy) but does not provide quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Fenyvesi_2003 | irrelevant | 0 | 0 | The paper reports coagulation assay results (ECT) in patients on stable therapy, not quantitative toxicokinetic parameters like half-life, clearance, or volume of distribution for phenprocoumon. |
| PGx | García-López_2026 | not_relevant | 2 | 0 | The paper focuses on the concordance between two genetic markers (rs9934438 and rs9923231) for VKORC1 and their diagnostic performance for dose adjustment, but does not report specific quantitative changes in PK or PD parameters caused by these genotypes. |
| PGx | Harbrecht_2011 | not_relevant | 0 | 0 | The text is a general review comparing old VKA (phenprocoumon/warfarin) with new direct oral anticoagulants, mentioning genetic factors only in passing without reporting specific pharmacogenomic effects on PK/PD parameters. |
| PGx | He_1999 | not_relevant | 2 | 0 | The paper describes in vitro enzymatic mechanisms and structural binding of CYP2C9 to phenprocoumon but does not report clinical PK/PD parameters or effects of specific genetic variants on these parameters. |
| PGx | Henderson_2002 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving St John's wort and phenprocoumon but does not report any pharmacogenomic effects or gene variant associations. |
| popPK | Hermann_2023 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for direct oral anticoagulants (apixaban, rivaroxaban, edoxaban) in children; phenprocoumon is mentioned only as a comparator drug for context, with no kinetic parameters reported for it. |
| PGx | Kammerer_2004 | not_relevant | 0 | 0 | The paper describes the development and validation of an analytical method for quantifying phenprocoumon enantiomers but does not report any pharmacogenomic results or effect sizes. |
| PGx | Kammerer_2005 | not_relevant | 4 | 2 | The text explicitly states that phenprocoumon PK is only minorly dependent on CYP2C9 genotype and does not report specific quantified PK/PD changes attributable to genotype; the primary focus is metabolite identification. |
| PGx | Kammerer_2005_2 | not_relevant | 2 | 0 | The paper focuses on the development and validation of an analytical method (LC/LC-MS/MS) to measure enantiomeric ratios of metabolites, mentioning a CYP2C9 study only as context for the method's application without reporting specific genotype-phenotype effect sizes on PK/PD parameters. |
| PGx | Kimmel_2015 | not_relevant | 0 | 0 | The text discusses clinical trial outcomes regarding dosing algorithms and anticoagulation control, but does not report specific quantitative PK or PD parameter changes caused by gene variants for phenprocoumon. |
| PGx | Kohl_2000 | not_relevant | 1 | 2 | The paper reports drug-drug interactions between lornoxicam and phenprocoumon mediated by CYP2C9 enzyme inhibition, not the effect of a specific genetic variant or genotype on phenprocoumon PK/PD. |
| popPK | Langer_2009 | irrelevant | 1 | 0 | This is a general review article discussing classes of anticoagulants and pharmacogenetics without providing any specific numeric toxicokinetic parameters for phenprocoumon in its extracted text. |
| PGx | Maagdenberg_2018_2 | not_relevant | 0 | 0 | The study reports on quality of anticoagulation (TTR) and clinical outcomes (bleeding/thromboembolism) in a pediatric cohort but does not analyze or report the effect of specific gene variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Militaru_2015 | not_relevant | 2 | 3 | The paper is a review that mentions phenprocoumon primarily as part of the coumarin derivative class but reports quantitative dose reduction effects and hazard ratios almost exclusively for warfarin and acenocoumarol, citing other studies for phenprocoumon without providing specific fitted effect sizes for it. |
| PGx | Schalekamp_2007 | not_relevant | 0 | 0 | Input text missing |
| PGx | Self_2015 | not_relevant | 0 | 0 | The paper focuses on the effect of body weight, not pharmacogenomic variants, on VKA dosing. |
| popPK | Stehle_2008 | irrelevant | 2 | 0 | The paper is a review of pharmacogenetic dose requirements and does not report quantitative toxicokinetic parameters (e.g., half-lives, clearance, Vd) for phenprocoumon, only fold-change dose estimates. |
| PGx | Storelli_2016 | not_relevant | 2 | 0 | The text is an abstract of a review article and does not report specific quantitative pharmacogenomic effect sizes for phenprocoumon. |
| PGx | Suarez-Kurtz_2015 | not_relevant | 5 | 0 | Abstract only mentions general associations between genotype and stable dose requirements without reporting specific fitted effect sizes or detailed PK/PD parameter changes. |
| PGx | Tang_2015 | not_relevant | 2 | 0 | The study reports clinical outcomes of genotype-guided dosing algorithms, not the effect of gene variants on specific PK or PD parameters. |
| PGx | Treyer_2023 | not_relevant | 0 | 0 | The paper investigates herb-drug interactions involving cannabis extracts and CYP enzymes in vitro, not the effect of human genetic variants (pharmacogenomics) on phenprocoumon parameters. |
| popPK | Ufer_2005 | irrelevant | 1 | 0 | The provided text is a qualitative review discussing metabolic pathways and clinical characteristics without reporting any specific quantitative pharmacokinetic parameters (e.g., half-lives, clearance values) for phenprocoumon. |
| PGx | Ufer_2005 | not_relevant | 4 | 2 | The text is a comparative review discussing general genetic influences on vitamin K antagonists but does not report specific experimental results or fitted parameters showing how a specific gene variant changes a PK/PD parameter of phenprocoumon. |
| popPK | Verhoef_2014 | irrelevant | 2 | 0 | This is a review article focusing on pharmacogenetics and dosing algorithms, providing no specific quantitative toxicokinetic parameters for phenprocoumon. |
| PGx | Verhoef_2014 | not_relevant | 10 | 2 | The text is a review/abstract discussing pharmacogenetic algorithms generally but lacks specific fitted parameters or detailed quantitative PK/PD effect sizes for phenprocoumon. |
| PGx | Verhoef_2015 | not_relevant | 0 | 0 | The paper reports on health economic outcomes (costs and QALs) rather than specific pharmacokinetic or pharmacodynamic parameter changes caused by gene variants. |
| popPK | Wesseling_2001 | irrelevant | 0 | 0 | The paper is an epidemiological study of neurological outcomes without reporting any quantitative toxicokinetic parameters. |
| PGx | Wieringa_2024 | not_relevant | 0 | 0 | The text is a Summary of Product Characteristics (SmPC) for Depakine (valproic acid), not a pharmacogenomic study on phenprocoumon. |
| PGx | Zhang_2017 | not_relevant | 3 | 2 | The paper reports clinical outcomes (Time in Therapeutic Range) stratified by genotype-guided vs. standard dosing algorithms, rather than reporting how a specific genotype alters specific PK (e.g., AUC, CL) or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenprocoumon%5D&body=Drug%3A%20phenprocoumon%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenprocoumon/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-12 17:54 UTC</sub>
