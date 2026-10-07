<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;interferon alfacon-1&quot;}]"></div>

# interferon alfacon-1

- **generic name:** interferon alfacon-1
- **ATC codes:** `L03AB09`
- **DrugBank:** [DB00069](https://go.drugbank.com/drugs/DB00069) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Interferon alfacon-1 is an antiviral, immunostimulating interferon that was used to treat chronic hepatitis C. It was approved but has since been withdrawn, including its product in the European Union, and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15353101](https://www.wikidata.org/wiki/Q15353101) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:01 | 1:11 | 0/0/0 | 0/0/0 | 0/0/0 | 21,029/641 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=interferon_alfacon_1) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IFNAR1 (binder), IFNAR2 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alberti_1999 | not_relevant | 0 | 0 | The paper reports clinical efficacy differences based on Hepatitis C virus (HCV) genotype, not human pharmacogenomic variants affecting drug PK/PD. |
| PGx | Cotler_2003 | not_relevant | 0 | 0 | The paper compares antiviral efficacy between nonresponders and naive patients but does not link the observed differences to specific genetic variants, genotypes, or pharmacogenomic factors. |
| PGx | Cotler_2003_2 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy and safety of a drug combination but does not report any genetic variants or pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of interferon_alfacon_1. |
| PGx | Melian_2001 | not_relevant | 0 | 0 | The paper is a review of pharmacology and efficacy in chronic hepatitis C, discussing HCV genotypes (pathogen characteristics) rather than human pharmacogenomic variants affecting drug PK/PD. |
| popPK | Smee_2017 | irrelevant | 0 | 0 | The paper evaluates cell viability dyes in antiviral assays and does not report any pharmacokinetic parameters for interferon_alfacon_1 or any other drug. |
| PGx | Suzuki_2002 | not_relevant | 0 | 0 | The paper reports clinical trial outcomes for HCV treatment efficacy based on HCV genotype, not pharmacogenomic effects on the PK or PD of interferon alfacon-1. |
| popPK | Tan_2005 | irrelevant | 0 | 0 | The study is an in vitro transcriptional profiling experiment focused on antiviral mechanisms and gene expression, not pharmacokinetic parameter estimation. |
| PGx | Witthöft_2008 | not_relevant | 0 | 0 | The paper discusses HCV viral genotypes predicting treatment response but does not report any pharmacogenomic effects (e.g., from drug-metabolizing gene variants) on PK or PD parameters. |
| PGx | Yasuda_2002 | not_relevant | 0 | 0 | The paper is a review of the pharmacology and clinical efficacy of interferon alfacon-1 in hepatitis C, with no data on genetic variants or pharmacogenomics affecting PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
