<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;azelaic acid&quot;}]"></div>

# azelaic acid

- **generic name:** azelaic acid
- **ATC codes:** `D10AX03`
- **DrugBank:** [DB00548](https://go.drugbank.com/drugs/DB00548) · **PubChem:** [CID 2266](https://pubchem.ncbi.nlm.nih.gov/compound/2266)
- **molar mass:** 188.2209 g/mol (C9H16O4) — DrugBank
- **groups:** approved, investigational

## About

Azelaic acid is a topical dermatological drug used to treat acne and rosacea. It is an approved medicine, applied to the skin, and is widely used for these skin conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413504](https://www.wikidata.org/wiki/Q413504) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Gudin_2026_EC50](drugs/drug_azelaic_acid/pd_Gudin_2026_EC50.md) | fungal mycelia growth ← azelaic_acid · direct Emax (saturable) effect | — | Gudin GS et al., Azelaic Acid-Mediated Resistance in Ric…, Plants (Basel, Switzerland) (2026) | [10.3390/plants15040567](https://doi.org/10.3390/plants15040567) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Kang_2015_Ca2](drugs/drug_azelaic_acid/pd_Kang_2015_Ca2.md) | intracellular Ca(2+) mobilization ← azelaic_acid · direct Emax (saturable) effect | — | Kang N et al., Olfactory receptor Olfr544 responding t…, Biochemical and biophysical… (2015) | [10.1016/j.bbrc.2015.03.078](https://doi.org/10.1016/j.bbrc.2015.03.078) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:30 | 0:34 | 0/0/0 | 2/0/0 | 0/0/0 | 61,219/943 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barragán-Zarate_2020 | irrelevant | 0 | 0 | The study focuses on the ethnomedical and pharmacological effects (anti-inflammatory, gastroprotective) of an orchid extract where azelaic acid is merely one of many identified phytoconstituents, and no pharmacokinetic parameters are reported. |
| popPK | Gudin_2026 | irrelevant | 0 | 0 | The study is a plant pathology/biochemistry investigation of azelaic acid's effect on rice defense mechanisms and fungal growth, containing no pharmacokinetic data. |
| popPK | Kang_2015 | irrelevant | 0 | 0 | The study focuses on the mechanistic role of olfactory receptors in glucagon secretion and does not report pharmacokinetic disposition parameters. |
| popPK | Mwinga_2026 | irrelevant | 0 | 0 | The paper is a phytochemical and antifungal study where azelaic acid is merely identified as one of many compounds present in plant extracts, with no pharmacokinetic data reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
