<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;anidulafungin&quot;}]"></div>

# anidulafungin

- **generic name:** anidulafungin
- **ATC codes:** `J02AX06`
- **DrugBank:** [DB00362](https://go.drugbank.com/drugs/DB00362) · **PubChem:** [CID 166548](https://pubchem.ncbi.nlm.nih.gov/compound/166548)
- **groups:** approved

## About

Anidulafungin is an antifungal medicine used to treat candidiasis, including esophageal candidiasis. It is approved and authorised in the European Union, where it is used for systemic fungal infections.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4764531](https://www.wikidata.org/wiki/Q4764531) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:21 | 21:56 | 0/0/0 | 0/1/0 | 0/0/0 | 36,800/1,207 | einfracz / qwen3.8-27b | 22 | 2/18 | 22/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Siopi_2021_AMEC](drugs/drug_anidulafungin/pd_Siopi_2021_AMEC.md) | % aberrant mycelium formation ← anidulafungin · direct sigmoid Emax (Hill) effect | — | Siopi M et al., Comparative Pharmacodynamics of Echinoc…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.01618-20](https://doi.org/10.1128/AAC.01618-20) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=anidulafungin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 192 matched, 108 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Arastehfar_2019 | not_relevant | 0 | 0 | The paper reports the identification and antifungal susceptibility (MICs) of Candida nivariensis isolates, but does not investigate the effect of human gene variants on pharmacokinetic or pharmacodynamic parameters of anidulafungin. |
| PGx | Badali_2011 | not_relevant | 0 | 0 | The paper reports in vitro antifungal susceptibility (MICs) of a fungus to anidulafungin and other agents, with no investigation of human gene variants or pharmacogenomic effects on pharmacokinetic/pharmacodynamic parameters. |
| popPK | Cornely_2021 | irrelevant | 0 | 0 | no_text gate: only 181 chars of text extracted (&lt; 400) |
| PGx | Liu_2014 | not_relevant | 0 | 0 | The study reports no significant association between CYP2C19 genotype and efficacy or safety endpoints, and does not describe pharmacogenomic effects on PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
