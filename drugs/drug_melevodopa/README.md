<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;melevodopa&quot;}]"></div>

# melevodopa

- **generic name:** melevodopa
- **ATC codes:** `N04BA04`, `N04BA05`
- **DrugBank:** [DB13313](https://go.drugbank.com/drugs/DB13313) · **PubChem:** not captured
- **molar mass:** 211.217 g/mol (C10H13NO4) — DrugBank
- **groups:** investigational

## About

Melevodopa is a dopa-derivative antiparkinson agent developed for the treatment of Parkinson's disease. It is considered investigational and is not an established, widely approved treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q10967792](https://www.wikidata.org/wiki/Q10967792) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 14:11 | 5:19 | 0/0/0 | 0/0/0 | 0/0/0 | 196,120/1,531 | ollama / glm-5.3-flash | 11 | 7/4 | 11/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 58 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agbo_2021 | irrelevant | 0 | 0 | The paper is a population PK model of apomorphine and its sulfate metabolite, not melevodopa; melevodopa is not the subject drug. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | This is an item-response modelling study of UPDRS scores in a ropinirole trial; no melevodopa PK parameters are reported. |
| popPK | Hadi_2025 | irrelevant | 0 | 0 | This is a neuroprotection/pharmacology study in rats with no melevodopa PK parameters; levodopa-carbidopa is only a co-treatment, and no disposition values appear. |
| popPK | Molteni_2023 | irrelevant | 4 | 2 | This is a bioanalytical LC-MS/MS method-validation paper with a small noncompartmental PK comparison in one patient; melevodopa (LDME) was dosed but not measurable as a prodrug, no CL/V or population-PK model is reported, and the PK values (Table 2/Figure 3) are not present in the evidence. |
| popPK | Padhi_2025 | irrelevant | 2 | 0 | Study concerns engineered bacteria producing L-DOPA (not melevodopa) and no numeric PK parameters appear in the evidence; PK values are only referenced as simulated studies. |
| popPK | Piterà_2026 | irrelevant | 0 | 0 | This is a cryostimulation rehabilitation study in Parkinson's patients measuring cortisol/serotonin and questionnaires; no melevodopa PK parameters are reported. |
| popPK | Simon_2025 | irrelevant | 0 | 0 | The paper is a conceptual review on plasma concentration monitoring and causal inference; melevodopa is never mentioned and no PK parameters for it appear. |
| popPK | Stocchi_2015 | irrelevant | 4 | 3 | PK study of levodopa/carbidopa after melevodopa dosing, but only AUC/Cmax/tmax summary statistics; no CL/V/ka or population-PK model for melevodopa, and detailed values are in supplementary tables/figures not provided. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | Network pharmacology/transcriptomics study of Centella asiatica; no melevodopa PK parameters anywhere. |
| popPK | Zhai_2025 | irrelevant | 0 | 0 | This is a neuroscience study of levodopa-induced dyskinesia in mice; no pharmacokinetic parameters for melevodopa are reported. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | This is a population-PK study of olanzapine (with paroxetine DDI); melevodopa is not the subject drug and no melevodopa parameters appear. |
| popPK | Zhuang_2026 | irrelevant | 0 | 0 | This is a mouse study of pramipexole and impulsivity in Parkinson's disease; melevodopa is not studied and no PK parameters for it appear. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
