<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;metyrapone&quot;}]"></div>

# metyrapone

- **generic name:** metyrapone
- **ATC codes:** `V04CD01`
- **DrugBank:** [DB01011](https://go.drugbank.com/drugs/DB01011) · **PubChem:** [CID 4174](https://pubchem.ncbi.nlm.nih.gov/compound/4174)
- **molar mass:** 226.2738 g/mol (C14H14N2O) — DrugBank
- **groups:** approved, investigational

## About

Metyrapone is a diagnostic agent used in tests of pituitary function, notably to assess adrenal-related disorders such as Cushing's syndrome. It remains an approved drug, though it is used only in specialised diagnostic settings rather than as a routine treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q821641](https://www.wikidata.org/wiki/Q821641) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:26 | 0:28 | 0/0/0 | 1/0/0 | 0/0/0 | 48,496/1,978 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hornsby_1985_11_beta_hydroxylase](drugs/drug_metyrapone/pd_Hornsby_1985_11_beta_hydroxylase.md) | protection of 11 beta-hydroxylase activity ← metyrapone · direct Emax (saturable) effect | — | Hornsby PJ et al., Mode of action of butylated hydroxyanis…, Biochemical pharmacology (1985) | [10.1016/0006-2952(85)90768-3](https://doi.org/10.1016/0006-2952(85)90768-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metyrapone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2A6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inducer/inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCC3` inducer | DrugBank actor |
| excretion | small intestine | `ABCC3` inducer | DrugBank actor |
| — | adrenal gland | `CYP11B1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP11B2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhardwaj_1988 | irrelevant | 0 | 0 | Metyrapone is only used as a pharmacological tool (EDRF biosynthesis inhibitor) in an in vitro vascular study; no PK parameters reported. |
| popPK | Bhardwaj_1988_2 | irrelevant | 0 | 0 | Metyrapone is only used as a pharmacological tool (10 µM) in a perfused rat kidney study of EDRF; no PK parameters reported. |
| popPK | Bombail_2004 | irrelevant | 0 | 0 | In-vitro mechanistic study of CYP3A4 promoter regulation; metyrapone is only a xenobiotic stimulus, no PK parameters reported. |
| popPK | Dorigo_1999 | irrelevant | 0 | 0 | Metyrapone is only mentioned as a co-administered tool compound in a vascular pharmacology study; no PK parameters reported. |
| popPK | Grogan_1990 | irrelevant | 0 | 0 | Metyrapone is only used as a P-450 inhibitor in an in-vitro enzyme study; no PK parameters for metyrapone are reported. |
| popPK | Hornsby_1985 | irrelevant | 0 | 0 | In-vitro cell culture study of enzyme protection; metyrapone is only a tool compound with an EC50, no PK disposition parameters. |
| popPK | Iranmanesh_2011 | irrelevant | 0 | 0 | This is an endocrine dose-response (ACTH-cortisol EC50) study; metyrapone is used as a diagnostic/blocking agent, with no PK parameters for metyrapone reported. |
| popPK | Kai_1993 | irrelevant | 0 | 0 | Metyrapone is only a pharmacological probe affecting pulmonary clearance of 99mTc-HSA in mice; no PK parameters for metyrapone itself are reported. |
| popPK | Weigand_2020 | irrelevant | 0 | 0 | Metyrapone is only used as a steroidogenesis inhibitor in in-vitro cell experiments; no pharmacokinetic parameters for metyrapone are reported. |
| popPK | Wright_1994 | irrelevant | 0 | 0 | In-vitro microsomal binding study; metyrapone is only a comparator in binding antagonism, no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
