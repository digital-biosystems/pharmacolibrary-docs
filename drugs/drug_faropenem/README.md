<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;faropenem&quot;}]"></div>

# faropenem

- **generic name:** faropenem
- **ATC codes:** `J01DI03`
- **DrugBank:** [DB12190](https://go.drugbank.com/drugs/DB12190) · **PubChem:** [CID 65894](https://pubchem.ncbi.nlm.nih.gov/compound/65894)
- **molar mass:** 285.316 g/mol (C12H15NO5S) — DrugBank
- **groups:** investigational

## About

Faropenem is an investigational beta-lactam antibacterial drug, studied for treating bacterial infections. It is not an approved medicine in the European Union and remains in the investigational stage.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1397045](https://www.wikidata.org/wiki/Q1397045) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:05 | 0:17 | 0/0/0 | 1/0/1 | 0/0/0 | 17,720/1,342 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Gumbo_2020_Mab](drugs/drug_faropenem/pd_Gumbo_2020_Mab.md) | Mycobacterium abscessus subspecies abscessus (Mab) bacterial load ← faropenem · direct sigmoid Emax (Hill) effect | — | Gumbo T et al., Repurposing drugs for treatment of Myco…, The Journal of antimicrobia… (2020) | [10.1093/jac/dkz523](https://doi.org/10.1093/jac/dkz523) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Gill_2010_survival](drugs/drug_faropenem/pd_Gill_2010_survival.md) | survival ← faropenem · direct Emax (saturable) effect | — | Gill SC et al., Pharmacokinetic-pharmacodynamic assessm…, Antimicrobial agents and ch… (2010) | [10.1128/AAC.00737-08](https://doi.org/10.1128/AAC.00737-08) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gill_2010 | irrelevant | 2 | 0 | The study is a PK-PD efficacy trial in mice and the provided text reports efficacy metrics (ED50, %T&gt;MIC) but does not contain specific quantitative disposition parameters (CL, V, ka) or a PK model for faropenem. |
| popPK | Gumbo_2020 | irrelevant | 0 | 0 | The study is an in-vitro efficacy and MIC determination for Mycobacterium abscessus treatment, not a pharmacokinetic study of faropenem disposition. |
| popPK | Yamada_2022 | irrelevant | 1 | 0 | The study uses existing population PK models for faropenem in Monte Carlo simulations but does not report new quantitative PK parameter values for the drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
