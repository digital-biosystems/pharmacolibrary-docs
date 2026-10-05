<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03B&quot;,&quot;href&quot;:&quot;atc/A03B.md&quot;},{&quot;label&quot;:&quot;Cimetropium&quot;}]"></div>

# Cimetropium

- **generic name:** Cimetropium
- **ATC codes:** `A03BB05`
- **DrugBank:** [DB09271](https://go.drugbank.com/drugs/DB09271) · **PubChem:** not captured
- **groups:** investigational

## About

**Description.** Cimetropium is a semi-synthetic belladonna alkaloid and derivative of scopolamine. It is a potent antimuscarinic and an effective antispasmodic drug. It is also endowed of a direct myolitic action which partially accounts for its antispasmodic activity. It has never been approved for use in the U.S. or Canada.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:16 | 1:02 | 0/0/0 | 0/0/0 | 0/0/0 | 36,737/1,313 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cimetropium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM5 (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 22 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Biagioli_2016 | irrelevant | 0 | 0 | This is a systematic review of clinical efficacy for infantile colic, not a pharmacokinetic study, and contains no PK parameters for cimetropium. |
| popPK | Capecchi_1991 | irrelevant | 0 | 0 | The study is a clinical efficacy trial comparing pain relief times, not a pharmacokinetic study, and contains no PK parameters for cimetropium. |
| popPK | Centonze_1988 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for irritable bowel syndrome and does not report any pharmacokinetic parameters. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper is a network meta-analysis of clinical efficacy for IBS treatment, not a pharmacokinetic study, and contains no PK parameters for cimetropium. |
| popPK | Frigerio_1986 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy of cimetropium as a radiological relaxant and reports no pharmacokinetic parameters. |
| popPK | Gomirato_1989 | irrelevant | 0 | 0 | The paper is a clinical efficacy study for infant colic and does not report any pharmacokinetic parameters for cimetropium. |
| PD | Gomirato_1989 | not_relevant | 3 | 2 | The paper reports a clinical dose-response comparison (1.2 vs 2.0 mg/kg) with outcome measures (crying episodes/duration), but it lacks pharmacokinetic data (concentrations) and does not fit a formal PD model or provide numeric PD parameters like Emax or EC50. |
| popPK | Imbimbo_1990 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of cimetropium on gastric emptying and motility, not its pharmacokinetic disposition parameters. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The study is a retrospective cohort analysis of gastric neoplasm detection rates during endoscopy and does not report any pharmacokinetic parameters for cimetropium. |
| popPK | Lanfranchi_1988 | irrelevant | 0 | 0 | The study evaluates the pharmacodynamic effect of cimetropium on colonic motility, not its pharmacokinetic disposition parameters. |
| popPK | Lee_2021 | irrelevant | 0 | 0 | The paper is a systematic review protocol for a traditional Chinese herbal formula (Xiaoyao-san) for IBS, and cimetropium is only mentioned as a standard comparator drug with no pharmacokinetic data provided. |
| popPK | Maradey-Romero_2014 | irrelevant | 0 | 0 | The paper is a review of esophageal motility disorders and treatment options, mentioning cimetropium only as a therapeutic agent without reporting any pharmacokinetic parameters. |
| popPK | Marzio_1994 | irrelevant | 0 | 0 | The study reports pharmacodynamic effects (esophageal motility and transit) rather than pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Neri_1988 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| popPK | Parente_1985 | irrelevant | 0 | 0 | The study is a clinical trial assessing the pharmacodynamic effect (pyloric sphincter opening) of cimetropium, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Poynard_1994 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy for irritable bowel syndrome and does not report any pharmacokinetic parameters for cimetropium. |
| popPK | Qin_2022 | irrelevant | 0 | 0 | The paper is a network meta-analysis comparing the efficacy of eluxadoline and antispasmodics (including cimetropium) for IBS symptoms, and contains no pharmacokinetic data or disposition parameters for cimetropium. |
| popPK | Savino_1996 | irrelevant | 0 | 0 | The paper is a clinical management guideline for infantile colic that mentions cimetropium as a treatment option but contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Savino_2015 | irrelevant | 0 | 0 | Cimetropium is used only as a comparator/endpoint (pain relieving agent) in a probiotic trial, with no pharmacokinetic parameters reported. |
| PD | Savino_2015 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating a probiotic; cimetropium is only mentioned as a rescue medication in the control group, and no PK/PD or exposure-response analysis for cimetropium is performed. |
| popPK | Scarpignato_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring receptor affinity (pA2) and potency, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Shi_2022 | irrelevant | 0 | 0 | The paper is a meta-analysis comparing acupuncture and antispasmodics for IBS efficacy, containing no pharmacokinetic parameters for cimetropium. |
| popPK | Toja_1994 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on new antimuscarinic agents where cimetropium is used only as a reference comparator, and no pharmacokinetic parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
