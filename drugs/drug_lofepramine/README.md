<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;lofepramine&quot;}]"></div>

# lofepramine

- **generic name:** lofepramine
- **ATC codes:** `N06AA07`
- **DrugBank:** [DB13411](https://go.drugbank.com/drugs/DB13411) · **PubChem:** not captured
- **molar mass:** 418.97 g/mol (C26H27ClN2O) — DrugBank
- **groups:** experimental

## About

Lofepramine is a tricyclic antidepressant used to treat depression. It is not an approved medicine in major databases, where it is listed only as an experimental compound, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q368941](https://www.wikidata.org/wiki/Q368941) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:25 | 0:54 | 0/0/0 | 0/0/0 | 0/0/0 | 7,090/531 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ghose_1989.pdf` | Ghose K et al., Pharmacokinetics of lofepramine and ami…, International clinical psyc… (1989) | popPK | 7 | [10.1097/00004850-198907000-00003](https://doi.org/10.1097/00004850-198907000-00003) | [2677125](https://pubmed.ncbi.nlm.nih.gov/2677125) | Reports lofepramine half-life (2.5 h) and Tmax in elderly humans, but no CL/V values and full parameter table not shown. |
| `Forshell_1976.pdf` | Forshell GP et al., Pharmacokinetics of lofepramine in man:…, European journal of clinica… (1976) | popPK | 5 | [10.1007/BF00561663](https://doi.org/10.1007/BF00561663) | [971713](https://pubmed.ncbi.nlm.nih.gov/971713) | Human PK study of lofepramine with first-pass elimination and metabolite findings, but no numeric parameter values appear in the evidence. |
| `Darcy_2002.pdf` | Darcy P et al., The effect of lofepramine and other rel…, Toxicology letters (2002) | pd | 4 | [10.1016/s0378-4274(01)00542-2](https://doi.org/10.1016/s0378-4274(01)00542-2) | [11869831](https://www.ncbi.nlm.nih.gov/pubmed/11869831) | metadata signals extractable PD data (IC50) |
| `Spigset_1997.pdf` | Spigset O et al., Seizures and myoclonus associated with…, Acta psychiatrica Scandinav… (1997) | pgx | 5 | [10.1111/j.1600-0447.1997.tb09933.x](https://doi.org/10.1111/j.1600-0447.1997.tb09933.x) | [9395157](https://www.ncbi.nlm.nih.gov/pubmed/9395157) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-06T23:25:41.604875+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_1993 | irrelevant | 0 | 0 | The study focuses on psychopharmacological effects (memory and psychomotor function) and does not report pharmacokinetic parameters for lofepramine. |
| PD | Allen_1993 | not_relevant | 2 | 0 | The paper reports qualitative comparisons of single-dose effects (70 mg) against placebo but does not provide concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., EC50, Emax). |
| popPK | Chiu_1997 | irrelevant | 0 | 0 | The paper is a general review of antidepressants in the elderly and does not report any quantitative pharmacokinetic parameters for lofepramine. |
| PD | Chiu_1997 | not_relevant | 1 | 0 | The text is a qualitative review discussing the general tolerability and dosing considerations for lofepramine in the elderly, without providing any specific pharmacodynamic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Darcy_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of membrane stabilizing effects on protozoa, not a pharmacokinetic study, and reports no disposition parameters for lofepramine. |
| popPK | Donoghue_1996 | irrelevant | 0 | 0 | The paper is a prescribing pattern audit and does not report any pharmacokinetic parameters for lofepramine. |
| PD | Donoghue_1996 | not_relevant | 0 | 0 | The paper is a prescribing pattern audit and does not report any pharmacodynamic or exposure-response data for lofepramine. |
| popPK | Evans_1998 | irrelevant | 0 | 0 | A clinical case report with no pharmacokinetic parameters or numeric disposition values for lofepramine. |
| PD | Evans_1998 | not_relevant | 1 | 0 | The paper is a clinical case report that mentions lofepramine caused clinical deterioration and ECG changes, but it does not provide any numeric concentration-effect data, dose-response curves, or PD parameters for lofepramine. |
| popPK | Forshell_1976 | relevant | 5 | 2 | Human PK study of lofepramine with first-pass elimination and metabolite findings, but no numeric parameter values appear in the evidence. |
| popPK | Ghose_1987 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects and mentions plasma levels but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) in the provided evidence. |
| PD | Ghose_1987 | not_relevant | 3 | 1 | The study reports qualitative dose-related effects and correlations but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve in the provided text. |
| popPK | Hayasaka_2015 | irrelevant | 0 | 0 | Dose-equivalence study reporting effective daily doses, not pharmacokinetic disposition parameters for lofepramine. |
| PD | Hayasaka_2015 | not_relevant | 1 | 0 | The paper reports dose equivalence ratios derived from clinical trial data but does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for lofepramine. |
| popPK | Hippisley-Cox_2001 | irrelevant | 0 | 0 | This is an epidemiological case-control study of antidepressants and heart disease; lofepramine is only mentioned as a comparator with no PK parameters reported. |
| PD | Hippisley-Cox_2001 | not_relevant | 0 | 0 | The paper is an epidemiological case-control study reporting odds ratios for ischaemic heart disease; it does not report pharmacodynamic parameters (Emax, EC50) or concentration-effect relationships for lofepramine. |
| popPK | Lancaster_1989 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties without original quantitative disposition parameters or specific numeric values for lofepramine. |
| PD | Lancaster_1989 | not_relevant | 2 | 0 | The text is a qualitative review summary describing general pharmacodynamic properties and therapeutic efficacy without providing specific numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Mariategui_1978 | irrelevant | 0 | 0 | The paper is a comparative clinical efficacy study that mentions pharmacological properties qualitatively but does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for lofepramine. |
| PD | Mariategui_1978 | not_relevant | 0 | 0 | The paper is a clinical comparison of therapeutic efficacy and side effects without any pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters. |
| popPK | Patience_1997 | irrelevant | 0 | 0 | The paper is a prescription audit examining dosage adequacy and does not report any pharmacokinetic parameters for lofepramine. |
| PD | Patience_1997 | not_relevant | 0 | 0 | The paper is a prescription audit analyzing the percentage of doses at or above a minimum therapeutic level, not a pharmacodynamic or exposure-response analysis with numeric PD parameters. |
| popPK | Siwers_1977 | irrelevant | 2 | 0 | The study reports only steady-state plasma concentrations (5-27 ng/ml) without deriving or reporting quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PD | Siwers_1977 | not_relevant | 2 | 0 | The paper reports a correlation between plasma metabolite concentration and in-vitro uptake inhibition, but explicitly states there is no correlation with clinical effect (amelioration scores), and no numeric PD parameters (Emax, EC50, etc.) are provided. |
| PGx | Spigset_1997 | not_relevant | 2 | 1 | Lofepramine appears only as one seizure case; no genotype effect on any PK/PD parameter is reported. |
| popPK | Wilde_1993 | irrelevant | 0 | 0 | The paper is a review of fluvoxamine where lofepramine is only mentioned as a comparator drug, and no pharmacokinetic parameters for lofepramine are reported. |
| PD | Wilde_1993 | not_relevant | 0 | 0 | The text is a review of fluvoxamine that only qualitatively compares its efficacy to lofepramine without providing any pharmacodynamic data, exposure-response analysis, or numeric PD parameters for lofepramine. |
| popPK | dElia_1977 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing lofepramine and imipramine, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | dElia_1977 | not_relevant | 1 | 0 | The paper reports clinical outcomes and mentions plasma levels for compliance, but does not provide numeric PD parameters or an exposure-response analysis in the text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
