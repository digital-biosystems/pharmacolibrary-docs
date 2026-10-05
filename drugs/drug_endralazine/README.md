<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02D&quot;,&quot;href&quot;:&quot;atc/C02D.md&quot;},{&quot;label&quot;:&quot;endralazine&quot;}]"></div>

# endralazine

- **generic name:** endralazine
- **ATC codes:** `C02DB03`
- **DrugBank:** [DB13435](https://go.drugbank.com/drugs/DB13435) · **PubChem:** not captured
- **molar mass:** 269.308 g/mol (C14H15N5O) — DrugBank
- **groups:** experimental

## About

Endralazine is a hydrazinophthalazine vasodilator that was developed as an antihypertensive drug to lower blood pressure. It is considered experimental and does not appear to be an approved medicine today, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5376588](https://www.wikidata.org/wiki/Q5376588) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 06:04 | 1:43 | 0/0/0 | 0/0/0 | 0/0/0 | 1,618/146 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 22 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Meredith_1983.pdf` | Meredith PA et al., The pharmacokinetics of endralazine in…, British journal of clinical… (1983) | popPK | 10 | [10.1111/j.1365-2125.1983.tb02139.x](https://doi.org/10.1111/j.1365-2125.1983.tb02139.x) | [6882620](https://pubmed.ncbi.nlm.nih.gov/6882620) | The paper reports quantitative PK parameters (half-life, bioavailability, clearance) for endralazine in humans, with specific numeric values provided in the text. |
| `Reece_1983.pdf` | Reece PA et al., Endralazine - a new hydralazine-like an…, European journal of clinica… (1983) | popPK | 10 | [10.1007/BF00542127](https://doi.org/10.1007/BF00542127) | [6653651](https://pubmed.ncbi.nlm.nih.gov/6653651) | The study reports quantitative PK parameters for endralazine, but the specific numeric values for clearance, volume, and half-life are not present in the provided evidence text. |
| `Reece_1982.pdf` | Reece PA et al., Influence of acetylator phenotype on th…, European journal of clinica… (1982) | popPK | 9 | [10.1007/BF00637500](https://doi.org/10.1007/BF00637500) | [7160421](https://pubmed.ncbi.nlm.nih.gov/7160421) | The study reports quantitative PK parameters (half-life, AUC) for endralazine in humans, with specific numeric values provided in the text. |
| `Elliott_1984.pdf` | Elliott HL et al., Clinical pharmacological studies with t…, International journal of cl… (1984) | popPK | 8 | not captured | [6469433](https://pubmed.ncbi.nlm.nih.gov/6469433) | The paper reports quantitative pharmacokinetic parameters for endralazine, specifically terminal elimination half-life (2.5 h acute, 7.5 h chronic) and oral bioavailability (75%), which are present in the provided text. |
| `Elliott_1984_2.pdf` | Elliott HL et al., Pharmacodynamic and pharmacokinetic stu…, Journal of hypertension. Su… (1984) | popPK | 8 | not captured | [6599716](https://pubmed.ncbi.nlm.nih.gov/6599716) | The paper reports quantitative pharmacokinetic parameters (half-life, bioavailability) for endralazine, though it lacks detailed compartmental model parameters like clearance or volume of distribution. |
| `Elliott_1984_3.pdf` | Elliott HL et al., Clinical pharmacological studies with t…, European journal of clinica… (1984) | popPK | 8 | [10.1007/BF00544039](https://doi.org/10.1007/BF00544039) | [6499896](https://pubmed.ncbi.nlm.nih.gov/6499896) | The study reports quantitative pharmacokinetic parameters (terminal elimination half-life) for endralazine in patients with renal impairment, with specific numeric values provided in the text. |

<sub>queue written 2026-09-30T06:04:38.559285+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bogers_1983 | irrelevant | 0 | 0 | The paper is a clinical safety and efficacy study reporting blood pressure changes and side effects, with no pharmacokinetic parameters or quantitative disposition data for endralazine. |
| PD | Bogers_1983 | not_relevant | 1 | 0 | The paper reports only clinical efficacy (blood pressure reduction) and safety over 3 years without any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Chazan_1986 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing blood pressure outcomes and does not report any pharmacokinetic parameters for endralazine. |
| PD | Chazan_1986 | not_relevant | 1 | 0 | The paper reports a clinical comparison of efficacy and tolerance but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| PD | Elliott_1984 | not_relevant | 2 | 1 | The paper reports qualitative dose-response effects (BP changes at 5/10 mg) and PK parameters, but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect curve. |
| PD | Elliott_1984_2 | not_relevant | 2 | 1 | The paper reports qualitative blood pressure changes and PK parameters (half-life, bioavailability) but does not provide a concentration-effect curve, dose-response model, or numeric PD parameters like Emax or EC50. |
| PD | Elliott_1984_3 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (half-life, AUC) and their correlation with renal function, with no data on pharmacodynamic effects (e.g., blood pressure) or exposure-response relationships. |
| popPK | Elliott_1984_4 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| popPK | Hauger-Klevene_1986 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing blood pressure and side effects, reporting no pharmacokinetic parameters for endralazine. |
| PD | Hauger-Klevene_1986 | not_relevant | 1 | 0 | The paper reports qualitative comparative efficacy and side-effect profiles but provides no numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for endralazine. |
| popPK | Holmes_1983 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on blood pressure response and acetylator status, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Holmes_1983 | not_relevant | 1 | 0 | The paper reports clinical blood pressure outcomes based on acetylator status but does not provide plasma concentration data or a quantitative exposure-response/dose-response model with numeric PD parameters. |
| popPK | Izotov_1984 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic effects (hemodynamics) rather than pharmacokinetic parameters, and no PK values are reported. |
| PD | Izotov_1984 | not_relevant | 2 | 0 | The text describes a methodological approach for qualitative assessment of single-dose effects using Dixon's criterion but does not report specific numeric PD parameters (Emax, EC50) or quantitative exposure-response curves for endralazine. |
| popPK | Kindler_1981 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure changes and side effects, with no pharmacokinetic parameters or quantitative disposition data for endralazine. |
| PD | Kindler_1981 | not_relevant | 2 | 1 | The text describes a clinical trial with qualitative dose titration and blood pressure outcomes but does not report any concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Kindler_1987 | relevant | 4 | 2 | The study reports relative changes in AUC and peak concentration due to food intake but lacks absolute quantitative disposition parameters (CL, V, t1/2) or a compartmental model. |
| popPK | Kirch_1982 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing blood pressure control and side effects, reporting no pharmacokinetic parameters for endralazine. |
| PD | Kirch_1982 | not_relevant | 1 | 0 | The paper is a clinical trial comparing efficacy and safety but does not report pharmacokinetic data, concentration-effect relationships, or numeric PD parameters. |
| popPK | Oates_1981 | irrelevant | 1 | 0 | The study is a pharmacodynamic evaluation of blood pressure and renin activity in rats, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Quyyumi_1984 | irrelevant | 0 | 0 | The study reports hemodynamic and functional outcomes (cardiac output, resistance) rather than pharmacokinetic parameters (CL, V, t1/2) for endralazine. |
| popPK | Reece_1983 | relevant | 10 | 0 | The study reports quantitative PK parameters for endralazine, but the specific numeric values for clearance, volume, and half-life are not present in the provided evidence text. |
| popPK | Weidmann_1983 | irrelevant | 0 | 0 | The paper is a clinical review of hypertension management that mentions endralazine only as a therapeutic option, without reporting any pharmacokinetic parameters. |
| PD | Weidmann_1983 | not_relevant | 0 | 0 | The text is a general clinical review of hypertension management in 1983 and mentions endralazine only as a drug option in triple therapy, without providing any pharmacokinetic, pharmacodynamic, or exposure-response data. |
| popPK | Wu_1986 | irrelevant | 1 | 0 | The paper is a clinical efficacy study reporting blood pressure changes and adverse effects, with no quantitative pharmacokinetic parameters (CL, V, ka, etc.) provided for endralazine. |
| PD | Wu_1986 | not_relevant | 2 | 1 | The paper reports clinical dose titration and blood pressure changes but lacks concentration data or a formal dose-response model with numeric PD parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
