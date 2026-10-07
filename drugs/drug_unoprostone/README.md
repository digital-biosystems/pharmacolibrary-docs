<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;unoprostone&quot;}]"></div>

# unoprostone

- **generic name:** unoprostone
- **ATC codes:** `S01EE02`
- **DrugBank:** [DB06826](https://go.drugbank.com/drugs/DB06826) · **PubChem:** [CID 5311236](https://pubchem.ncbi.nlm.nih.gov/compound/5311236)
- **molar mass:** 382.541 g/mol (C22H38O5) — DrugBank
- **groups:** approved, withdrawn

## About

Unoprostone is a prostaglandin analogue eye drop used to treat open-angle glaucoma and ocular hypertension. It was approved but has been withdrawn and is no longer on the market.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4859684](https://www.wikidata.org/wiki/Q4859684) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:36 | 0:30 | 0/0/0 | 0/2/0 | 0/0/0 | 33,376/1,466 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sharif_2002_PI](drugs/drug_unoprostone/pd_Sharif_2002_PI.md) | phosphoinositide (PI) turnover ← unoprostone isopropyl ester · stimulation effect | — | Sharif NA et al., Agonist activity of bimatoprost, travop…, Journal of ocular pharmacol… (2002) | [10.1089/10807680260218489](https://doi.org/10.1089/10807680260218489) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Sharif_2008_2_contraction_of_isolated_non_pregnant_female_rat_uterus](drugs/drug_unoprostone/pd_Sharif_2008_2_contraction_of_isolated_non_pregnant_female_ra.md) | contraction of isolated non-pregnant female rat uterus ← unoprostone · direct Emax (saturable) effect | — | Sharif NA, Synthetic FP-prostaglandin-induced cont…, Prostaglandins, leukotriene… (2008) | [10.1016/j.plefa.2008.01.005](https://doi.org/10.1016/j.plefa.2008.01.005) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=unoprostone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kelly_2003.pdf` | Kelly CR et al., Real-time intracellular Ca2+ mobilizati…, The Journal of pharmacology… (2003) | pd | 4 | [10.1124/jpet.102.042556](https://doi.org/10.1124/jpet.102.042556) | [12490597](https://www.ncbi.nlm.nih.gov/pubmed/12490597) | metadata signals extractable PD data (EC50) |
| `Sharif_2002.pdf` | Sharif NA et al., Agonist activity of bimatoprost, travop…, Journal of ocular pharmacol… (2002) | pd | 4 | [10.1089/10807680260218489](https://doi.org/10.1089/10807680260218489) | [12222762](https://www.ncbi.nlm.nih.gov/pubmed/12222762) | metadata signals extractable PD data (EC50) |
| `Sharif_2003.pdf` | Sharif NA et al., Ocular hypotensive FP prostaglandin (PG…, Journal of ocular pharmacol… (2003) | pd | 4 | [10.1089/108076803322660422](https://doi.org/10.1089/108076803322660422) | [14733708](https://www.ncbi.nlm.nih.gov/pubmed/14733708) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T19:36:43.163434+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cuppoletti_2007 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study examining ion channel activation and neuroprotection, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Cuppoletti_2012 | irrelevant | 0 | 0 | The study is mechanistic and reports pharmacodynamic endpoints (channel activity, intracellular calcium) rather than pharmacokinetic parameters such as clearance or volume. |
| popPK | Kelly_2003 | irrelevant | 0 | 0 | The study is an in vitro pharmacological assessment of receptor binding and calcium mobilization, not a pharmacokinetic study of unoprostone. |
| popPK | Sharif_2002 | irrelevant | 0 | 0 | The study measures receptor agonist potency (pharmacodynamics) in an in vitro assay, not pharmacokinetic parameters. |
| popPK | Sharif_2003 | irrelevant | 0 | 0 | The paper is an in vitro receptor binding and potency study, not a pharmacokinetic study, and unoprostone is only a comparator. |
| popPK | Sharif_2003_2 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor potency (EC50) in cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Sharif_2003_3 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological analysis of receptor signaling in human ciliary muscle cells, not a pharmacokinetic study of unoprostone. |
| popPK | Sharif_2008 | irrelevant | 0 | 0 | This is an in vitro pharmacology study measuring receptor potency (EC50) in cat iris, not a pharmacokinetic study reporting disposition parameters for unoprostone. |
| popPK | Sharif_2008_2 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assay measuring receptor potency (EC50) on rat uterus, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for unoprostone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
