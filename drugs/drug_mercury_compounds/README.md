<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01A&quot;,&quot;href&quot;:&quot;atc/S01A.md&quot;},{&quot;label&quot;:&quot;mercury compounds&quot;}]"></div>

# mercury compounds

- **generic name:** mercury compounds
- **ATC codes:** `S01AX01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Mercury compounds are chemical substances containing mercury that were once used in medicine as anti-infective agents, including in eye preparations. They are no longer used in human medicine because of mercury's toxicity, and have been replaced by safer anti-infectives.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5780264](https://www.wikidata.org/wiki/Q5780264) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:35 | 0:20 | 0/0/0 | 0/0/0 | 0/0/0 | 48,628/1,351 | einfracz / qwen3.8-27b | 2 | 1/1 | 1/1 | 0 |

## popPK records

_not available_

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
| popPK | Bohets_1995 | irrelevant | 0 | 0 | The study measures cellular uptake (ng/mg protein) and cytotoxicity (EC50) in cell lines, which are toxicological/cellular kinetics parameters, not pharmacokinetic disposition parameters (CL, V, ka, t1/2) for a drug subject. |
| popPK | Eldefrawi_1977 | irrelevant | 0 | 0 | The study is a mechanistic in vitro binding assay examining the interaction of mercury compounds with ACh-receptors, not a pharmacokinetic study reporting disposition parameters like CL, V, or ka. |
| popPK | Fonfría_2001 | irrelevant | 0 | 0 | The study investigates the mechanism of action of mercury compounds on GABA(A) receptors in cell cultures and reports pharmacodynamic EC50 values, not pharmacokinetic disposition parameters. |
| popPK | Gade_2024 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation measuring LC50/EC50 values and bioaccumulation in *Artemia* (brine shrimp), not a pharmacokinetic study reporting clearance, volume of distribution, or compartmental PK parameters for a drug. |
| popPK | Gassó_2000 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study measuring noradrenaline release mechanisms and does not report any pharmacokinetic parameters (CL, V, t1/2) for mercury compounds. |
| popPK | Kehe_2001 | irrelevant | 0 | 0 | The study investigates cytotoxicity in pulmonary cells (in vitro) using EC50 values, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Leonhardt_1996 | irrelevant | 0 | 0 | This is an in-vitro electrophysiological study measuring IC50 values for calcium channel blockade, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Redwood_2001 | irrelevant | 2 | 0 | The study applies a previously developed methymercury model to predict hair concentrations from thimerosal exposure, but the specific quantitative PK parameter values (CL, V, etc.) for the mercury compounds are not explicitly reported in the provided evidence. |
| popPK | Reichl_2001 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay measuring LDH release and EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Reichl_2006 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring EC50 values in cell culture, not a pharmacokinetic study with disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
