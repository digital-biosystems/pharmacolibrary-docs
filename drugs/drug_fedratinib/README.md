<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;fedratinib&quot;}]"></div>

# fedratinib

- **generic name:** fedratinib
- **ATC codes:** `L01EJ02`
- **DrugBank:** [DB12500](https://go.drugbank.com/drugs/DB12500) · **PubChem:** [CID 16722836](https://pubchem.ncbi.nlm.nih.gov/compound/16722836)
- **molar mass:** 524.678 g/mol (C27H36N6O3S) — DrugBank
- **groups:** approved, investigational

## About

Fedratinib is a JAK inhibitor used to treat myelofibrosis. It is authorised in the European Union for myeloproliferative disorders, including primary myelofibrosis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7670147](https://www.wikidata.org/wiki/Q7670147) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fedratinib | parent | 524.678 | C27H36N6O3S | DrugBank | [16722836](https://pubchem.ncbi.nlm.nih.gov/compound/16722836) | Ogasawara_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:43 | 2:40 | 0/0/1 | 2/0/1 | 0/0/0 | 48,098/15,598 | openai / gpt-6-luna | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.647). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Ogasawara_2019_reference](drugs/drug_fedratinib/Fedratinib_Ogasawara2019_reference.md) | held back | 1-compartment, oral | 6 (+1 cov.) | Ogasawara K et al., Population pharmacokinetics of fedratin…, Cancer chemotherapy and pha… (2019) | [10.1007/s00280-019-03929-9](https://doi.org/10.1007/s00280-019-03929-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Hao_2014_cellular_proliferation](drugs/drug_fedratinib/pd_Hao_2014_cellular_proliferation.md) | cellular proliferation ← fedratinib · inhibition effect | — | Hao Y et al., Selective JAK2 inhibition specifically…, Clinical cancer research :… (2014) | [10.1158/1078-0432.CCR-13-3007](https://doi.org/10.1158/1078-0432.CCR-13-3007) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> | [Zhang_2014_pSTAT3](drugs/drug_fedratinib/pd_Zhang_2014_pSTAT3.md) | suppression of STAT3 phosphorylation ← fedratinib · direct sigmoid Emax (Hill) effect | — | Zhang M et al., A randomized, placebo-controlled study…, Journal of clinical pharmac… (2014) | [10.1002/jcph.218](https://doi.org/10.1002/jcph.218) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Chen_2025_SVR35](drugs/drug_fedratinib/pd_Chen_2025_SVR35.md) | spleen volume reduction ≥35% (SVR35) ← Fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Chen_2025_TSS_response](drugs/drug_fedratinib/pd_Chen_2025_TSS_response.md) | total symptom score reduction ≥50% (TSS response) ← Fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Chen_2025_any_grade_diarrhoea](drugs/drug_fedratinib/pd_Chen_2025_any_grade_diarrhoea.md) | any-grade diarrhoea ← Fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Chen_2025_any_grade_nausea_vomiting](drugs/drug_fedratinib/pd_Chen_2025_any_grade_nausea_vomiting.md) | any-grade nausea/vomiting ← Fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Chen_2025_grade_3_anaemia](drugs/drug_fedratinib/pd_Chen_2025_grade_3_anaemia.md) | grade ≥3 anaemia ← Fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Chen_2025_grade_3_thrombocytopenia](drugs/drug_fedratinib/pd_Chen_2025_grade_3_thrombocytopenia.md) | grade ≥3 thrombocytopenia ← Fedratinib · categorical (graded) response model | — | Chen Y et al., Exposure-response relationship of fedra…, British journal of clinical… (2025) | [10.1002/bcp.70118](https://doi.org/10.1002/bcp.70118) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fedratinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` inhibitor, `CYP3A4` substrate, `FMO3` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: FLT3 (inhibitor), JAK1 (inhibitor), JAK2 (inhibitor), POU2F2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2025 | irrelevant | 1 | 0 | Reports exposure-response associations but no quantitative fedratinib disposition parameters; population-PK exposures are only referenced. |
| popPK | Hao_2014 | irrelevant | 0 | 0 | This is an efficacy study and reports no quantitative fedratinib disposition parameters. |
| popPK | Tachet_2025 | irrelevant | 2 | 0 | This is a human study protocol with no reported fedratinib disposition parameter values; the cited prior models provide no values here. |
| popPK | Zhang_2014 | irrelevant | 2 | 2 | Human PK data report Tmax and half-life, but no qualifying disposition parameters or compartmental/population-PK model values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:40 UTC</sub>
