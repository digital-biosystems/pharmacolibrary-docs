<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;propiverine&quot;}]"></div>

# propiverine

- **generic name:** propiverine
- **ATC codes:** `G04BD06`
- **DrugBank:** [DB12278](https://go.drugbank.com/drugs/DB12278) · **PubChem:** [CID 4942](https://pubchem.ncbi.nlm.nih.gov/compound/4942)
- **molar mass:** 367.4813 g/mol (C23H29NO3) — DrugBank
- **groups:** approved, investigational

## About

Propiverine is a muscarinic antagonist used to treat urinary frequency and incontinence (overactive bladder). It is an approved drug, used mainly in urology, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q904321](https://www.wikidata.org/wiki/Q904321) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:03 | 0:19 | 0/0/0 | 0/0/1 | 0/0/0 | 32,682/889 | einfracz / qwen3.8-27b | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Sugiyama_2005_VUIc](drugs/drug_propiverine/pd_Sugiyama_2005_VUIc.md) | Volume at first involuntary contraction ← propiverine · direct sigmoid Emax (Hill) effect | — | Sugiyama T et al., [Pharmacological evaluation of efficacy…, Nihon Hinyokika Gakkai zass… (2005) | [10.5980/jpnjurol1989.96.670](https://doi.org/10.5980/jpnjurol1989.96.670) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=propiverine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate, `FMO3` substrate | DrugBank actor |
| metabolism | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), CACNA1C (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), FMO1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Weiss_2023_2.pdf` | Weiss M et al., Dependence of Bioavailability on Mean A…, The AAPS journal (2023) | popPK | 8 | [10.1208/s12248-023-00803-8](https://doi.org/10.1208/s12248-023-00803-8) | [37016156](https://pubmed.ncbi.nlm.nih.gov/37016156) | The paper describes a population pharmacokinetic analysis of propiverine in healthy volunteers focusing on bioavailability and absorption time, but no quantitative parameter values (CL, V, etc.) are provided in the text. |

<sub>queue written 2026-10-07T09:03:00.162699+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Matsuo_2000 | irrelevant | 3 | 0 | Although the title mentions a pharmacokinetic study in mice, the evidence provided contains only pharmacodynamic data (catalepsy intensity) and in vitro binding affinities, with no quantitative PK parameter values (CL, V, etc.) for propiverine. |
| popPK | Sugiyama_2005 | irrelevant | 4 | 2 | The study is a PK/PD analysis focusing on urinary voiding functions and plasma concentrations (EC50), not a pharmacokinetic study reporting standard disposition parameters (CL, V, ka) for propiverine as the primary outcome; specific PK values (T1/2, Cmax) are cited from a separate reference (ref 9) rather than derived from this study's data. |
| popPK | Weiss_2023 | relevant | 10 | 2 | The paper analyzes propiverine PK data to compare models, but specific quantitative disposition parameters (CL, V, etc.) are not listed in the text, appearing only as bias comparisons or in supplementary material. |
| popPK | Weiss_2023_2 | relevant | 8 | 0 | The paper describes a population pharmacokinetic analysis of propiverine in healthy volunteers focusing on bioavailability and absorption time, but no quantitative parameter values (CL, V, etc.) are provided in the text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
