<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;tebipenem pivoxil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TebipenemPivoxil_Ganesan2023_reference&quot;,&quot;label&quot;:&quot;Ganesan_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tebipenem pivoxil

- **generic name:** tebipenem pivoxil
- **ATC codes:** `J01DH06`
- **DrugBank:** [DB16840](https://go.drugbank.com/drugs/DB16840) · **PubChem:** not captured
- **molar mass:** 497.63 g/mol (C22H31N3O6S2) — DrugBank
- **groups:** investigational

## About

Tebipenem pivoxil is an investigational carbapenem (beta-lactam) antibacterial being studied as a treatment for bacterial infections. It is not yet an approved medicine and remains in the investigational stage.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1623593](https://www.wikidata.org/wiki/Q1623593) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tebipenem | metabolite | 383.481 | C16H21N3O4S2 | PubChem | [9800194](https://pubchem.ncbi.nlm.nih.gov/compound/9800194) | Ganesan_2023 |
| tebipenem_pivoxil | metabolite | 497.63 | C22H31N3O6S2 | DrugBank | — | Ganesan_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:48 | 1:49 | 1/0/0 | 0/0/0 | 0/0/0 | 94,174/4,220 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ganesan_2023_reference](drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+2 cov.) | Ganesan H et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2023) | [10.1128/aac.01451-22](https://doi.org/10.1128/aac.01451-22) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sato_2008.pdf` | Sato N et al., Population pharmacokinetics of tebipene…, Drug metabolism and pharmac… (2008) | popPK | 10 | [10.2133/dmpk.23.434](https://doi.org/10.2133/dmpk.23.434) | [19122338](https://pubmed.ncbi.nlm.nih.gov/19122338) | The paper is a population PK study of tebipenem pivoxil, but the specific numeric parameter estimates (CL/F, Vd/F values) are not provided in the extracted text. |

<sub>queue written 2026-10-07T11:47:06.524402+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baba_2009 | irrelevant | 3 | 0 | The paper focuses on clinical efficacy and PK-PD indices (AUC/MIC, Cmax/MIC) rather than reporting specific quantitative pharmacokinetic disposition parameters (CL, V, ka, half-life) for tebipenem pivoxil. |
| popPK | Hao_2024 | relevant | 3 | 5 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for tebipenem pivoxil in humans, but lacks clearance (CL) or volume of distribution (V) values required for compartmental or population PK modeling. |
| popPK | Matsumoto_2014 | irrelevant | 4 | 1 | The study is a PK-PD simulation that uses population PK parameters but does not report specific numeric values for clearance, volume, or other disposition parameters in the provided evidence. |
| popPK | Sato_2008 | relevant | 10 | 0 | The paper is a population PK study of tebipenem pivoxil, but the specific numeric parameter estimates (CL/F, Vd/F values) are not provided in the extracted text. |
| popPK | Zhang_2026 | relevant | 8 | 2 | The paper uses a population PK model for tebipenem (Equations 6 and 7 are provided) to simulate PK/PD in children, but it does not report the estimated parameter values (clearance, volume) or the observed PK data, relying instead on a previously published model and simulation results. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 11:47 UTC</sub>
