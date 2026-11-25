<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tepotinib&quot;}]"></div>

# tepotinib

- **generic name:** tepotinib
- **ATC codes:** `L01EP02`, `L01EX21`
- **DrugBank:** [DB15133](https://go.drugbank.com/drugs/DB15133) · **PubChem:** none
- **molar mass:** 492.583 g/mol (C29H28N6O2) — DrugBank
- **groups:** approved, investigational

## About

Tepotinib is a protein kinase inhibitor used to treat non-small cell lung cancer in adults. It is administered orally in the form of tablets. The medication is authorised in the European Union and has received approval in Japan.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q27088961](https://www.wikidata.org/wiki/Q27088961), [Wikipedia](https://en.wikipedia.org/wiki/Tepotinib?oldid=1383463608) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tepotinib | parent | 492.583 | C29H28N6O2 | DrugBank | — | Xiong_2022 |
| MSC2571109A | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q69, Q22 — no SI value to build from</sub> | [Xiong_2022_reference](drugs/drug_tepotinib/Tepotinib_Xiong2022_reference.md) | — | parent + metabolite (no model) | 15 (+6 cov.) | Xiong W et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04423-5](https://doi.org/10.1007/s00280-022-04423-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_pMET_inhibition](drugs/drug_tepotinib/pd_Xiong_2021_pMET_inhibition.md) | phospho-MET inhibition ← tepotinib · indirect response — drug inhibits the production of phospho-MET inhibition | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Xiong_2022_2_Albumin](drugs/drug_tepotinib/pd_Xiong_2022_2_Albumin.md) | serum albumin ← tepotinib · indirect response — drug inhibits the production of serum albumin | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Xiong_2022_2_OR](drugs/drug_tepotinib/pd_Xiong_2022_2_OR.md) | objective response (OR) ← tepotinib · model not identified | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Xiong_2022_2_QTcF](drugs/drug_tepotinib/pd_Xiong_2022_2_QTcF.md) | ΔQTcF interval ← tepotinib · direct linear effect | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Xiong_2022_2_edema](drugs/drug_tepotinib/pd_Xiong_2022_2_edema.md) | first edema event ← tepotinib · time-to-event model | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 05:32 | 0:04 | 1/0/0 | 5/0/0 | 0/0/0 | 4,347/173 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Falchook_2020 | irrelevant | 0 | 0 | The paper is a Phase I clinical trial focused on safety and dose escalation, and the provided evidence contains no quantitative pharmacokinetic parameters (CL, V, ka, t1/2) or PK model values for tepotinib. |
| PGx | Falchook_2020 | not_relevant | 0 | 0 | The paper describes a Phase I dose escalation study of tepotinib and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Lu_2024 | irrelevant | 2 | 2 | This review describes tepotinib popPK findings but gives no numeric model parameters, and exposure comparisons are in a figure not provided. |
| popPK | Xiong_2021 | relevant | 10 | 1 | The paper describes a population PK model for tepotinib in humans and mice, but the specific numeric parameter values (CL, V, etc.) are explicitly stated to be in Table S1, Table S3, and Supplementary Information, which are not included in the provided evidence. |
| PGx | Xiong_2021 | not_relevant | 0 | 0 | The paper reports translational PK/PD modeling for dose selection but contains no analysis of genetic variants (pharmacogenomics) affecting PK or PD. |
| popPK | Xiong_2022_2 | irrelevant | 1 | 0 | The paper reports exposure–response analyses, but tepotinib disposition parameters are only attributed to prior model [14] and are not provided here. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btepotinib%5D&body=Drug%3A%20tepotinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tepotinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 08:14 UTC</sub>
