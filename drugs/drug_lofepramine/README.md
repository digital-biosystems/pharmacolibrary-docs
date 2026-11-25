<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;lofepramine&quot;}]"></div>

# lofepramine

- **generic name:** lofepramine
- **ATC codes:** `N06AA07`
- **DrugBank:** [DB13411](https://go.drugbank.com/drugs/DB13411) · **PubChem:** none
- **molar mass:** 418.97 g/mol (C26H27ClN2O) — DrugBank
- **groups:** experimental

## About

Lofepramine is a tricyclic antidepressant used to treat depression. It is given orally as a tablet.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q368941](https://www.wikidata.org/wiki/Q368941), [Wikipedia](https://en.wikipedia.org/wiki/Lofepramine?oldid=1328704092) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:07 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,851/160 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Darcy_2002.pdf` | Darcy P et al., The effect of lofepramine and other rel…, Toxicology letters (2002) | pd | 4 | [10.1016/s0378-4274(01)00542-2](https://doi.org/10.1016/s0378-4274(01)00542-2) | [11869831](https://www.ncbi.nlm.nih.gov/pubmed/11869831) | metadata signals extractable PD data (IC50) |
| `Spigset_1997.pdf` | Spigset O et al., Seizures and myoclonus associated with…, Acta psychiatrica Scandinav… (1997) | pgx | 5 | [10.1111/j.1600-0447.1997.tb09933.x](https://doi.org/10.1111/j.1600-0447.1997.tb09933.x) | [9395157](https://www.ncbi.nlm.nih.gov/pubmed/9395157) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-11-24 02:07 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of memory and psychomotor function, not a pharmacokinetic study reporting quantitative disposition parameters for lofepramine. |
| PD | Allen_1993 | not_relevant | 2 | 0 | The paper reports qualitative comparisons of single-dose effects (70 mg) against placebo but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., EC50, Emax). |
| PGx | Allen_1993 | not_relevant | 0 | 0 | The paper reports pharmacodynamic effects (memory, psychomotor) of the drug in healthy volunteers but does not investigate any gene variants or genotypes. |
| popPK | Chiu_1997 | irrelevant | 0 | 0 | The paper is a general review of antidepressant use in the elderly and does not report specific quantitative pharmacokinetic parameters for lofepramine. |
| PD | Chiu_1997 | not_relevant | 1 | 0 | The text is a qualitative review discussing the general tolerability and dosing considerations for lofepramine in the elderly, without providing any specific pharmacodynamic data, concentration-effect curves, or numeric PD parameters. |
| PGx | Chiu_1997 | not_relevant | 0 | 0 | The text discusses general pharmacokinetic changes in the elderly population, not specific pharmacogenomic effects (gene variants) on lofepramine. |
| popPK | Darcy_2002 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PGx | Darcy_2002 | not_relevant | 0 | 0 | The paper investigates the effect of lofepramine on Tetrahymena pyriformis motility, not human pharmacogenomics or PK/PD parameters. |
| popPK | Donoghue_1996 | irrelevant | 0 | 0 | This is a prescribing pattern study regarding antidepressant usage in primary care, not a pharmacokinetic study with quantitative disposition parameters. |
| PD | Donoghue_1996 | not_relevant | 0 | 0 | The paper is a prescribing pattern audit and does not report any pharmacodynamic or exposure-response data for lofepramine. |
| PGx | Donoghue_1996 | not_relevant | 0 | 0 | The paper analyzes prescribing patterns and dosage adherence in primary care, containing no information on pharmacogenomics or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Evans_1998 | irrelevant | 0 | 0 | The paper is a clinical case report describing treatment outcomes and adverse effects, with no pharmacokinetic parameters or quantitative disposition data for lofepramine. |
| PD | Evans_1998 | not_relevant | 1 | 0 | The paper is a clinical case report that mentions lofepramine caused clinical deterioration and ECG changes, but it does not provide any numeric concentration-effect data, dose-response curves, or PD parameters for lofepramine. |
| PGx | Evans_1998 | not_relevant | 0 | 0 | The paper is a clinical case report describing side effects and treatment response, with no pharmacogenomic data or analysis of how genetic variants affect pharmacokinetics or pharmacodynamics. |
| popPK | Forshell_1976 | relevant | 10 | 2 | The paper describes a human pharmacokinetic study of lofepramine with quantitative plasma level data, but the specific numeric parameter values are not present in the provided evidence text. |
| PGx | Forshell_1976 | not_relevant | 0 | 0 | The paper describes standard pharmacokinetics and pharmacodynamics of lofepramine in humans and animals but does not report any association with gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Ghose_1987 | relevant | 4 | 0 | The study is a PK/PD study of lofepramine in humans, but no quantitative disposition parameters (CL, V, ka, t1/2) are provided in the evidence, only qualitative descriptions of plasma levels. |
| PD | Ghose_1987 | not_relevant | 3 | 1 | The study reports qualitative dose-related effects and correlations but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve in the provided text. |
| PGx | Ghose_1987 | not_relevant | 0 | 0 | The study compares pharmacodynamic effects in a general elderly population and does not report any gene variants or genotypes. |
| popPK | Ghose_1989 | relevant | 8 | 4 | Reports half-life for lofepramine in elderly humans, but lacks clearance, volume of distribution, and other full PK parameters. |
| PGx | Ghose_1989 | not_relevant | 0 | 0 | The study compares pharmacokinetics in elderly healthy subjects but does not report any effects of gene variants or genotypes. |
| popPK | Hayasaka_2015 | irrelevant | 0 | 0 | The paper is a review/meta-analysis focusing on dose equivalence for depression treatment, not a pharmacokinetic study of lofepramine. |
| PD | Hayasaka_2015 | not_relevant | 1 | 0 | The paper reports dose equivalence ratios derived from clinical trial data but does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for lofepramine. |
| PGx | Hayasaka_2015 | not_relevant | 0 | 0 | The paper discusses dose equivalence across antidepressants and does not report any pharmacogenomic effects or genetic variants influencing PK/PD parameters. |
| popPK | Hippisley-Cox_2001 | irrelevant | 0 | 0 | The study is a case-control analysis of ischaemic heart disease risk and contains no pharmacokinetic parameters for lofepramine. |
| PD | Hippisley-Cox_2001 | not_relevant | 0 | 0 | The paper is an epidemiological case-control study reporting odds ratios for ischaemic heart disease; it does not report pharmacodynamic parameters (Emax, EC50) or concentration-effect relationships for lofepramine. |
| PGx | Hippisley-Cox_2001 | not_relevant | 0 | 0 | The study is a case-control analysis of cardiovascular risk associated with antidepressant use and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Lancaster_1989 | irrelevant | 2 | 0 | The paper is a review that summarizes pharmacokinetic properties but the provided evidence contains no specific quantitative disposition parameters (e.g., clearance, volume, half-life values) for lofepramine. |
| PD | Lancaster_1989 | not_relevant | 2 | 0 | The text is a qualitative review summary describing general pharmacodynamic properties and therapeutic efficacy without providing specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| PGx | Lancaster_1989 | not_relevant | 0 | 0 | The paper reviews the general pharmacokinetic and pharmacodynamic properties of lofepramine but does not discuss or report any pharmacogenomic effects. |
| popPK | Mariategui_1978 | irrelevant | 0 | 0 | The paper is a comparative clinical efficacy study of lofepramine vs amitriptyline that reports therapeutic outcomes and side effects, but contains no quantitative pharmacokinetic parameters (CL, V, ka, half-life) for lofepramine. |
| PD | Mariategui_1978 | not_relevant | 0 | 0 | The paper is a clinical comparison of therapeutic efficacy and side effects without any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| PGx | Mariategui_1978 | not_relevant | 0 | 0 | The paper reports a clinical comparison of lofepramine and amitriptyline but does not discuss any genetic or pharmacogenomic effects on PK/PD parameters. |
| popPK | Patience_1997 | irrelevant | 0 | 0 | The paper is a pharmacoepidemiological study of prescription dosing rates and does not report any pharmacokinetic parameters for lofepramine. |
| PD | Patience_1997 | not_relevant | 0 | 0 | The paper is a prescription audit analyzing the percentage of doses at or above a minimum therapeutic level, not a pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| PGx | Patience_1997 | not_relevant | 0 | 0 | The paper analyzes prescription dosing patterns in Scotland and does not report any pharmacogenomic effects or genetic associations with lofepramine's PK or PD parameters. |
| popPK | Siwers_1977 | irrelevant | 2 | 0 | The study reports steady-state plasma concentrations from a clinical evaluation but does not provide quantitative disposition parameters like clearance, volume of distribution, or half-life. |
| PD | Siwers_1977 | not_relevant | 2 | 0 | The paper reports a correlation between plasma metabolite concentration and in-vitro uptake inhibition, but explicitly states there is no correlation with clinical effect (amelioration scores), and no numeric PD parameters (Emax, EC50, etc.) are provided. |
| PGx | Siwers_1977 | not_relevant | 0 | 0 | The paper reports clinical and pharmacokinetic evaluations of lofepramine and imipramine but contains no mention of genetic variants, genotypes, or pharmacogenomic effects. |
| popPK | Spigset_1997 | irrelevant | 0 | 0 | The study is a pharmacovigilance review of adverse drug reactions (seizures/myoclonus) and reports no quantitative pharmacokinetic parameters for lofepramine. |
| PGx | Spigset_1997 | not_relevant | 1 | 1 | The paper reports an association between adverse events (seizures/myoclonus) and CYP genotypes/concomitant drugs, but does not quantify changes in pharmacokinetic or pharmacodynamic parameters of lofepramine (which was only involved in 1 case). |
| popPK | Wilde_1993 | irrelevant | 0 | 0 | The paper is a review of fluvoxamine, and lofepramine is only mentioned as a comparator without any pharmacokinetic parameters or data provided. |
| PD | Wilde_1993 | not_relevant | 0 | 0 | The text is a review of fluvoxamine that only qualitatively compares its efficacy to lofepramine without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for lofepramine. |
| PGx | Wilde_1993 | not_relevant | 0 | 0 | The paper is a review of fluvoxamine and does not report any pharmacogenomic effects on the PK or PD of lofepramine. |
| popPK | dElia_1977 | irrelevant | 2 | 0 | This is a clinical trial evaluating the psychiatric efficacy of lofepramine, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka, etc.). |
| PD | dElia_1977 | not_relevant | 1 | 0 | The paper reports clinical outcomes and mentions plasma levels for compliance, but does not provide numeric PD parameters or an exposure-response analysis in the text. |
| PGx | dElia_1977 | not_relevant | 0 | 0 | The paper reports a clinical comparison of lofepramine and imipramine without analyzing any genetic variants or pharmacogenomic influences on PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blofepramine%5D&body=Drug%3A%20lofepramine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_lofepramine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
