<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;metahexamide&quot;}]"></div>

# metahexamide

- **generic name:** metahexamide
- **ATC codes:** `A10BB10`
- **DrugBank:** [DB13675](https://go.drugbank.com/drugs/DB13675) · **PubChem:** not captured
- **molar mass:** 311.4 g/mol (C14H21N3O3S) — DrugBank
- **groups:** investigational

## About

Metahexamide is a sulfonylurea, a class of blood glucose lowering drugs used in diabetes. It is not an approved medicine and is currently only listed as investigational.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6553356](https://www.wikidata.org/wiki/Q6553356) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 00:37 | 0:53 | 0/0/0 | 0/0/0 | 0/0/0 | 24,505/1,269 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=metahexamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 1 matched, 23 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Becker_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nicotine in guinea pig hearts, not metahexamide. |
| popPK | Brown_1972 | irrelevant | 0 | 0 | The study investigates the pharmacology of nicotine in rat ganglia and does not involve metahexamide. |
| popPK | De_1984 | irrelevant | 0 | 0 | The study investigates the effect of carbachol on blood flow in cats and uses hexamethonium (not metahexamide) as an antagonist, with no pharmacokinetic parameters reported. |
| popPK | Han_1991 | irrelevant | 0 | 0 | The study investigates renal physiology and cholinergic effects in rats, not the pharmacokinetics of metahexamide. |
| popPK | Holzer_1992 | irrelevant | 0 | 0 | The study investigates gastric mucosal blood flow and neural pathways in rats, using hexamethonium (a ganglionic blocker) as a pharmacological tool, not metahexamide (a hypoglycemic agent), and reports no pharmacokinetic parameters. |
| popPK | KNAUFF_1959 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| popPK | Lanman_1980 | irrelevant | 0 | 0 | The study investigates the transport of choline and hexamethonium in rabbit cerebrospinal fluid, not the pharmacokinetics of metahexamide. |
| popPK | Limlomwongse_1979 | irrelevant | 0 | 0 | The study investigates the effect of capsaicin on gastric acid secretion in rats and does not involve metahexamide or its pharmacokinetics. |
| popPK | MORGENSTERN_1959 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| popPK | Macquin-Mavier_1989 | irrelevant | 0 | 0 | The study investigates the mechanism of endothelin-mediated bronchoconstriction in guinea pigs and does not report pharmacokinetic parameters for metahexamide. |
| popPK | Mansner_1977 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of nicotine in mice, not metahexamide. |
| popPK | Pascaud_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of fedotozine in dogs, not metahexamide. |
| popPK | Sababi_1994 | irrelevant | 0 | 0 | The study investigates duodenal alkaline secretion and permeability in rats using hexamethonium as a ganglion blocker, not metahexamide, and reports no pharmacokinetic parameters for metahexamide. |
| popPK | Sommansson_2013 | irrelevant | 0 | 0 | The study investigates melatonin's effect on intestinal permeability in rats and does not involve metahexamide or its pharmacokinetics. |
| popPK | Sommansson_2014 | irrelevant | 0 | 0 | The study investigates ethanol's effects on rat duodenal bicarbonate secretion and permeability using 51Cr-EDTA as a marker, and does not involve the drug metahexamide. |
| popPK | Vandeputte-Van_1979 | irrelevant | 0 | 0 | The study investigates the neuroendocrine effects of dopamine on urinary function in goats and does not involve metahexamide or pharmacokinetic modeling. |
| popPK | Vandeputte-Van_1980 | irrelevant | 0 | 0 | The study investigates the effect of opioid peptides on urinary function in goats and does not involve metahexamide or its pharmacokinetics. |
| popPK | Wachter_1995 | irrelevant | 0 | 0 | The study investigates gastric hemodynamics and vascular mechanisms in rats, not the pharmacokinetics of metahexamide. |
| popPK | Wagner_1995 | irrelevant | 0 | 0 | The study investigates renal hemodynamics in rats using nitric oxide synthase inhibitors and does not report pharmacokinetic parameters for metahexamide. |
| popPK | Yeh_1993 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of pentamidine, not metahexamide. |
| popPK | Yusta_2017 | irrelevant | 0 | 0 | The paper investigates the mechanism of GLP-2 on gallbladder refilling in mice and does not report pharmacokinetic parameters for metahexamide. |
| popPK | Zeng_1991 | irrelevant | 0 | 0 | The study investigates the hemodynamic effects of verticillatine, hexamethonium, and nimodipine, not the pharmacokinetics of metahexamide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
