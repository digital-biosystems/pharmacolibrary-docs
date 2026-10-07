<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;acetohydroxamic acid&quot;}]"></div>

# acetohydroxamic acid

- **generic name:** acetohydroxamic acid
- **ATC codes:** `G04BX03`
- **DrugBank:** [DB00551](https://go.drugbank.com/drugs/DB00551) · **PubChem:** [CID 1990](https://pubchem.ncbi.nlm.nih.gov/compound/1990)
- **molar mass:** 75.0666 g/mol (C2H5NO2) — DrugBank
- **groups:** approved, investigational

## About

Acetohydroxamic acid is a urological drug used in urinary tract conditions, where it acts as an enzyme inhibitor. It is approved in some countries but not authorised in the European Union, and it also has investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q481822](https://www.wikidata.org/wiki/Q481822) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:02 | 0:19 | 0/0/0 | 0/1/0 | 0/0/0 | 37,936/929 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Follmer_2004_aggregation_of_blood_platelets](drugs/drug_acetohydroxamic_acid/pd_Follmer_2004_aggregation_of_blood_platelets.md) | aggregation of blood platelets ← acetohydroxamic_acid · stimulation effect | — | Follmer C et al., Jackbean, soybean and Bacillus pasteuri…, European journal of biochem… (2004) | [10.1111/j.1432-1033.2004.04046.x](https://doi.org/10.1111/j.1432-1033.2004.04046.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acetohydroxamic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: MMP12 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Follmer_2004 | irrelevant | 0 | 0 | The study focuses on the biological effects and kinetic inhibition of ureases, with acetohydroxamic acid used only as an inhibitor, not as the subject of pharmacokinetic analysis. |
| popPK | Giannakopoulou_2019 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on hybrid hydroxamate-based inhibitors, where acetohydroxamic acid is a structural moiety rather than the subject of pharmacokinetic investigation. |
| popPK | Giannakopoulou_2024 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study reporting EC50 values for compounds containing an acetohydroxamic acid moiety, not a pharmacokinetic study of the drug acetohydroxamic acid itself. |
| popPK | Jolly_1991 | irrelevant | 0 | 0 | The paper is a study on neuropeptide Y pharmacology in rat hearts where acetohydroxamic acid is only a named component of the lipoxygenase inhibitor RG 6866, not the subject of PK analysis. |
| popPK | Montuschi_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of interleukin-1 receptor antagonist, where acetohydroxamic acid is used only as a tool compound (5-lipoxygenase inhibitor), and no pharmacokinetic parameters for acetohydroxamic acid are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
