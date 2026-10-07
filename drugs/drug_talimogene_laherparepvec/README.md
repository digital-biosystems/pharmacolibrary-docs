<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;talimogene laherparepvec&quot;}]"></div>

# talimogene laherparepvec

- **generic name:** talimogene laherparepvec
- **ATC codes:** `L01XL02`, `L01XX51`
- **DrugBank:** [DB13896](https://go.drugbank.com/drugs/DB13896) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Talimogene laherparepvec is a modified herpes virus used to treat melanoma. It is an approved anticancer medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7679524](https://www.wikidata.org/wiki/Q7679524) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:42 | 0:27 | 0/0/0 | 0/1/0 | 0/0/0 | 57,718/1,054 | einfracz / qwen3.8-27b | 9 | 0/5 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Dharmadhikari_2015_durable_response_rate](drugs/drug_talimogene_laherparepvec/pd_Dharmadhikari_2015_durable_response_rate.md) | durable response rate ← talimogene laherparepvec · stimulation effect | — | Dharmadhikari N et al., Oncolytic virus immunotherapy for melan…, Current treatment options i… (2015) | [10.1007/s11864-014-0326-0](https://doi.org/10.1007/s11864-014-0326-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=talimogene_laherparepvec) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CSF2 (gene replacement).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 81 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alam_2025 | irrelevant | 0 | 0 | This is a review article on oncolytic viruses that discusses talimogene laherparepvec's mechanism of action and clinical status but does not report any quantitative pharmacokinetic parameters (CL, V, half-life) for the drug. |
| popPK | Bommareddy_2017 | irrelevant | 0 | 0 | This is a review article regarding clinical efficacy and patient selection for T-VEC in melanoma, containing no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Grigg_2016 | irrelevant | 0 | 0 | The paper is a review of T-Vec's development and clinical efficacy/mechanism, containing no quantitative pharmacokinetic parameters. |
| popPK | Koch_2020 | irrelevant | 0 | 0 | The paper is a review of oncolytic viruses including talimogene laherparepvec, but it focuses on clinical efficacy and mechanism rather than reporting quantitative pharmacokinetic parameters (CL, V, t1/2) for the virus itself. |
| popPK | Liu_2024 | irrelevant | 0 | 0 | The paper is a review of mRNA vaccines and does not report pharmacokinetic parameters for talimogene laherparepvec. |
| popPK | Robilotti_2023 | irrelevant | 0 | 0 | This is a review on biosafety and handling protocols for oncolytic viruses, not a pharmacokinetic study, and it contains no quantitative disposition parameters (CL, V, etc.). |
| popPK | Robinson_2024 | irrelevant | 0 | 0 | The paper is a review of clinical oncology trials focusing on efficacy and safety, not pharmacokinetics, and contains no quantitative PK parameters (CL, V, etc.) for talimogene laherparepvec. |
| popPK | Xu_2020 | irrelevant | 0 | 0 | This is a review article on intratumoural immunotherapies and does not report quantitative pharmacokinetic parameters for talimogene_laherparepvec. |
| popPK | Ziogas_2023 | irrelevant | 0 | 0 | The paper is a review on mechanisms of resistance to immune checkpoint inhibitors in melanoma and does not report pharmacokinetic parameters for talimogene_laherparepvec. |
| popPK | Zou_2026 | irrelevant | 0 | 0 | The paper is a review of HSV-1 molecular entry mechanisms and engineering strategies, not a pharmacokinetic study reporting quantitative disposition parameters for talimogene laherparepvec. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
