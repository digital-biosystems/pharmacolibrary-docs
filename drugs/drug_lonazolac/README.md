<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;lonazolac&quot;}]"></div>

# lonazolac

- **generic name:** lonazolac
- **ATC codes:** `M01AB09`
- **DrugBank:** [DB13432](https://go.drugbank.com/drugs/DB13432) · **PubChem:** not captured
- **molar mass:** 312.75 g/mol (C17H13ClN2O2) — DrugBank
- **groups:** experimental

## About

Lonazolac is a non-steroidal anti-inflammatory drug (NSAID) of the acetic acid derivative class, used for inflammatory and rheumatic conditions. It appears to be only experimental and is not an established marketed medicine; its current availability is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6669652](https://www.wikidata.org/wiki/Q6669652) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:52 | 1:17 | 0/0/0 | 0/1/0 | 0/0/0 | 19,879/621 | einfracz / qwen3.8-27b | 2 | 0/0 | 1/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Elkady_2012_mPGES_1](drugs/drug_lonazolac/pd_Elkady_2012_mPGES_1.md) | mPGES-1 ← lonazolac derivative 22 · inhibition effect | — | Elkady M et al., Modified acidic nonsteroidal anti-infla…, Journal of medicinal chemis… (2012) | [10.1021/jm3010543](https://doi.org/10.1021/jm3010543) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vinge_1986.pdf` | Vinge E et al., Compared effects of the two antiinflamm…, Acta pharmacologica et toxi… (1986) | pd | 5 | [10.1111/j.1600-0773.1986.tb00150.x](https://doi.org/10.1111/j.1600-0773.1986.tb00150.x) | [3799197](https://www.ncbi.nlm.nih.gov/pubmed/3799197) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T01:52:31.733389+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Huber_1990 | relevant | 4 | 1 | The study reports qualitative PK findings and half-life estimates for lonazolac in humans, but specific numeric values for clearance, volume of distribution, or precise half-lives are not present in the provided text, appearing to be omitted or in tables not included. |
| popPK | Naeff_1990 | irrelevant | 2 | 0 | The study reports qualitative PK behavior and half-life of the liposome vehicle but lacks quantitative clearance, volume, or compartmental model parameters for lonazolac. |
| popPK | Stehlík_1991 | irrelevant | 2 | 0 | The paper describes an analytical method and mentions PK parameters derived from a one-compartment model, but no specific quantitative values for clearance, volume, or half-life are present in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
