<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;clobenzorex&quot;}]"></div>

# clobenzorex

- **generic name:** clobenzorex
- **ATC codes:** `A08AA08`
- **DrugBank:** [DB13561](https://go.drugbank.com/drugs/DB13561) · **PubChem:** not captured
- **molar mass:** 259.78 g/mol (C16H18ClN) — DrugBank
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:26 | 1:04 | 0/0/0 | 0/0/0 | 0/0/0 | 26,804/1,114 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 24 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Apóstol_2021 | irrelevant | 0 | 0 | The study is a behavioral and histological analysis of neurotoxicity in rats, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Baden_1999 | irrelevant | 2 | 0 | The study reports urinary excretion concentrations (ng/mL) for forensic interpretation rather than quantitative pharmacokinetic disposition parameters (CL, V, ka, t1/2) or a compartmental model. |
| popPK | Cabrera-Pérez_2026 | irrelevant | 0 | 0 | The study investigates a new compound (C1) using clobenzorex only as a comparator for anti-obesity efficacy, and does not report any pharmacokinetic parameters for clobenzorex. |
| popPK | Cabrera_2020 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on 11β-HSD1 inhibitors where clobenzorex is used only as a reference comparator, with no pharmacokinetic parameters reported. |
| popPK | Charbonnier_1972 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| popPK | Cody_1999 | irrelevant | 0 | 0 | The paper describes a GC-MS analytical method for quantitation and does not report pharmacokinetic parameters. |
| popPK | Cody_2001 | irrelevant | 2 | 0 | The study reports urinary concentrations of a metabolite (4-hydroxyclobenzorex) for forensic differentiation purposes, not quantitative pharmacokinetic disposition parameters (CL, V, ka) for the parent drug clobenzorex. |
| popPK | Cornaert_1986 | irrelevant | 0 | 0 | The paper is a clinical case report on cardiomyopathy caused by clobenzorex addiction and contains no pharmacokinetic data or disposition parameters. |
| popPK | Franceschini_1991 | irrelevant | 0 | 0 | The paper describes a GC-MS analytical method for detecting clobenzorex in urine for anti-doping purposes and does not report any pharmacokinetic parameters. |
| popPK | Glasson_1971 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| popPK | Guizolfi_2024 | irrelevant | 0 | 0 | The study is a chemical characterization of drug tablets and does not report any pharmacokinetic parameters for clobenzorex. |
| popPK | Lozano-Cuenca_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vasorelaxant effects on rat aortic rings and does not report pharmacokinetic parameters. |
| popPK | Lyu_2025 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study describing the synthesis of clobenzorex, not a pharmacokinetic study. |
| popPK | López-Brambila_2026 | irrelevant | 0 | 0 | The paper is an epidemiological survey on drug misuse in Mexico and mentions clobenzorex only as a rarely reported substance, containing no pharmacokinetic data. |
| popPK | Maurer_1997 | irrelevant | 2 | 0 | The paper is a toxicological analysis study focusing on detection methods (GC-MS/LC-MS) and detection windows, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Strano-Rossi_2012 | irrelevant | 0 | 0 | The paper describes an analytical screening method for detecting clobenzorex in oral fluid and does not report any pharmacokinetic parameters. |
| popPK | Tarver_1994 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| popPK | Valtier_1999 | irrelevant | 2 | 0 | The study reports urinary excretion concentrations of the metabolite amphetamine, not quantitative pharmacokinetic parameters (CL, V, ka) for clobenzorex itself. |
| popPK | Valtier_2000 | irrelevant | 2 | 2 | The study focuses on forensic differentiation using a metabolite and reports only peak urine concentrations, lacking compartmental PK parameters (CL, V, ka) for clobenzorex. |
| popPK | Young_1997 | irrelevant | 0 | 0 | The study reports behavioral pharmacology (stimulus generalization and locomotor activity) in rats and mice, not pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
