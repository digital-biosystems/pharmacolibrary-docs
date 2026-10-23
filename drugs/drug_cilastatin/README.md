<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;Cilastatin&quot;}]"></div>

# Cilastatin

- **generic name:** Cilastatin
- **ATC codes:** `J01DH51`, `J01DH56`
- **DrugBank:** [DB01597](https://go.drugbank.com/drugs/DB01597) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Cilastatin is used as part of a combination antibacterial treatment with imipenem for bacterial infections. The combination is a WHO essential medicine and is widely used, mainly in hospital settings for serious infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6004128](https://www.wikidata.org/wiki/Q6004128) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.99).">rat</span> | [Tompkins_1989_fractional_urinary_clearance_of_insulin](drugs/drug_cilastatin/pd_Tompkins_1989_fractional_urinary_clearance_of_insulin.md) | fractional urinary clearance of insulin ← cilastatin · inhibition effect | — | Tompkins GC et al., Cilastatin-insulin interaction in the r…, Drug metabolism and disposi… (1989) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cilastatin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `SLC22A6` inhibitor, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DPEP1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:26 | 6:20 | 0/0/0 | 1/0/0 | 0/0/0 | 331,126/3,556 | einfracz / qwen3.8-27b | 15 | 1/13 | 15/0 | 0 |

## Coverage

- **PubMed hits:** 206 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Somani_1988.pdf` | Somani P et al., Pharmacokinetics of imipenem-cilastatin…, Antimicrobial agents and ch… (1988) | popPK | 10 | [10.1128/AAC.32.4.530](https://doi.org/10.1128/AAC.32.4.530) | [3377464](https://pubmed.ncbi.nlm.nih.gov/3377464) | The abstract reports a pharmacokinetic study of cilastatin in humans with specific numeric values for elimination half-life, but lacks explicit numeric values for clearance or volume of distribution in the provided text. |
| `Freij_1985.pdf` | Freij BJ et al., Pharmacokinetics of imipenem-cilastatin…, Antimicrobial agents and ch… (1985) | popPK | 9 | [10.1128/AAC.27.4.431](https://doi.org/10.1128/AAC.27.4.431) | [3859242](https://pubmed.ncbi.nlm.nih.gov/3859242) | The study reports the pharmacokinetic half-life and relative clearance of cilastatin, but lacks absolute numeric values for clearance (CL) and volume of distribution (V) required for detailed parameter extraction. |
| `Katsube_2008.pdf` | Katsube T et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmaceutical s… (2008) | popPK | 5 | [10.1002/jps.21062](https://doi.org/10.1002/jps.21062) | [17705288](https://pubmed.ncbi.nlm.nih.gov/17705288) | The study focuses on PK/PD modeling of carbapenems (meropenem/imipenem) where cilastatin is merely a co-administered inhibitor, and no quantitative PK parameter values (CL, V, etc.) for cilastatin are reported in the provided evidence. |
| `Chen_2020.pdf` | Chen IH et al., Imipenem/Cilastatin/Relebactam Alone an…, Antimicrobial agents and ch… (2020) | pd | 5 | [10.1128/AAC.01764-20](https://doi.org/10.1128/AAC.01764-20) | [33139283](https://www.ncbi.nlm.nih.gov/pubmed/33139283) | metadata signals extractable PD data (PharmacodynamicModel) |
| `Kotapati_2005.pdf` | Kotapati S et al., Pharmacodynamic modeling of beta-lactam…, Surgical infections (2005) | pd | 5 | [10.1089/sur.2005.6.297](https://doi.org/10.1089/sur.2005.6.297) | [16201939](https://www.ncbi.nlm.nih.gov/pubmed/16201939) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Mavridou_2015.pdf` | Mavridou E et al., Pharmacodynamics of imipenem in combina…, Antimicrobial agents and ch… (2015) | pd | 5 | [10.1128/AAC.03706-14](https://doi.org/10.1128/AAC.03706-14) | [25403667](https://www.ncbi.nlm.nih.gov/pubmed/25403667) | metadata signals extractable PD data (sigmoid) |
| `Shi_2026.pdf` | Shi X et al., Cost-minimizing alternative dosage regi…, European journal of clinica… (2026) | pd | 5 | [10.1007/s00228-025-03944-1](https://doi.org/10.1007/s00228-025-03944-1) | [41483214](https://www.ncbi.nlm.nih.gov/pubmed/41483214) | metadata signals extractable PD data (PK/PD) |
| `Day_1995.pdf` | Day IP et al., Correlation between in vitro and in viv…, Toxicology letters (1995) | pd | 4 | [10.1016/0378-4274(95)80008-2](https://doi.org/10.1016/0378-4274(95)80008-2) | [7762010](https://www.ncbi.nlm.nih.gov/pubmed/7762010) | metadata signals extractable PD data (IC50) |
| `Teng_2024.pdf` | Teng H et al., HDL-C and creatinine levels at 1 month…, Pharmacogenetics and genomi… (2024) | pgx | 8 | [10.1097/FPC.0000000000000514](https://doi.org/10.1097/FPC.0000000000000514) | [37906625](https://www.ncbi.nlm.nih.gov/pubmed/37906625) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |

<sub>queue written 2026-10-07T11:26:01.787081+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agudelo_2019 | irrelevant | 2 | 0 | The study focuses on imipenem (the active drug) pharmacokinetics and cilastatin is only quantified for pharmaceutical equivalence (content uniformity) rather than modeled as a subject drug for PK disposition parameters. |
| popPK | Barry_2026 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vancomycin, not cilastatin (which is mentioned only as a co-administered medication). |
| popPK | Bhagunde_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of the beta-lactamase inhibitor relebactam, with cilastatin only mentioned as a component of the comparator combination drug. |
| popPK | Bilal_2021 | irrelevant | 0 | 0 | The paper is a pharmacokinetic review of cefiderocol, and cilastatin is mentioned only as a comparator drug in clinical efficacy trials, not as the subject drug with PK parameters. |
| popPK | Boucher_1990 | irrelevant | 1 | 0 | The study reports pharmacokinetic parameters for imipenem (the subject drug), while cilastatin is only co-administered and no PK data are provided for it. |
| popPK | Chen_2020 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic model measuring bacterial kill rates (CFU reduction) and does not report any pharmacokinetic parameters (CL, V, etc.) for cilastatin. |
| popPK | Dhont_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of amoxicillin and clavulanate, not cilastatin. |
| popPK | Dreetz_1996 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for imipenem and meropenem, but cilastatin is only co-administered as a standard partner drug and no quantitative PK parameters for cilastatin itself are reported. |
| popPK | Fratoni_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters only for imipenem and relebactam, while cilastatin is merely a co-administered component of the drug formulation and has no reported parameters. |
| popPK | Freij_1985 | relevant | 9 | 2 | The study reports the pharmacokinetic half-life and relative clearance of cilastatin, but lacks absolute numeric values for clearance (CL) and volume of distribution (V) required for detailed parameter extraction. |
| popPK | Gruber_1985 | relevant | 4 | 2 | The study models imipenem-cilastatin but reports quantitative PK parameters (Vd, half-life) primarily for imipenem, with no specific clearance or volume values provided for cilastatin alone. |
| popPK | Hani_2026 | irrelevant | 0 | 0 | The paper is a retrospective antibiotic stewardship study comparing Defined Daily Dose (DDD) and Days of Therapy (DOT) metrics, and does not report any pharmacokinetic parameters for cilastatin. |
| PGx | Huo_2019 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions via OAT transporters but does not report the effect of a specific gene variant or genotype on cilastatin's PK or PD parameters. |
| popPK | Katsube_2008 | irrelevant | 5 | 1 | The study focuses on PK/PD modeling of carbapenems (meropenem/imipenem) where cilastatin is merely a co-administered inhibitor, and no quantitative PK parameter values (CL, V, etc.) for cilastatin are reported in the provided evidence. |
| popPK | Kotapati_2005 | irrelevant | 1 | 0 | The paper is a pharmacodynamic Monte Carlo simulation using PK parameters from other studies and does not report original quantitative disposition parameter values for cilastatin. |
| popPK | Mavridou_2015 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PGx | Moulton_2015 | not_relevant | 0 | 0 | The paper reports in vitro enzymatic inhibition of a prodrug (pomaglumetad methionil) by cilastatin, not the pharmacogenomics of cilastatin itself. |
| popPK | Munhall_2026 | irrelevant | 1 | 0 | The study reports efficacy endpoints (GFR, creatinine) rather than quantitative pharmacokinetic parameters (CL, Vd, t1/2) for cilastatin. |
| popPK | Niki_2009 | irrelevant | 0 | 0 | The study analyzes MIC and PK/PD breakpoints for antibiotic efficacy, not the pharmacokinetic parameters of cilastatin itself. |
| popPK | Ong_2005 | irrelevant | 2 | 0 | The study is a pharmacodynamic simulation that uses PK parameters derived from other sources, rather than reporting original quantitative PK parameters for cilastatin. |
| popPK | Patel_2022 | irrelevant | 0 | 0 | The study focuses on the population pharmacokinetics of imipenem and relebactam, with cilastatin included only as a co-administered renal dehydropeptidase inhibitor without specific PK parameter estimation. |
| popPK | Qiao_2026 | irrelevant | 0 | 0 | The study reports population PK parameters for imipenem, with cilastatin only mentioned as a co-administered enzyme inhibitor and no quantitative PK data provided for cilastatin itself. |
| popPK | Rando_2024 | irrelevant | 2 | 0 | This is a systematic review of pulmonary PK for various beta-lactams (including imipenem/cilastatin/relebactam) and does not provide original quantitative PK parameters for cilastatin itself. |
| PGx | Rapti_2026 | not_relevant | 0 | 0 | The paper is a clinical review regarding the interchangeability of beta-lactam/BLBLI combinations against KPC infections and does not report pharmacogenomic effects on cilastatin PK/PD. |
| popPK | Rizk_2018 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of relebactam and imipenem; cilastatin is only listed as part of the co-administered imipenem-cilastatin formulation and has no reported PK parameters. |
| popPK | Shi_2026 | irrelevant | 1 | 0 | The study is a pharmacodynamic simulation regarding imipenem (with cilastatin as a required co-administered component) rather than a pharmacokinetic parameter estimation study for cilastatin itself, and no specific quantitative PK values (CL, V, etc.) for cilastatin are provided in the text. |
| popPK | Somani_1988 | relevant | 10 | 4 | The abstract reports a pharmacokinetic study of cilastatin in humans with specific numeric values for elimination half-life, but lacks explicit numeric values for clearance or volume of distribution in the provided text. |
| PGx | Teng_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction involving cilastatin (with mycophenolate mofetil), not a pharmacogenomic effect on cilastatin's PK/PD parameters. |
| popPK | Yu_2025 | irrelevant | 0 | 0 | The paper is a review of population pharmacokinetics for teicoplanin (TEC), not cilastatin. |
| popPK | Zhanel_2019 | irrelevant | 0 | 0 | The paper is a review of cefiderocol's pharmacokinetics and efficacy, using imipenem/cilastatin only as a comparator drug without reporting cilastatin-specific PK parameters. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of pharmacokinetic models for imipenem, not cilastatin, and contains no quantitative PK parameters for cilastatin. |
| popPK | de_2020 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for imipenem, not cilastatin, which is only mentioned as a co-administered agent to prevent imipenem degradation. |
| popPK | de_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of imipenem (with cilastatin as a co-administered agent to prevent degradation), not on the disposition parameters of cilastatin itself. |
| PGx | unknown_2026 | not_relevant | 0 | 0 | The paper discusses off-label use of anti-tuberculosis drugs, including imipenem/cilastatin, but does not report pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
