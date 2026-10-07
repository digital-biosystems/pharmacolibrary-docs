<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;imlifidase&quot;}]"></div>

# imlifidase

- **generic name:** imlifidase
- **ATC codes:** `L04AA41`
- **DrugBank:** [DB15258](https://go.drugbank.com/drugs/DB15258) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Imlifidase is an immunosuppressant used for immunologic desensitization in kidney transplantation. It is authorised in the European Union and remains investigational for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q97353944](https://www.wikidata.org/wiki/Q97353944) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:50 | 0:50 | 0/0/0 | 0/0/0 | 0/0/0 | 82,836/1,267 | einfracz / qwen3.8-27b | 8 | 1/7 | 8/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imlifidase) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: IGHG1 (cleavage).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cao_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for KJ103, a novel IgG-degrading enzyme, which is distinct from the requested drug imlifidase (which is mentioned only as a comparator). |
| popPK | Choi_2005 | irrelevant | 0 | 0 | The study investigates the protective effects of adenosine and purine nucleosides on mitochondrial potential in rat astrocytes and does not involve imlifidase or its pharmacokinetics. |
| popPK | Ginsburg-Shmuel_2010 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of P2Y6 receptor agonists and does not involve the drug imlifidase or its pharmacokinetics. |
| popPK | Jin_2021 | irrelevant | 0 | 0 | The paper describes the identification of immunodominant epitopes of the Newcastle disease virus hemagglutinin-neuraminidase protein and is unrelated to the pharmacokinetics of imlifidase. |
| popPK | Jordan_2021 | irrelevant | 2 | 0 | The paper is a clinical efficacy trial that mentions pharmacokinetic data in its objectives but does not report quantitative PK parameters (CL, V, ka) for imlifidase in the provided text. |
| popPK | Kim_2016 | irrelevant | 0 | 0 | The paper focuses on antibody engineering and anti-hinge antibody binding, not the pharmacokinetics of imlifidase. |
| popPK | Koester_2010 | irrelevant | 0 | 0 | The paper describes an in-vitro neuronal cell assay using sodium valproic acid and does not involve imlifidase or any pharmacokinetic modeling. |
| popPK | Peraro_2021 | irrelevant | 0 | 0 | The paper focuses on CAR T-cell therapy and immune evasion using IdeS, not the pharmacokinetics of imlifidase. |
| popPK | Ru_2023 | irrelevant | 0 | 0 | The paper focuses on B-cell epitope mapping for the Senecavirus A VP2 protein and contains no pharmacokinetic data for imlifidase. |
| popPK | Siemer_2021 | irrelevant | 0 | 0 | The paper is a study on cisplatin nanomedicine and does not involve imlifidase. |
| popPK | Squires_2020 | irrelevant | 0 | 0 | The paper studies ATI-2173 (a clevudine prodrug for HBV), not imlifidase. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The paper is a review/perspective on extracellular vesicles and bacterial proteins, and does not report pharmacokinetic parameters for the drug imlifidase. |
| popPK | Xu_2024 | irrelevant | 0 | 0 | The paper describes a mass spectrometry method for analyzing glycation in therapeutic antibodies and does not involve the pharmacokinetics of imlifidase. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
