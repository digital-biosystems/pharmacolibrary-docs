<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01C&quot;,&quot;href&quot;:&quot;atc/M01C.md&quot;},{&quot;label&quot;:&quot;aurothioglucose&quot;}]"></div>

# aurothioglucose

- **generic name:** aurothioglucose
- **ATC codes:** `M01CB04`
- **DrugBank:** [DB09121](https://go.drugbank.com/drugs/DB09121) · **PubChem:** [CID 6104](https://pubchem.ncbi.nlm.nih.gov/compound/6104)
- **molar mass:** 392.18 g/mol (C6H11AuO5S) — DrugBank
- **groups:** approved, withdrawn

## About

Aurothioglucose is a gold-based antirheumatic drug that was used to treat rheumatoid arthritis, including juvenile and psoriatic forms, as well as pemphigus. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4072449](https://www.wikidata.org/wiki/Q4072449) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:20 | 0:12 | 0/0/0 | 1/0/0 | 0/0/0 | 23,734/1,242 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bashtanova_2025_BrdU_incorporation](drugs/drug_aurothioglucose/pd_Bashtanova_2025_BrdU_incorporation.md) | DNA replication biomarker turnover ← aurothioglucose | — | Bashtanova U et al., The zinc finger domains of PARP-1 are s…, FEBS letters (2025) | [10.1002/1873-3468.70224](https://doi.org/10.1002/1873-3468.70224) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bashtanova_2025_PARP_1_activity](drugs/drug_aurothioglucose/pd_Bashtanova_2025_PARP_1_activity.md) | PARP-1 DNA-dependent activity biomarker turnover ← aurothioglucose | — | Bashtanova U et al., The zinc finger domains of PARP-1 are s…, FEBS letters (2025) | [10.1002/1873-3468.70224](https://doi.org/10.1002/1873-3468.70224) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bashtanova_2025_viability](drugs/drug_aurothioglucose/pd_Bashtanova_2025_viability.md) | cell viability biomarker turnover ← aurothioglucose | — | Bashtanova U et al., The zinc finger domains of PARP-1 are s…, FEBS letters (2025) | [10.1002/1873-3468.70224](https://doi.org/10.1002/1873-3468.70224) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aurothioglucose) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADCY1 (unknown), ADCY2 (unknown), ADCY5 (unknown).</sub>

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

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bashtanova_2025 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of PARP-1 enzyme inhibition and cell viability, reporting IC50/EC50 values for biological activity rather than pharmacokinetic disposition parameters (CL, V, t1/2) for aurothioglucose. |
| popPK | Cooney_1987 | irrelevant | 0 | 0 | The study measures glucose uptake in tissues of gold thioglucose-treated mice to assess insulin resistance, not the pharmacokinetic disposition parameters of the drug itself. |
| popPK | Le_1978 | irrelevant | 0 | 0 | The study focuses on insulin binding and glucose uptake in mice, using gold thioglucose to induce obesity, rather than reporting pharmacokinetic parameters for aurothioglucose. |
| popPK | Le_1982 | irrelevant | 0 | 0 | The study investigates amino acid transport mechanisms in obese mice and does not report pharmacokinetic parameters for aurothioglucose. |
| popPK | Santini_1992 | irrelevant | 0 | 0 | The study focuses on measuring iodothyronine 5'-monodeiodinase enzyme activity and content in rats, not on the pharmacokinetic disposition parameters (CL, V, t1/2) of aurothioglucose itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
