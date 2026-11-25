<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;methylphenidate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methylphenidate_Giorgi2010_reference&quot;,&quot;label&quot;:&quot;Giorgi_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# methylphenidate

- **generic name:** methylphenidate
- **ATC codes:** `N06BA04`
- **DrugBank:** [DB00422](https://go.drugbank.com/drugs/DB00422) · **PubChem:** [CID 4158](https://pubchem.ncbi.nlm.nih.gov/compound/4158)
- **molar mass:** 233.3062 g/mol (C14H19NO2) — DrugBank
- **groups:** approved, investigational

## About

Methylphenidate is a central nervous system stimulant prescribed for attention deficit hyperactivity disorder and narcolepsy. It is typically given orally, while a topical form exists for skin application. The medication is widely used and available as a generic option.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q422112](https://www.wikidata.org/wiki/Q422112), [Wikipedia](https://en.wikipedia.org/wiki/Methylphenidate?oldid=1383115339) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| methylphenidate | parent | 233.306 | C14H19NO2 | DrugBank | [4158](https://pubchem.ncbi.nlm.nih.gov/compound/4158) | Giorgi_2010, Shader_1999 |

## Start here

> **Giorgi_2010_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> male beagle dogs. [Run it in the simulator](drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference.md?tab=Simulation) · [record](drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">100</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Giorgi_2010 · CL ·/kg</text><circle cx="238.4" cy="30.0" r="4" fill="#ef6c00"><title>Giorgi_2010 · CL ·/kg: 18.9 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Shader_1999 · CL/F ·/kg</text><circle cx="466.6" cy="46.0" r="4" fill="#ef6c00"><title>Shader_1999 · CL/F ·/kg: 380.9 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: unreported model parameter default(s): F</sub> | [Giorgi_2010_reference](drugs/drug_methylphenidate/Methylphenidate_Giorgi2010_reference.md) | ▶ model + simulator | 1-compartment, oral | 8 | Giorgi M et al., Pharmacokinetics of methylphenidate fol…, Veterinary research communi… (2010) | [10.1007/s11259-010-9388-z](https://doi.org/10.1007/s11259-010-9388-z) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Shader_1999_reference](drugs/drug_methylphenidate/Methylphenidate_Shader1999_reference.md) | — | 1-compartment (no model) | 2 | Shader RI et al., Population pharmacokinetics of methylph…, Journal of clinical pharmac… (1999) | [10.1177/00912709922008425](https://doi.org/10.1177/00912709922008425) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Teuscher_2015_reference](drugs/drug_methylphenidate/Methylphenidate_Teuscher2015_reference.md) | — | 1-compartment (no model) | 0 | Teuscher NS et al., Population pharmacokinetics of methylph…, Drug design, development an… (2015) | [10.2147/DDDT.S83234](https://doi.org/10.2147/DDDT.S83234) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Aoyama_1997_DA](drugs/drug_methylphenidate/pd_Aoyama_1997_DA.md) | dopamine (DA) level in striatal dialysate ← MPD · target-mediated drug disposition | — | Aoyama T et al., Pharmacodynamic modeling for change of…, Pharmaceutical research (1997) | [10.1023/a:1012186519946](https://doi.org/10.1023/a:1012186519946) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Jackson_2022_SKAMP](drugs/drug_methylphenidate/pd_Jackson_2022_SKAMP.md) | SKAMP (Swanson, Kotkin, Agler, M-Flynn, and Pelham rating scale) composite scores corrected for placebo ← methylphenidate · indirect response — drug inhibits the production of SKAMP (Swanson, Kotkin, Agler, M-Flynn, and Pelham rating scale) composite scores corrected for placebo | — | Jackson AJ et al., A Simulation Study of the Comparative P…, The AAPS journal (2022) | [10.1208/s12248-022-00726-w](https://doi.org/10.1208/s12248-022-00726-w) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Li_2017_BP](drugs/drug_methylphenidate/pd_Li_2017_BP.md) | blood pressure ← methylphenidate · direct linear effect | — | Li L et al., Exposure-response analyses of blood pre…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9513-5](https://doi.org/10.1007/s10928-017-9513-5) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Li_2017_HR](drugs/drug_methylphenidate/pd_Li_2017_HR.md) | heart rate ← methylphenidate · direct linear effect | — | Li L et al., Exposure-response analyses of blood pre…, Journal of pharmacokinetics… (2017) | [10.1007/s10928-017-9513-5](https://doi.org/10.1007/s10928-017-9513-5) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Shimizu_2019_extracellular_dopamine](drugs/drug_methylphenidate/pd_Shimizu_2019_extracellular_dopamine.md) | extracellular dopamine levels in the nucleus accumbens ← methylphenidate · inhibition effect | — | Shimizu R et al., Pharmacokinetic-Pharmacodynamic Modelin…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.252262](https://doi.org/10.1124/jpet.118.252262) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Soufsaf_2023_DAT](drugs/drug_methylphenidate/pd_Soufsaf_2023_DAT.md) | dopamine transporter occupancy ← methylphenidate · direct Emax (saturable) effect | — | Soufsaf S et al., An exploratory analysis of the performa…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09854-y](https://doi.org/10.1007/s10928-023-09854-y) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Soufsaf_2023_NET](drugs/drug_methylphenidate/pd_Soufsaf_2023_NET.md) | norepinephrine transporter occupancy ← methylphenidate · inhibition effect | — | Soufsaf S et al., An exploratory analysis of the performa…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09854-y](https://doi.org/10.1007/s10928-023-09854-y) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Soufsaf_2023_clinical_rating_scales](drugs/drug_methylphenidate/pd_Soufsaf_2023_clinical_rating_scales.md) | clinical rating scales ← methylphenidate · inhibition effect | — | Soufsaf S et al., An exploratory analysis of the performa…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09854-y](https://doi.org/10.1007/s10928-023-09854-y) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Teuscher_2018_SKAMP_CS](drugs/drug_methylphenidate/pd_Teuscher_2018_SKAMP_CS.md) | Swanson, Kotkin, Agler, M-Flynn, and Pelham Scale Combined score ← methylphenidate · direct Emax (saturable) effect | model (no simulator) | Teuscher NS et al., Population Pharmacokinetic-Pharmacodyna…, Journal of clinical psychop… (2018) | [10.1097/JCP.0000000000000944](https://doi.org/10.1097/JCP.0000000000000944) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:02 | 0:06 | 2/1/0 | 9/0/0 | 0/0/0 | 3,590/175 | einfracz / qwen3.8-27b | 13 | 4/1 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 56 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aoyama_1997 | irrelevant | 3 | 0 | The study focuses on pharmacodynamic modeling of locomotor activity and dopamine levels rather than reporting quantitative population pharmacokinetic parameters (CL, V, Q) for methylphenidate. |
| PGx | Aoyama_1997 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic model for methylphenidate in rats but does not investigate any genetic variants or pharmacogenomic effects. |
| popPK | Farhat_2026 | irrelevant | 0 | 0 | This is a clinical efficacy/meta-analysis study focusing on ADHD symptom scores, not a pharmacokinetic study reporting disposition parameters for methylphenidate. |
| PGx | Farhat_2026 | not_relevant | 0 | 0 | The paper analyzes demographic (race, age) and clinical moderators, not genetic variants, and does not measure pharmacokinetic parameters. |
| PGx | Giorgi_2010 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in dogs comparing formulations and does not report any human pharmacogenomic effects or genetic variants. |
| popPK | Gomez-Sanchez_2017 | irrelevant | 0 | 0 | Pharmacogenetic study of clinical response to methylphenidate with no PK parameters (no CL, V, ka, or PK model) reported. |
| popPK | Jackson_2022 | irrelevant | 2 | 0 | This is a simulation study on bioequivalence design methodology that relies on literature parameters, not an original study reporting quantitative disposition parameters or specific PK values for methylphenidate in the provided evidence. |
| PGx | Jackson_2022 | not_relevant | 0 | 0 | The paper is a simulation study on bioequivalence metrics for methylphenidate and does not report any pharmacogenomic effects. |
| popPK | Kimko_2012 | irrelevant | 2 | 0 | This is a pharmacodynamic modeling study that relies on pre-existing adult PK data from the literature rather than reporting new quantitative PK parameters for methylphenidate. |
| PGx | Kimko_2012 | not_relevant | 0 | 0 | The paper discusses population pharmacodynamic modeling and meta-analysis of methylphenidate but does not report any pharmacogenomic effects or gene variants. |
| popPK | Koblan_2016 | irrelevant | 0 | 0 | Methylphenidate is used as an active comparator for abuse potential, and the study does not report its pharmacokinetic parameters. |
| PGx | Koblan_2016 | not_relevant | 0 | 0 | The study assesses the abuse potential and pharmacodynamics of dasotraline and methylphenidate but contains no data on pharmacogenomics or the influence of genetic variants on PK/PD parameters. |
| popPK | Lavy_2011 | relevant | 10 | 4 | Study reports PK parameters (Cl, AUC) for methylphenidate in dogs, but specific numeric values are not visible in the provided abstract text. |
| PGx | Lavy_2011 | not_relevant | 0 | 0 | The study compares pharmacokinetics of methylphenidate formulations in Beagle dogs and does not report any gene variant or pharmacogenomic effect. |
| popPK | Li_2017 | irrelevant | 2 | 0 | The study focuses on exposure-response modeling for blood pressure and heart rate, reporting no specific quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for methylphenidate itself. |
| PGx | Li_2017 | not_relevant | 0 | 0 | The paper investigates exposure-response relationships for methylphenidate in healthy adults but does not report any pharmacogenomic effects or genotype-dependent changes in PK/PD parameters. |
| popPK | Linton_2024 | irrelevant | 0 | 0 | EEG/behavioral study of methylphenidate effects on cognitive control; no PK parameters (CL, V, ka, half-life) reported anywhere. |
| PGx | Shader_1999 | not_relevant | 0 | 0 | The study reports population PK parameters based on body weight and demographic covariates but does not investigate gene variants or genotypes. |
| popPK | Shimizu_2019 | relevant | 9 | 0 | The paper describes a PK-PD model for methylphenidate in rats and mentions concentration data, but no specific numeric parameter values (CL, V, etc.) or dose-response numbers are provided in the evidence text. |
| PGx | Shimizu_2019 | not_relevant | 0 | 0 | The study is a PK-PD modeling exercise in rats using a single genotype and does not investigate the impact of specific gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Shram_2022 | relevant | 6 | 2 | The study reports non-compartmental pharmacokinetic parameters (Cmax, AUC, T1/2) for methylphenidate, but the specific numeric values are not present in the provided text, only relative ratios and ranges are mentioned. |
| PGx | Shram_2022 | not_relevant | 0 | 0 | The study evaluates the abuse potential and pharmacokinetics of a prodrug vs. its active metabolite in a general population without analyzing any genetic variants or pharmacogenomic effects. |
| popPK | Simmler_2016 | irrelevant | 0 | 0 | The study is an in vitro receptor pharmacology paper measuring binding affinity and functional activation at TAAR1, containing no pharmacokinetic parameters (CL, V, t1/2) for methylphenidate. |
| PGx | Simmler_2016 | not_relevant | 0 | 0 | The paper characterizes the in vitro binding and functional activity of methylphenidate at the TAAR1 receptor across species, but does not report any pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |
| popPK | Soufsaf_2023 | relevant | 9 | 2 | The paper describes a population PK model for methylphenidate and its PKPD application, but specific quantitative PK parameter values (CL, V, etc.) are not listed in the provided abstract or text. |
| PGx | Soufsaf_2023 | not_relevant | 0 | 0 | The paper describes a PKPD model for methylphenidate but does not investigate or report any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Teuscher_2018 | relevant | 10 | 0 | The paper is a population PK/PD study for methylphenidate, but specific numeric values for clearance and volume are only described qualitatively (e.g., "body weight effects... were included") without the actual estimates provided in the text. |
| PGx | Teuscher_2018 | not_relevant | 0 | 0 | The paper reports a population PK/PD model for methylphenidate based on body weight and dose, but does not investigate or report any effects of gene variants, genotypes, or genetic phenotypes on PK or PD parameters. |
| popPK | Winhusen_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of cocaine as the subject drug, while methylphenidate is administered as a co-drug/probe to test for interaction effects, not for its own PK parameter estimation. |
| PGx | Winhusen_2006 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between methylphenidate and cocaine, not a pharmacogenomic effect of a gene variant on methylphenidate. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethylphenidate%5D&body=Drug%3A%20methylphenidate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_methylphenidate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:00 UTC</sub>
