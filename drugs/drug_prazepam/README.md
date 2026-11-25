<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;prazepam&quot;}]"></div>

# prazepam

- **generic name:** prazepam
- **ATC codes:** `N05BA11`
- **DrugBank:** [DB01588](https://go.drugbank.com/drugs/DB01588) · **PubChem:** [CID 4890](https://pubchem.ncbi.nlm.nih.gov/compound/4890)
- **molar mass:** 324.804 g/mol (C19H17ClN2O) — DrugBank
- **groups:** approved, illicit

## About

Prazepam is a benzodiazepine derivative used to treat anxiety disorders, spasticity, and focal epilepsy. It is given by mouth as tablets or liquid solutions. The drug is approved for use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q2149443](https://www.wikidata.org/wiki/Q2149443), [Wikipedia](https://en.wikipedia.org/wiki/Prazepam?oldid=1376990362) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| prazepam | parent | 324.804 | C19H17ClN2O | DrugBank | [4890](https://pubchem.ncbi.nlm.nih.gov/compound/4890) | Kölle_1981 |
| norprazepam | metabolite | 270.716 | C15H11ClN2O | PubChem | [2997](https://pubchem.ncbi.nlm.nih.gov/compound/2997) | Kölle_1981 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Kölle_1981_reference](drugs/drug_prazepam/Prazepam_Klle1981_reference.md) | — | 1-compartment (no model) | 1 | Kölle EU, [Pharmacokinetics of oral prazepam], Fortschritte der Medizin (1981) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:48 | 0:03 | 1/0/0 | 0/0/0 | 0/0/0 | 3,107/148 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 20 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altamura_2013 | irrelevant | 1 | 0 | This is a review article without original quantitative parameter values provided in the evidence. |
| PGx | Altamura_2013 | not_relevant | 0 | 0 | The paper is a review of general anxiolytic pharmacokinetics and does not report any specific pharmacogenomic effect on prazepam. |
| popPK | Ansseau_1984 | irrelevant | 1 | 0 | The paper is a clinical efficacy study comparing dosage schedules and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for prazepam. |
| PGx | Ansseau_1984 | not_relevant | 0 | 0 | The study compares dosing schedules for prazepam in patients but does not involve gene variants, genotypes, or phenotypes, so it is not a pharmacogenomic study. |
| popPK | Arab_2022 | irrelevant | 0 | 0 | The paper is a hospital-based study on dosage form substitution economics and does not report any pharmacokinetic parameters for prazepam. |
| PGx | Arab_2022 | not_relevant | 0 | 0 | The paper discusses the substitution of liquid with solid dosage forms for pediatric care and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of prazepam. |
| popPK | Breimer_1980 | irrelevant | 1 | 0 | The paper is a qualitative review comparing pharmacokinetic properties of various benzodiazepines and does not provide original quantitative parameter values for prazepam. |
| PGx | Breimer_1980 | not_relevant | 0 | 0 | The paper is a general review of benzodiazepine pharmacokinetics and metabolism but does not report any gene-variant-specific effects on prazepam's PK or PD parameters. |
| popPK | Casas_1993 | irrelevant | 0 | 0 | The paper describes a sample preparation method (SPE) where prazepam is used solely as an internal standard, not as the subject of a pharmacokinetic study. |
| PGx | Casas_1993 | not_relevant | 0 | 0 | The paper describes an analytical method for benzodiazepines and contains no pharmacogenomic or PK/PD data. |
| popPK | Chabannes_1990 | irrelevant | 0 | 0 | The study is a clinical trial evaluating anxiety symptoms and tolerance, reporting no pharmacokinetic parameters (CL, V, t1/2, etc.) for prazepam. |
| PGx | Chabannes_1990 | not_relevant | 0 | 0 | The study compares two formulations of prazepam in anxious patients and does not report any genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Debbih_2026 | irrelevant | 0 | 0 | The study is a retrospective clinical analysis of prazepam as a therapeutic agent for benzodiazepine withdrawal and does not report pharmacokinetic parameters. |
| PGx | Debbih_2026 | not_relevant | 0 | 0 | The study reports clinical outcomes of a benzodiazepine withdrawal protocol using prazepam and does not analyze any genetic variants, genotypes, or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Dorman_1983 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing anxiety symptoms and side effects, with no pharmacokinetic parameter estimation. |
| PGx | Dorman_1983 | not_relevant | 0 | 0 | The paper reports a clinical comparison of efficacy and side effects between prazepam and diazepam but does not investigate genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Greenblatt_1988 | relevant | 9 | 0 | The study reports pharmacokinetic parameters for prazepam (specifically its metabolite desmethyldiazepam) in humans, but the provided evidence text contains no numeric values, which are likely in the full text or tables not included here. |
| PGx | Greenblatt_1988 | not_relevant | 0 | 0 | The paper compares the kinetics and dynamics of different benzodiazepines in healthy volunteers but does not report any pharmacogenomic effects (gene variants) on prazepam parameters. |
| popPK | Jacqmin_1988 | relevant | 10 | 0 | The study reports pharmacokinetic parameters for prazepam (via its major metabolite N-desmethyl-diazepam), but the specific numeric values (AUC, Cmax, Tmax) are described in the text without being explicitly listed in the provided evidence. |
| PGx | Jacqmin_1988 | not_relevant | 0 | 0 | The study compares pharmacokinetics of oral vs. sublingual administration in normal subjects and does not involve any genetic variants or pharmacogenomic factors. |
| popPK | Jones_2004 | irrelevant | 0 | 0 | Prazepam is used only as an internal standard for the quantification of diazepam and nordiazepam, not as the subject drug. |
| PGx | Jones_2004 | not_relevant | 0 | 0 | The paper studies the plasma-to-whole blood distribution ratio of diazepam and nordiazepam, not the pharmacokinetics or pharmacodynamics of prazepam, and involves no gene variants. |
| popPK | Krüger_1982 | irrelevant | 0 | 0 | The study focuses on behavioral and physiological effects of prazepam in a psychotherapy analog, reporting no pharmacokinetic parameters. |
| PGx | Krüger_1982 | not_relevant | 0 | 0 | The paper investigates the behavioral effects of prazepam on healthy volunteers and does not report any pharmacogenomic data or genetic variants affecting PK/PD parameters. |
| PGx | Kölle_1981 | not_relevant | 0 | 0 | The paper describes the general pharmacokinetics of prazepam but does not mention any gene variants or genotypes. |
| popPK | Noggle_1979 | irrelevant | 0 | 0 | This paper is a forensic identification study using UV/IR spectrophotometry and HPLC, reporting no pharmacokinetic parameters for prazepam. |
| PGx | Noggle_1979 | not_relevant | 0 | 0 | The paper describes analytical methods (UV, IR, HPLC) for identifying benzodiazepines and contains no pharmacogenomic data. |
| popPK | Ochs_1984 | irrelevant | 2 | 3 | Prazepam is a comparator drug and only metabolite (DMDZ) parameters are reported, not parent PK parameters. |
| PGx | Ochs_1984 | not_relevant | 0 | 0 | The study compares the pharmacokinetics of three benzodiazepine precursors in healthy volunteers but does not investigate any gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Saletu_1980 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (EEG/psychometric) of lopirazepam with prazepam as a comparator, and reports no quantitative pharmacokinetic parameters. |
| PGx | Saletu_1980 | not_relevant | 0 | 0 | The paper reports the pharmacodynamic profile of lopirazepam in a small cohort of healthy volunteers and compares its potency to prazepam, but it does not investigate gene variants or genotypes. |
| popPK | Saletu_1983 | irrelevant | 1 | 0 | The study compares prazepam and lopirazepam as comparators for EEG/clinical outcomes in alcohol withdrawal, but reports no quantitative population-PK parameters (CL, V, t1/2, ka). |
| PGx | Saletu_1983 | not_relevant | 0 | 0 | The paper reports clinical and EEG outcomes in alcohol withdrawal but does not investigate pharmacogenomic effects (gene variants) on prazepam's PK or PD. |
| popPK | Shader_1984 | relevant | 8 | 2 | The study reports the pharmacokinetics of prazepam and its metabolites in humans, but the provided evidence consists only of qualitative descriptions of plasma concentration timing (e.g., "peak... at 6 hours") and lacks specific quantitative parameter values like CL, V, or ka. |
| PGx | Shader_1984 | not_relevant | 0 | 0 | The study investigates PK/PD differences between three different drugs, not the effect of gene variants on prazepam pharmacokinetics. |
| popPK | el-Yazbi_1986 | irrelevant | 0 | 0 | The paper describes an analytical method for spectrophotometric determination of benzodiazepines, not a pharmacokinetic study reporting disposition parameters. |
| PGx | el-Yazbi_1986 | not_relevant | 0 | 0 | The paper describes a spectrophotometric method for determining benzodiazepines and does not involve pharmacogenomics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprazepam%5D&body=Drug%3A%20prazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_prazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:46 UTC</sub>
