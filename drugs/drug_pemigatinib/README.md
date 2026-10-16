<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pemigatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pemigatinib_Gong2023_reference&quot;,&quot;label&quot;:&quot;Gong_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pemigatinib/Pemigatinib_Gong2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pemigatinib_Ji2022_final&quot;,&quot;label&quot;:&quot;Ji_2022_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pemigatinib/Pemigatinib_Ji2022_final.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pemigatinib_Ji2022_final_magnitude_of_interindividual_variab&quot;,&quot;label&quot;:&quot;Ji_2022_final_magnitude_of_interindividual_variability_cv_final_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pemigatinib/Pemigatinib_Ji2022_final_magnitude_of_interindividual_variab.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# pemigatinib

- **generic name:** pemigatinib
- **ATC codes:** `L01EN02`
- **DrugBank:** [DB15102](https://go.drugbank.com/drugs/DB15102) · **PubChem:** not captured
- **molar mass:** 487.508 g/mol (C24H27F2N5O4) — DrugBank
- **groups:** approved, investigational

## About

Pemigatinib is a protein kinase inhibitor used to treat cholangiocarcinoma. It is an approved cancer medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q96398739](https://www.wikidata.org/wiki/Q96398739) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pemigatinib | parent | 487.508 | C24H27F2N5O4 | DrugBank | — | Gong_2023, Ji_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:39 | 2:08 | 2/0/1 | 1/0/0 | 0/0/0 | 79,482/5,169 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.455). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Gong_2023_reference](drugs/drug_pemigatinib/Pemigatinib_Gong2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.588). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Ji_2022_final](drugs/drug_pemigatinib/Pemigatinib_Ji2022_final.md) | ▶ model + simulator | 2-compartment, oral | 5 (+3 cov.) | Ji T et al., Population Pharmacokinetics Analysis of…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1038](https://doi.org/10.1002/cpdd.1038) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.588). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Ji_2022_final_magnitude_of_interindividual_variability_cv_final_estimate](drugs/drug_pemigatinib/Pemigatinib_Ji2022_final_magnitude_of_interindividual_variab.md) | ▶ model + simulator | 2-compartment, oral | 4 | Ji T et al., Population Pharmacokinetics Analysis of…, Clinical pharmacology in dr… (2022) | [10.1002/cpdd.1038](https://doi.org/10.1002/cpdd.1038) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Gong_2023_serum_phosphate_concentration](drugs/drug_pemigatinib/pd_Gong_2023_serum_phosphate_concentration.md) | serum phosphate concentration ← pemigatinib · direct sigmoid Emax (Hill) effect | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Gong_2023_ORR](drugs/drug_pemigatinib/pd_Gong_2023_ORR.md) | objective response rate ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_hyperphosphatemia](drugs/drug_pemigatinib/pd_Gong_2023_hyperphosphatemia.md) | hyperphosphatemia ← pemigatinib · categorical (graded) response model | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Gong_2023_serum_creatinine_concentration](drugs/drug_pemigatinib/pd_Gong_2023_serum_creatinine_concentration.md) | serum creatinine concentration ← pemigatinib · direct sigmoid Emax (Hill) effect | — | Gong X et al., Population pharmacokinetic and exposure…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13064](https://doi.org/10.1002/psp4.13064) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pemigatinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A2` inhibitor, `SLC47A1` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FGFR1 (inhibitor), FGFR2 (inhibitor), FGFR3 (inhibitor), FGFR4 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gong_2026 | irrelevant | 1 | 0 | The paper reports exposure-response relationships for efficacy and safety but does not provide quantitative population PK parameters (CL, V, ka) for pemigatinib. |
| popPK | Ji_2021 | irrelevant | 4 | 0 | The study reports percentage changes in AUC and Cmax for drug-drug interactions but does not provide specific quantitative disposition parameters (CL, V, ka, t1/2) or a compartmental model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:37 UTC</sub>
