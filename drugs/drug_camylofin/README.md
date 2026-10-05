<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;camylofin&quot;}]"></div>

# camylofin

- **generic name:** camylofin
- **ATC codes:** `A03AA03`, `A03DA05`
- **DrugBank:** [DB13738](https://go.drugbank.com/drugs/DB13738) · **PubChem:** not captured
- **molar mass:** 320.477 g/mol (C19H32N2O2) — DrugBank
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:36 | 0:45 | 0/0/0 | 0/0/0 | 0/0/0 | 30,267/726 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/2 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 19 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | ASHOLTER_1953 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| popPK | BLANZ_1957 | irrelevant | 0 | 0 | no_text gate: only 43 chars of text extracted (&lt; 400) |
| popPK | BROCK_1951 | irrelevant | 0 | 0 | no_text gate: only 24 chars of text extracted (&lt; 400) |
| popPK | BRUCKNER_1956 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| popPK | CRECELIUS_1956 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| popPK | Crombez_1976 | irrelevant | 0 | 0 | The paper describes a gas-chromatographic assay method for drug content in formulations, not a pharmacokinetic study. |
| popPK | Dubey_2010 | irrelevant | 2 | 0 | The study focuses on in vitro drug release and in vivo targeting/distribution of a delivery system, not on quantitative pharmacokinetic parameters (CL, V, ka) for camylofin. |
| popPK | Elbarbry_2007 | irrelevant | 0 | 0 | The paper describes an analytical method for quantifying camylofin in tablets, not a pharmacokinetic study. |
| PD | Elbarbry_2007 | not_relevant | 0 | 0 | The paper describes an analytical method (HPLC) for quantifying drug components in tablets and contains no pharmacodynamic or exposure-response data. |
| popPK | Jawhari_2025 | irrelevant | 0 | 0 | The paper describes an HPLC analytical method for quantifying camylofin in dosage forms, not a pharmacokinetic study, and contains no disposition parameters. |
| PD | Jawhari_2025 | not_relevant | 0 | 0 | The paper describes an analytical HPLC method for quantifying drug concentrations in dosage forms and contains no pharmacodynamic, exposure-response, or dose-response data. |
| popPK | Jiang_2024 | irrelevant | 0 | 0 | The paper is a microbiome and metabolomics study in pigs where camylofin is identified as a serum metabolite associated with weight gain, not a pharmacokinetic study of the drug. |
| popPK | KRALL_1957 | irrelevant | 0 | 0 | no_text gate: only 57 chars of text extracted (&lt; 400) |
| popPK | Lee_1992 | irrelevant | 0 | 0 | The study compares acupuncture and Avafortan for renal colic and does not involve camylofin or report any pharmacokinetic parameters. |
| popPK | PEZOLD_1951 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |
| popPK | Palshetkar_2020 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis of clinical effectiveness (cervical dilatation rate) and safety, containing no pharmacokinetic parameters. |
| popPK | Rohwer_2012 | irrelevant | 0 | 0 | This is a systematic review of clinical trials assessing the efficacy of antispasmodics (including camylofin) on labor duration, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Rohwer_2013 | irrelevant | 0 | 0 | This is a systematic review of clinical trials assessing the efficacy of antispasmodics (including camylofin) on labor duration, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Valero_2019 | irrelevant | 0 | 0 | The paper describes a chemical synthesis method (hydrogen isotope exchange) for labeling camylofine, not a pharmacokinetic study. |
| popPK | el-Sherif_1990 | irrelevant | 0 | 0 | The study evaluates the analgesic efficacy of indomethacin, diclofenac, and Avafortan for renal colic and does not involve camylofin or report any pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
