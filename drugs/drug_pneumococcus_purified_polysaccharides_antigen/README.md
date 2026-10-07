<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J07A&quot;,&quot;href&quot;:&quot;atc/J07A.md&quot;},{&quot;label&quot;:&quot;pneumococcus, purified polysaccharides antigen&quot;}]"></div>

# pneumococcus, purified polysaccharides antigen

- **generic name:** pneumococcus, purified polysaccharides antigen
- **ATC codes:** `J07AL01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

This vaccine, made from purified pneumococcal polysaccharides, is used to protect against pneumococcal disease. It is an established pneumococcal vaccine used widely for immunisation against pneumococcal infection.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2100023](https://www.wikidata.org/wiki/Q2100023) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:11 | 2:23 | 0/0/0 | 0/0/0 | 0/0/0 | 25,151/1,139 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 38 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cupit_1988 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of theophylline (the subject drug) to determine if pneumococcal vaccine (a co-administered agent) alters its metabolism; it does not report PK parameters for the pneumococcal vaccine itself. |
| popPK | Hebert_1989 | irrelevant | 0 | 0 | The study measures the immunological effect of the vaccine on bacterial clearance from lung tissue, not the pharmacokinetic disposition parameters of the vaccine antigen itself. |
| popPK | Iinuma_1989 | irrelevant | 0 | 0 | This is an immunology/infection study in rats assessing vaccine efficacy and bacterial clearance, not a pharmacokinetic study of the drug's disposition. |
| popPK | Johnson_1992 | irrelevant | 0 | 0 | The paper is a review discussing the clinical use and immune response to vaccines in renal failure patients, not a pharmacokinetic study reporting quantitative disposition parameters (e.g., clearance, volume, half-life) for pneumococcal polysaccharide antigen. |
| popPK | Lee_1994 | irrelevant | 0 | 0 | The study focuses on bacterial clearance and immune response to a conjugate vaccine in mice, not the pharmacokinetic disposition of the drug itself. |
| popPK | Malley_2012 | irrelevant | 0 | 0 | The paper describes an immunological vaccine efficacy study in mice and does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.) for the drug. |
| popPK | Neilan_1980 | irrelevant | 0 | 0 | The paper is a review of clinical management and immunologic consequences of splenectomy, containing no pharmacokinetic data or quantitative disposition parameters for pneumococcal vaccines. |
| popPK | Sass_1983 | irrelevant | 0 | 0 | The paper is a clinical case report regarding infection risk after splenectomy, not a pharmacokinetic study of the drug. |
| popPK | Scher_1983 | irrelevant | 0 | 0 | The study measures the clearance of the pathogen (Pneumococcus) from the blood, not the pharmacokinetics of the drug (purified polysaccharide antigen/vaccine). |
| popPK | Sullivan_1978 | irrelevant | 0 | 0 | The paper reports immunological responses (antibody titers/seroconversion) rather than pharmacokinetic disposition parameters (CL, V, etc.) for the pneumococcal polysaccharide vaccine. |
| popPK | Wang_2017 | irrelevant | 0 | 0 | The paper is an immunology study on Th17-mediated protection against Streptococcus pneumoniae infection, not a pharmacokinetic study of the vaccine itself. |
| popPK | Yano_2011 | irrelevant | 0 | 0 | The paper investigates the mechanism of action of antibodies on pneumococcal quorum sensing and is not a pharmacokinetic study. |
| popPK | Yu_2018 | irrelevant | 0 | 0 | The study is an immunological/efficacy study in mice measuring bacterial load and survival, containing no pharmacokinetic data for pneumococcal polysaccharide antigen. |
| popPK | Zeng_2015 | irrelevant | 0 | 0 | The study investigates the adjuvanticity of compound 48/80 for pneumococcal vaccination, reporting immunological parameters (antibody titers) rather than pharmacokinetic disposition parameters for the polysaccharide antigen itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
