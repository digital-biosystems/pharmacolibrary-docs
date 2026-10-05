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
| 2026-09-29 04:19 | 8:31 | 0/0/0 | 0/0/0 | 0/0/0 | 22,955/2,332 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mepindolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB3 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 21 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bonelli_1980.pdf` | Bonelli J et al., Pharmacokinetics and pharmacodynamics o…, International journal of cl… (1980) | popPK | 10 | not captured | [6103882](https://pubmed.ncbi.nlm.nih.gov/6103882) | The paper is a primary pharmacokinetic study of mepindolol, but the provided evidence contains only the study design and dosing details, with no numeric parameter values (CL, V, t1/2, etc.) present. |
| `Krause_1984.pdf` | Krause W et al., Pharmacokinetics of mepindolol in patie…, European journal of clinica… (1984) | popPK | 9 | [10.1007/BF00549590](https://doi.org/10.1007/BF00549590) | [6519149](https://pubmed.ncbi.nlm.nih.gov/6519149) | The paper reports quantitative pharmacokinetic parameters (tmax, t1/2, AUC) for mepindolol in patients with renal failure, with values clearly present in the text. |
| `Krause_1983.pdf` | Krause W et al., Pharmacokinetics of mepindolol sulfate…, Drug metabolism and disposi… (1983) | popPK | 8 | not captured | [6133729](https://pubmed.ncbi.nlm.nih.gov/6133729) | The study reports quantitative PK parameters (half-lives, bioavailability, Tmax) for mepindolol in animal models, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Krause_1983_2.pdf` | Krause W et al., Pharmacokinetics of mepindolol administ…, Biopharmaceutics & drug dis… (1983) | popPK | 8 | [10.1002/bdd.2510040406](https://doi.org/10.1002/bdd.2510040406) | [6689277](https://pubmed.ncbi.nlm.nih.gov/6689277) | The study reports quantitative pharmacokinetic parameters for mepindolol, including maximum plasma concentration (25 ng/ml), time to maximum concentration (1.6 h), and half-life (4-5 h). |
| `de_1989_2.pdf` | de Mey C et al., Transdermal delivery of mepindolol and…, Arzneimittel-Forschung (1989) | popPK | 8 | not captured | [2576201](https://pubmed.ncbi.nlm.nih.gov/2576201) | The paper is a pharmacokinetic study of mepindolol, but the provided evidence contains only qualitative descriptions of plasma levels and no specific numeric parameter values (e.g., CL, V, t1/2). |

<sub>queue written 2026-09-29T04:19:09.065709+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aqil_2006 | irrelevant | 0 | 0 | The paper is a review of transdermal delivery research and does not report original quantitative pharmacokinetic parameters for mepindolol. |
| PD | Aqil_2006 | not_relevant | 1 | 0 | The text is a review of transdermal delivery systems for beta-blockers and does not report any pharmacodynamic or exposure-response data for mepindolol. |
| popPK | Bonelli_1977 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of beta-receptor selectivity and does not report any pharmacokinetic parameters for mepindolol. |
| PD | Bonelli_1977 | not_relevant | 4 | 2 | The paper describes a qualitative dose-response shift (dissociation of HR and SV curves) for mepindolol in a small-n study but does not provide numeric PD parameters (e.g., EC50, Emax) or quantitative data points in the text. |
| popPK | Bonelli_1980 | relevant | 10 | 0 | The paper is a primary pharmacokinetic study of mepindolol, but the provided evidence contains only the study design and dosing details, with no numeric parameter values (CL, V, t1/2, etc.) present. |
| popPK | Dorow_1984 | irrelevant | 0 | 0 | The study investigates the effect of mepindolol on mucociliary clearance (a physiological/pharmacodynamic endpoint) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Fogari_1990 | irrelevant | 0 | 0 | The study evaluates the effects of beta-blockers on plasma lipids and does not report any pharmacokinetic parameters for mepindolol. |
| PD | Fogari_1990 | not_relevant | 1 | 0 | The paper reports qualitative comparisons of lipid changes among different beta-blockers but does not provide numeric concentration-effect data, dose-response curves, or PD parameters for mepindolol. |
| popPK | Krause_1980 | irrelevant | 0 | 0 | no_text gate: only 50 chars of text extracted (&lt; 400) |
| popPK | Krause_1982 | irrelevant | 2 | 1 | The study reports only specific plasma and milk concentrations at single time points without deriving quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Krause_1982 | not_relevant | 0 | 0 | The paper reports PK parameters (plasma/milk concentrations) but contains no pharmacodynamic data, effect measurements, or dose-response relationships. |
| popPK | Liedtke_1987 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Liedtke_1987 | not_relevant | 0 | 0 | The provided text contains only the title of the paper and lacks the abstract or body text required to verify the presence of numeric pharmacodynamic parameters or exposure-response relationships. |
| popPK | Liedtke_1989 | irrelevant | 2 | 0 | The study describes "orienting" pharmacokinetics and qualitative comparisons of serum levels without reporting quantitative disposition parameters (CL, V, t1/2) or compartmental model values. |
| PD | Liedtke_1989 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic effects (BP/HR changes) and mentions serum levels, but the provided text does not contain numeric PD parameters (Emax, EC50) or a quantitative concentration-effect relationship. |
| popPK | Parada_1983 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on blood pressure control and dosage adjustments in renal failure, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Parada_1983 | not_relevant | 2 | 1 | The paper reports qualitative dose-response observations (adequacy of 5 mg, 2.5 mg, and 1.25 mg) but provides no numeric concentration-effect data, PK parameters, or derivable PD parameters like Emax or EC50. |
| popPK | Schliep_1984 | irrelevant | 0 | 0 | The study focuses on the beta-adrenoceptor selectivity of bisoprolol, with mepindolol serving only as a comparator for receptor activity, and no pharmacokinetic parameters are reported. |
| PD | Schliep_1984 | not_relevant | 3 | 2 | The paper reports beta-1/beta-2 selectivity ratios for mepindolol (0.6-1) but does not provide specific concentration-effect curves, Emax, or EC50 values for mepindolol itself, only comparative selectivity indices. |
| popPK | Serro-Azul_1989 | irrelevant | 0 | 0 | The study is a clinical trial assessing blood pressure and lipid effects, reporting no pharmacokinetic parameters for mepindolol. |
| PD | Serro-Azul_1989 | not_relevant | 1 | 0 | The study is a clinical trial comparing fixed doses of mepindolol and metoprolol, reporting only mean clinical outcomes (BP, HR, lipids) without any concentration-effect analysis, PK/PD modeling, or derivation of numeric PD parameters like Emax or EC50. |
| popPK | de_1989 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic effects (heart rate, blood pressure) of transdermal mepindolol and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | de_1989 | not_relevant | 2 | 1 | The paper describes qualitative pharmacodynamic effects (blunting/abolition of isoprenaline responses) but does not provide numeric concentration-effect data, dose-response curves, or fitted PD parameters (Emax, EC50) for mepindolol. |
| popPK | de_1989_2 | relevant | 8 | 0 | The paper is a pharmacokinetic study of mepindolol, but the provided evidence contains only qualitative descriptions of plasma levels and no specific numeric parameter values (e.g., CL, V, t1/2). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
