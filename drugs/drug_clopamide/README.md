<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03B&quot;,&quot;href&quot;:&quot;atc/C03B.md&quot;},{&quot;label&quot;:&quot;clopamide&quot;}]"></div>

# clopamide

- **generic name:** clopamide
- **ATC codes:** `C03BA03`, `C03BB03`
- **DrugBank:** [DB13792](https://go.drugbank.com/drugs/DB13792) · **PubChem:** [CID 12492](https://pubchem.ncbi.nlm.nih.gov/compound/12492)
- **molar mass:** 345.84 g/mol (C14H20ClN3O3S) — DrugBank
- **groups:** investigational

## About

Clopamide is a sulfonamide diuretic that has been used to treat high blood pressure and fluid retention (oedema). It is currently classed as investigational and is not authorised in the European Union; it has only limited availability in a few countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q106029851](https://www.wikidata.org/wiki/Q106029851) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 07:29 | 0:54 | 0/0/0 | 0/0/0 | 0/0/0 | 1,640/110 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `McNeil_1987.pdf` | McNeil JJ et al., Clopamide: plasma concentrations and di…, Clinical pharmacology and t… (1987) | popPK | 8 | [10.1038/clpt.1987.151](https://doi.org/10.1038/clpt.1987.151) | [3621784](https://pubmed.ncbi.nlm.nih.gov/3621784) | The study reports PK parameters for clopamide, but only qualitative descriptions (e.g., "approximately 10 hours") are present in the text, lacking specific numeric values for clearance or volume. |
| `Nazaret_1987.pdf` | Nazaret C et al., Inhibition of the Cl-/NaCO3- anion exch…, European journal of pharmac… (1987) | pd | 5 | [10.1016/0014-2999(87)90388-8](https://doi.org/10.1016/0014-2999(87)90388-8) | [3440481](https://www.ncbi.nlm.nih.gov/pubmed/3440481) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T07:29:40.929617+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Crowder_1979 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for a combination antihypertensive product and does not report any pharmacokinetic parameters for clopamide. |
| PD | Crowder_1979 | not_relevant | 0 | 0 | The paper is a clinical trial reporting blood pressure control rates and side effects, with no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| popPK | Gould_1982 | irrelevant | 0 | 0 | The study is a clinical efficacy trial assessing blood pressure response to a combination drug, reporting no pharmacokinetic parameters for clopamide. |
| PD | Gould_1982 | not_relevant | 1 | 0 | The paper reports qualitative blood pressure reductions from a fixed-dose combination therapy but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Griebenow_1997 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing blood pressure outcomes and does not report any pharmacokinetic parameters for clopamide. |
| PD | Griebenow_1997 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial comparing blood pressure outcomes between drug groups, reporting no pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Houtzagers_1986 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety trial comparing fixed-dose combinations, reporting no pharmacokinetic parameters for clopamide. |
| PD | Houtzagers_1986 | not_relevant | 1 | 0 | The paper is a clinical trial comparing fixed-dose combinations and reports qualitative changes in serum potassium and body weight, but it does not provide concentration-effect data, dose-response curves, or numeric PD parameters for clopamide. |
| popPK | Kiger_1976 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pindolol, with clopamide serving only as a co-administered agent to test for interaction, and no PK parameters for clopamide are reported. |
| popPK | Leary_1989 | irrelevant | 0 | 0 | The study focuses on renal excretory actions and pharmacodynamics of antihypertensive agents, with clopamide serving only as a comparator diuretic, and no pharmacokinetic parameters are reported. |
| PD | Leary_1989 | not_relevant | 1 | 0 | The paper only provides a qualitative description of clopamide's renal effects (natriuretic/diuretic) and its interaction with pindolol, without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | McNeil_1987 | relevant | 8 | 2 | The study reports PK parameters for clopamide, but only qualitative descriptions (e.g., "approximately 10 hours") are present in the text, lacking specific numeric values for clearance or volume. |
| popPK | Nazaret_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion transport inhibition in red blood cells, not a pharmacokinetic study, and reports no disposition parameters for clopamide. |
| popPK | Radcliff_1968 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | Schiffl_1982 | irrelevant | 0 | 0 | The study focuses on the metabolic effects (LDL-C) of clopamide and pindolol, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Schiffl_1982 | not_relevant | 1 | 0 | The paper reports a qualitative clinical observation of LDL-C changes with fixed doses but provides no concentration-effect data, PK/PD modeling, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Sharaf_2016 | irrelevant | 2 | 0 | The paper describes a bioanalytical method validation and mentions a PK study application, but no quantitative pharmacokinetic parameters (CL, V, t1/2, etc.) for clopamide are reported in the provided evidence. |
| popPK | Stüber_1989 | irrelevant | 2 | 1 | The paper describes an analytical method (GLC-MS) and reports only summary descriptive statistics (Cmax, Tmax) from a pilot study, lacking the quantitative compartmental or population PK parameters (CL, V, ka) required for extraction. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
