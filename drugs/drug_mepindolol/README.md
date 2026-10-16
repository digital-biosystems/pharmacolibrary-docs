<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;mepindolol&quot;}]"></div>

# mepindolol

- **generic name:** mepindolol
- **ATC codes:** `C07AA14`
- **DrugBank:** [DB13530](https://go.drugbank.com/drugs/DB13530) · **PubChem:** not captured
- **molar mass:** 262.353 g/mol (C15H22N2O2) — DrugBank
- **groups:** investigational

## About

Mepindolol is a non-selective beta blocker, a class of drugs used for cardiovascular conditions such as high blood pressure. It appears to be investigational and is not an authorised medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2760233](https://www.wikidata.org/wiki/Q2760233) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:29 | 0:16 | 0/0/0 | 0/0/0 | 0/0/0 | 9,413/713 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mepindolol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB3 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bonelli_1980.pdf` | Bonelli J et al., Pharmacokinetics and pharmacodynamics o…, International journal of cl… (1980) | popPK | 10 | not captured | [6103882](https://pubmed.ncbi.nlm.nih.gov/6103882) | The study reports pharmacokinetic parameters for mepindolol in humans, but the extracted evidence contains only the abstract/methods description and no specific numeric values for clearance, volume, or half-life. |
| `Krause_1984.pdf` | Krause W et al., Pharmacokinetics of mepindolol in patie…, European journal of clinica… (1984) | popPK | 9 | [10.1007/BF00549590](https://doi.org/10.1007/BF00549590) | [6519149](https://pubmed.ncbi.nlm.nih.gov/6519149) | The study reports quantitative PK parameters (half-life, AUC, Cmax, Tmax) for mepindolol in humans, but does not explicitly state clearance or volume of distribution. |
| `de_1989_2.pdf` | de Mey C et al., Transdermal delivery of mepindolol and…, Arzneimittel-Forschung (1989) | popPK | 8 | not captured | [2576201](https://pubmed.ncbi.nlm.nih.gov/2576201) | The paper reports pharmacokinetic data for mepindolol in humans, but the abstract contains only qualitative descriptions of plasma levels and no specific quantitative parameter values (e.g., CL, V, t1/2). |
| `Krause_1983.pdf` | Krause W et al., Pharmacokinetics of mepindolol sulfate…, Drug metabolism and disposi… (1983) | popPK | 7 | not captured | [6133729](https://pubmed.ncbi.nlm.nih.gov/6133729) | The study reports pharmacokinetic data (half-lives, bioavailability) for mepindolol in animals, but specific clearance/volume parameters are not explicitly quantified in the text. |

<sub>queue written 2026-10-15T03:29:11.891029+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aqil_2006 | irrelevant | 0 | 0 | The paper is a review of transdermal delivery research and does not report original quantitative pharmacokinetic parameters for mepindolol. |
| PD | Aqil_2006 | not_relevant | 1 | 0 | The text is a review of transdermal delivery systems for beta-blockers and does not report any pharmacodynamic or exposure-response data for mepindolol. |
| popPK | Bonelli_1977 | irrelevant | 0 | 0 | This is a hemodynamic/pharmacodynamic study focusing on receptor subtypes and dose-response curves, not a pharmacokinetic study reporting disposition parameters like clearance or volume for mepindolol. |
| PD | Bonelli_1977 | not_relevant | 4 | 2 | The paper describes a qualitative dose-response shift (dissociation of HR and SV curves) for mepindolol in a small-n study but does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative data points in the text. |
| popPK | Bonelli_1980 | relevant | 10 | 2 | The study reports pharmacokinetic parameters for mepindolol in humans, but the extracted evidence contains only the abstract/methods description and no specific numeric values for clearance, volume, or half-life. |
| popPK | Dorow_1984 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of mepindolol on mucociliary clearance, not its pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Fogari_1990 | irrelevant | 0 | 0 | The study evaluates the effects of beta-blockers on plasma lipids and does not report any pharmacokinetic parameters for mepindolol. |
| PD | Fogari_1990 | not_relevant | 1 | 0 | The paper reports qualitative comparisons of lipid changes among different beta-blockers but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for mepindolol. |
| popPK | Krause_1980 | irrelevant | 0 | 0 | no_text gate: only 50 chars of text extracted (&lt; 400) |
| popPK | Krause_1982 | irrelevant | 2 | 1 | The study reports only specific plasma and milk concentrations at single time points without deriving quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Krause_1982 | not_relevant | 0 | 0 | The paper reports PK parameters (plasma/milk concentrations) but contains no pharmacodynamic data, effect measurements, or dose-response relationships. |
| popPK | Krause_1983 | relevant | 7 | 4 | The study reports pharmacokinetic data (half-lives, bioavailability) for mepindolol in animals, but specific clearance/volume parameters are not explicitly quantified in the text. |
| popPK | Krause_1983_2 | irrelevant | 3 | 2 | The study is a low-dose (10 mg) bioequivalence/bioavailability comparison rather than a study providing comprehensive quantitative disposition parameters (CL, V, Q) or a population PK model for mepindolol, and key numeric values are only given as a range (4-5 h) or context (bioavailability). |
| popPK | Liedtke_1987 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Liedtke_1987 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the abstract or body text required to verify the presence of numeric pharmacodynamic parameters or exposure-response relationships. |
| popPK | Liedtke_1989 | irrelevant | 2 | 0 | The study reports pharmacodynamic effects and "orienting" serum levels without providing specific quantitative pharmacokinetic parameters (CL, V, ka) or a PK model in the provided text. |
| PD | Liedtke_1989 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic effects (BP/HR changes) and mentions serum levels, but the provided text does not contain numeric PD parameters (Emax, EC50) or a quantitative concentration-effect relationship. |
| popPK | Parada_1983 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on blood pressure control and dosage adjustments in renal failure, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Parada_1983 | not_relevant | 2 | 1 | The paper reports qualitative dose-response observations (adequacy of 5 mg, 2.5 mg, and 1.25 mg) but provides no numeric concentration-effect data, PK parameters, or derivable PD parameters like Emax or EC50. |
| popPK | Schliep_1984 | irrelevant | 0 | 0 | The study focuses on the beta-1 selectivity of bisoprolol, using mepindolol only as a comparator for receptor activity, and contains no pharmacokinetic parameters. |
| PD | Schliep_1984 | not_relevant | 3 | 2 | The paper reports beta-1/beta-2 selectivity ratios for mepindolol (0.6-1) but does not provide specific concentration-effect curves, Emax, or EC50 values for mepindolol itself, only comparative selectivity indices. |
| popPK | Serro-Azul_1989 | irrelevant | 0 | 0 | The study is a clinical trial assessing blood pressure and lipid effects, reporting no pharmacokinetic parameters for mepindolol. |
| PD | Serro-Azul_1989 | not_relevant | 1 | 0 | The study is a clinical trial comparing fixed doses of mepindolol and metoprolol, reporting only mean clinical outcomes (BP, HR, lipids) without any concentration-effect analysis, PK/PD modeling, or derivation of numeric PD parameters like Emax or EC50. |
| popPK | de_1989 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic effects (heart rate, blood pressure) of transdermal mepindolol and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | de_1989 | not_relevant | 2 | 1 | The paper describes qualitative pharmacodynamic effects (blunting/abolition of isoprenaline responses) but does not provide numeric concentration-effect data, dose-response curves, or fitted PD parameters (Emax, EC50) for mepindolol. |
| popPK | de_1989_2 | relevant | 8 | 0 | The paper reports pharmacokinetic data for mepindolol in humans, but the abstract contains only qualitative descriptions of plasma levels and no specific quantitative parameter values (e.g., CL, V, t1/2). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
