<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;fentiazac&quot;}]"></div>

# fentiazac

- **generic name:** fentiazac
- **ATC codes:** `M01AB10`, `M02AA14`
- **DrugBank:** [DB13217](https://go.drugbank.com/drugs/DB13217) · **PubChem:** not captured
- **molar mass:** 329.8 g/mol (C17H12ClNO2S) — DrugBank
- **groups:** experimental

## About

Fentiazac is a non-steroidal anti-inflammatory drug developed for pain and inflammation of the musculoskeletal system, available as both oral and topical preparations. It is considered experimental and does not appear to be an approved medicine in major markets such as the European Union, so its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3742491](https://www.wikidata.org/wiki/Q3742491) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:49 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 14,850/473 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Houin_1993.pdf` | Houin G et al., Pharmacokinetic study of fentiazac and…, Arzneimittel-Forschung (1993) | popPK | 8 | not captured | [8447848](https://pubmed.ncbi.nlm.nih.gov/8447848) | The paper reports PK parameters for fentiazac in the elderly, providing specific values for Cmax and half-life, but lacks explicit numeric values for clearance and volume in the provided evidence. |

<sub>queue written 2026-10-07T00:49:26.180583+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cavrini_1983 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Houin_1993 | relevant | 8 | 3 | The paper reports PK parameters for fentiazac in the elderly, providing specific values for Cmax and half-life, but lacks explicit numeric values for clearance and volume in the provided evidence. |
| popPK | López_1982 | irrelevant | 0 | 0 | This is a clinical efficacy study for acute tendinitis and bursitis that reports only therapeutic outcomes and side effects, with no pharmacokinetic parameters or values for fentiazac. |
| popPK | Molina-López_1983 | irrelevant | 0 | 0 | The study is a clinical efficacy and tolerability comparison of dosing regimens, with no report of pharmacokinetic parameters. |
| popPK | Nagatomi_1984 | irrelevant | 0 | 0 | The paper studies the pharmacological (anti-inflammatory and ulcerogenic) activities of thiazole derivatives, not the pharmacokinetics of fentiazac. |
| popPK | Quattrini_1981 | irrelevant | 3 | 2 | The paper describes a pharmacokinetic study in humans, but the evidence provided in the abstract only contains qualitative descriptions and a ratio of AUCs (30:1), lacking specific quantitative parameter values (CL, V, t1/2, ka) required for extraction. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
