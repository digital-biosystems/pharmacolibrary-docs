<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;broxyquinoline&quot;}]"></div>

# broxyquinoline

- **generic name:** broxyquinoline
- **ATC codes:** `A07AX01`, `G01AC06`, `P01AA01`
- **DrugBank:** [DB13536](https://go.drugbank.com/drugs/DB13536)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 01:05 | 1:08 | 0/0/0 | 1/0/0 | 0/0/0 | 31,515/593 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/2 | 3/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yuan_2019](drugs/drug_broxyquinoline/pd_Yuan_2019_Plaque_forming_units.md) | Yuan S et al., Screening of an FDA-Approved Drug Libra…, Viruses (2019) | [10.3390/v11040385](https://doi.org/10.3390/v11040385) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yuan_2019](drugs/drug_broxyquinoline/pd_Yuan_2019_SFTSV_NP_protein_expression.md) | Yuan S et al., Screening of an FDA-Approved Drug Libra…, Viruses (2019) | [10.3390/v11040385](https://doi.org/10.3390/v11040385) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yuan_2019](drugs/drug_broxyquinoline/pd_Yuan_2019_SFTSV_S_segment_viral_genome_copy_number.md) | Yuan S et al., Screening of an FDA-Approved Drug Libra…, Viruses (2019) | [10.3390/v11040385](https://doi.org/10.3390/v11040385) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fritzler_2012 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic screening for anti-parasitic activity (IC50) and does not report any pharmacokinetic parameters for broxyquinoline. |
| popPK | Kilgore_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on biomolecular condensates and small molecule partitioning, and does not report pharmacokinetic parameters for broxyquinoline. |
| PD | Kilgore_2024 | not_relevant | 0 | 0 | The paper focuses on the physicochemical partitioning of small molecules into biomolecular condensates and does not report any pharmacodynamic or exposure-response data for broxyquinoline. |
| popPK | Yuan_2019 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral screening study where broxyquinoline is identified as a hit compound, but it does not report any pharmacokinetic parameters (CL, V, etc.) for the drug. |
| PD | Yuan_2019 | not_relevant | 3 | 2 | The paper reports an IC50 for hexachlorophene, but for broxyquinoline it only identifies it as an active compound in a screening library without providing specific numeric PD parameters (like IC50) or a dose-response curve in the provided text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
