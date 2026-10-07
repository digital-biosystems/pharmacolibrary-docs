<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07B&quot;,&quot;href&quot;:&quot;atc/J07B.md&quot;},{&quot;label&quot;:&quot;rabies, inactivated, whole virus&quot;}]"></div>

# rabies, inactivated, whole virus

- **generic name:** rabies, inactivated, whole virus
- **ATC codes:** `J07BG01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

This is an inactivated whole-virus vaccine used to protect against rabies virus infection in humans and animals. It is widely used worldwide and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4007169](https://www.wikidata.org/wiki/Q4007169) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:01 | 2:24 | 0/0/0 | 0/0/0 | 0/0/0 | 26,168/773 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ding_2020 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of SYN023 (a monoclonal antibody), not the rabies vaccine, and the vaccine is only a co-administered agent. |
| popPK | Gogtay_2012 | irrelevant | 1 | 0 | The study measures pharmacodynamics (neutralizing antibody titers) of a monoclonal antibody, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the rabies inactivated whole virus vaccine. |
| popPK | Huang_2015 | irrelevant | 0 | 0 | The study reports immunogenicity and survival rates in mice, containing no quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for the inactivated rabies vaccine. |
| popPK | Lebrun_2017 | irrelevant | 0 | 0 | The study is an immunology/efficacy trial measuring survival rates and antibody titers, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for the rabies vaccine. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The paper describes a manufacturing purification process (DNA clearance) and immunogenicity, not pharmacokinetic parameters like clearance or volume. |
| popPK | Luo_2017 | irrelevant | 0 | 0 | The study investigates the immunogenicity and pathogenicity of a recombinant rabies virus vector, not the pharmacokinetic disposition parameters of the inactivated whole virus vaccine. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a single-cell RNA sequencing study of the immune response to rabies virus infection in mice, not a pharmacokinetic study of the inactivated rabies vaccine. |
| popPK | Woznichak_2021 | irrelevant | 0 | 0 | The study focuses on Rabies Immune Globulin (RIG), not the rabies inactivated whole virus vaccine, and contains no quantitative pharmacokinetic parameter values. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The study focuses on the immunogenicity and pathogenicity of a recombinant rabies virus in mice and does not report any pharmacokinetic parameters for a rabies inactivated whole virus drug. |
| popPK | de_2014 | irrelevant | 0 | 0 | The paper is a clinical case report and review on the survival of rabies encephalitis, containing no pharmacokinetic data for the rabies vaccine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
