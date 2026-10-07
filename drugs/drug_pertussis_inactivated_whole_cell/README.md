<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07A&quot;,&quot;href&quot;:&quot;atc/J07A.md&quot;},{&quot;label&quot;:&quot;pertussis, inactivated, whole cell&quot;}]"></div>

# pertussis, inactivated, whole cell

- **generic name:** pertussis, inactivated, whole cell
- **ATC codes:** `J07AJ01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

This inactivated whole-cell vaccine is used to protect against whooping cough (pertussis). It is a WHO-prequalified vaccine still widely used in many national immunisation programmes, though many wealthier countries have switched to acellular pertussis vaccines.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:00 | 2:44 | 0/0/0 | 0/0/0 | 0/0/0 | 34,327/779 | einfracz / qwen3.8-27b | 5 | 1/4 | 5/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adewunmi_2025 | irrelevant | 0 | 0 | This is an immunological/serological study on vaccine potency in mice, not a pharmacokinetic study, and no PK parameters are reported. |
| popPK | Blanc_2022 | irrelevant | 0 | 0 | The paper is a review of immunological mechanisms (bactericidal/opsonic activity) and does not report pharmacokinetic parameters. |
| popPK | Canthaboo_2000 | irrelevant | 0 | 0 | The study investigates immunological and protective effects (antibody titres, nitric oxide, survival) rather than pharmacokinetic disposition parameters. |
| popPK | Fry_2021 | irrelevant | 0 | 0 | The paper is a microbiological and epidemiological review of Bordetella pertussis and does not contain any pharmacokinetic data for pertussis vaccines. |
| popPK | Higgs_2012 | irrelevant | 0 | 0 | The paper is a review of the immunology of Bordetella pertussis infection and does not report pharmacokinetic parameters (CL, V, ka, etc.) for the vaccine. |
| popPK | Kapil_2019 | irrelevant | 0 | 0 | The paper is a review of immunological responses to pertussis vaccination and does not contain pharmacokinetic data or disposition parameters. |
| popPK | Warfel_2014 | irrelevant | 0 | 0 | The study is an immunological and epidemiological assessment of vaccine efficacy in baboons, reporting infection and transmission dynamics rather than pharmacokinetic disposition parameters (CL, V, etc.) for the whole-cell pertussis antigen. |
| popPK | Warfel_2016 | irrelevant | 0 | 0 | The study focuses on immunological efficacy and bacterial clearance kinetics in a baboon model, not on the pharmacokinetic parameters of the vaccine antigen itself. |
| popPK | Zeddeman_2020 | irrelevant | 0 | 0 | The study focuses on bacterial clearance kinetics and immune selection of Bordetella pertussis in vaccinated mice, rather than the pharmacokinetic parameters (CL, V, ka) of the vaccine formulation itself. |
| popPK | Škopová_2025 | irrelevant | 0 | 0 | The paper is a study on vaccine immunogenicity and reactogenicity (immune response, toxicity, pyrogenicity) and does not report pharmacokinetic parameters such as clearance or volume of distribution for the pertussis vaccine antigen itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
