<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;zuranolone&quot;}]"></div>

# zuranolone

- **generic name:** zuranolone
- **ATC codes:** `N06AX31`
- **DrugBank:** [DB15490](https://go.drugbank.com/drugs/DB15490) · **PubChem:** not captured
- **molar mass:** 409.574 g/mol (C25H35N3O2) — DrugBank
- **groups:** approved, investigational

## About

Zuranolone is an antidepressant used to treat postpartum depression. It is approved, with one product authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q48862264](https://www.wikidata.org/wiki/Q48862264) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yang_2025_1_2_2_Emax](drugs/drug_zuranolone/pd_Yang_2025_1_2_2_Emax.md) | GABA-evoked current at α1β2γ2 GABAA receptors (potentiation, % of 1 μmol/L GABA current) ← zuranolone · direct Emax (saturable) effect | — | Yang Y et al., Synthesis and Evaluation of a Novel Zur…, Molecules (Basel, Switzerla… (2025) | [10.3390/molecules30091918](https://doi.org/10.3390/molecules30091918) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Yang_2025_4_3_Emax](drugs/drug_zuranolone/pd_Yang_2025_4_3_Emax.md) | GABA-evoked current at α4β3δ GABAA receptors (potentiation, % of 1 μmol/L GABA current) ← zuranolone · direct Emax (saturable) effect | — | Yang Y et al., Synthesis and Evaluation of a Novel Zur…, Molecules (Basel, Switzerla… (2025) | [10.3390/molecules30091918](https://doi.org/10.3390/molecules30091918) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=zuranolone).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRG3 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:23 | 0:35 | 0/0/0 | 1/0/0 | 0/0/0 | 29,517/1,275 | ollama / glm-5.3-flash | 4 | 0/3 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DeBattista_2024.pdf` | DeBattista C et al., The Black Book of Psychotropic Dosing a…, Psychopharmacology bulletin (2024) | pgx | 7 | [10.64719/pb.4493](https://doi.org/10.64719/pb.4493) | [38993656](https://www.ncbi.nlm.nih.gov/pubmed/38993656) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-07T00:22:59.738962+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bu_2026 | irrelevant | 0 | 0 | The paper is a narrative review of pharmacotherapy for depressive disorders and does not report original quantitative pharmacokinetic parameters for zuranolone. |
| PD | Bu_2026 | not_relevant | 1 | 0 | The text is a narrative review that qualitatively discusses zuranolone and PK/PD variability but does not report specific numeric PD parameters or exposure-response relationships. |
| PGx | Bu_2026 | not_relevant | 2 | 1 | Narrative review only mentions pharmacogenomics generally; no gene variant effect on zuranolone PK/PD parameters is reported. |
| popPK | DeBattista_2024 | irrelevant | 0 | 0 | The paper is a review of psychotropic dosing and monitoring that does not report original quantitative pharmacokinetic parameters for zuranolone. |
| PD | DeBattista_2024 | not_relevant | 1 | 0 | The paper is a review (Black Book) providing dosing and monitoring guidelines, not a primary study reporting specific numeric pharmacodynamic parameters or exposure-response models for zuranolone. |
| PGx | DeBattista_2024 | not_relevant | 2 | 1 | Dosing/monitoring review of psychotropics; abstract mentions no zuranolone pharmacogenomic PK/PD effects. |
| popPK | Dunbar_2024 | relevant | 10 | 0 | The paper is a Phase 1 PK study of zuranolone, but the provided evidence contains only the abstract and lacks the specific numeric PK parameter values (CL, V, etc.) which are likely in the full text or tables not included. |
| PD | Dunbar_2024 | not_relevant | 2 | 1 | The paper reports qualitative cognitive effects and PK data but does not provide a quantitative exposure-response or dose-response model with numeric PD parameters (e.g., Emax, EC50) in the provided text. |
| popPK | Lin_2023 | irrelevant | 0 | 0 | The paper is a meta-analysis of efficacy and safety outcomes (SMDs, ORs) and does not report any pharmacokinetic parameters for zuranolone. |
| popPK | Ma_2024 | irrelevant | 2 | 0 | Zuranolone is only the reference/comparator drug; PK values for S28 are mentioned but no numeric zuranolone disposition parameters appear. |
| PD | Ma_2024 | not_relevant | 1 | 0 | The text is a summary of a medicinal chemistry study on analogs (S28) that mentions "robust in vivo pharmacodynamic (PD) effects" qualitatively but provides no numeric PD parameters, concentration-effect curves, or dose-response data for zuranolone or the analogs. |
| popPK | Prommer_2026 | irrelevant | 1 | 0 | The paper is a clinical review discussing pharmacology and practicality in palliative care, containing no original quantitative pharmacokinetic parameter values for zuranolone. |
| PD | Prommer_2026 | not_relevant | 2 | 0 | The text is a qualitative review of zuranolone's pharmacology and clinical utility in palliative care, containing no numeric PD parameters, exposure-response data, or dose-effect curves. |
| popPK | Scala_2023 | irrelevant | 0 | 0 | The paper is a narrative review of clinical efficacy and tolerability profiles, not a pharmacokinetic study, and contains no quantitative PK parameters for zuranolone. |
| PD | Scala_2023 | not_relevant | 1 | 0 | The paper is a narrative review discussing clinical efficacy and tolerability profiles, not a pharmacokinetic/pharmacodynamic modeling study, and does not report numeric PD parameters like Emax or EC50 for zuranolone. |
| popPK | Suthoff_2022 | irrelevant | 0 | 0 | This is a quality-of-life outcomes analysis with no pharmacokinetic parameters for zuranolone. |
| popPK | Wald_2022 | irrelevant | 0 | 0 | This study concerns brexanolone/allopregnanolone, a different drug from zuranolone, so no zuranolone PK parameters are present. |
| PD | Wald_2022 | not_relevant | 0 | 0 | The paper reports population pharmacokinetic (PopPK) modeling of brexanolone/allopregnanolone concentrations in plasma and breast milk to determine relative infant dose, but it does not report any pharmacodynamic (PD) or exposure-response relationship (e.g., Emax, EC50, effect vs. concentration) for zuranolone or any other drug. |
| popPK | Yang_2025 | irrelevant | 3 | 6 | Zuranolone is only the comparator drug; the PK subject is the novel analog S9, though zuranolone's numeric values (T1/2, AUC, CLint, bioavailability) are present in the text/tables. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
