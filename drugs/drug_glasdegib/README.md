<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;glasdegib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glasdegib_Lin2020v2_estimate&quot;,&quot;label&quot;:&quot;Lin_2020_2_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glasdegib_Lin2020v2_final_model&quot;,&quot;label&quot;:&quot;Lin_2020_2_final_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glasdegib/Glasdegib_Lin2020v2_final_model.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glasdegib_Shaik2021_reference&quot;,&quot;label&quot;:&quot;Shaik_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_glasdegib/Glasdegib_Shaik2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# glasdegib

- **generic name:** glasdegib
- **ATC codes:** `L01XJ03`, `L01XX63`
- **DrugBank:** [DB11978](https://go.drugbank.com/drugs/DB11978) · **PubChem:** [CID 25166913](https://pubchem.ncbi.nlm.nih.gov/compound/25166913)
- **molar mass:** 374.448 g/mol (C21H22N6O) — DrugBank
- **groups:** approved, investigational

## About

Glasdegib is a hedgehog pathway inhibitor used to treat acute myeloid leukemia. It is an approved medicine, authorised in the European Union, and also remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27077810](https://www.wikidata.org/wiki/Q27077810) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| glasdegib | parent | 374.448 | C21H22N6O | DrugBank | [25166913](https://pubchem.ncbi.nlm.nih.gov/compound/25166913) | Lin_2020_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:44 | 0:37 | 2/0/1 | 1/0/0 | 0/0/0 | 77,875/2,664 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Lin_2020_2_estimate](drugs/drug_glasdegib/Glasdegib_Lin2020v2_estimate.md) | ▶ model + simulator | 2-compartment, oral | 5 (+2 cov.) | Lin S et al., Population Pharmacokinetics of Glasdegi…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1556](https://doi.org/10.1002/jcph.1556) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Lin_2020_2_final_model](drugs/drug_glasdegib/Glasdegib_Lin2020v2_final_model.md) | ▶ model + simulator | 2-compartment, oral | 5 | Lin S et al., Population Pharmacokinetics of Glasdegi…, Journal of clinical pharmac… (2020) | [10.1002/jcph.1556](https://doi.org/10.1002/jcph.1556) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.667). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Shaik_2021_reference](drugs/drug_glasdegib/Glasdegib_Shaik2021_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Shaik N et al., Evaluation of the impact of renal impai…, Cancer chemotherapy and pha… (2021) | [10.1007/s00280-020-04207-9](https://doi.org/10.1007/s00280-020-04207-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Fostvedt_2021_QTcF](drugs/drug_glasdegib/pd_Fostvedt_2021_QTcF.md) | corrected QT interval ← glasdegib · direct linear effect | — | Fostvedt LK et al., Exposure-response modeling of the effec…, Expert review of clinical p… (2021) | [10.1080/17512433.2021.1925538](https://doi.org/10.1080/17512433.2021.1925538) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=glasdegib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP3A4` substrate, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: MTOR (inhibitor), SMO (inhibitor).</sub>

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
| popPK | Fostvedt_2021 | irrelevant | 1 | 0 | This is an exposure-response (pharmacodynamic) study focusing on QTc changes and does not report quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life for glasdegib. |
| popPK | Lin_2020 | irrelevant | 2 | 0 | The paper presents a pharmacodynamic treatment-response and exposure-response survival analysis, but does not report original quantitative pharmacokinetic disposition parameters (clearance, volume, half-life) for glasdegib, only using exposure metrics (AUC) derived from a separate prior model. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 20:43 UTC</sub>
