<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01B&quot;,&quot;href&quot;:&quot;atc/S01B.md&quot;},{&quot;label&quot;:&quot;medrysone&quot;}]"></div>

# medrysone

- **generic name:** medrysone
- **ATC codes:** `S01BA08`
- **DrugBank:** [DB00253](https://go.drugbank.com/drugs/DB00253) · **PubChem:** [CID 247839](https://pubchem.ncbi.nlm.nih.gov/compound/247839)
- **molar mass:** 344.4877 g/mol (C22H32O3) — DrugBank
- **groups:** approved

## About

Medrysone is a corticosteroid used to treat inflammatory eye conditions such as giant papillary conjunctivitis and episcleritis. It is an approved ophthalmic medicine, used as eye drops for these eye inflammations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6807292](https://www.wikidata.org/wiki/Q6807292) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:37 | 1:03 | 0/0/0 | 0/0/0 | 0/0/0 | 121,211/1,310 | einfracz / qwen3.8-27b | 6 | 6/0 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=medrysone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `SLCO1A2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `SLCO1A2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| excretion | kidney | `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ESRRA (modulator), ESRRB (modulator), ESRRG (modulator), NR3C1 (target), SERPINA6 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dhruba_2019 | irrelevant | 0 | 0 | The paper describes a statistical methodology for modeling dose-response curves in cell lines and does not mention medrysone or report pharmacokinetic parameters. |
| popPK | Elmorsy_2024 | irrelevant | 0 | 0 | The study investigates the cytotoxic effects of heavy metals and fucoxanthin on human osteoblasts and does not involve medrysone. |
| popPK | Elmorsy_2025 | irrelevant | 0 | 0 | The paper is an in-vitro toxicology study on heavy metals and vitamin D in osteoblasts, and does not report pharmacokinetic parameters for medrysone. |
| popPK | Elmorsy_2025_2 | irrelevant | 0 | 0 | The paper investigates the effect of heavy metals on ovarian cells and contains no pharmacokinetic data for medrysone. |
| popPK | Kim_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of homosalate, not medrysone. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The paper focuses on the bioremediation of heavy metals (cadmium and zinc) by Rhodobacter sphaeroides and contains no information regarding medrysone or any pharmacokinetic parameters. |
| popPK | Liu_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sinogliatin (HMS-5552), a glucokinase activator, and does not involve medrysone. |
| popPK | Ma_2003 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on androgen receptor activity of UV filters and does not involve medrysone or pharmacokinetic parameters. |
| popPK | Man_2021 | irrelevant | 0 | 0 | The paper is an ecological risk assessment of heavy metals in water birds and contains no pharmacokinetic data for medrysone. |
| popPK | Mercado_2023 | irrelevant | 0 | 0 | The paper is an ecotoxicology study on the toxicity of heavy metals to marine organisms, unrelated to the pharmacokinetics of medrysone. |
| popPK | Schlumpf_2001 | irrelevant | 0 | 0 | The paper focuses on the endocrine activity of UV screens (sunscreen compounds) in rats and human cells, and does not mention medrysone or provide any pharmacokinetic data for it. |
| popPK | Sheretov_2002 | irrelevant | 0 | 0 | The paper is a theoretical physics study on mass spectrometer ion trajectories and contains no pharmacokinetic data for medrysone. |
| popPK | Siachos_2025 | irrelevant | 0 | 0 | The paper evaluates a machine learning system for detecting lameness in cattle and does not involve the drug medrysone or any pharmacokinetic analysis. |
| popPK | Song_2026 | irrelevant | 0 | 0 | The paper is a review of vancomycin pharmacokinetics and dosing in hematologic malignancy patients and does not mention medrysone. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis regarding heavy metal pollution in soil and contains no pharmacokinetic data for medrysone. |
| popPK | Zhong_2026 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for abatacept, not medrysone. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
