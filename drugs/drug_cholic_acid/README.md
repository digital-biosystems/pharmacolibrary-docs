<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A05A&quot;,&quot;href&quot;:&quot;atc/A05A.md&quot;},{&quot;label&quot;:&quot;cholic acid&quot;}]"></div>

# cholic acid

- **generic name:** cholic acid
- **ATC codes:** `A05AA03`
- **DrugBank:** [DB02659](https://go.drugbank.com/drugs/DB02659) · **PubChem:** [CID 221493](https://pubchem.ncbi.nlm.nih.gov/compound/221493)
- **molar mass:** 408.5714 g/mol (C24H40O5) — DrugBank
- **groups:** approved, investigational

## About

Cholic acid, a naturally occurring bile acid, is used to treat certain inborn errors of metabolism, including peroxisomal disorders. It is authorised in the European Union as a bile therapy medicine, though one related product has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q287415](https://www.wikidata.org/wiki/Q287415) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Quarfordt_1973_reference](drugs/drug_cholic_acid/CholicAcid_Quarfordt1973_reference.md) | — | general linear (no model) | 0 | Quarfordt SH et al., Estimation of cholesterol and bile acid…, The Journal of clinical inv… (1973) | [10.1172/JCI107378](https://doi.org/10.1172/JCI107378) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cholic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | ileum | `SLC10A2` inducer/inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer, `ABCC2` inducer, `SLCO1A2` inducer/inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inducer, `ABCC1` inducer, `SLCO1A2` inducer/inhibitor/substrate | DrugBank actor |
| distribution | lung | `ABCC1` inducer | DrugBank actor |
| distribution | placenta | `ABCB1` inducer | DrugBank actor |
| distribution | testis | `ABCB1` inducer | DrugBank actor |
| metabolism | kidney | `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `CES1` inhibitor, `SLC10A1` inhibitor/substrate, `SLC22A7` inhibitor, `SLCO1B1` inducer/inhibitor/substrate, `SLCO1B3` substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inducer, `ABCC2` inducer, `ABCC4` inhibitor, `SLC22A8` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inducer, `ABCB11` inducer/inhibitor/substrate, `ABCC2` inducer, `ABCC3` inhibitor, `ABCC4` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADH1C (unknown), COX4I1 (unknown), COX5A (unknown), COX5B (unknown), COX6A2 (unknown), COX6B1 (unknown), COX6C (unknown), COX7A1 (unknown), COX7B (unknown), COX7C (unknown), COX8A (unknown), ESRRG (unknown), FABP1 (unknown), FABP6 (unknown), FECH (inhibitor), GPBAR1 (unknown), MT-CO1 (unknown), MT-CO2 (unknown), MT-CO3 (unknown), NR1H4 (unknown), PLA2G1B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 14:21 | 0:58 | 0/1/0 | 0/0/0 | 0/0/0 | 27,845/972 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Hofmann_1983 | relevant | 10 | 2 | The paper presents a detailed physiological compartmental model for cholic acid in humans, but the specific numeric parameter values (transfer coefficients, clearances) are largely described in the text or referenced to figures/tables not fully provided in the evidence snippet. |
| popPK | Molino_1986 | irrelevant | 2 | 0 | The study focuses on chenodeoxycholic acid (CDC) and only mentions cholic acid as a previous model or comparator, with no quantitative PK parameters for cholic acid provided in the evidence. |
| popPK | Strange_1979 | irrelevant | 2 | 0 | The study reports subcellular partition coefficients and distribution percentages in rat liver, not systemic pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Varma_2021 | irrelevant | 0 | 0 | The study is an observational epidemiological and metabolomic analysis of bile acid concentrations in relation to dementia, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Zhou_2018 | irrelevant | 0 | 0 | The study measures fecal concentrations of cholic acid as a metabolite marker in a toxicology study, not pharmacokinetic disposition parameters (CL, V, ka) for cholic acid as a subject drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 14:21 UTC</sub>
