<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;dexmethylphenidate&quot;}]"></div>

# dexmethylphenidate

- **generic name:** dexmethylphenidate
- **ATC codes:** `N06BA11`, `N06BA15`
- **DrugBank:** [DB06701](https://go.drugbank.com/drugs/DB06701) · **PubChem:** [CID 154101](https://pubchem.ncbi.nlm.nih.gov/compound/154101)
- **molar mass:** 233.3062 g/mol (C14H19NO2) — DrugBank
- **groups:** approved, investigational

## About

Dexmethylphenidate is a central nervous system stimulant used to treat attention deficit hyperactivity disorder. It is administered orally in tablet or capsule forms. The medication is approved for use in the United States and is available as a generic product.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q1207210](https://www.wikidata.org/wiki/Q1207210), [Wikipedia](https://en.wikipedia.org/wiki/Dexmethylphenidate?oldid=1379458438) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gomeni_2020_SKAMP](drugs/drug_dexmethylphenidate/pd_Gomeni_2020_SKAMP.md) | Swanson, Kotkin, Agler, M-Flynn, and Pelham combined score ← methylphenidate (d-threo-methylphenidate) · direct sigmoid Emax (Hill) effect | — | Gomeni R et al., Model-Based Approach for Establishing t…, Journal of clinical psychop… (2020) | [10.1097/jcp.0000000000001222](https://doi.org/10.1097/jcp.0000000000001222) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Gomeni_2020_SKAMP_2](drugs/drug_dexmethylphenidate/pd_Gomeni_2020_SKAMP_2.md) | Swanson, Kotkin, Agler, M-Flynn, and Pelham combined score (placebo trajectory) · indirect response — drug stimulates the production of Swanson, Kotkin, Agler, M-Flynn, and Pelham combined score (placebo trajectory) | — | Gomeni R et al., Model-Based Approach for Establishing t…, Journal of clinical psychop… (2020) | [10.1097/jcp.0000000000001222](https://doi.org/10.1097/jcp.0000000000001222) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:34 | 0:03 | 0/0/0 | 1/1/0 | 0/0/0 | 4,040/176 | einfracz / qwen3.8-27b | 10 | 4/1 | 10/0 | 0 |

## Coverage

- **PubMed hits:** 36 matched, 35 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chavez_2009 | irrelevant | 0 | 0 | The paper is a review of efficacy and safety of stimulant formulations for ADHD, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Chavez_2009 | not_relevant | 0 | 0 | The paper is a review of stimulant formulations and does not discuss pharmacogenomics, gene variants, or genetic influence on PK/PD parameters. |
| popPK | Dereschuk_2025 | irrelevant | 0 | 0 | This is an epidemiologic cohort study of URTI risk with stimulant use; no PK parameters for dexmethylphenidate are reported. |
| popPK | Gollu_2023 | irrelevant | 0 | 0 | The study is an analytical method development paper for HPLC quantification and does not report pharmacokinetic parameters. |
| PGx | Gollu_2023 | not_relevant | 0 | 0 | The paper describes a stability-indicating HPLC method for quantifying drugs in a dosage form and contains no data on pharmacogenomics, gene variants, or PK/PD parameters. |
| popPK | Gomeni_2020 | irrelevant | 2 | 3 | The study models methylphenidate (DR/ER-MPH/HLD200); dexmethylphenidate (d-MPH ER) appears only as a comparator with a few cited values (V/F 380 L, kel 0.29 h⁻¹), not as the subject drug, and full parameter tables live in supplemental material. |
| popPK | Gupta_2022 | irrelevant | 0 | 0 | The paper is a health economics study analyzing the retail costs of drugs, containing no pharmacokinetic data or disposition parameters for dexmethylphenidate. |
| PGx | Gupta_2022 | not_relevant | 0 | 0 | The paper reports on the financial cost of drugs for cancer symptoms, not pharmacogenomic effects on pharmacokinetics or pharmacodynamics. |
| popPK | Jackson_2014 | irrelevant | 2 | 0 | The study focuses on methylphenidate products (Concerta, Ritalin LA, Focalin XR) and uses simulations rather than reporting specific quantitative disposition parameters (CL, V, ka) for dexmethylphenidate in the evidence provided. |
| PGx | Jackson_2014 | not_relevant | 0 | 0 | The paper investigates the impact of formulation release mechanisms on pharmacokinetic metrics and does not mention or analyze gene variants or genotypes. |
| popPK | Kay_2025 | irrelevant | 0 | 0 | This is an fMRI neuroimaging study of methylphenidate's effects on brain connectivity; no PK parameters (CL, V, ka, half-life) are reported. |
| PGx | Law_2022 | not_relevant | 0 | 0 | In vitro metabolism study with no gene variant/genotype effects on dexmethylphenidate PK/PD; dMPH metabolism could not even be characterized. |
| popPK | Liu_2006 | relevant | 6 | 2 | The paper is a review of dexmethylphenidate pharmacokinetics that mentions specific parameters like elimination half-life (~2.2 hours), T_max, and C_max, but lacks detailed quantitative values for clearance (CL), volume of distribution (V), or compartmental model parameters (Q, ka). |
| PGx | Liu_2006 | not_relevant | 0 | 0 | The paper is a review of dexmethylphenidate's pharmacology and clinical use, discussing enantiomer differences and PK/PD, but it does not report any pharmacogenomic effects (gene variants influencing PK/PD). |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | This is a review of nanoparticle PK modeling (MIND framework) with no dexmethylphenidate data or quantitative PK parameters for any specific drug. |
| popPK | Patrick_2014 | irrelevant | 0 | 0 | The paper is a review focusing on ethylphenidate as a biomarker and does not report quantitative PK parameters (CL, V, etc.) for dexmethylphenidate. |
| PGx | Patrick_2014 | not_relevant | 2 | 5 | The paper discusses the metabolism of dexmethylphenidate by Carboxylesterase 1 and its interaction with ethanol, but it focuses on drug-drug interactions and the mechanism of ethanol co-abuse rather than reporting how specific genetic variants or genotypes alter the PK or PD parameters of dexmethylphenidate. |
| popPK | Patrick_2015 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (subjective ratings) and qualitative discussion of PK interactions, without reporting quantitative PK parameter values (CL, V, ka) for dexmethylphenidate. |
| PGx | Patrick_2015 | not_relevant | 0 | 0 | The study investigates ethanol-drug interactions, not the effect of a gene variant/genotype on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Patrick_2016 | irrelevant | 2 | 1 | The study is a bioequivalence trial comparing immediate-release dl-methylphenidate and dexmethylphenidate, reporting exposure metrics (AUC, Cmax, ratios) rather than specific disposition parameters (CL, V, ka) from a compartmental or population PK model. |
| PGx | Patrick_2016 | not_relevant | 0 | 0 | The paper compares the pharmacokinetics of two different formulations (racemate vs. enantiopure) in a general population study and does not report on the impact of genetic variants or genotypes on PK/PD parameters. |
| popPK | Patrick_2019 | irrelevant | 1 | 0 | The paper is a clinical review of methylphenidate/dexmethylphenidate formulations that discusses general PK concepts like pAUC and bioavailability but does not report specific quantitative disposition parameter values (CL, V, etc.) in the provided text. |
| PGx | Patrick_2019 | not_relevant | 2 | 1 | The text mentions pharmacogenomic considerations regarding carboxylesterase variants in the conclusion, but does not provide data or details on how these variants specifically alter PK or PD parameters for dexmethylphenidate. |
| popPK | Qin_2026 | irrelevant | 0 | 0 | This is a FAERS pharmacovigilance disproportionality study of adverse-event signals, not a PK study; dexmethylphenidate is only one of many drugs screened and no PK parameters appear. |
| popPK | Quinn_2008 | irrelevant | 0 | 0 | The paper is a review of pharmacodynamics and clinical efficacy, containing no quantitative pharmacokinetic parameters (CL, V, t1/2) for dexmethylphenidate. |
| PGx | Quinn_2008 | not_relevant | 0 | 0 | The paper discusses the pharmacodynamics of methylphenidate enantiomers but does not report any gene variant or genotype effects on PK or PD parameters. |
| popPK | Santisteban_2014 | irrelevant | 0 | 0 | This is a sleep study in children with ADHD that does not report any quantitative pharmacokinetic parameters (such as clearance or volume) for dexmethylphenidate. |
| PGx | Santisteban_2014 | not_relevant | 0 | 0 | The paper reports dose-response effects on sleep (PD) but does not investigate any genetic variants or pharmacogenomic factors. |
| popPK | Sheykhsoltan_2025 | irrelevant | 0 | 0 | The paper is a retrospective analysis of drug shortage trends and contains no pharmacokinetic data. |
| PGx | Sheykhsoltan_2025 | not_relevant | 0 | 0 | The paper focuses on drug shortage trends and does not discuss pharmacogenomics, genetic variants, or PK/PD parameters. |
| popPK | Spencer_2007 | irrelevant | 0 | 0 | This is a clinical efficacy and safety study for ADHD treatment, containing no pharmacokinetic parameters (clearance, volume, etc.). |
| PGx | Spencer_2007 | not_relevant | 0 | 0 | The paper reports a clinical efficacy and safety trial of dexmethylphenidate in adults with ADHD and does not mention any genetic variants or pharmacogenomic analyses. |
| popPK | Stein_2014 | irrelevant | 0 | 0 | The study is a pharmacogenomic/pharmacodynamic dose-response trial focusing on symptom scores and genetic variation, with no pharmacokinetic parameters (CL, V, Ka) reported. |
| popPK | Swanson_2002 | irrelevant | 2 | 0 | The paper is a review discussing efficacy, side effects, and general PK concepts for new formulations without providing specific quantitative population-pharmacokinetic parameter values (CL, V, etc.) for dexmethylphenidate. |
| PGx | Swanson_2002 | not_relevant | 0 | 0 | The paper discusses the evaluation of stimulant formulations and their general pharmacokinetic/pharmacodynamic properties but does not report on specific gene variants, genotypes, or pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdexmethylphenidate%5D&body=Drug%3A%20dexmethylphenidate%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_dexmethylphenidate/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
