<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;merbromin&quot;}]"></div>

# merbromin

- **generic name:** merbromin
- **ATC codes:** `D08AK04`
- **DrugBank:** [DB13392](https://go.drugbank.com/drugs/DB13392) · **PubChem:** [CID 2724062](https://pubchem.ncbi.nlm.nih.gov/compound/2724062)
- **molar mass:** 750.65 g/mol (C20H8Br2HgNa2O6) — DrugBank
- **groups:** investigational

## About

Merbromin, also known as Mercurochrome, is an organomercury antiseptic used to disinfect the skin and wounds. It is currently classed as investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q419070](https://www.wikidata.org/wiki/Q419070) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:32 | 0:07 | 0/0/0 | 0/0/0 | 0/0/0 | 9,815/187 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Almahri_2021 | irrelevant | 0 | 0 | The paper uses merbromin as a spectroscopic probe/reagent for the analysis of daclatasvir, not as a subject drug for pharmacokinetic study. |
| PD | Almahri_2021 | not_relevant | 0 | 0 | The paper describes a chemical analytical method for quantifying daclatasvir using merbromin as a reagent, not a pharmacodynamic or exposure-response study of merbromin as a drug. |
| popPK | Gruber_2020 | irrelevant | 0 | 0 | The paper describes a phenotypic screening platform for contraceptive activity in sperm and does not report pharmacokinetic parameters for merbromin. |
| PD | Gruber_2020 | not_relevant | 0 | 0 | The paper describes a phenotypic screening platform for male contraception and does not mention merbromin or report any specific pharmacodynamic parameters for it. |
| popPK | Ibanez_2012 | irrelevant | 0 | 0 | The paper is an in-vitro enzymatic screening study for protein methyltransferase inhibitors and does not report any pharmacokinetic parameters for merbromin. |
| popPK | Iyer_2006 | irrelevant | 0 | 0 | The paper is a mechanistic study on carbonic anhydrase inhibition and does not report any pharmacokinetic parameters for merbromin. |
| popPK | Musdal_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (GST P1-1) and does not report pharmacokinetic parameters for merbromin. |
| popPK | Xiong_2025 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study identifying merbromin as an enzyme inhibitor, reporting no pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
