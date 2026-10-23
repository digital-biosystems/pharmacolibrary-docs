<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;vosoritide&quot;}]"></div>

# vosoritide

- **generic name:** vosoritide
- **ATC codes:** `M05BX07`
- **DrugBank:** [DB11928](https://go.drugbank.com/drugs/DB11928) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Vosoritide is a peptide drug used to treat achondroplasia, a condition affecting bone growth. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21098976](https://www.wikidata.org/wiki/Q21098976) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vosoritide | parent | 4102.78 | C176H290N56O51S3 | PubChem | [119058036](https://pubchem.ncbi.nlm.nih.gov/compound/119058036) | Qi_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Qi_2024_median](drugs/drug_vosoritide/Vosoritide_Qi2024_median.md) | — | 1-compartment (no model) | 4 (+2 cov.) | Qi Y et al., Development of a Weight-Band Dosing App…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01371-6](https://doi.org/10.1007/s40262-024-01371-6) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ typical_value](drugs/drug_vosoritide/Vosoritide_Qi2024_typical_value.md) | — | 1-compartment (no model) | 4 (+2 cov.) |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chan_2022_CXM](drugs/drug_vosoritide/pd_Chan_2022_CXM.md) | mean CXM ← vosoritide · direct sigmoid Emax (Hill) effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chan_2022_DBP](drugs/drug_vosoritide/pd_Chan_2022_DBP.md) | maximum decrease from predose diastolic blood pressure ← vosoritide · direct linear effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chan_2022_HR](drugs/drug_vosoritide/pd_Chan_2022_HR.md) | maximum increase from predose heart rate ← vosoritide · direct linear effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chan_2022_SBP](drugs/drug_vosoritide/pd_Chan_2022_SBP.md) | maximum decrease from predose systolic blood pressure ← vosoritide · direct linear effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chan_2022_cGMP](drugs/drug_vosoritide/pd_Chan_2022_cGMP.md) | maximum increase in urine cGMP/Cr ← vosoritide · direct sigmoid Emax (Hill) effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Chan_2022_cGMP_2](drugs/drug_vosoritide/pd_Chan_2022_cGMP_2.md) | maximum increase in urine cGMP/Cr ← vosoritide · direct Emax (saturable) effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Chan_2022_AGV](drugs/drug_vosoritide/pd_Chan_2022_AGV.md) | annualized growth velocity ← vosoritide · direct sigmoid Emax (Hill) effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:24 | 1:12 | 0/2/0 | 1/0/0 | 0/0/0 | 93,480/11,578 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Galetaki_2026.pdf` | Galetaki D et al., Phase 2 Trial of Vosoritide Use in Pati…, Hormone research in paediat… (2026) | popPK | 5 | [10.1159/000542102](https://doi.org/10.1159/000542102) | [39427650](https://pubmed.ncbi.nlm.nih.gov/39427650) | The paper is a PK/PD analysis but reports qualitative comparisons ("similar to those previously reported") and correlation coefficients rather than specific quantitative PK disposition parameters like CL, V, or half-life values in the provided text. |

<sub>queue written 2026-10-07T03:23:30.785792+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Galetaki_2026 | irrelevant | 5 | 1 | The paper is a PK/PD analysis but reports qualitative comparisons ("similar to those previously reported") and correlation coefficients rather than specific quantitative PK disposition parameters like CL, V, or half-life values in the provided text. |
| popPK | Reincke_2026 | irrelevant | 0 | 0 | The study evaluates muscle function and growth outcomes, not pharmacokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 03:23 UTC</sub>
