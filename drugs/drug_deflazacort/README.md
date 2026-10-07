<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H02A&quot;,&quot;href&quot;:&quot;atc/H02A.md&quot;},{&quot;label&quot;:&quot;deflazacort&quot;}]"></div>

# deflazacort

- **generic name:** deflazacort
- **ATC codes:** `H02AB13`
- **DrugBank:** [DB11921](https://go.drugbank.com/drugs/DB11921) · **PubChem:** [CID 189821](https://pubchem.ncbi.nlm.nih.gov/compound/189821)
- **molar mass:** 441.524 g/mol (C25H31NO6) — DrugBank
- **groups:** approved

## About

Deflazacort is a glucocorticoid (anti-inflammatory and immunosuppressive) used to treat Duchenne muscular dystrophy. It is an approved medicine and is used in clinical practice, mainly for this condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q779118](https://www.wikidata.org/wiki/Q779118) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| deflazacort | parent | 441.524 | C25H31NO6 | DrugBank | [189821](https://pubchem.ncbi.nlm.nih.gov/compound/189821) | Möllmann_1995 |
| 21-desacetyldeflazacort | metabolite | 399.487 | C23H29NO5 | PubChem | [3081431](https://pubchem.ncbi.nlm.nih.gov/compound/3081431) | Möllmann_1995 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:31 | 0:31 | 0/1/0 | 0/0/0 | 0/0/0 | 30,209/1,960 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Möllmann_1995_reference](drugs/drug_deflazacort/Deflazacort_Mllmann1995_reference.md) | — | 1-compartment (no model) | 2 | Möllmann H et al., Pharmacokinetic/pharmacodynamic evaluat…, Pharmaceutical research (1995) | [10.1023/a:1016287104656](https://doi.org/10.1023/a:1016287104656) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=deflazacort) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: NR3C1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Möllmann_1995.pdf` | Möllmann H et al., Pharmacokinetic/pharmacodynamic evaluat…, Pharmaceutical research (1995) | popPK | 9 | [10.1023/a:1016287104656](https://doi.org/10.1023/a:1016287104656) | [7494809](https://pubmed.ncbi.nlm.nih.gov/7494809) | The study reports quantitative PK parameters (Cmax, AUC, t1/2) for the active metabolite 21-desacetyldeflazacort following deflazacort dosing in humans, which constitutes the pharmacokinetics of deflazacort. |

<sub>queue written 2026-10-07T09:30:45.682319+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lamb_2016 | irrelevant | 0 | 0 | This is a clinical study analyzing the effects of corticosteroid treatment on growth patterns in Duchenne muscular dystrophy patients, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Pagano_1984 | irrelevant | 0 | 0 | no_text gate: only 103 chars of text extracted (&lt; 400) |
| popPK | Schiava_2026 | irrelevant | 0 | 0 | The study analyzes anthropometric outcomes (height, weight, BMI) in DMD patients treated with deflazacort, but does not report pharmacokinetic parameters. |
| popPK | Soundarrajan_2026 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of deflazacort for pain management and does not report any pharmacokinetic parameters. |
| popPK | Vandenburgh_2009 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study testing the effect of deflazacort on muscle force, not a pharmacokinetic study. |
| popPK | Yao_2020 | irrelevant | 2 | 0 | The study measures the metabolite 21-hydroxy deflazacort and describes a PK model, but no numeric parameter values (CL, V, etc.) are provided in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:30 UTC</sub>
