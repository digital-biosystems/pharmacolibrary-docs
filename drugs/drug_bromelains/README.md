<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03B&quot;,&quot;href&quot;:&quot;atc/D03B.md&quot;},{&quot;label&quot;:&quot;bromelains&quot;}]"></div>

# bromelains

- **generic name:** bromelains
- **ATC codes:** `D03BA03`, `M09AB03`
- **DrugBank:** [DB13281](https://go.drugbank.com/drugs/DB13281) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Bromelains, a mixture of proteolytic enzymes from pineapple, is used to help clean dead tissue from wounds and ulcers (debridement) and in preparations for musculoskeletal disorders. It remains in use, with one product authorised in the European Union for wound debridement, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19903607](https://www.wikidata.org/wiki/Q19903607) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:59 | 1:20 | 0/0/0 | 0/1/0 | 0/0/0 | 96,564/3,844 | openai / gpt-6-luna | 7 | 1/6 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Hale_2002_proteolytic_effect_of_bromelain](drugs/drug_bromelains/pd_Hale_2002_proteolytic_effect_of_bromelain.md) | proteolytic effect of bromelain ← bromelain · inhibition effect | — | Hale LP et al., Bromelain treatment alters leukocyte ex…, Clinical immunology (Orland… (2002) | [10.1006/clim.2002.5254](https://doi.org/10.1006/clim.2002.5254) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bahde_2007 | irrelevant | 0 | 0 | This rat efficacy study reports no pharmacokinetic disposition parameters for bromelain. |
| popPK | Bloembergen_1987 | irrelevant | 0 | 0 | Bromelain is used to treat erythrocytes, and no bromelain pharmacokinetic parameters are reported. |
| popPK | Chang_2020 | irrelevant | 0 | 0 | Bromelain is used only to hydrolyze potato protein, with no bromelain disposition parameters reported. |
| popPK | Chida_1986 | irrelevant | 0 | 0 | This occupational allergy study reports exposure-related incidence, not pharmacokinetic disposition parameters for bromelain. |
| popPK | Elendu_2026 | irrelevant | 0 | 0 | This observational study examines pineapple consumption and labor outcomes, not bromelain pharmacokinetics or disposition parameters. |
| popPK | Emeka_2025 | irrelevant | 0 | 0 | This rat neurotoxicity study reports no quantitative pharmacokinetic disposition parameters for bromelain. |
| popPK | Hale_2002 | irrelevant | 0 | 0 | This is an in-vitro leukocyte study and reports no pharmacokinetic disposition parameters for bromelain. |
| popPK | Johny_2022 | irrelevant | 0 | 0 | This is an in-vitro egg-white hydrolysis study, not a pharmacokinetic study of bromelain. |
| popPK | Shukor_2008 | irrelevant | 0 | 0 | Bromelain is used in an in-vitro heavy-metal inhibition assay, with no pharmacokinetic disposition parameters. |
| popPK | Shukor_2009 | irrelevant | 0 | 0 | Bromelain is only mentioned as a comparator in an in-vitro copper inhibition assay, with no bromelain PK parameters. |
| popPK | Sonklin_2021 | irrelevant | 0 | 0 | Bromelain is used to hydrolyze mung bean protein in an in-vitro antioxidant study, with no bromelain pharmacokinetic parameters reported. |
| popPK | Targoni_1999 | irrelevant | 0 | 0 | This is an efficacy and immunology study with no quantitative pharmacokinetic parameters for bromelain. |
| popPK | Walker_2002 | irrelevant | 0 | 0 | This is an open symptom-outcome study and reports no quantitative pharmacokinetic disposition parameters. |
| popPK | Önal_2021 | irrelevant | 0 | 0 | Bromelain is only a component of the supplement; no bromelain pharmacokinetic parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
