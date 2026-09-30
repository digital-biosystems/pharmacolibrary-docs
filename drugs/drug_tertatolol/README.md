<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;tertatolol&quot;}]"></div>

# tertatolol

- **generic name:** tertatolol
- **ATC codes:** `C07AA16`
- **DrugBank:** [DB13775](https://go.drugbank.com/drugs/DB13775) · **PubChem:** not captured
- **molar mass:** 295.44 g/mol (C16H25NO2S) — DrugBank
- **groups:** experimental

## About

**Description.** Tertatolol is a beta blocker.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 08:24 | 10:07 | 0/0/0 | 0/0/0 | 0/0/0 | 39,093/3,458 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tertatolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR1A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 36 matched, 34 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Calès_1993.pdf` | Calès P et al., Hemodynamic and pharmacokinetic study o…, Journal of hepatology (1993) | popPK | 10 | [10.1016/s0168-8278(05)80174-6](https://doi.org/10.1016/s0168-8278(05)80174-6) | [7905493](https://pubmed.ncbi.nlm.nih.gov/7905493) | The abstract explicitly reports quantitative pharmacokinetic parameters for tertatolol, including plasma clearance (49 +/- 28 ml/min), volume of distribution (50 +/- 34 l), bioavailability (72 +/- 20%), and absorption metrics (Cmax, Tmax). |
| `Lave_1994.pdf` | Lave T et al., Pharmacokinetics of the enantiomers of…, Xenobiotica; the fate of fo… (1994) | popPK | 9 | [10.3109/00498259409043259](https://doi.org/10.3109/00498259409043259) | [7975722](https://pubmed.ncbi.nlm.nih.gov/7975722) | The paper is a pharmacokinetic study of tertatolol in rats reporting clearance and volume of distribution, but the specific numeric values are not present in the provided evidence. |
| `Rainfray_1989.pdf` | Rainfray M et al., Tertatolol in chronic renal failure. A…, American journal of hyperte… (1989) | popPK | 9 | [10.1093/ajh/2.11.266s](https://doi.org/10.1093/ajh/2.11.266s) | [2573374](https://pubmed.ncbi.nlm.nih.gov/2573374) | The study reports quantitative PK parameters for tertatolol including half-lives (2.5 h and 17.0 h) and peak concentration, though specific clearance and volume values are not explicitly listed in the text. |
| `Kirch_1990.pdf` | Kirch W et al., Interaction of tertatolol with rifampic…, Cardiovascular drugs and th… (1990) | popPK | 8 | [10.1007/BF01857758](https://doi.org/10.1007/BF01857758) | [1981019](https://pubmed.ncbi.nlm.nih.gov/1981019) | The study reports quantitative pharmacokinetic parameters (Cmax, Tmax, t1/2) for tertatolol in humans, with values explicitly present in the text. |
| `Haj-Dahmane_1994.pdf` | Haj-Dahmane S et al., Interactions of lesopitron (E-4424) wit…, European journal of pharmac… (1994) | pd | 4 | [10.1016/0014-2999(94)90097-3](https://doi.org/10.1016/0014-2999(94)90097-3) | [8026543](https://www.ncbi.nlm.nih.gov/pubmed/8026543) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-29T08:23:55.454272+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beaufils_1986 | irrelevant | 0 | 0 | The study reports clinical efficacy (blood pressure, heart rate) and renal function stability, but contains no pharmacokinetic parameters (CL, V, t1/2) for tertatolol. |
| popPK | Campbell_1986 | irrelevant | 2 | 3 | The paper is explicitly a review without original values, and the provided text lacks specific numeric values for volume of distribution or intercompartmental clearance. |
| PD | Campbell_1986 | not_relevant | 1 | 0 | The text is a qualitative review of pharmacokinetics and mentions a "flat plasma level response curve" but provides no numeric PD parameters (Emax, EC50, etc.) or extractable concentration-effect data. |
| popPK | Campbell_1988 | irrelevant | 2 | 0 | The paper is a review that mentions tertatolol only as a qualitative example to illustrate the difference between pharmacological and plasma half-life, without reporting quantitative PK parameters or population models. |
| PD | Campbell_1988 | not_relevant | 2 | 0 | The text is a review that qualitatively mentions tertatolol's prolonged activity relative to its half-life but does not provide numeric PD parameters or an extractable concentration-effect curve. |
| popPK | Chaignon_1990 | irrelevant | 2 | 0 | The study focuses on acute renal hemodynamic effects (RPF, GFR) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for tertatolol. |
| popPK | Chanard_2003 | irrelevant | 0 | 0 | The study is a clinical trial comparing the effects of amlodipine and tertatolol on hyperuricaemia and blood pressure, not a pharmacokinetic study reporting disposition parameters for tertatolol. |
| popPK | Cherruault_1986 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic modeling and optimal control for dosing rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for tertatolol. |
| popPK | Gobert_1995 | irrelevant | 0 | 0 | The study is a neuropharmacological investigation of receptor binding and neuronal firing in rats, not a pharmacokinetic study, and tertatolol is used only as a comparator ligand. |
| PD | Gobert_1995 | not_relevant | 2 | 1 | The paper describes qualitative electrophysiological and neurochemical effects of tertatolol (antagonist/weak agonist) but does not provide numeric PD parameters or extractable dose-response curves for tertatolol specifically. |
| popPK | Guery_1989 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure and renal function outcomes, containing no pharmacokinetic parameters for tertatolol. |
| PD | Guery_1989 | not_relevant | 1 | 0 | The paper reports clinical efficacy (BP reduction) and safety in a large cohort but does not provide plasma concentration data, dose-response curves, or any numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Guillet_1993 | irrelevant | 0 | 0 | The paper focuses on the renal hemodynamic effects (GFR, RPF) of tertatolol and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Haj-Dahmane_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of lesopitron, using tertatolol only as a receptor antagonist tool compound, and reports no pharmacokinetic parameters for tertatolol. |
| PD | Haj-Dahmane_1994 | not_relevant | 0 | 0 | The paper focuses on lesopitron; tertatolol is only mentioned as a qualitative antagonist used to block effects, with no PD parameters or exposure-response data reported for it. |
| PD | Kirch_1990 | not_relevant | 3 | 2 | The study reports PK parameters and qualitative/mean differences in BP and HR between groups, but does not provide a concentration-effect curve, Emax/EC50, or any numeric PD model parameters. |
| popPK | Lave_1994 | relevant | 9 | 0 | The paper is a pharmacokinetic study of tertatolol in rats reporting clearance and volume of distribution, but the specific numeric values are not present in the provided evidence. |
| popPK | Leeman_1986 | irrelevant | 0 | 0 | The study reports hemodynamic and pharmacodynamic responses (blood pressure, heart rate, renal blood flow) rather than pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| PD | Leeman_1986 | not_relevant | 2 | 1 | The paper reports single-dose hemodynamic effects (percent changes) but does not provide plasma concentration data or fit a concentration-effect/dose-response model to derive numeric PD parameters like Emax or EC50. |
| popPK | Leeman_1986_2 | irrelevant | 0 | 0 | The study reports hemodynamic effects (blood pressure, heart rate, renal blood flow) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for tertatolol. |
| PD | Leeman_1986_2 | not_relevant | 2 | 1 | The paper reports a single-dose clinical comparison of hemodynamic effects (heart rate, cardiac index, renal blood flow) but does not provide plasma concentration data or fit a concentration-effect/dose-response model to derive PD parameters like Emax or EC50. |
| popPK | Lejeune_1997 | irrelevant | 0 | 0 | The study is a pharmacological investigation of receptor interactions and neuronal firing, using tertatolol only as a 5-HT1A antagonist, with no pharmacokinetic parameters reported. |
| PD | Lejeune_1997 | not_relevant | 0 | 0 | The paper studies the pharmacology of 8-OH-DPAT and 7-OH-DPAT; tertatolol is only mentioned as a 5-HT1A antagonist used to block effects, with no PD or exposure-response analysis for tertatolol itself. |
| popPK | Millan_1994 | irrelevant | 0 | 0 | The paper is a pharmacological study on benzodioxopiperazines where tertatolol is used only as a comparator for receptor binding affinity, with no pharmacokinetic parameters reported. |
| PD | Millan_1994 | not_relevant | 0 | 0 | The paper focuses on novel benzodioxopiperazines and only mentions tertatolol as a comparator for receptor binding affinity (pKi) and qualitative functional activity, without reporting any exposure-response or dose-response PD parameters for tertatolol. |
| popPK | Paillard_1986 | irrelevant | 0 | 0 | The study focuses on renal hemodynamic effects (GFR, RPF) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for tertatolol. |
| popPK | Prost_1986 | irrelevant | 0 | 0 | The paper is a review on dose-finding strategies for beta-blockers and does not report quantitative pharmacokinetic parameters for tertatolol. |
| PD | Prost_1986 | not_relevant | 1 | 0 | The text is a methodological discussion on dose-finding study designs for tertatolol and does not report specific numeric PD parameters or concentration-effect data. |
| PD | Rainfray_1989 | not_relevant | 0 | 0 | The paper is a pharmacokinetic study in chronic renal failure and does not report pharmacodynamic or exposure-response relationships for tertatolol. |
| popPK | Ribstein_1993 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing hemodynamic and renal effects, not a pharmacokinetic study, and contains no PK parameters for tertatolol. |
| popPK | Verbeuren_1985 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding and tissue effects, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Verbeuren_1989 | irrelevant | 0 | 0 | The study is a mechanistic pharmacological investigation of prejunctional beta-adrenoceptors in isolated rat kidneys, not a pharmacokinetic study, and reports no disposition parameters for tertatolol. |
| popPK | van_1990 | irrelevant | 0 | 0 | The paper is a pharmacological review discussing the mechanism of hybrid antihypertensive drugs and does not report any quantitative pharmacokinetic parameters for tertatolol. |
| PD | van_1990 | not_relevant | 1 | 0 | The text is a qualitative review of hybrid antihypertensive drugs and mentions tertatolol only as an example without providing any numeric PD parameters or exposure-response data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
