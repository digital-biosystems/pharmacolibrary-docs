<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Methylcobalamin&quot;}]"></div>

# Methylcobalamin

- **generic name:** Methylcobalamin
- **T3DB:** [T3D0679](http://www.t3db.ca/toxins/T3D0679) · **DrugBank:** [DB03614](https://go.drugbank.com/drugs/DB03614) · **PubChem:** [CID 6436232](https://pubchem.ncbi.nlm.nih.gov/compound/6436232)
- **groups:** approved, investigational

## About

The name vitamin B12 is used in two different ways. In a broad sense it refers to a group of cobalt-containing compounds known as cobalamins - cyanocobalamin (an artifact formed as a result of the use of cyanide in the purification procedures), hydroxocobalamin and the two coenzyme forms of B12, methylcobalamin (MeB12) and 5-deoxyadenosylcobalamin (adenosylcobalamin - AdoB12). In a more specific way, the term B12 is used to refer to only one of these forms, cyanocobalamin, which is the principal B12 form used for foods and in nutritional supplements. …

- **Category:** Pollutant, Airborne Pollutant, Food Toxin, Natural Toxin
- **Route of exposure:** inhalation, oral, dermal
- **Sources and uses:** Methylcobalamin is a form of vitamin B12.
- **Mechanism of toxicity:** Cobalt is believed to exhibit its toxicity through a oxidant-based and free radical-based processes. It produces oxygen radicals and may be oxidized to ionic cobalt, causing increased lipid peroxidation, DNA damage, and inducing certain enzymes that lead to cell apoptosis. …
- **Health effects:** Exposure to high amount of cobalt can cause heart, lung, kidney, and liver damage. Skin contact is known to result in contact dermatitis. …
- **Carcinogenicity:** IARC group 2B, possibly carcinogenic to humans.
- **Minimal risk levels (ATSDR):** Chronic Inhalation: 0.0001 mg/m3; Intermediate Oral: 0.01 mg/kg/day
- **Treatment:** Treatment of cobalt poisoning is symptomatic.
- **Detected in:** cerebrospinal fluid

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0679">T3DB T3D0679</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 13422-55-4 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:28115">ChEBI 28115</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| [13C]-methylcobalamin | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Devi_2020_reference](drugs/toxin_methylcobalamin/Methylcobalamin_Devi2020_reference.md) | — | 1-compartment (no model) | 0 | Devi S et al., Measuring vitamin B-12 bioavailability…, The American journal of cli… (2020) | [10.1093/ajcn/nqaa221](https://doi.org/10.1093/ajcn/nqaa221) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **MTHFR** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Pokushalov_2024](drugs/toxin_methylcobalamin/pgx_Pokushalov_2024_MTHFR_safety.md) | Pokushalov E et al., Effect of Methylfolate, Pyridoxal-5'-Ph…, Nutrients (2024) | [10.3390/nu16111550](https://doi.org/10.3390/nu16111550) |
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **MTR** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Pokushalov_2024](drugs/toxin_methylcobalamin/pgx_Pokushalov_2024_MTR_safety.md) | Pokushalov E et al., Effect of Methylfolate, Pyridoxal-5'-Ph…, Nutrients (2024) | [10.3390/nu16111550](https://doi.org/10.3390/nu16111550) |
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> | **MTRR** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Pokushalov_2024](drugs/toxin_methylcobalamin/pgx_Pokushalov_2024_MTRR_safety.md) | Pokushalov E et al., Effect of Methylfolate, Pyridoxal-5'-Ph…, Nutrients (2024) | [10.3390/nu16111550](https://doi.org/10.3390/nu16111550) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=methylcobalamin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: MTHFR (safety_allele), MTR (cofactor), MTR (safety_allele), MTRR (safety_allele).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 17:07 | 8:26 | 0/1/0 | 0/0/0 | 3/0/0 | 159,918/7,097 | einfracz / qwen3.8-flash-next | 14 | 4/4 | 14/0 | 0 |

## Coverage

- **PubMed hits:** 56 matched, 56 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hotta_2024.pdf` | Hotta K et al., Pharmacokinetic profiles of methylcobal…, Journal of pharmacological… (2024) | popPK | 9 | [10.1016/j.vascn.2024.107552](https://doi.org/10.1016/j.vascn.2024.107552) | [39245417](https://pubmed.ncbi.nlm.nih.gov/39245417) | The paper describes a PK study in rats with quantitative findings (dose proportionality, bioavailability), but no specific numeric kinetic parameters (e.g., half-life, clearance, volume) are present in the provided evidence snippet. |
| `Devi_2020.pdf` | Devi S et al., Measuring vitamin B-12 bioavailability…, The American journal of cli… (2020) | popPK | 8 | [10.1093/ajcn/nqaa221](https://doi.org/10.1093/ajcn/nqaa221) | [32844171](https://pubmed.ncbi.nlm.nih.gov/32844171) | The paper reports quantitative bioavailability (a kinetic parameter) for methylcobalamin (identified as the metabolite of the administered cyanocobalamin) in humans, including dose-dependent values and results from a 2-compartment model. |
| `Hotta_2020.pdf` | Hotta K et al., A sensitive bioanalytical assay for met…, Journal of pharmaceutical a… (2020) | popPK | 8 | [10.1016/j.jpba.2020.113621](https://doi.org/10.1016/j.jpba.2020.113621) | [32966937](https://pubmed.ncbi.nlm.nih.gov/32966937) | The paper reports a pharmacokinetic study of methylcobalamin in humans, but the specific numeric kinetic parameters (half-life, clearance, etc.) are not present in the provided abstract. |

<sub>queue written 2026-11-15 17:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmed_2024 | not_relevant | 0 | 0 | The paper describes a disease (CblC defect caused by MMACHC variants) and its biochemical markers, but does not report pharmacokinetic or pharmacodynamic parameters of methylcobalamin as a drug influenced by those genotypes. |
| PGx | Atkinson_2014 | not_relevant | 0 | 0 | The paper describes a rare inborn error of metabolism (cblD) affecting endogenous cobalamin processing, not the pharmacokinetic or pharmacodynamic response to exogenous methylcobalamin administration. |
| PGx | Carrillo-Carrasco_2012 | not_relevant | 0 | 0 | The paper discusses an inborn error of metabolism (cblC) caused by MMACHC mutations affecting endogenous cobalamin processing, not a pharmacogenomic study of how genotype affects the pharmacokinetics or pharmacodynamics of exogenously administered methylcobalamin. |
| PGx | Chern_2020 | not_relevant | 0 | 0 | The paper describes the generation and characterization of mouse models for cblC disease pathophysiology involving MMACHC mutations, not the pharmacokinetic or pharmacodynamic effects of methylcobalamin as a drug influenced by genetic variants. |
| PGx | Coelho_2008 | not_relevant | 0 | 0 | The paper discusses genetic mutations affecting intracellular metabolism/synthesis of methylcobalamin in rare disorders, not pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of an administered methylcobalamin drug. |
| popPK | Csanaky_2001 | irrelevant | 0 | 0 | The paper focuses on arsenic biotransformation; methylcobalamin is only mentioned as an internal cofactor targeted by nitrous oxide, with no kinetic parameters reported for methylcobalamin itself. |
| PGx | Desai_2019 | not_relevant | 0 | 0 | The paper predicts structural/functional consequences of SNPs in the MTR gene using computational tools, but does not study methylcobalamin pharmacokinetics or pharmacodynamics. |
| PGx | Fiskerstrand_1997 | not_relevant | 0 | 0 | The paper reports on drug-drug interactions (MTX and nitrous oxide) affecting methylcobalamin levels in cell lines, not on the effect of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Fofou-Caillierez_2013 | not_relevant | 0 | 0 | The paper focuses on molecular mechanisms of inherited cobalamin metabolism disorders (cblG/cblC) and protein interactions, not on the pharmacokinetics or pharmacodynamics of the drug methylcobalamin in response to genetic variants. |
| PGx | Fowler_2008 | not_relevant | 0 | 0 | The paper discusses genetic defects in methylmalonic aciduria diagnosis and cobalamin synthesis, not the effect of gene variants on methylcobalamin pharmacokinetics or pharmacodynamics. |
| popPK | Gao_2026 | irrelevant | 0 | 0 | The paper describes a clinical rehabilitation protocol and case study; it contains no toxicokinetic parameters, kinetic data, or disposition modeling for methylcobalamin, which is only mentioned as a component of an injectate. |
| PGx | Gherasim_2013 | not_relevant | 1 | 1 | The paper describes molecular interactions between proteins (CblC/CblD) and intracellular partitioning of cobalamin forms, but does not report pharmacokinetic (ADME) or pharmacodynamic parameters related to the clinical administration of methylcobalamin as a drug. |
| popPK | Hotta_2020 | relevant | 8 | 2 | The paper reports a pharmacokinetic study of methylcobalamin in humans, but the specific numeric kinetic parameters (half-life, clearance, etc.) are not present in the provided abstract. |
| popPK | Hotta_2024 | relevant | 9 | 2 | The paper describes a PK study in rats with quantitative findings (dose proportionality, bioavailability), but no specific numeric kinetic parameters (e.g., half-life, clearance, volume) are present in the provided evidence snippet. |
| PGx | Kaur_2021 | not_relevant | 0 | 0 | The paper reports on the genotype-phenotype association for MMACHC mutations in Cobalamin C defect and diagnostic strategies, not the pharmacogenomic modulation of methylcobalamin's PK or PD parameters. |
| popPK | Koyama_1997 | irrelevant | 1 | 0 | The paper is a clinical outcome study reporting serum thiocyanate and vitamin B12 analogue proportions, not toxicokinetic parameters of methylcobalamin. |
| PGx | Leclerc_1998 | not_relevant | 0 | 0 | The paper describes cloning and mutation analysis of the MTRR gene linked to homocystinuria, but does not report any pharmacokinetic or pharmacodynamic data regarding the drug methylcobalamin. |
| PGx | Li_2024 | not_relevant | 2 | 0 | The study reports an association between MTHFR genotype and clinical response (plasma homocysteine reduction) to a multi-drug regimen, not a direct pharmacokinetic or pharmacodynamic parameter of methylcobalamin itself. |
| popPK | Linnell_1983 | irrelevant | 3 | 8 | The paper reports static tissue concentration levels (pg/mg) of methylcobalamin at the end of the study, not kinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| PGx | Longo_2025 | not_relevant | 2 | 0 | The paper reports on the biophysical stability and ligand-binding affinity of the MMACHC protein variant (R161Q) itself, not on pharmacokinetic or pharmacodynamic parameters of methylcobalamin in a biological system. |
| PGx | Longo_2026 | not_relevant | 2 | 0 | The study focuses on the biochemical binding affinity and structural stability of the MMACHC protein (in vitro), not on human pharmacokinetic or pharmacodynamic parameters of methylcobalamin. |
| popPK | Mezcord_2026 | irrelevant | 0 | 0 | The paper describes the effect of methylcobalamin on bacterial antibiotic resistance and gene expression in Acinetobacter baumannii, with no toxicokinetic parameters for methylcobalamin in humans or animals. |
| PGx | Moreno-Garcia_2014 | not_relevant | 2 | 3 | The study reports on the physiological effects of MMACHC gene disruption on endogenous metabolic markers (homocysteine and methylmalonic acid), not on the pharmacokinetics or pharmacodynamics of administered methylcobalamin. |
| popPK | Msa_2026 | irrelevant | 1 | 0 | The paper reports clinical outcomes and biomarker levels (homocysteine, VEGF, D-dimer) in patients after supplementation, but no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for methylcobalamin are provided. |
| PGx | Msa_2026 | not_relevant | 1 | 0 | The study reports general pharmacodynamic/biochemical outcomes (homocysteine, VEGF) of a multi-nutrient cocktail in patients with MTHFR polymorphisms, but does not isolate methylcobalamin as the specific agent nor report genotype-dependent changes in its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Paul_2017 | not_relevant | 2 | 1 | The paper is a review discussing theoretical implications of B12 polymorphisms on assimilation pathways but does not report specific pharmacokinetic or pharmacodynamic data for methylcobalamin stratified by genotype. |
| PGx | Pupavac_2016 | not_relevant | 1 | 0 | The study describes the intracellular synthesis and accumulation of endogenous cobalamin forms (metabolites/cofactors) in a patient with a rare genetic disease, rather than evaluating the pharmacokinetics or pharmacodynamics of administered methylcobalamin as a drug. |
| popPK | Quadros_1976 | irrelevant | 2 | 8 | The paper reports tissue distribution and plasma/erythrocyte concentrations (endogenous levels) but does not provide kinetic parameters such as half-lives, clearance rates, or volume of distribution for methylcobalamin. |
| PGx | Rodan_2018 | not_relevant | 1 | 1 | The paper describes a clinical case of a genetic disorder (MTHFS deficiency) treated with methylcobalamin and L-5-MTHF, observing subjective improvement and CSF folate levels, but does not report a specific pharmacogenomic effect of a gene variant on a quantitative PK or PD parameter of methylcobalamin. |
| PGx | Spence_2020 | not_relevant | 1 | 0 | The paper mentions methylcobalamin in a broad clinical recommendation regarding MTHFR genotypes and folate deficiency but does not report any specific pharmacokinetic or pharmacodynamic parameter changes attributable to gene variants. |
| PGx | Stucki_2012 | not_relevant | 0 | 0 | The paper describes intracellular metabolic defects in cobalamin metabolism, not the pharmacokinetics or pharmacodynamics of the drug methylcobalamin in response to genetic variation. |
| PGx | Suormala_2004 | not_relevant | 0 | 0 | The paper describes genetic defects (cblD) affecting intracellular cobalamin metabolism and disease phenotypes, not the pharmacokinetics or pharmacodynamics of the exogenous drug methylcobalamin. |
| PGx | Swanson_2005 | not_relevant | 0 | 0 | The paper investigates the association between transcobalamin II (TCII) gene polymorphisms and neural tube defect (NTD) risk, rather than evaluating how these variants affect the pharmacokinetic or pharmacodynamic parameters of methylcobalamin administration. |
| PGx | Trimarchi_2002 | not_relevant | 2 | 4 | The study reports an association between MTHFR genotype and vitamin B12 (cobalamin) serum levels, but B12 is a micronutrient/substrate, not a drug with defined pharmacokinetic parameters (AUC, Cmax, etc.), and no fitted effect sizes are provided. |
| popPK | Wang_2026 | irrelevant | 1 | 0 | The paper focuses on the pharmacokinetics of oxcarbazepine using a liposomal formulation co-loaded with mecobalamin, but no quantitative kinetic parameters for mecobalamin are reported. |
| popPK | Warita_2026 | irrelevant | 0 | 0 | The paper is a clinical practice guideline summary discussing the efficacy and dosing of mecobalamin for ALS treatment, but it contains no quantitative toxicokinetic parameters (such as half-life, clearance, volume of distribution, or partition coefficients) for the substance itself. |
| PGx | Watkins_2011 | not_relevant | 0 | 0 | The text describes inborn errors of cobalamin metabolism affecting endogenous enzymatic activity and metabolite levels, not pharmacogenomic variations affecting the PK or PD parameters of exogenously administered methylcobalamin. |
| PGx | Watkins_2022 | not_relevant | 0 | 0 | The text describes inherited metabolic disorders of cobalamin synthesis and their biochemical markers, but does not report pharmacokinetic or pharmacodynamic parameters for the drug methylcobalamin. |
| PGx | Wingert_2021 | not_relevant | 0 | 0 | The paper discusses enzyme kinetics and the chemical mechanism of a CblC enzyme variant, not pharmacokinetic or pharmacodynamic parameters of methylcobalamin in a pharmacogenomic context. |
| popPK | Zhang_2008 | irrelevant | 1 | 0 | The paper is a review article summarizing clinical efficacy and mechanisms, providing no original quantitative toxicokinetic parameters or numeric values. |
| popPK | unknown_1998 | irrelevant | 2 | 0 | The provided evidence is only an abstract of a review/monograph with no quantitative kinetic parameters or numeric data present. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethylcobalamin%5D&body=Drug%3A%20methylcobalamin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methylcobalamin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 17:05 UTC</sub>
