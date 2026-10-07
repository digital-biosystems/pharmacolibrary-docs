<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;dexketoprofen&quot;}]"></div>

# dexketoprofen

- **generic name:** dexketoprofen
- **ATC codes:** `M01AE17`, `M02AA27`, `N02AJ14`
- **DrugBank:** [DB09214](https://go.drugbank.com/drugs/DB09214) · **PubChem:** [CID 667550](https://pubchem.ncbi.nlm.nih.gov/compound/667550)
- **molar mass:** 254.2806 g/mol (C16H14O3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Dexketoprofen is an anti-inflammatory painkiller of the propionic acid class, related to ketoprofen, used to relieve pain and inflammation. It is available as tablets for systemic pain relief and as a topical preparation for muscular and joint pain, and is also combined with opioids for analgesia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425440](https://www.wikidata.org/wiki/Q425440) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:45 | 0:05 | 0/0/0 | 0/0/0 | 0/0/0 | 11,877/429 | einfracz / qwen3.8-27b | 5 | 0/1 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dexketoprofen) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS1 (target), PTGS2 (inhibitor), PTGS2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 61 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barden_2009 | irrelevant | 0 | 0 | This is a Cochrane review focusing on clinical efficacy and adverse events, not pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Franco_2021 | irrelevant | 0 | 0 | The study focuses on antinociception and gastric injury pharmacodynamics, not pharmacokinetic parameters, and contains no PK data for dexketoprofen. |
| popPK | Noriega_2020 | irrelevant | 0 | 0 | The study evaluates antinociceptive potency (ED50) in mice and does not report pharmacokinetic parameters (CL, V, ka, etc.) for dexketoprofen. |
| popPK | Noriega_2020_2 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of analgesic mechanisms (receptor involvement) in mice, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Tullo_2014 | irrelevant | 0 | 0 | This is a clinical efficacy study for migraine treatment that does not report any quantitative pharmacokinetic parameters for dexketoprofen. |
| popPK | Zhang_2022 | relevant | 8 | 4 | The study reports specific PK parameters (half-life ~1.3h, Vc 3.55L, Papp, Peff) for dexketoprofen in humans, but the primary disposition parameters (CL, Vd, ka) are referenced in a Table 1 that is not explicitly included in the provided evidence text, relying instead on cited literature values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
