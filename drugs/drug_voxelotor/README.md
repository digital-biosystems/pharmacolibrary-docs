<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;voxelotor&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Voxelotor_Savic2022_reference&quot;,&quot;label&quot;:&quot;Savic_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_voxelotor/Voxelotor_Savic2022_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# voxelotor

- **generic name:** voxelotor
- **ATC codes:** `B06AX03`
- **DrugBank:** [DB14975](https://go.drugbank.com/drugs/DB14975) · **PubChem:** not captured
- **molar mass:** 337.379 g/mol (C19H19N3O3) — DrugBank
- **groups:** approved, investigational

## About

Voxelotor is a hematological drug developed for the treatment of sickle cell anemia. Its marketing in the European Union has been suspended, so it is no longer available there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q60761545](https://www.wikidata.org/wiki/Q60761545) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| voxelotor | parent | 337.379 | C19H19N3O3 | DrugBank | — | Savic_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:56 | 11:33 | 1/0/0 | 1/0/0 | 0/0/0 | 176,978/29,456 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Savic_2022_reference](drugs/drug_voxelotor/Voxelotor_Savic2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+1 cov.) | Savic RM et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12731](https://doi.org/10.1002/psp4.12731) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Green_2022_CFB_Hb](drugs/drug_voxelotor/pd_Green_2022_CFB_Hb.md) | change from baseline hemoglobin ← voxelotor · direct linear effect | — | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Green_2022_CFB_LDH](drugs/drug_voxelotor/pd_Green_2022_CFB_LDH.md) | percent change from baseline lactate dehydrogenase ← voxelotor · direct linear effect | — | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Green_2022_CFB_indirect_bilirubin](drugs/drug_voxelotor/pd_Green_2022_CFB_indirect_bilirubin.md) | percent change from baseline indirect bilirubin ← voxelotor · direct linear effect | — | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Green_2022_CFB_reticulocytes](drugs/drug_voxelotor/pd_Green_2022_CFB_reticulocytes.md) | percent change from baseline reticulocytes ← voxelotor · direct linear effect | — | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Green_2022_Grade_1_decreased_WBC](drugs/drug_voxelotor/pd_Green_2022_Grade_1_decreased_WBC.md) | grade greater than or equal to 1 decreased white blood cell count ← voxelotor · categorical (graded) response model | — | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Green_2022_Grade_1_increased_ALT](drugs/drug_voxelotor/pd_Green_2022_Grade_1_increased_ALT.md) | grade greater than or equal to 1 increased alanine aminotransferase ← voxelotor · categorical (graded) response model | — | Green ML et al., Model-informed drug development of voxe…, CPT: pharmacometrics & syst… (2022) | [10.1002/psp4.12780](https://doi.org/10.1002/psp4.12780) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=voxelotor).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HBA1 (binder).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Egesa_2022 | not_relevant | 0 | 0 | The paper is a general review of sickle cell disease epidemiology and management, mentioning voxelotor only as an approved therapy without reporting any pharmacogenomic data or PK/PD parameters. |
| popPK | Green_2022 | irrelevant | 4 | 2 | The paper is an exposure-response analysis that uses PK parameters (AUC, Cmax) derived from a separate PopPK model, but it does not report the underlying quantitative disposition parameters (CL, V, Q, ka) or the PopPK model estimates themselves. |
| popPK | Rivenbark_2026 | irrelevant | 0 | 0 | The study is a claims analysis of prescription rates for sickle cell disease medications and does not report any pharmacokinetic parameters for voxelotor. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 01:47 UTC</sub>
