<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04;&quot;,&quot;href&quot;:&quot;atc/N04;.md&quot;},{&quot;label&quot;:&quot;opicapone&quot;}]"></div>

# opicapone

- **generic name:** opicapone
- **ATC codes:** `N04;N04BX04`, `N04BX04`
- **DrugBank:** [DB11632](https://go.drugbank.com/drugs/DB11632) · **PubChem:** not captured
- **molar mass:** 413.17 g/mol (C15H10Cl2N4O6) — DrugBank
- **groups:** approved, investigational

## About

Opicapone is a drug used to treat Parkinson's disease. It is authorised in the European Union as an anti-Parkinson medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27088208](https://www.wikidata.org/wiki/Q27088208) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:12 | 0:18 | 0/0/0 | 0/0/0 | 0/0/0 | 24,778/662 | einfracz / qwen3.8-27b | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=opicapone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate, `SLCO2B1` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate, `SLCO2B1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `COMT` inhibitor | DrugBank actor |
| metabolism | kidney | `COMT` inhibitor | DrugBank actor |
| metabolism | liver | `COMT` inhibitor, `CYP1A2` inhibitor, `CYP2B6` inhibitor, `CYP2C19` inducer, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

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

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rocha_2013.pdf` | Rocha JF et al., Opicapone: a short lived and very long…, British journal of clinical… (2013) | popPK | 6 | [10.1111/bcp.12081](https://doi.org/10.1111/bcp.12081) | [23336248](https://pubmed.ncbi.nlm.nih.gov/23336248) | The study reports only a summary range for terminal half-life (1.0-1.4 h) and lacks specific quantitative clearance, volume, or compartmental model parameters required for extraction. |
| `Rocha_2014_2.pdf` | Rocha JF et al., Effect of moderate liver impairment on…, European journal of clinica… (2014) | popPK | 5 | [10.1007/s00228-013-1602-9](https://doi.org/10.1007/s00228-013-1602-9) | [24271646](https://pubmed.ncbi.nlm.nih.gov/24271646) | Study reports PK parameters (CL/F, AUC) for opicapone in humans, but only provides ratios and percentages rather than absolute values for clearance or volume. |

<sub>queue written 2026-10-07T07:12:28.672557+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ferreira_2015 | irrelevant | 0 | 0 | This study focuses on the pharmacokinetics of levodopa (the subject drug) in the presence of opicapone (a drug interaction/comparator), rather than modeling opicapone's own disposition parameters. |
| popPK | Kitajima_2018 | irrelevant | 3 | 0 | The study reports only qualitative pharmacokinetic findings (rapid absorption/elimination, no accumulation) without providing specific quantitative parameter values like CL, V, or half-life in the provided evidence. |
| popPK | Rocha_2013 | irrelevant | 6 | 2 | The study reports only a summary range for terminal half-life (1.0-1.4 h) and lacks specific quantitative clearance, volume, or compartmental model parameters required for extraction. |
| popPK | Rocha_2014 | irrelevant | 0 | 0 | The provided text contains only adverse event data from a clinical trial and lacks any pharmacokinetic parameters. |
| popPK | Rocha_2014_2 | relevant | 5 | 3 | Study reports PK parameters (CL/F, AUC) for opicapone in humans, but only provides ratios and percentages rather than absolute values for clearance or volume. |
| popPK | Rocha_2016 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of levodopa and the metabolic inhibitor 3-OMD, with opicapone acting as a co-administered mechanism probe; no population PK parameters (CL, V, ka) for opicapone itself are reported. |
| popPK | Rocha_2017 | irrelevant | 2 | 0 | The study reports pharmacokinetic parameters exclusively for the subject drug levodopa (and catechol-O-methyltransferase activity), not for opicapone itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
