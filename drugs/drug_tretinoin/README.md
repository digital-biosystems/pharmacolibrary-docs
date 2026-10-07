<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;tretinoin&quot;}]"></div>

# tretinoin

- **generic name:** tretinoin
- **ATC codes:** `D10AD01`, `L01XF01`
- **DrugBank:** [DB00755](https://go.drugbank.com/drugs/DB00755) · **PubChem:** [CID 5538](https://pubchem.ncbi.nlm.nih.gov/compound/5538)
- **molar mass:** 300.442 g/mol (C20H28O2) — DrugBank
- **groups:** approved, investigational, nutraceutical

## About

Tretinoin is used to treat acne and certain forms of leukemia, including acute promyelocytic leukemia. It is an approved medicine, appears on the WHO essential medicines list, and is used both topically for skin conditions and systemically in cancer treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q29417](https://www.wikidata.org/wiki/Q29417) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:30 | 0:54 | 0/0/0 | 0/0/0 | 0/0/0 | 5,286/353 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tretinoin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2A6` substrate, `CYP2B6` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALDH1A1 (substrate), ALDH1A2 (substrate), CRABP1 (binder), CRABP1 (substrate), CRABP2 (substrate), CYP26A1 (substrate), CYP2C18 (substrate), CYP4A11 (substrate), Carcinoembryonic antigen (downregulator), GPRC5A (regulator), LCN1 (binder), OBP2A (binder), PDK4 (upregulator), RARA (target), RARB (target), RARG (target), RARRES1 (target), RBP4 (binder), RXRA (target), RXRB (target), RXRG (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Gollnick_1987 | not_relevant | 0 | 0 | The text discusses indications and general properties of retinoids, including a mention that tretinoin's amide (motretinide) is effective for acne, but it does not report any pharmacogenomic effects or gene variants affecting tretinoin PK/PD. |
| PGx | Hoehndorf_2012 | not_relevant | 0 | 0 | The paper uses computational drug repurposing to associate tretinoin with cystic fibrosis based on phenotype similarity, but does not report any pharmacogenomic effects on tretinoin's PK or PD parameters. |
| PGx | Howell_1998 | not_relevant | 0 | 0 | The paper studies retinoid treatment effects in rats, not the influence of human gene variants or genotypes on tretinoin pharmacokinetics. |
| PGx | Schuchmann_2013 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of tretinoin in chronic hepatitis C and contains no data on gene variants or genotypes affecting PK/PD. |
| PGx | Sharafshah_2025 | not_relevant | 0 | 0 | The paper discusses tretinoin only as a potential therapeutic target identified in silico, without reporting any measured pharmacokinetic or pharmacodynamic effects of genetic variants on the drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
