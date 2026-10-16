<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03X&quot;,&quot;href&quot;:&quot;atc/B03X.md&quot;},{&quot;label&quot;:&quot;roxadustat&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Roxadustat_Takada2022v2_reference&quot;,&quot;label&quot;:&quot;Takada_2022_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Takada2022v2_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Roxadustat_Czock2022_healthy_sca&quot;,&quot;label&quot;:&quot;Czock_2022_healthy_sca&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Roxadustat_Czock2022_kidney_function_normal&quot;,&quot;label&quot;:&quot;Czock_2022_kidney_function_normal&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_roxadustat/Roxadustat_Czock2022_kidney_function_normal.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# roxadustat

- **generic name:** roxadustat
- **ATC codes:** `B03XA05`
- **DrugBank:** [DB04847](https://go.drugbank.com/drugs/DB04847) · **PubChem:** [CID 11256664](https://pubchem.ncbi.nlm.nih.gov/compound/11256664)
- **molar mass:** 352.346 g/mol (C19H16N2O5) — DrugBank
- **groups:** approved, investigational

## About

Roxadustat is an antianemic medicine used to treat anemia in people with chronic kidney disease. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27088611](https://www.wikidata.org/wiki/Q27088611) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| roxadustat | parent | 352.346 | C19H16N2O5 | DrugBank | [11256664](https://pubchem.ncbi.nlm.nih.gov/compound/11256664) | Czock_2022, Rekić_2021, Takada_2022_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:48 | 10:04 | 1/1/9 | 1/0/1 | 0/0/0 | 147,045/46,083 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.15). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Takada_2022_2_reference](drugs/drug_roxadustat/Roxadustat_Takada2022v2_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Takada A et al., Population pharmacokinetics of roxadust…, British journal of clinical… (2022) | [10.1111/bcp.15023](https://doi.org/10.1111/bcp.15023) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909), gpt-oss:120b (partly confirmed, agreement 0.909). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_eskd](drugs/drug_roxadustat/Roxadustat_Czock2022_eskd.md) | — | 1-compartment (no model) | 7 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.917), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: partial 1/2</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32, Q37 — no SI value to buil…</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_healthy](drugs/drug_roxadustat/Roxadustat_Czock2022_healthy.md) | — | 1-compartment (no model) | 8 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_healthy_fasting](drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_fasting.md) | — | 1-compartment (no model) | 7 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_healthy_fed](drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_fed.md) | — | 1-compartment (no model) | 7 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: T1_t_half_terminal</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Czock_2022_healthy_sca](drugs/drug_roxadustat/Roxadustat_Czock2022_healthy_sca.md) | ▶ model + simulator | 1-compartment, oral | 7 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_kidney_function_failure](drugs/drug_roxadustat/Roxadustat_Czock2022_kidney_function_failure.md) | — | 1-compartment (no model) | 6 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T1_t_half_terminal</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Czock_2022_kidney_function_normal](drugs/drug_roxadustat/Roxadustat_Czock2022_kidney_function_normal.md) | ▶ model + simulator | 1-compartment, oral | 6 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.818), gpt-oss:120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_liver_cirrhosis_cp_b](drugs/drug_roxadustat/Roxadustat_Czock2022_liver_cirrhosis_cp_b.md) | — | 1-compartment (no model) | 7 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.909), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-check: partial 1/2</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q32 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Czock_2022_severe_renal_impairment](drugs/drug_roxadustat/Roxadustat_Czock2022_severe_renal_impairment.md) | — | 1-compartment (no model) | 7 | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (partly confirmed, agreement 0.625). Primary extraction retained.">cross-check: partial 1/2</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Rekić_2021_reference](drugs/drug_roxadustat/Roxadustat_Reki2021_reference.md) | — | 2-compartment (no model) | 3 | Rekić D et al., Pharmacokinetics of Roxadustat: A Popul…, Clinical pharmacokinetics (2021) | [10.1007/s40262-020-00974-z](https://doi.org/10.1007/s40262-020-00974-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span> | [Czock_2022_EPO](drugs/drug_roxadustat/pd_Czock_2022_EPO.md) | erythropoietin (EPO) ← roxadustat · direct sigmoid Emax (Hill) effect | — | Czock D et al., Clinical Pharmacokinetics and Pharmacod…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01095-x](https://doi.org/10.1007/s40262-021-01095-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Takada_2022_LDL_C](drugs/drug_roxadustat/pd_Takada_2022_LDL_C.md) | low-density lipoprotein cholesterol ← roxadustat · indirect response — drug inhibits the production of low-density lipoprotein cholesterol | model (no simulator) | Takada A et al., Pharmacokinetic/pharmacodynamic modelin…, Drug metabolism and pharmac… (2022) | [10.1016/j.dmpk.2022.100461](https://doi.org/10.1016/j.dmpk.2022.100461) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=roxadustat).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `SLCO1B1` inhibitor, `UGT1A9` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` substrate, `SLC22A8` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: EGLN1 (inhibitor), EGLN2 (inhibitor), EGLN3 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 11  ·  extracted 1  ·  needs_review 9  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rekić_2021.pdf` | Rekić D et al., Pharmacokinetics of Roxadustat: A Popul…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-020-00974-z](https://doi.org/10.1007/s40262-020-00974-z) | [33486718](https://pubmed.ncbi.nlm.nih.gov/33486718) | The paper is a population pharmacokinetic study of roxadustat in humans, and the text explicitly provides numeric values for apparent clearance and central/peripheral volumes of distribution. |
| `Shen_2024.pdf` | Shen ZW et al., Optimizing the dosing regimen of roxadu…, Journal of pharmaceutical s… (2024) | popPK | 10 | [10.1016/j.xphs.2024.09.004](https://doi.org/10.1016/j.xphs.2024.09.004) | [39251067](https://pubmed.ncbi.nlm.nih.gov/39251067) | The study performs a PopPK analysis of roxadustat, but the specific numeric parameter values (CL, V, etc.) are not provided in the extracted evidence, only qualitative covariate effects and dosing recommendations. |

<sub>queue written 2026-10-14T20:39:05.485470+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Janssens_2021 | irrelevant | 0 | 0 | The paper describes in vitro activity-based assays for HIF heterodimerization and reports potency (EC50) but contains no pharmacokinetic parameters. |
| popPK | Shen_2024 | relevant | 10 | 2 | The study performs a PopPK analysis of roxadustat, but the specific numeric parameter values (CL, V, etc.) are not provided in the extracted evidence, only qualitative covariate effects and dosing recommendations. |
| popPK | Takada_2022 | irrelevant | 2 | 0 | The study focuses on a pharmacodynamic (LDL-C) model where the PK component is assumed or simplified, and no quantitative disposition parameters (CL, V, t1/2) for roxadustat are reported in the provided evidence. |
| popPK | Yuan_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on hemoglobin targets in hemodialysis patients and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for roxadustat. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:39 UTC</sub>
