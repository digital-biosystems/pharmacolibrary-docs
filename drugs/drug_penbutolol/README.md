<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;penbutolol&quot;}]"></div>

# penbutolol

- **generic name:** penbutolol
- **ATC codes:** `C07AA23`, `C07CA23`
- **DrugBank:** [DB01359](https://go.drugbank.com/drugs/DB01359) · **PubChem:** [CID 37464](https://pubchem.ncbi.nlm.nih.gov/compound/37464)
- **molar mass:** 291.4284 g/mol (C18H29NO2) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Penbutolol is a non-selective beta blocker that was used to treat high blood pressure, angina, and after myocardial infarction. It has been withdrawn from the market and is no longer in general use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q944244](https://www.wikidata.org/wiki/Q944244) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Brockmeier_1988_reduction_in_exercise_induced_tachycardia](drugs/drug_penbutolol/pd_Brockmeier_1988_reduction_in_exercise_induced_tachycardia.md) | reduction in exercise-induced tachycardia ← penbutolol · direct Emax (saturable) effect | — | Brockmeier D et al., Penbutolol: pharmacokinetics, effect on…, European journal of clinica… (1988) | [10.1007/BF00637597](https://doi.org/10.1007/BF00637597) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Aguirre_1996_HR](drugs/drug_penbutolol/pd_Aguirre_1996_HR.md) | heart rate ← penbutolol · direct linear effect | — | Aguirre C et al., Pharmacokinetics and pharmacodynamics o…, Research communications in… (1996) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:33 | 0:42 | 0/0/0 | 1/1/0 | 0/0/0 | 21,112/786 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wellstein_1985.pdf` | Wellstein A et al., Penbutolol: beta-adrenoceptor interacti…, European journal of clinica… (1985) | pd | 5 | [10.1007/BF00544083](https://doi.org/10.1007/BF00544083) | [3000796](https://www.ncbi.nlm.nih.gov/pubmed/3000796) | metadata signals extractable PD data (IC50) |
| `Grobecker_1976.pdf` | Grobecker H et al., [Specific and non-specific effects of b…, Klinische Wochenschrift (1976) | pd | 4 | [10.1007/BF01614295](https://doi.org/10.1007/BF01614295) | [8664](https://www.ncbi.nlm.nih.gov/pubmed/8664) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T00:32:37.421281+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aguirre_1996 | relevant | 9 | 0 | The paper is a relevant PK/PD study for penbutolol, but the abstract only describes trends (reduced/increased) without providing specific numeric parameter values. |
| popPK | Cizmáriková_2002 | irrelevant | 0 | 0 | The paper is a review of beta-blockers without original quantitative pharmacokinetic parameter values for penbutolol. |
| PD | Cizmáriková_2002 | not_relevant | 1 | 0 | The text is a qualitative review of enantiomer effects and does not provide specific numeric PD parameters or concentration-effect data for penbutolol. |
| popPK | Grobecker_1976 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Grobecker_1976 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess PD relationships. |
| popPK | Heel_1981 | irrelevant | 0 | 0 | The paper is a preliminary review of pharmacological properties and therapeutic efficacy, not a primary pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Heel_1981 | not_relevant | 2 | 0 | The text is a qualitative review describing general pharmacological properties (e.g., narrow dose-response range, 24-hour duration) without providing specific numeric PD parameters, concentration-effect curves, or quantitative exposure-response data. |
| popPK | Kulkarni_1977 | irrelevant | 0 | 0 | The study is a pharmacodynamic potency assay comparing beta-blocking effects, not a pharmacokinetic study reporting disposition parameters for penbutolol. |
| PD | Kulkarni_1977 | not_relevant | 4 | 2 | The paper describes a dose-response assay and mentions obtaining a relationship, but the provided text does not contain specific numeric PD parameters (like EC50, Emax, or potency ratios) or data points to derive them. |
| popPK | Martin_1985 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice investigating receptor plasticity, not a pharmacokinetic study, and penbutolol is used only as a behavioral probe without any PK parameter reporting. |
| popPK | Martínez_1990 | irrelevant | 2 | 0 | The study focuses on the mechanism of protein binding and central effect in mice rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for penbutolol. |
| PD | Martínez_1990 | not_relevant | 2 | 1 | The paper reports a qualitative decrease in central effect and brain uptake in diseased animals but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) for penbutolol. |
| popPK | Mutschler_1984 | irrelevant | 2 | 0 | The study focuses on drug-drug interactions and reports qualitative changes in metabolite levels rather than quantitative disposition parameters (CL, V, etc.) for penbutolol. |
| PD | Mutschler_1984 | not_relevant | 1 | 0 | The paper reports qualitative findings that pharmacodynamic effects (inhibition of tachycardia) were not affected by co-administration, but provides no numeric PD parameters or concentration-effect curves. |
| popPK | Müller_1979 | irrelevant | 2 | 0 | The paper discusses pharmacokinetics qualitatively but provides no quantitative disposition parameters (CL, V, ka, etc.) for penbutolol in the evidence. |
| popPK | Schlicker_1992 | irrelevant | 0 | 0 | The study focuses on the pharmacology of anpirtoline, using penbutolol only as a receptor antagonist in binding and functional assays, with no PK parameters reported. |
| PD | Schlicker_1992 | not_relevant | 0 | 0 | The paper studies anpirtoline, not penbutolol; penbutolol is only mentioned as a 5-HT1B antagonist used to block anpirtoline's effects, with no PD parameters reported for penbutolol itself. |
| popPK | Schoenberger_1989 | irrelevant | 0 | 0 | The paper is a clinical efficacy study evaluating blood pressure response and does not report any pharmacokinetic parameters for penbutolol. |
| popPK | Sharma_1978 | irrelevant | 0 | 0 | The study reports comparative potency and pharmacodynamic effects (heart rate) but contains no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Silke_1983 | irrelevant | 2 | 0 | The study reports plasma concentrations and haemodynamic effects but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Silke_1984 | irrelevant | 1 | 0 | The study is a comparative haemodynamic dose-response analysis that does not report quantitative pharmacokinetic parameters (e.g., clearance, volume) for penbutolol. |
| PD | Silke_1984 | not_relevant | 3 | 2 | The study reports qualitative comparative haemodynamic effects of fixed doses but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (e.g., EC50, Emax) for penbutolol. |
| popPK | Sánchez_1995 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice investigating serotonergic mechanisms, with no pharmacokinetic parameters reported for penbutolol. |
| popPK | Sánchez_1997 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice using penbutolol as a probe drug to test receptor involvement, with no pharmacokinetic parameters reported. |
| popPK | Wellstein_1985 | irrelevant | 2 | 0 | The study focuses on in-vitro receptor binding and qualitative plasma concentration profiles without reporting quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Wong_2014 | irrelevant | 0 | 0 | The paper is a systematic review of blood pressure efficacy, not a pharmacokinetic study, and contains no PK parameters for penbutolol. |
| PD | Wong_2014 | not_relevant | 2 | 1 | The paper is a systematic review that concludes there is no convincing dose-response relationship for blood pressure and provides only aggregate mean differences, lacking specific numeric PD parameters (e.g., Emax, EC50) or individual concentration-effect data for penbutolol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
