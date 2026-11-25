<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;amfetamine&quot;}]"></div>

# amfetamine

- **generic name:** amfetamine
- **ATC codes:** `N06BA01`
- **DrugBank:** [DB00182](https://go.drugbank.com/drugs/DB00182) · **PubChem:** none
- **groups:** approved, illicit, investigational

## About

Amphetamine is a central nervous system stimulant prescribed for attention deficit hyperactivity disorder, narcolepsy, and obesity. The drug is administered orally using tablets or capsules. It is a prescription medication available in many nations.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q179452](https://www.wikidata.org/wiki/Q179452), [Wikipedia](https://en.wikipedia.org/wiki/Amphetamine?oldid=1385198910) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Nordin_2013_CBF](drugs/drug_amfetamine/pd_Nordin_2013_CBF.md) | cerebral blood flow ← d-amphetamine · inhibition effect | — | Nordin LE et al., Cortical responses to amphetamine expos…, NeuroImage (2013) | [10.1016/j.neuroimage.2012.11.035](https://doi.org/10.1016/j.neuroimage.2012.11.035) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [van_2019_DA](drugs/drug_amfetamine/pd_van_2019_DA.md) | extracellular striatal dopamine biomarker turnover ← d-amphetamine | — | van Gaalen MM et al., Development of a Semimechanistic Pharma…, The Journal of pharmacology… (2019) | [10.1124/jpet.118.254508](https://doi.org/10.1124/jpet.118.254508) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 16:35 | 0:03 | 0/0/0 | 2/0/0 | 0/0/0 | 3,662/175 | einfracz / qwen3.8-27b | 5 | 5/0 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 144 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tsuda_2020.pdf` | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2020) | popPK | 8 | [10.1016/j.dmpk.2020.08.005](https://doi.org/10.1016/j.dmpk.2020.08.005) | [33082099](https://pubmed.ncbi.nlm.nih.gov/33082099) | The paper describes a population PK model for d-amphetamine (metabolite of lisdexamfetamine) in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |

<sub>queue written 2026-11-23 16:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Comiran_2012 | relevant | 7 | 3 | Amphetamine is the metabolite of fenproporex and a compartmental PK model was fitted, but the evidence only gives Cmax/time ranges; the actual model parameters (CL, V, half-lives) are not shown and may live in tables/figures not provided. |
| popPK | Comiran_2021 | relevant | 8 | 2 | The paper reports pharmacokinetic parameters (Tmax, Cmax, model fit) for d-amphetamine (the active metabolite of lisdexamfetamine, distinct from amfetamine/amphetamine enantiomers but chemically related), but specific numeric values for clearance, volume, or half-life are not provided in the extracted text. |
| PGx | Comiran_2021 | not_relevant | 0 | 0 | The paper describes the standard pharmacokinetics of Lisdexamfetamine/Amphetamine in healthy volunteers but does not investigate gene variants or pharmacogenomic effects. |
| popPK | Dolder_2017 | relevant | 8 | 4 | Human compartmental PK modeling of amphetamine after D-amphetamine and lisdexamfetamine dosing, but full parameter values (CL, V, K01) are in Table 1/Supplementary Table S1 which are not included; only lag time and Tmax differences appear in text. |
| popPK | Fan_2021 | irrelevant | 1 | 0 | The study focuses on PET modeling of a radiotracer ([11C]raclopride) in rats using amphetamine only as a challenge agent to induce dopamine release, not as the primary drug for which pharmacokinetic disposition parameters are reported. |
| PGx | Fan_2021 | not_relevant | 0 | 0 | The paper describes a statistical method (PET-ABC) for PET analysis and includes a single-subject rat study using amphetamine as a challenge, but it does not investigate gene variants or pharmacogenomic effects. |
| popPK | Farhat_2026 | irrelevant | 0 | 0 | The study is a meta-analysis of clinical efficacy for ADHD treatment using lisdexamfetamine (a prodrug) and methylphenidate, with no pharmacokinetic parameters reported. |
| PGx | Farhat_2026 | not_relevant | 0 | 0 | The paper analyzes clinical moderators (race, age, baseline severity) of drug efficacy, not pharmacogenomic variants affecting PK/PD parameters. |
| popPK | Greenhill_2003 | irrelevant | 8 | 0 | The study describes a PK comparison of Adderall dosing regimens, but the extracted evidence lacks specific quantitative PK parameters (CL, V, ka, half-life). |
| PGx | Greenhill_2003 | not_relevant | 0 | 0 | The study investigates dosing frequency in children with ADHD but contains no genetic data or pharmacogenomic analysis. |
| popPK | Megens_1994 | irrelevant | 0 | 0 | The paper is a review of the pharmacodynamics of risperidone, not a pharmacokinetic study of amfetamine. |
| PGx | Megens_1994 | not_relevant | 0 | 0 | The paper is a review of the pharmacodynamics of risperidone and does not report on pharmacogenomic effects of amfetamine. |
| popPK | Nordin_2013 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic (cerebral perfusion) modeling rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for amphetamine. |
| PGx | Nordin_2013 | not_relevant | 0 | 0 | The study investigates pharmacokinetic/pharmacodynamic modeling of cerebral blood flow in a general population without any genetic stratification or analysis of gene variants. |
| popPK | Notzon_2016 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the behavioral efficacy of mixed amphetamine salts in treating substance use disorders, containing no pharmacokinetic data or quantitative disposition parameters. |
| PGx | Notzon_2016 | not_relevant | 0 | 0 | The paper reports clinical outcomes (marijuana abstinence) for amphetamine salts but contains no data on pharmacokinetics or pharmacodynamics influenced by genetic variants. |
| popPK | Pinckaers_2026 | irrelevant | 0 | 0 | This is an in-vitro vascular contractility study of PEA/AA analogues in rat arteries; amphetamine is only mentioned structurally, with no PK parameters. |
| popPK | Ravenstijn_2008 | irrelevant | 0 | 0 | The study investigates rotenone-induced Parkinson's disease in rats and mentions amphetamine only as a behavioral probe, without reporting any pharmacokinetic parameters for it. |
| PGx | Ravenstijn_2008 | not_relevant | 0 | 0 | The paper reports a toxicological study of rotenone on Parkinson's disease markers and BBB permeability, not a pharmacogenomic effect on amphetamine PK/PD parameters. |
| popPK | Roberts_2015 | irrelevant | 7 | 0 | The paper reports a population-PK model for dextroamphetamine (a specific enantiomer of amphetamine), but the numeric parameter values are not present in the provided evidence, which only contains a figure caption. |
| PGx | Roberts_2015 | not_relevant | 0 | 0 | The provided text describes covariates (weight, melanin) for dextroamphetamine, not pharmacogenomic (genetic variant) effects. |
| popPK | Rohatagi_1997 | irrelevant | 2 | 0 | The study models selegiline and its metabolites, including amphetamine, after transdermal administration; amphetamine is a metabolite, not the subject drug for which PK parameters are the primary focus, and no numeric values are provided. |
| PGx | Rohatagi_1997 | not_relevant | 0 | 0 | The paper models the pharmacokinetics of selegiline and its metabolites (including amphetamine) but does not report on genetic variants or pharmacogenomic effects. |
| popPK | Roque_2021 | irrelevant | 0 | 0 | The study investigates the in vitro hepatotoxicity of synthetic cathinones (buphedrone, butylone, 3,4-DMMC) and mentions amphetamine only as a comparator for stimulant properties, without reporting any pharmacokinetic parameters for amphetamine. |
| PGx | Roque_2021 | not_relevant | 0 | 0 | The paper studies hepatotoxicity of synthetic cathinones (butylone, buphedrone, 3,4-DMMC), not pharmacogenomics of amfetamine. |
| popPK | Roque_2021_2 | irrelevant | 0 | 0 | The study focuses on the in vitro hepatotoxicity and metabolism of 4-fluoromethamphetamine, not the population pharmacokinetic parameters of amfetamine. |
| PGx | Roque_2021_2 | not_relevant | 0 | 0 | The paper reports in vitro hepatotoxicity of 4-Fluoromethamphetamine mediated by CYP enzymes, not a pharmacogenomic effect on a PK/PD parameter of amfetamine. |
| popPK | Rowley_2012 | relevant | 6 | 4 | The study reports pharmacokinetic profile parameters (AUC, Cmax, Tmax) for d-amfetamine in rats, but specific numeric values are not explicitly listed in the text evidence. |
| PGx | Rowley_2012 | not_relevant | 0 | 0 | The study compares the PK/PD profiles of lisdexamfetamine and d-amfetamine in wild-type rats without investigating any genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Scheffler_2024 | irrelevant | 0 | 0 | Neuroimaging brain-age study of substance use disorders; no PK parameters for amfetamine. |
| popPK | Tsuda_2020 | relevant | 8 | 2 | The paper describes a population PK model for d-amphetamine (metabolite of lisdexamfetamine) in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text. |
| PGx | Tsuda_2020 | not_relevant | 0 | 0 | The paper analyzes the influence of body weight and ethnicity on the pharmacokinetics of d-amphetamine but does not report on any gene variant or genotype. |
| popPK | van_2019 | relevant | 8 | 2 | Population PK model of d-amphetamine in rats and NHPs, but no numeric parameter values appear in the provided evidence (likely in tables/figures not included). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamfetamine%5D&body=Drug%3A%20amfetamine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_amfetamine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
