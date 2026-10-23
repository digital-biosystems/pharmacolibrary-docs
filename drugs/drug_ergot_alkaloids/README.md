<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02A&quot;,&quot;href&quot;:&quot;atc/G02A.md&quot;},{&quot;label&quot;:&quot;ergot alkaloids&quot;}]"></div>

# ergot alkaloids

- **generic name:** ergot alkaloids
- **ATC codes:** `G02AB02`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Ergot alkaloids, compounds originally isolated from the ergot fungus Claviceps purpurea, are used as uterotonics in gynaecological care. They are classified under the ATC system as uterotonic gynaecologicals, indicating continued use in human medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q12748271](https://www.wikidata.org/wiki/Q12748271) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:16 | 0:55 | 0/0/0 | 0/0/0 | 0/0/0 | 63,800/3,507 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hilke_1978.pdf` | Hilke H et al., Dihydroergotamine: pharmacokinetics and…, Acta anaesthesiologica Scan… (1978) | popPK | 10 | [10.1111/aas.1978.22.3.215](https://doi.org/10.1111/aas.1978.22.3.215) | [354304](https://pubmed.ncbi.nlm.nih.gov/354304) | The paper reports quantitative pharmacokinetic parameters (half-lives, volume of distribution, clearance) for dihydroergotamine, an ergot alkaloid, in humans. |

<sub>queue written 2026-10-07T08:15:37.958584+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Foote_2012 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study measuring vasoconstriction response, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2). |
| popPK | Kudupoje_2018 | irrelevant | 0 | 0 | The study is an ex vivo myography and in vitro adsorption experiment evaluating the vasoconstrictive response to ergotamine and the binding properties of polymers, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for the drug. |
| popPK | Larson_1995 | irrelevant | 0 | 0 | The study reports in-vitro receptor binding affinity (Ki) and functional activity (EC50) values, not pharmacokinetic parameters like clearance or volume. |
| popPK | Larson_1999 | irrelevant | 0 | 0 | The study reports receptor binding and functional assay data (Ki, EC50) in cell culture, not pharmacokinetic disposition parameters. |
| popPK | Markstein_1982 | irrelevant | 0 | 0 | The study reports in vitro dopamine receptor binding and functional assay data (EC50s) for ergot alkaloids, not pharmacokinetic disposition parameters. |
| popPK | Nesić_1992 | irrelevant | 0 | 0 | The study investigates ion channel physiology and receptor pharmacology in snail neurons, not the pharmacokinetic disposition parameters (CL, V, t1/2) of ergot alkaloids. |
| popPK | Nomoto_2005 | irrelevant | 0 | 0 | Ergot alkaloids are only mentioned in the context of a drug interaction with clarithromycin, and no quantitative PK parameters (CL, V, etc.) are reported for them. |
| popPK | Rowell_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of dopamine release from synaptosomes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Yonpiam_2021 | irrelevant | 0 | 0 | The study investigates vascular contractile effects (pharmacodynamics) in sheep but does not report quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Yonpiam_2024 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic assessment of vascular contractile responses, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
