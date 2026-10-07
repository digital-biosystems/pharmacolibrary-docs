<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;cabergoline&quot;}]"></div>

# cabergoline

- **generic name:** cabergoline
- **ATC codes:** `G02CB03`, `N04BC06`
- **DrugBank:** [DB00248](https://go.drugbank.com/drugs/DB00248) · **PubChem:** [CID 54746](https://pubchem.ncbi.nlm.nih.gov/compound/54746)
- **molar mass:** 451.6043 g/mol (C26H37N5O2) — DrugBank
- **groups:** approved, investigational

## About

Cabergoline is a dopamine agonist used to treat hyperprolactinemia and prolactin-producing pituitary tumors, and it has also been used for Parkinson's disease. It is an approved medicine, used widely for prolactin-related conditions, with additional investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423308](https://www.wikidata.org/wiki/Q423308) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:15 | 0:46 | 0/0/0 | 0/0/0 | 0/0/0 | 44,693/1,053 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=cabergoline) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (binder), ADRA1B (binder), ADRA1D (binder), ADRA2A (target), ADRA2B (target), ADRA2C (target), ADRB1 (binder), ADRB2 (binder), DRD1 (target), DRD2 (target), DRD3 (target), DRD4 (target), DRD5 (target), HTR1A (target), HTR1B (target), HTR1D (target), HTR2A (target), HTR2B (target), HTR2C (target), HTR7 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cuny_2021 | irrelevant | 0 | 0 | The study is an in vitro functional assay measuring GH suppression, not a pharmacokinetic study of cabergoline, which is used only as a comparator. |
| popPK | Florio_2008 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cell proliferation in pituitary adenomas, not a pharmacokinetic study, and cabergoline is used only as a comparator agent. |
| popPK | Franchi_2022 | irrelevant | 0 | 0 | This study investigates the behavioral effects of cabergoline administration on dairy cows (feeding and rumination) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Fusco_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of prolactin secretion in cell cultures, reporting receptor mRNA levels and EC50 values for secretion, not pharmacokinetic disposition parameters. |
| popPK | Lombardi_2002 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assay measuring neuroprotection, not a pharmacokinetic study with disposition parameters. |
| popPK | Miglio_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cabergoline's neuroprotective effects on cell viability and does not report any pharmacokinetic parameters. |
| popPK | Nomoto_2005 | irrelevant | 0 | 0 | The paper is a review discussing various Parkinson's disease drugs, and cabergoline is only mentioned in the context of a drug-drug interaction with clarithromycin without reporting its own quantitative PK parameters. |
| popPK | Sanz_2009 | irrelevant | 0 | 0 | The pharmacokinetic models refer to MRI contrast agent perfusion dynamics, not the systemic disposition of cabergoline itself. |
| popPK | Saveanu_2006 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study of receptor binding and GH suppression, not a pharmacokinetic study. |
| popPK | Sharif_2009 | irrelevant | 2 | 0 | This is a pharmacodynamic and receptor binding study focusing on intraocular pressure modulation, not a systemic pharmacokinetic study reporting clearance, volume, or half-life. |
| popPK | Tadori_2014 | irrelevant | 0 | 0 | This is a review discussing in vitro pharmacology and therapeutic concentrations, not a study reporting original population-pharmacokinetic parameters (CL, V, etc.) for cabergoline. |
| popPK | Tekin_2026 | irrelevant | 0 | 0 | The study is a clinical retrospective cohort analyzing tumor growth rates and prolactin levels, reporting no pharmacokinetic parameters (CL, V, ka, t1/2) for cabergoline. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
