<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;tertatolol&quot;}]"></div>

# tertatolol

- **generic name:** tertatolol
- **ATC codes:** `C07AA16`
- **DrugBank:** [DB13775](https://go.drugbank.com/drugs/DB13775) · **PubChem:** not captured
- **molar mass:** 295.44 g/mol (C16H25NO2S) — DrugBank
- **groups:** experimental

## About

Tertatolol is a non-selective beta blocker that was used to treat high blood pressure. It is currently listed only as an experimental drug and does not appear to be an approved medicine today.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7705238](https://www.wikidata.org/wiki/Q7705238) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tertatolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR1A (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:28 | 1:35 | 0/0/0 | 0/0/0 | 0/0/0 | 24,251/1,295 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 36 matched, 34 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Calès_1993.pdf` | Calès P et al., Hemodynamic and pharmacokinetic study o…, Journal of hepatology (1993) | popPK | 10 | [10.1016/s0168-8278(05)80174-6](https://doi.org/10.1016/s0168-8278(05)80174-6) | [7905493](https://pubmed.ncbi.nlm.nih.gov/7905493) | The abstract explicitly reports quantitative pharmacokinetic parameters for tertatolol, including plasma clearance (49 +/- 28 ml/min), volume of distribution (50 +/- 34 l), bioavailability (72 +/- 20%), and absorption metrics (Cmax, Tmax). |
| `Lave_1994.pdf` | Lave T et al., Pharmacokinetics of the enantiomers of…, Xenobiotica; the fate of fo… (1994) | popPK | 10 | [10.3109/00498259409043259](https://doi.org/10.3109/00498259409043259) | [7975722](https://pubmed.ncbi.nlm.nih.gov/7975722) | The study reports quantitative PK parameters (clearance, volume) for tertatolol enantiomers in rats, but the specific numeric values are not present in the provided evidence text. |
| `Rainfray_1989.pdf` | Rainfray M et al., Tertatolol in chronic renal failure. A…, American journal of hyperte… (1989) | popPK | 9 | [10.1093/ajh/2.11.266s](https://doi.org/10.1093/ajh/2.11.266s) | [2573374](https://pubmed.ncbi.nlm.nih.gov/2573374) | The study reports quantitative pharmacokinetic parameters (tmax, Cmax, half-lives) for tertatolol in humans, though specific clearance and volume values are not explicitly listed in the text. |
| `Kirch_1990.pdf` | Kirch W et al., Interaction of tertatolol with rifampic…, Cardiovascular drugs and th… (1990) | popPK | 8 | [10.1007/BF01857758](https://doi.org/10.1007/BF01857758) | [1981019](https://pubmed.ncbi.nlm.nih.gov/1981019) | The study reports quantitative PK parameters (Cmax, Tmax, t1/2) for tertatolol in humans, though clearance and volume of distribution are not explicitly listed. |
| `Haj-Dahmane_1994.pdf` | Haj-Dahmane S et al., Interactions of lesopitron (E-4424) wit…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)90097-3](https://doi.org/10.1016/0014-2999(94)90097-3) | [8026543](https://www.ncbi.nlm.nih.gov/pubmed/8026543) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T01:27:56.323100+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beaufils_1986 | irrelevant | 0 | 0 | The study reports clinical efficacy (blood pressure, heart rate, renal function) rather than pharmacokinetic parameters (clearance, volume, half-life). |
| popPK | Campbell_1986 | irrelevant | 2 | 5 | The paper is explicitly a review of tertatolol pharmacokinetics in humans, lacking original experimental data or a specific population PK model, though it cites general parameter values. |
| PD | Campbell_1986 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetics and mentions a "flat plasma level response curve" but provides no numeric PD parameters (Emax, EC50, etc.) or extractable concentration-effect data. |
| popPK | Campbell_1988 | irrelevant | 1 | 0 | This is a review article that mentions tertatolol's half-life (3 h) in the context of explaining prolonged activity, but it does not report original quantitative disposition parameters (CL, V, Q, ka) or a compartmental/population-PK model for tertatolol. |
| PD | Campbell_1988 | not_relevant | 2 | 0 | The text is a review that qualitatively mentions tertatolol's prolonged activity relative to its half-life but does not provide numeric PD parameters or an extractable concentration-effect curve. |
| popPK | Chaignon_1990 | irrelevant | 2 | 0 | The study focuses on acute renal hemodynamic effects (RPF, GFR) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for tertatolol. |
| popPK | Chanard_2003 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of tertatolol on uric acid levels and blood pressure, not its pharmacokinetic parameters. |
| popPK | Cherruault_1986 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic modeling and optimal control for dosing rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for tertatolol. |
| popPK | Gobert_1995 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor binding and electrophysiological effects in rats, not a pharmacokinetic study, and reports no disposition parameters for tertatolol. |
| PD | Gobert_1995 | not_relevant | 2 | 1 | The paper describes qualitative electrophysiological and neurochemical effects of tertatolol (antagonist/weak agonist) but does not provide numeric PD parameters or extractable dose-response curves for tertatolol specifically. |
| popPK | Guery_1989 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure and renal function outcomes, containing no pharmacokinetic parameters for tertatolol. |
| PD | Guery_1989 | not_relevant | 1 | 0 | The paper reports clinical efficacy (BP reduction) and safety in a large cohort but does not provide plasma concentration data, dose-response curves, or any numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Guillet_1993 | irrelevant | 0 | 0 | The paper describes renal hemodynamic effects (GFR, RPF) rather than pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Haj-Dahmane_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of lesopitron, using tertatolol only as a receptor antagonist tool compound, and reports no pharmacokinetic parameters for tertatolol. |
| PD | Haj-Dahmane_1994 | not_relevant | 0 | 0 | The paper focuses on lesopitron; tertatolol is only mentioned as a qualitative antagonist used to block effects, with no PD parameters or exposure-response data reported for it. |
| PD | Kirch_1990 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative/mean differences in BP and HR between groups, but does not provide a concentration-effect curve, Emax/EC50, or any numeric PD model parameters. |
| popPK | Lave_1994 | relevant | 10 | 2 | The study reports quantitative PK parameters (clearance, volume) for tertatolol enantiomers in rats, but the specific numeric values are not present in the provided evidence text. |
| popPK | Leeman_1986 | irrelevant | 0 | 0 | The study reports hemodynamic and pharmacodynamic responses (blood pressure, heart rate, renal blood flow) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PD | Leeman_1986 | not_relevant | 2 | 1 | The paper reports single-dose hemodynamic effects (percent changes) but does not provide plasma concentration data or fit a concentration-effect/dose-response model to derive numeric PD parameters like Emax or EC50. |
| popPK | Leeman_1986_2 | irrelevant | 0 | 0 | The study reports hemodynamic effects (blood pressure, heart rate, renal blood flow) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for tertatolol. |
| PD | Leeman_1986_2 | not_relevant | 2 | 1 | The paper reports a single-dose clinical comparison of hemodynamic effects (heart rate, cardiac index, renal blood flow) but does not provide plasma concentration data or fit a concentration-effect/dose-response model to derive PD parameters like Emax or EC50. |
| popPK | Lejeune_1997 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor interactions and neuronal firing, using tertatolol only as a 5-HT1A antagonist, with no pharmacokinetic parameters reported. |
| PD | Lejeune_1997 | not_relevant | 0 | 0 | The paper studies the pharmacology of 8-OH-DPAT and 7-OH-DPAT; tertatolol is only mentioned as a 5-HT1A antagonist used to block effects, with no PD or exposure-response analysis for tertatolol itself. |
| popPK | Millan_1994 | irrelevant | 0 | 0 | The paper is a pharmacological study of benzodioxopiperazines where tertatolol is used only as a reference compound for receptor binding affinity, not a PK study. |
| PD | Millan_1994 | not_relevant | 0 | 0 | The paper focuses on novel benzodioxopiperazines and only mentions tertatolol as a comparator for receptor binding affinity (pKi) and qualitative functional activity, without reporting any exposure-response or dose-response PD parameters for tertatolol. |
| popPK | Paillard_1986 | irrelevant | 0 | 0 | The study focuses on renal hemodynamic effects (GFR, RPF) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for tertatolol. |
| popPK | Prost_1986 | irrelevant | 0 | 0 | The paper is a review discussing dose-finding strategies and clinical trial designs for beta-blockers, containing no original quantitative pharmacokinetic parameter values for tertatolol. |
| PD | Prost_1986 | not_relevant | 1 | 0 | The text is a methodological discussion on dose-finding study designs for tertatolol and does not report specific numeric PD parameters or concentration-effect data. |
| PD | Rainfray_1989 | not_relevant | 0 | 0 | The paper is a pharmacokinetic study in chronic renal failure and does not report pharmacodynamic or exposure-response relationships for tertatolol. |
| popPK | Ribstein_1993 | irrelevant | 0 | 0 | The study is a clinical trial assessing hemodynamic and renal effects of tertatolol, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Verbeuren_1985 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenoceptor blocking properties and does not report pharmacokinetic parameters. |
| popPK | Verbeuren_1989 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of prejunctional beta-adrenoceptors in isolated rat kidneys, not a pharmacokinetic study, and reports no disposition parameters for tertatolol. |
| popPK | van_1990 | irrelevant | 0 | 0 | The paper is a pharmacological review discussing the mechanism of hybrid antihypertensive drugs and does not report any quantitative pharmacokinetic parameters for tertatolol. |
| PD | van_1990 | not_relevant | 1 | 0 | The text is a qualitative review of hybrid antihypertensive drugs and mentions tertatolol only as an example without providing any numeric PD parameters or exposure-response data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
