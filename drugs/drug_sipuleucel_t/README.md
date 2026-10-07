<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;sipuleucel-T&quot;}]"></div>

# sipuleucel-T

- **generic name:** sipuleucel-T
- **ATC codes:** `L03AX17`
- **DrugBank:** [DB06688](https://go.drugbank.com/drugs/DB06688) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Sipuleucel-T is an immunostimulant used to treat prostate cancer. It is an approved medicine, mainly used in the United States, but its marketing authorisation in the European Union has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424057](https://www.wikidata.org/wiki/Q424057) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:12 | 0:30 | 0/0/0 | 0/0/0 | 0/0/0 | 66,103/923 | einfracz / qwen3.8-27b | 8 | 0/4 | 8/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sipuleucel_t) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ACP3 (other).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 112 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Altay_2026 | irrelevant | 0 | 0 | The paper is a review of cancer vaccines in genitourinary malignancies that discusses sipuleucel-T's mechanism and clinical efficacy but does not report any quantitative pharmacokinetic or population-PK parameters. |
| popPK | Curigliano_2013 | irrelevant | 0 | 0 | The paper is a review of breast cancer immunotherapy and only mentions sipuleucel-T as an approved agent for prostate cancer without providing any pharmacokinetic data. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper is a review of cancer vaccine design strategies and mentions Sipuleucel-T only as background context, containing no pharmacokinetic data. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper is a review of mRNA vaccines and mentions Sipuleucel-T only as historical context for prostate cancer immunotherapy, without providing any pharmacokinetic parameters or data for it. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is a review of mRNA vaccines and mentions sipuleucel-T only as a background comparator without providing any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Lopez-Bujanda_2021 | irrelevant | 0 | 0 | The paper is a mechanistic and immunological study identifying TGM4 as a tumor-associated antigen; it mentions sipuleucel-T only as background context and does not report any pharmacokinetic parameters. |
| popPK | Sarangi_2025 | irrelevant | 0 | 0 | The paper is a general review of cancer vaccines and does not contain any pharmacokinetic data or disposition parameters for sipuleucel-T. |
| popPK | Sentana-Lledo_2022 | irrelevant | 0 | 0 | The paper is a review of immune mechanisms in prostate cancer and does not report any quantitative pharmacokinetic parameters for sipuleucel-T. |
| popPK | Sinha_2021 | irrelevant | 0 | 0 | The paper is a clinical trial assessing immune biomarkers and clinical outcomes of sipuleucel-T combined with ipilimumab, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zhong_2022 | irrelevant | 0 | 0 | The paper is a bibliometric analysis of prostate cancer immunotherapy literature and contains no pharmacokinetic data or quantitative disposition parameters for sipuleucel-t. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
