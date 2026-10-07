<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;vardenafil&quot;}]"></div>

# vardenafil

- **generic name:** vardenafil
- **ATC codes:** `G04BE09`
- **DrugBank:** [DB00862](https://go.drugbank.com/drugs/DB00862) · **PubChem:** [CID 110634](https://pubchem.ncbi.nlm.nih.gov/compound/110634)
- **molar mass:** 488.603 g/mol (C23H32N6O4S) — DrugBank
- **groups:** approved

## About

Vardenafil is a medicine used to treat erectile dysfunction. It is an approved drug and remains authorised in the European Union, where it is widely used for this condition.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424161](https://www.wikidata.org/wiki/Q424161) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:16 | 0:43 | 0/0/0 | 0/0/0 | 0/0/0 | 34,415/1,146 | einfracz / qwen3.8-27b | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vardenafil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor/substrate, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PDE5A (inhibitor), PDE6G (allosteric modulator), PDE6G (inhibitor), PDE6H (allosteric modulator), PDE6H (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Blount_2004 | irrelevant | 0 | 0 | This is an in-vitro biochemical binding study of PDE5 inhibitors, not a pharmacokinetic disposition study. |
| popPK | Brand_2007 | irrelevant | 0 | 0 | The study is an in-vitro functional assay on isolated guinea pig hearts measuring coronary flow and cGMP levels, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| popPK | Corbin_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on structural determinants of enzyme potency (IC50/EC50) rather than pharmacokinetic disposition parameters. |
| popPK | Dustan_2004 | irrelevant | 0 | 0 | The study is an in vitro electrophysiology investigation of HERG channel blockade and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Englert_2021 | irrelevant | 0 | 0 | The study is an ex-vivo mechanistic/pharmacodynamic investigation using an organ bath model, not a pharmacokinetic study reporting disposition parameters for vardenafil. |
| popPK | Giuliano_2003 | irrelevant | 1 | 0 | The study reports pharmacodynamic data (erectile response, in vitro relaxation) rather than quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Korkmaz_2009 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of vardenafil on endothelial function in rat aorta (mechanistic/physiological study) and does not report pharmacokinetic parameters. |
| popPK | Loganathan_2012 | irrelevant | 1 | 0 | The study focuses on hemodynamic and vascular functional responses (contractility, vasorelaxation) rather than pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Morganroth_2004 | irrelevant | 0 | 0 | The study focuses on cardiac electrophysiology (QTc prolongation) rather than pharmacokinetic parameters, and no PK values are reported. |
| popPK | Pal_2020 | irrelevant | 1 | 0 | The study focuses on the osteoanabolic and osteoangiogenic effects of vardenafil in mice, reporting tissue-level concentrations and bone markers rather than quantitative pharmacokinetic disposition parameters (CL, Vd, ka). |
| popPK | Radovits_2009 | irrelevant | 0 | 0 | This is a mechanistic study investigating cardiovascular effects (contractility, vasorelaxation) in rats, with no pharmacokinetic parameters reported. |
| popPK | Salonia_2026 | irrelevant | 0 | 0 | This is a clinical efficacy meta-analysis for erectile dysfunction treatment, not a pharmacokinetic study, and it contains no PK parameters (CL, V, t1/2, etc.). |
| popPK | Uckert_2005 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic investigation of tissue tension and cyclic nucleotide levels, reporting no pharmacokinetic disposition parameters. |
| popPK | Valiquette_2008 | irrelevant | 0 | 0 | This is a clinical efficacy study for erectile dysfunction that reports SEP2/SEP3 success rates and adverse events, but does not report quantitative pharmacokinetic parameters (CL, V, ka, t1/2). |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
