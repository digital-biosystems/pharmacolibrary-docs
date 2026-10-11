<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D02B&quot;,&quot;href&quot;:&quot;atc/D02B.md&quot;},{&quot;label&quot;:&quot;octinoxate&quot;}]"></div>

# octinoxate

- **generic name:** octinoxate
- **ATC codes:** `D02BA02`
- **DrugBank:** [DB09496](https://go.drugbank.com/drugs/DB09496) · **PubChem:** [CID 5355130](https://pubchem.ncbi.nlm.nih.gov/compound/5355130)
- **molar mass:** 290.3972 g/mol (C18H26O3) — DrugBank
- **groups:** approved, investigational

## About

Octinoxate is a sunscreen agent that protects the skin against UV radiation. It is an approved, widely used ingredient in topical sun protection products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q739648](https://www.wikidata.org/wiki/Q739648) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:17 | 0:15 | 0/0/0 | 0/0/0 | 0/0/0 | 40,645/697 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=octinoxate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | mammary gland | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

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
| popPK | Cahova_2021 | irrelevant | 0 | 0 | The study investigates ethylhexyl methoxycinnamate (EHMC), not octinoxate, and focuses on toxicological endpoints rather than pharmacokinetic parameters. |
| popPK | Ma_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay of androgen receptor activity for UV filters, containing no pharmacokinetic or disposition parameters for octinoxate. |
| popPK | Marcin_2023 | irrelevant | 0 | 0 | The paper is an ecotoxicology study assessing the acute toxicity of nine UV filters (including octinoxate's relatives, but not octinoxate specifically as a PK subject) in environmental organisms, and contains no pharmacokinetic data. |
| popPK | Nataraj_2020 | irrelevant | 0 | 0 | The paper is a toxicity study in zebrafish focusing on Octyl methoxycinnamate, not a pharmacokinetic study of octinoxate. |
| popPK | Schlumpf_2001 | irrelevant | 0 | 0 | The study focuses on the endocrine/estrogenic activity (toxicology) of UV filters, not pharmacokinetic parameters, and does not even list octinoxate as a tested compound. |
| popPK | Sieratowicz_2011 | irrelevant | 0 | 0 | The study is an ecotoxicology assessment of aquatic organisms and does not report any pharmacokinetic parameters for octinoxate. |
| popPK | Tsui_2019 | irrelevant | 0 | 0 | This is an environmental chemistry and ecotoxicology study reporting water concentrations and toxicity to barnacles, not a pharmacokinetic study for octinoxate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
