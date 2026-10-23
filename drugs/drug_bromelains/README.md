<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D03B&quot;,&quot;href&quot;:&quot;atc/D03B.md&quot;},{&quot;label&quot;:&quot;bromelains&quot;}]"></div>

# bromelains

- **generic name:** bromelains
- **ATC codes:** `D03BA03`, `M09AB03`
- **DrugBank:** [DB13281](https://go.drugbank.com/drugs/DB13281) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Bromelains, a mixture of proteolytic enzymes from pineapple, is used to help clean dead tissue from wounds and ulcers (debridement) and in preparations for musculoskeletal disorders. It remains in use, with one product authorised in the European Union for wound debridement, and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19903607](https://www.wikidata.org/wiki/Q19903607) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Hale_2002_proteolytic_effect_of_bromelain](drugs/drug_bromelains/pd_Hale_2002_proteolytic_effect_of_bromelain.md) | proteolytic effect of bromelain ← bromelain · inhibition effect | — | Hale LP et al., Bromelain treatment alters leukocyte ex…, Clinical immunology (Orland… (2002) | [10.1006/clim.2002.5254](https://doi.org/10.1006/clim.2002.5254) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:59 | 1:20 | 0/0/0 | 0/1/0 | 0/0/0 | 96,564/3,844 | openai / gpt-6-luna | 7 | 1/6 | 7/0 | 0 |

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


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
