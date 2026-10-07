<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05B&quot;,&quot;href&quot;:&quot;atc/H05B.md&quot;},{&quot;label&quot;:&quot;etelcalcetide&quot;}]"></div>

# etelcalcetide

- **generic name:** etelcalcetide
- **ATC codes:** `H05BX04`
- **DrugBank:** [DB12865](https://go.drugbank.com/drugs/DB12865) · **PubChem:** [CID 71511839](https://pubchem.ncbi.nlm.nih.gov/compound/71511839)
- **molar mass:** 1048.26 g/mol (C38H73N21O10S2) — DrugBank
- **groups:** approved, investigational

## About

Etelcalcetide is a calcimimetic medicine used to treat secondary hyperparathyroidism. It is authorised in the European Union and is an approved drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21098973](https://www.wikidata.org/wiki/Q21098973) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| etelcalcetide | parent | 1048.26 | C38H73N21O10S2 | DrugBank | [71511839](https://pubchem.ncbi.nlm.nih.gov/compound/71511839) | Chen_2018 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:28 | 0:39 | 0/1/0 | 1/0/0 | 0/0/0 | 21,290/1,780 | einfracz / qwen3.8-27b | 2 | 1/1 | 1/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chen_2018_reference](drugs/drug_etelcalcetide/Etelcalcetide_Chen2018_reference.md) | — | general linear (no model) | 3 | Chen P et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0550-4](https://doi.org/10.1007/s40262-017-0550-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2018_PTH](drugs/drug_etelcalcetide/pd_Chen_2018_PTH.md) | serum parathyroid hormone ← etelcalcetide · indirect response — drug inhibits the production of serum parathyroid hormone | — | Chen P et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0550-4](https://doi.org/10.1007/s40262-017-0550-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=etelcalcetide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CASR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2018.pdf` | Chen P et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-017-0550-4](https://doi.org/10.1007/s40262-017-0550-4) | [28508378](https://pubmed.ncbi.nlm.nih.gov/28508378) | The paper reports a population PK model for etelcalcetide with specific numeric values for clearance (0.472 L/h) and central volume of distribution (49.9 L) provided in the text. |

<sub>queue written 2026-10-07T10:27:57.742043+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2016 | irrelevant | 4 | 2 | The paper reports a population PK/PD model for etelcalcetide in humans, but the specific PK parameter values (CL, V, Q) are stated to have been developed previously and are not provided in the text, which focuses on PD parameters. |
| popPK | Harada_2019 | irrelevant | 0 | 0 | The paper focuses on the in vitro pharmacological profile and in vivo pharmacodynamic effects (PTH/Ca levels) rather than pharmacokinetic disposition parameters. |
| popPK | Wu_2017 | relevant | 7 | 2 | The paper describes a population PK model and provides mass balance data (50.8% in dialysate) but lacks explicit numeric values for clearance, volume, or half-life in the provided text. |
| popPK | Wu_2018 | irrelevant | 3 | 2 | The paper is a clinical pharmacokinetics/pharmacodynamics review/summary that describes qualitative mechanisms (dialysis clearance, albumin binding) and efficacy, but does not report specific numeric compartmental parameters (CL, V, Q, ka) for etelcalcetide, mentioning only a qualitative half-life range and qualitative clearance mechanisms. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:27 UTC</sub>
