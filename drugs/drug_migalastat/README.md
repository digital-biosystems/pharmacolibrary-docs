<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;migalastat&quot;}]"></div>

# migalastat

- **generic name:** migalastat
- **ATC codes:** `A16AX14`
- **DrugBank:** [DB05018](https://go.drugbank.com/drugs/DB05018) · **PubChem:** [CID 176077](https://pubchem.ncbi.nlm.nih.gov/compound/176077)
- **molar mass:** 163.1717 g/mol (C6H13NO4) — DrugBank
- **groups:** approved, investigational

## About

Migalastat is used to treat Fabry disease. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q161613](https://www.wikidata.org/wiki/Q161613) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| migalastat | parent | 163.172 | C6H13NO4 | DrugBank | [176077](https://pubchem.ncbi.nlm.nih.gov/compound/176077) | Johnson_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Johnson_2024_subjects_with_esrd](drugs/drug_migalastat/Migalastat_Johnson2024_subjects_with_esrd.md) | — | 1-compartment (no model) | 1 | Johnson FK et al., Pharmacokinetic evaluation of single-do…, PloS one (2024) | [10.1371/journal.pone.0314030](https://doi.org/10.1371/journal.pone.0314030) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ subjects_with_esrd_2](drugs/drug_migalastat/Migalastat_Johnson2024_subjects_with_esrd_2.md) | — | 1-compartment (no model) | 1 |  |  |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **GLA** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Germain_2012](drugs/drug_migalastat/pgx_Germain_2012_GLA_Q100.md) | Germain DP et al., Safety and pharmacodynamic effects of a…, Orphanet journal of rare di… (2012) | [10.1186/1750-1172-7-91](https://doi.org/10.1186/1750-1172-7-91) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=migalastat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GLA (stabilization), GLA (target), SLC5A1 (inhibitor), SLC5A1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:53 | 1:46 | 0/2/0 | 0/0/0 | 0/0/1 | 105,984/5,743 | einfracz / qwen3.8-27b | 9 | 1/11 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 40 matched, 40 returned
- **screened:** 5  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gossan_2015.pdf` | Gossan DP et al., Glycosidase inhibitors from the roots o…, Phytochemistry (2015) | pd | 4 | [10.1016/j.phytochem.2014.10.029](https://doi.org/10.1016/j.phytochem.2014.10.029) | [25468536](https://www.ncbi.nlm.nih.gov/pubmed/25468536) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 17:51 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Asano_2000 | irrelevant | 0 | 0 | The paper studies 1-deoxygalactonojirimycin (miglustat) in vitro for Fabry disease, not migalastat, and contains no pharmacokinetic parameters. |
| popPK | Bach_2023 | relevant | 8 | 0 | The paper describes a pharmacometric model for migalastat, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Battaglia_2026 | irrelevant | 0 | 0 | The study evaluates the efficacy of dapagliflozin for renal outcomes in Fabry disease patients, and migalastat is listed only as a stable background therapy rather than the subject of PK analysis. |
| popPK | Benjamin_2009 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of the drug's effect on enzyme levels, reporting no pharmacokinetic parameters (CL, V, ka, t1/2). |
| popPK | Benjamin_2017 | irrelevant | 0 | 0 | The paper describes a pharmacogenetic assay for patient selection and reports pharmacodynamic outcomes, not pharmacokinetic parameters for migalastat. |
| PD | Benjamin_2017 | not_relevant | 2 | 1 | The paper validates a pharmacogenetic assay using clinical PD outcomes (WBC activity, biomarkers) but does not report a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for migalastat. |
| PGx | Benjamin_2017 | not_relevant | 2 | 0 | The paper describes a diagnostic assay for patient selection based on enzyme amenable-ness but does not report specific pharmacokinetic or pharmacodynamic effect sizes for distinct genotypes. |
| PGx | Besada_2021 | not_relevant | 0 | 0 | The paper studies the stabilization of the alpha-Galactosidase A enzyme (the drug target in Fabry disease) by new compounds, not the pharmacogenomics of Migalastat. |
| popPK | Bichet_2021 | irrelevant | 0 | 0 | The paper is a pharmacodynamic biomarker study assessing lyso-Gb3 levels and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for migalastat. |
| PD | Bichet_2021 | not_relevant | 2 | 0 | The paper assesses the correlation between a biomarker (lyso-Gb3) and clinical outcomes, finding no significant relationship, and does not report a concentration-effect or dose-response model with numeric PD parameters for migalastat. |
| PGx | Bichet_2021 | not_relevant | 0 | 0 | The paper evaluates the utility of a pharmacodynamic biomarker (lyso-Gb3) for monitoring treatment response but does not report how specific genetic variants alter PK or PD parameters. |
| popPK | Bichet_2023 | irrelevant | 0 | 0 | The paper is a Delphi consensus study on clinical management and monitoring guidelines for Fabry disease, not a pharmacokinetic study, and contains no quantitative PK parameters for migalastat. |
| PD | Bichet_2023 | not_relevant | 0 | 0 | The paper is a consensus guideline (Delphi study) regarding clinical management and monitoring, containing no pharmacokinetic or pharmacodynamic modeling or numeric PD parameters. |
| PGx | Eleftheriadis_2025 | not_relevant | 0 | 0 | The paper is a clinical case report describing the efficacy and safety of migalastat in a specific patient, without analyzing the impact of genetic variants on drug pharmacokinetics or pharmacodynamics parameters. |
| PGx | Fantur_2012 | not_relevant | 0 | 0 | The paper discusses pharmacological chaperones for GM1-gangliosidosis and does not involve the drug migalastat. |
| popPK | Germain_2012 | irrelevant | 1 | 0 | The paper is a pharmacodynamic study reporting enzyme activity and substrate levels, not a pharmacokinetic study with quantitative disposition parameters (CL, V, Q, ka) for migalastat. |
| PGx | Germain_2019 | not_relevant | 3 | 5 | The paper compares efficacy across different GLA variants (phenotypes) but does not report how specific genotypes alter the PK (e.g., AUC, Cmax) or specific PD parameters of the drug (e.g., target engagement distinct from disease markers), nor does it fit a statistical model for genetic effects on drug exposure. |
| popPK | Giugliani_2013 | irrelevant | 0 | 0 | The study reports safety and pharmacodynamic effects (GL-3 levels, enzyme activity) but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for migalastat. |
| PD | Giugliani_2013 | not_relevant | 3 | 1 | The paper reports qualitative pharmacodynamic effects (decreases in GL-3) and dose trends in a small cohort but does not provide numeric PD parameters (Emax, EC50) or a quantitative exposure-response model. |
| popPK | Gossan_2015 | irrelevant | 0 | 0 | The paper describes the isolation and enzymatic inhibition of natural products from Glyphaea brevis and does not involve migalastat or pharmacokinetic parameters. |
| PD | Gossan_2015 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50/Ki) for natural products from Glyphaea brevis, not pharmacodynamic or exposure-response data for the drug migalastat. |
| PD | Johnson_2013 | not_relevant | 3 | 2 | The paper mentions dose-related increases in alpha-Gal A activity but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve in the provided text. |
| PD | Johnson_2024 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetics (PK) and dose selection based on PK parameters (e.g., AUC, Cmax) in ESRD patients, without reporting any pharmacodynamic (PD) or exposure-response relationship with numeric PD parameters. |
| PGx | Johnson_2024 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in subjects with end-stage renal disease (a physiological condition) versus normal renal function, without analyzing the effect of specific gene variants, genotypes, or genetic phenotypes on drug disposition or response. |
| popPK | Kato_2005 | irrelevant | 0 | 0 | The paper discusses the biological properties and enzyme inhibition of 1-deoxyazasugars, not the pharmacokinetics of migalastat. |
| PD | Kato_2005 | not_relevant | 0 | 0 | The paper discusses the biological properties and enzyme inhibition (Ki/IC50) of 1-deoxyazasugars (DNJ derivatives) but does not mention migalastat or report any pharmacodynamic exposure-response or dose-response relationship for it. |
| popPK | Leonowens_2022 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PGx | Leonowens_2022 | not_relevant | 0 | 0 | The paper focuses on renal impairment as a covariate for migalastat PK, not on gene variants or pharmacogenomics. |
| PGx | Lukas_2013 | not_relevant | 0 | 0 | The paper discusses the pharmacological chaperone DGJ, not migalastat, and focuses on enzyme function/biomarkers rather than PK/PD parameters of migalastat. |
| PGx | Lukas_2020 | not_relevant | 1 | 0 | The paper reports on the clinical amenability of gene variants to the drug, but does not analyze how genotype affects the pharmacokinetic or pharmacodynamic parameters (e.g., clearance, AUC, or target engagement) of the drug itself in patients. |
| PGx | McCarron_2026 | not_relevant | 2 | 2 | The paper reports clinical outcomes (PD) associated with disease-causing GLA variants (phenotype) rather than reporting how a pharmacogenomic variant affects the pharmacokinetics or pharmacodynamics of migalastat itself. |
| PGx | Monticelli_2023 | not_relevant | 0 | 0 | The paper investigates curcumin and DGJ in Fabry disease; it does not study the PK or PD of migalastat. |
| popPK | Nisticò_2021 | irrelevant | 0 | 0 | The paper is a review focusing on the pharmacokinetics of agalsidase alpha and beta (ERT), with migalastat mentioned only as a background therapy without any quantitative PK parameters reported. |
| PD | Nisticò_2021 | not_relevant | 1 | 0 | The paper is a review focusing on enzyme replacement therapy (agalsidase) and only qualitatively mentions migalastat without providing any numeric PD parameters or exposure-response data. |
| PGx | Nowak_2020 | not_relevant | 4 | 5 | Reports association between genotype and response/efficacy but lacks formal pharmacokinetic parameter (e.g., AUC) or dose-adjusted quantitative PD modeling required for pharmacogenomic effect size extraction. |
| PGx | Perretta_2025 | not_relevant | 5 | 2 | The text discusses patient eligibility based on GLA variants (amenable vs non-amenable) but does not report specific quantitative changes in PK or PD parameters resulting from genetic variants. |
| popPK | Ramaswami_2025 | irrelevant | 2 | 0 | The paper explicitly states that pharmacokinetic results were reported previously and focuses on safety and efficacy outcomes, with no quantitative PK parameter values present in the provided evidence. |
| PD | Ramaswami_2025 | not_relevant | 1 | 0 | The text reports qualitative stability of pharmacodynamic markers (lyso-Gb3) and clinical outcomes but does not provide numeric PD parameters or an exposure-response relationship. |
| PGx | Ramaswami_2025 | not_relevant | 1 | 2 | The paper reports safety and efficacy outcomes in a specific population (adolescents with amenable GLA variants) but does not analyze how specific genetic variants affect pharmacokinetic or pharmacodynamic parameters via a genetic model. |
| PGx | Saeed_2022 | not_relevant | 0 | 0 | The paper is a general review of Fabry disease and cardiac manifestations; it mentions migalastat as a treatment option but provides no data on gene variants affecting the drug's PK or PD parameters. |
| popPK | Welford_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lucerastat, with migalastat serving only as a comparator and no pharmacokinetic parameters reported. |
| PD | Welford_2018 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50, % reduction) for lucerastat, not migalastat; migalastat is only mentioned as a comparator without specific numeric PD data provided in the text. |
| PGx | Yam_2005 | not_relevant | 0 | 0 | The paper discusses the mechanism of action of a chaperone (1-deoxygalactonojirimycin) for Fabry disease, but does not report pharmacogenomic effects of migalastat. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmigalastat%5D&body=Drug%3A%20migalastat%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_migalastat/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 17:51 UTC</sub>
