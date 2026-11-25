<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;bromperidol&quot;}]"></div>

# bromperidol

- **generic name:** bromperidol
- **ATC codes:** `N05AD06`
- **DrugBank:** [DB12401](https://go.drugbank.com/drugs/DB12401) · **PubChem:** [CID 2448](https://pubchem.ncbi.nlm.nih.gov/compound/2448)
- **molar mass:** 420.322 g/mol (C21H23BrFNO2) — DrugBank
- **groups:** approved, withdrawn

## About

Bromperidol is a typical antipsychotic from the butyrophenone class used to treat schizophrenia. It is administered orally as tablets or solutions, while a long-acting ester form is given as a depot injection. The drug is listed as withdrawn.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q4973749](https://www.wikidata.org/wiki/Q4973749), [Wikipedia](https://en.wikipedia.org/wiki/Bromperidol?oldid=1371968174) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [de_2018_cAMP](drugs/drug_bromperidol/pd_de_2018_cAMP.md) | cAMP biomarker turnover ← Bromperidol | — | de Witte WEA et al., In vitro and in silico analysis of the…, British journal of pharmaco… (2018) | [10.1111/bph.14456](https://doi.org/10.1111/bph.14456) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 19:23 | 0:04 | 0/0/0 | 1/0/0 | 0/0/0 | 3,998/169 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 34 matched, 34 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Suzuki_1998.pdf` | Suzuki A et al., Effects of various factors including th…, Psychopharmacology (1998) | pgx | 8 | [10.1007/s002130050519](https://doi.org/10.1007/s002130050519) | [9539256](https://www.ncbi.nlm.nih.gov/pubmed/9539256) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Furukori_1998.pdf` | Furukori H, [Involvement of cytochromeP4503A4 in th…, Nihon shinkei seishin yakur… (1998) | pgx | 7 |  | [9592806](https://www.ncbi.nlm.nih.gov/pubmed/9592806) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Furukori_1999.pdf` | Furukori H et al., Effects of itraconazole on the steady-s…, Psychopharmacology (1999) | pgx | 7 | [10.1007/s002130051048](https://doi.org/10.1007/s002130051048) | [10463320](https://www.ncbi.nlm.nih.gov/pubmed/10463320) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Suzuki_1996.pdf` | Suzuki A et al., No interaction between desipramine and…, Progress in neuro-psychopha… (1996) | pgx | 7 | [10.1016/s0278-5846(96)00111-x](https://doi.org/10.1016/s0278-5846(96)00111-x) | [8938825](https://www.ncbi.nlm.nih.gov/pubmed/8938825) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Tateishi_2000.pdf` | Tateishi T et al., CYP3A is responsible for N-dealkylation…, Life sciences (2000) | pgx | 7 | [10.1016/s0024-3205(00)00874-2](https://doi.org/10.1016/s0024-3205(00)00874-2) | [11133003](https://www.ncbi.nlm.nih.gov/pubmed/11133003) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-11-23 19:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Benfield_1988 | irrelevant | 2 | 0 | The paper is a preliminary review summarizing pharmacodynamic and pharmacokinetic properties but contains no specific quantitative PK parameter values (CL, V, t1/2, etc.) in the provided evidence. |
| PGx | Benfield_1988 | not_relevant | 0 | 0 | The paper is a general clinical review of bromperidol's efficacy and side effects, with no mention of pharmacogenomics, gene variants, or genotypes. |
| popPK | Furukori_1998 | irrelevant | 1 | 0 | The study is a drug-drug interaction investigation focused on CYP3A4 involvement and reports only that plasma concentrations were significantly higher, without providing specific quantitative PK parameters like clearance or volume. |
| PGx | Furukori_1998 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (CYP3A4 inhibition by itraconazole) rather than the effect of a specific genetic variant or genotype on pharmacokinetics. |
| popPK | Furukori_1999 | irrelevant | 2 | 0 | The study reports only steady-state plasma concentrations (C_ss) to assess a drug-drug interaction and does not provide quantitative disposition parameters (CL, V, half-life) or a population PK model. |
| PGx | Furukori_1999 | not_relevant | 0 | 0 | The study reports a drug-drug interaction with itraconazole, not a pharmacogenomic effect based on a gene variant. |
| popPK | Kim_2015 | irrelevant | 0 | 0 | This is a population PK study of paroxetine; bromperidol is only used as an internal standard in the LC-MS assay, with no PK parameters for bromperidol. |
| PGx | Lee_2006 | not_relevant | 1 | 1 | The paper explicitly states that significant correlations between genetic factors and bromperidol pharmacokinetics or adverse effects could not be proven. |
| popPK | Mihara_1999 | irrelevant | 2 | 0 | The study reports only that plasma concentrations did not change significantly (no interaction), without providing quantitative PK parameter values like CL, V, or t1/2. |
| PGx | Mihara_1999 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between cisapride and bromperidol, but does not mention any gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Mihara_2001 | irrelevant | 0 | 0 | The study focuses on pharmacogenetics and prolactin response, not on pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Sakumoto_2007 | irrelevant | 0 | 0 | The study investigates genetic polymorphisms and clinical response in schizophrenia patients, reporting no pharmacokinetic parameters such as clearance or volume of distribution for bromperidol. |
| popPK | Sato_2000 | irrelevant | 0 | 0 | The study is in-vitro mechanistic research on CYP enzymes and does not report in-vivo population pharmacokinetic parameters like clearance or volume. |
| PGx | Sato_2000 | not_relevant | 2 | 0 | The study characterizes enzyme-mediated metabolism (CYP3A4) in vitro but does not report how genetic variants (genotypes) alter pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Schmatolla_1978 | irrelevant | 0 | 0 | The paper is a clinical report on the efficacy and safety of bromperidol in treating delirium tremens and does not contain any pharmacokinetic parameters or data. |
| PGx | Schmatolla_1978 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of high-dose bromperidol in delirium tremens but contains no mention of genetic variants, genotypes, or pharmacogenomic influences on PK or PD. |
| popPK | Schotte_1995 | irrelevant | 0 | 0 | The paper is a receptor binding and occupancy study comparing risperidone to other antipsychotics, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for bromperidol. |
| PGx | Schotte_1995 | not_relevant | 0 | 0 | The paper compares in vivo receptor occupancy of various antipsychotics but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Smeraldi_1996 | irrelevant | 0 | 0 | The paper reports on the clinical efficacy and safety of bromperidol decanoate in schizophrenia patients, but contains no pharmacokinetic data, compartmental models, or quantitative disposition parameters. |
| PGx | Smeraldi_1996 | not_relevant | 0 | 0 | The paper reports a clinical trial of bromperidol decanoate efficacy and safety but contains no data on pharmacogenomics, genotypes, or genetic variants. |
| popPK | Spanarello_2014 | irrelevant | 2 | 0 | The paper is a narrative review discussing the pharmacokinetics of depot antipsychotics generally, including bromperidol, but contains no original quantitative parameter values or specific numeric data for bromperidol in the provided text. |
| PGx | Spanarello_2014 | not_relevant | 0 | 0 | The text is a review of the pharmacokinetics of depot antipsychotics and does not report any pharmacogenomic effects or genotype-based differences in PK/PD parameters for bromperidol. |
| popPK | Suzuki_1996 | irrelevant | 2 | 1 | The study reports plasma concentrations (ng/ml) in a drug interaction study but does not report quantitative PK disposition parameters like clearance (CL), volume (V), or half-life with model fitting. |
| PGx | Suzuki_1996 | not_relevant | 0 | 0 | The study investigates a pharmacokinetic drug-drug interaction between desipramine and bromperidol, not a pharmacogenomic effect based on genetic variants. |
| popPK | Suzuki_1998 | irrelevant | 2 | 2 | The study reports steady-state plasma concentrations (Css) rather than quantitative pharmacokinetic disposition parameters (CL, V, t1/2). |
| PGx | Suzuki_1998 | not_relevant | 2 | 0 | The study concludes that CYP2D6 genotype does not significantly affect bromperidol steady-state plasma concentrations. |
| popPK | Suárez_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting symptom scores and side effects, containing no pharmacokinetic parameters. |
| PGx | Suárez_1985 | not_relevant | 0 | 0 | The paper reports a clinical study on bromperidol efficacy and safety but contains no mention of genetic variants, genotypes, or pharmacogenomic analyses. |
| popPK | Tateishi_2000 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of hepatic metabolism (Vmax/Km) and does not report in-vivo pharmacokinetic disposition parameters (CL, V, half-life) for bromperidol. |
| PGx | Tateishi_2000 | not_relevant | 0 | 0 | The paper describes in vitro CYP3A4 metabolism of bromperidol but does not report any pharmacogenomic association between specific gene variants/genotypes and PK/PD parameters in humans. |
| popPK | Tsuneizumi_1994 | irrelevant | 0 | 0 | The study is a clinical efficacy case report on Huntington's disease that only reports CSF HVA concentrations, not bromperidol pharmacokinetic parameters. |
| PGx | Tsuneizumi_1994 | not_relevant | 0 | 0 | The paper reports clinical effects of drugs in a single patient with Huntington disease but does not report any pharmacogenomic effects or gene variants. |
| popPK | Weiser_1978 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for schizophrenia and does not report any pharmacokinetic parameters. |
| PGx | Weiser_1978 | not_relevant | 0 | 0 | The paper reports general clinical efficacy and safety in a general population but contains no information regarding gene variants, genotypes, or pharmacogenomic effects. |
| popPK | Woggon_1978 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing bromperidol and perphenazine, reporting therapeutic doses and side effects but containing no pharmacokinetic parameters (CL, V, t1/2, etc.). |
| PGx | Woggon_1978 | not_relevant | 0 | 0 | The paper is a clinical comparison of two drugs and contains no information regarding gene variants, genotypes, or pharmacogenomic effects on PK/PD parameters. |
| popPK | Woggon_1978_2 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy and side effects of bromperidol in schizophrenic patients, with no report of pharmacokinetic parameters. |
| PGx | Woggon_1978_2 | not_relevant | 0 | 0 | The paper describes clinical effects and side effects of bromperidol but does not investigate gene variants or genotypes. |
| popPK | Yasui-Furukori_2002 | irrelevant | 1 | 0 | The study focuses on side-effect characteristics in schizophrenic patients and does not report quantitative pharmacokinetic disposition parameters or a PK model for bromperidol. |
| PGx | Yasui-Furukori_2002 | not_relevant | 0 | 0 | The paper investigates the association between age and side effects of bromperidol but does not examine gene variants or genotypes. |
| popPK | Yasui-Furukori_2002_2 | irrelevant | 0 | 0 | The study reports therapeutic effects and mean plasma concentrations related to clinical response, but does not report quantitative pharmacokinetic disposition parameters (CL, V, t1/2, ka) or a PK model. |
| PGx | Yasui-Furukori_2002_2 | not_relevant | 0 | 0 | The paper investigates clinical response and plasma concentration relationships in schizophrenic patients but contains no information regarding genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Yasui-Furukori_2002_3 | irrelevant | 2 | 1 | The study focuses on pharmacodynamics (prolactin response) and reports only a mean total plasma concentration, lacking the quantitative disposition parameters (CL, V, ka, half-life) required for population PK modeling. |
| PGx | Yasui-Furukori_2002_3 | not_relevant | 0 | 0 | The paper compares PK/PD parameters of two drugs in the same individuals but does not report any genetic variants or pharmacogenomic effects. |
| popPK | Yasui-Furukori_2006 | irrelevant | 1 | 0 | The study investigates pharmacogenetic associations (MDR1 polymorphisms) and therapeutic response rather than reporting quantitative pharmacokinetic parameters like clearance or volume for bromperidol. |
| PGx | Yasui-Furukori_2006 | not_relevant | 6 | 2 | The study reports an association between MDR1 genotypes and therapeutic response (PD) rather than a specific, quantified change in a PK parameter (e.g., Cmax, AUC) directly caused by the genotype. |
| popPK | de_2018 | irrelevant | 0 | 0 | The study investigates in vitro binding kinetics and signal transduction of D2 receptor antagonists, not the pharmacokinetic disposition parameters (CL, V, t1/2) of bromperidol in vivo. |
| PGx | de_2018 | not_relevant | 0 | 0 | The paper studies D2 receptor binding kinetics and cellular cAMP responses to various antagonists (including bromperidol) in vitro but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbromperidol%5D&body=Drug%3A%20bromperidol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bromperidol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
