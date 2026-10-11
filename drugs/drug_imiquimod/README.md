<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06B&quot;,&quot;href&quot;:&quot;atc/D06B.md&quot;},{&quot;label&quot;:&quot;imiquimod&quot;}]"></div>

# imiquimod

- **generic name:** imiquimod
- **ATC codes:** `D06BB10`
- **DrugBank:** [DB00724](https://go.drugbank.com/drugs/DB00724) · **PubChem:** [CID 57469](https://pubchem.ncbi.nlm.nih.gov/compound/57469)
- **molar mass:** 240.3036 g/mol (C14H16N4) — DrugBank
- **groups:** approved, investigational

## About

Imiquimod is a topical immune-response modifier used to treat certain skin conditions, including actinic keratosis, genital warts, and superficial basal-cell skin cancer. It is an approved medicine, with products authorised in the European Union, and is applied directly to the affected skin.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423417](https://www.wikidata.org/wiki/Q423417) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:16 | 0:22 | 0/0/0 | 0/1/0 | 0/0/0 | 40,104/923 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Arends_2015_IL_1ra](drugs/drug_imiquimod/pd_Arends_2015_IL_1ra.md) | urinary interleukin 1 receptor agonist ← imiquimod · stimulation effect | — | Arends TJ et al., Pharmacokinetic, Pharmacodynamic, and A…, Clinical genitourinary canc… (2015) | [10.1016/j.clgc.2014.12.010](https://doi.org/10.1016/j.clgc.2014.12.010) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imiquimod) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: TLR7 (target), TLR8 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arends_2015.pdf` | Arends TJ et al., Pharmacokinetic, Pharmacodynamic, and A…, Clinical genitourinary canc… (2015) | popPK | 6 | [10.1016/j.clgc.2014.12.010](https://doi.org/10.1016/j.clgc.2014.12.010) | [25660383](https://pubmed.ncbi.nlm.nih.gov/25660383) | The study is a Phase 1 PK/PD trial of imiquimod (TMX-101) in humans, but the provided text only reports a single value for maximum plasma concentration (Cmax) and lacks quantitative disposition parameters (CL, V, t1/2, ka). |

<sub>queue written 2026-10-07T22:15:52.610698+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abiri_2021 | irrelevant | 0 | 0 | The study is a computational drug discovery paper focusing on TLR7 agonists using QSAR and molecular docking, with no pharmacokinetic data or disposition parameters reported for imiquimod. |
| popPK | Arends_2015 | relevant | 6 | 0 | The study is a Phase 1 PK/PD trial of imiquimod (TMX-101) in humans, but the provided text only reports a single value for maximum plasma concentration (Cmax) and lacks quantitative disposition parameters (CL, V, t1/2, ka). |
| popPK | Kusi-Appiah_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay using lipid microarrays to determine EC50 values for drug efficacy, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume of distribution. |
| popPK | Lu_2012 | irrelevant | 0 | 0 | The paper studies VTX-2337 as the primary drug, with imiquimod used only as a comparative agent in in-vitro immunological assays, and reports no pharmacokinetic parameters. |
| popPK | Sharma_2019 | irrelevant | 4 | 0 | The study reports dermatokinetic parameters for imiquimod in rat skin but lacks specific numeric PK values (CL, V, ka) in the provided text. |
| popPK | Tian_2022 | irrelevant | 0 | 0 | The study uses imiquimod as a tool to induce a psoriasis model, rather than studying the pharmacokinetics of imiquimod itself. |
| popPK | Zhang_2023 | irrelevant | 0 | 0 | Imiquimod is used as a disease inducer (psoriasis model) and is not the subject of pharmacokinetic analysis. |
| popPK | Zhao_2025 | irrelevant | 0 | 0 | Imiquimod is used as an inducer of psoriasis in an animal model to test the efficacy of a new AHR agonist, not as the subject of a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
