<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02C&quot;,&quot;href&quot;:&quot;atc/G02C.md&quot;},{&quot;label&quot;:&quot;atosiban&quot;}]"></div>

# atosiban

- **generic name:** atosiban
- **ATC codes:** `G02CX01`
- **DrugBank:** [DB09059](https://go.drugbank.com/drugs/DB09059) · **PubChem:** not captured
- **molar mass:** 994.19 g/mol (C43H67N11O12S2) — DrugBank
- **groups:** approved, investigational

## About

Atosiban is a tocolytic drug used to treat premature labour by relaxing the uterus. It is authorised in the European Union and used in obstetric care for threatened preterm birth.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421322](https://www.wikidata.org/wiki/Q421322) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:10 | 2:41 | 0/0/0 | 0/0/0 | 0/0/0 | 117,254/1,677 | einfracz / qwen3.8-27b | 4 | 0/4 | 3/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=atosiban) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AVPR1A (target), AVPR1B (target), AVPR2 (target), OXTR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 37 matched, 35 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akerlund_1999 | irrelevant | 0 | 0 | The study reports in vitro receptor binding affinities and contractility effects, not pharmacokinetic disposition parameters (CL, V, etc.) for atosiban. |
| popPK | Chen_1999 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of vascular resistance in rat uterine arteries, using atosiban as a tool compound (receptor antagonist) rather than measuring its pharmacokinetic disposition parameters. |
| popPK | Cherepanov_2023 | irrelevant | 0 | 0 | This is an ex-vivo mechanistic study measuring uterine contraction responses where atosiban is used as an antagonist probe, reporting no pharmacokinetic parameters (CL, V, etc.) for atosiban. |
| popPK | Doret_2002 | irrelevant | 0 | 0 | This is an in vitro mechanistic study of myometrial contractile activity, not a pharmacokinetic study, and atosiban is used only as a comparator agent. |
| popPK | Doret_2003 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assessment of myometrial contractility, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Engstrøm_2000 | irrelevant | 0 | 0 | The study is an in-vitro/mechanistic investigation of myometrial responsiveness to prostaglandins and does not report any pharmacokinetic parameters for atosiban. |
| popPK | Lamont_2003 | irrelevant | 0 | 0 | The paper is a general review discussing the development and clinical efficacy of atosiban as a tocolytic, containing no original pharmacokinetic data or quantitative disposition parameters. |
| popPK | Meyerowitz_2022 | irrelevant | 0 | 0 | The paper is a structural and mechanistic study of the oxytocin receptor using cryo-EM and in vitro assays; atosiban is mentioned only as a reference for an antagonist, with no pharmacokinetic data. |
| popPK | Pierzynski_2004 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of myometrial contractility, not a pharmacokinetic study, and reports no disposition parameters (CL, V, etc.). |
| popPK | Salleh_2013 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study on uterine contraction where atosiban is used as a receptor antagonist comparator, not a PK study of atosiban. |
| popPK | Santos_2016 | irrelevant | 0 | 0 | Atosiban is used only as a comparator agent in an in-vitro pharmacological study on ovine cervical relaxation, with no pharmacokinetic parameters reported. |
| popPK | Stymiest_2005 | irrelevant | 1 | 0 | The paper reports in-vitro pharmacodynamic potency (pA2) and metabolic stability half-lives in tissue for synthetic analogues, not population pharmacokinetic parameters (CL, V, Q) for atosiban itself. |
| popPK | Tahara_2000 | irrelevant | 0 | 0 | The study is a pharmacological characterization of oxytocin receptors in human cells where atosiban is used as a reference antagonist, reporting no pharmacokinetic parameters. |
| popPK | Thornton_2017 | irrelevant | 0 | 0 | The study investigates retosiban, a different oxytocin receptor antagonist, not atosiban, although PK parameters are reported. |
| popPK | Zurfluh_2024 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on myometrial cells focusing on the effects of a plant extract, where atosiban is used only as a reference antagonist to confirm receptor expression, not as the subject of a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
