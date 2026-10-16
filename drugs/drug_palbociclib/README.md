<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;palbociclib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Palbociclib_Courlet2022_reference&quot;,&quot;label&quot;:&quot;Courlet_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_palbociclib/Palbociclib_Courlet2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# palbociclib

- **generic name:** palbociclib
- **ATC codes:** `L01EF01`
- **DrugBank:** [DB09073](https://go.drugbank.com/drugs/DB09073) · **PubChem:** [CID 5330286](https://pubchem.ncbi.nlm.nih.gov/compound/5330286)
- **molar mass:** 447.5328 g/mol (C24H29N7O2) — DrugBank
- **groups:** approved, investigational

## About

Palbociclib is an anticancer drug used to treat breast cancer, particularly hormone receptor-positive, HER2-negative disease. It is an approved protein kinase inhibitor and is authorised in the European Union for breast cancer treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15269707](https://www.wikidata.org/wiki/Q15269707) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| palbociclib | parent | 447.533 | C24H29N7O2 | DrugBank | [5330286](https://pubchem.ncbi.nlm.nih.gov/compound/5330286) | Buijs_2025, Courlet_2022, Marouille_2021, Panetta_2024, Royer_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:20 | 4:55 | 0/3/3 | 4/0/2 | 0/0/0 | 261,484/18,585 | einfracz / qwen3.8-27b | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: unreported model parameter default(s): k12</sub><br><sub>route_to: `scholar`</sub> | [Courlet_2022_reference](drugs/drug_palbociclib/Palbociclib_Courlet2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Courlet P et al., Population Pharmacokinetics of Palbocic…, Pharmaceutics (2022) | [10.3390/pharmaceutics14071317](https://doi.org/10.3390/pharmaceutics14071317) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Marouille_2021_final_final_population_pk_model_with_covariates](drugs/drug_palbociclib/Palbociclib_Marouille2021_final_final_population_pk_model_wi.md) | held back | 1-compartment, oral | 4 | Marouille AL et al., Pharmacokinetic/Pharmacodynamic Model o…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101708](https://doi.org/10.3390/pharmaceutics13101708) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q76, Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Panetta_2024_reference](drugs/drug_palbociclib/Palbociclib_Panetta2024_reference.md) | — | general linear (no model) | 4 | Panetta JC et al., Population Pharmacokinetic and Pharmaco…, Pharmaceutics (2024) | [10.3390/pharmaceutics16121528](https://doi.org/10.3390/pharmaceutics16121528) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.364). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Buijs_2025_reference](drugs/drug_palbociclib/Palbociclib_Buijs2025_reference.md) | — | 1-compartment (no model) | 0 | Buijs SM et al., Palbociclib exposure in relation to eff…, ESMO open (2025) | [10.1016/j.esmoop.2025.104290](https://doi.org/10.1016/j.esmoop.2025.104290) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Marouille_2021_final](drugs/drug_palbociclib/Palbociclib_Marouille2021_final.md) | — | 1-compartment (no model) | 1 (+1 cov.) | Marouille AL et al., Pharmacokinetic/Pharmacodynamic Model o…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101708](https://doi.org/10.3390/pharmaceutics13101708) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Royer_2021_reference](drugs/drug_palbociclib/Palbociclib_Royer2021_reference.md) | — | 1-compartment (no model) | 4 (+1 cov.) | Royer B et al., Population Pharmacokinetics of Palbocic…, Pharmaceuticals (Basel, Swi… (2021) | [10.3390/ph14030181](https://doi.org/10.3390/ph14030181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> | [Jian_2022_ANC](drugs/drug_palbociclib/pd_Jian_2022_ANC.md) | absolute neutrophil counts ← palbociclib · disease-progression model | — | Jian W et al., Starting dose selection of palbociclib…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04484-6](https://doi.org/10.1007/s00280-022-04484-6) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Marouille_2021_ANC](drugs/drug_palbociclib/pd_Marouille_2021_ANC.md) | absolute neutrophil counts ← palbociclib · direct linear effect | model (no simulator) | Marouille AL et al., Pharmacokinetic/Pharmacodynamic Model o…, Pharmaceutics (2021) | [10.3390/pharmaceutics13101708](https://doi.org/10.3390/pharmaceutics13101708) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Polisety_2022_MASTL_kinase_activity](drugs/drug_palbociclib/pd_Polisety_2022_MASTL_kinase_activity.md) | MASTL kinase activity ← Palbociclib · direct Emax (saturable) effect | — | Polisety A et al., Therapeutic natural compounds Enzastaur…, Medical oncology (Northwood… (2022) | [10.1007/s12032-022-01701-3](https://doi.org/10.1007/s12032-022-01701-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Polisety_2022_MCF_7_cell_viability](drugs/drug_palbociclib/pd_Polisety_2022_MCF_7_cell_viability.md) | MCF-7 cell viability ← Palbociclib · direct Emax (saturable) effect | — | Polisety A et al., Therapeutic natural compounds Enzastaur…, Medical oncology (Northwood… (2022) | [10.1007/s12032-022-01701-3](https://doi.org/10.1007/s12032-022-01701-3) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Sun_2017_ANC](drugs/drug_palbociclib/pd_Sun_2017_ANC.md) | absolute neutrophil count ← palbociclib · inhibition effect | — | Sun W et al., Characterization of Neutropenia in Adva…, Journal of clinical pharmac… (2017) | [10.1002/jcph.902](https://doi.org/10.1002/jcph.902) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Yu_2022_Ki67](drugs/drug_palbociclib/pd_Yu_2022_Ki67.md) | Ki67 ← palbociclib · indirect response — drug inhibits the production of Ki67 | model (no simulator) | Yu Y et al., Pharmacodynamic Modeling of CDK4/6 Inhi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1971](https://doi.org/10.1002/jcph.1971) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Yu_2022_TK1](drugs/drug_palbociclib/pd_Yu_2022_TK1.md) | thymidine kinase 1 [TK1] ← palbociclib · indirect response — drug inhibits the production of thymidine kinase 1 [TK1] | model (no simulator) | Yu Y et al., Pharmacodynamic Modeling of CDK4/6 Inhi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1971](https://doi.org/10.1002/jcph.1971) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Yu_2022_pRb](drugs/drug_palbociclib/pd_Yu_2022_pRb.md) | phosphor-retinoblastoma protein [pRb] ← palbociclib · indirect response — drug inhibits the production of phosphor-retinoblastoma protein [pRb] | model (no simulator) | Yu Y et al., Pharmacodynamic Modeling of CDK4/6 Inhi…, Journal of clinical pharmac… (2022) | [10.1002/jcph.1971](https://doi.org/10.1002/jcph.1971) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> | [Zheng_2021_PFS](drugs/drug_palbociclib/pd_Zheng_2021_PFS.md) | progression-free survival ← palbociclib · time-to-event model | — | Zheng J et al., Impact of Dose Reduction on Efficacy: I…, Targeted oncology (2021) | [10.1007/s11523-020-00771-5](https://doi.org/10.1007/s11523-020-00771-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=palbociclib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `SLC22A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CDK4 (inhibitor), CDK6 (inhibitor), SULT2A1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 17 returned
- **screened:** 7  ·  **relevant:** 6
- **records:** 6  ·  extracted 0  ·  needs_review 3  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_2022.pdf` | Yu Y et al., Pharmacodynamic Modeling of CDK4/6 Inhi…, Journal of clinical pharmac… (2022) | popPK | 8 | [10.1002/jcph.1971](https://doi.org/10.1002/jcph.1971) | [34554584](https://pubmed.ncbi.nlm.nih.gov/34554584) | The study reports a compartmental PK model for palbociclib in human patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/text. |
| `Jian_2022.pdf` | Jian W et al., Starting dose selection of palbociclib…, Cancer chemotherapy and pha… (2022) | popPK | 6 | [10.1007/s00280-022-04484-6](https://doi.org/10.1007/s00280-022-04484-6) | [36271947](https://pubmed.ncbi.nlm.nih.gov/36271947) | The paper reports a K-PD model for palbociclib's effect on neutropenia with specific parameters, but lacks quantitative PK disposition parameters (CL, V, t1/2) for the drug itself, and the provided evidence does not list numeric values for any PK parameters of palbociclib. |
| `Ruiz-Garcia_2017.pdf` | Ruiz-Garcia A et al., Effect of food on the bioavailability o…, Cancer chemotherapy and pha… (2017) | popPK | 6 | [10.1007/s00280-017-3246-4](https://doi.org/10.1007/s00280-017-3246-4) | [28204912](https://pubmed.ncbi.nlm.nih.gov/28204912) | The study reports bioavailability and exposure ratios (AUC, Cmax) which are pharmacokinetic parameters, but does not explicitly report compartmental clearance (CL), volume of distribution (V), or half-life in the provided text. |

<sub>queue written 2026-10-14T20:15:55.643653+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fu_2022 | irrelevant | 0 | 0 | The study is in vitro mechanistic research on transporter interaction and cytotoxicity (IC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Jian_2022 | relevant | 6 | 0 | The paper reports a K-PD model for palbociclib's effect on neutropenia with specific parameters, but lacks quantitative PK disposition parameters (CL, V, t1/2) for the drug itself, and the provided evidence does not list numeric values for any PK parameters of palbociclib. |
| popPK | Polisety_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic/cytotoxicity assay of palbociclib on MASTL kinase in MCF-7 cells and does not report any pharmacokinetic or disposition parameters. |
| popPK | Roncato_2022 | irrelevant | 1 | 1 | The paper is a case series describing therapeutic drug monitoring (TDM) of Cmin levels and does not report pharmacokinetic disposition parameters such as clearance, volume of distribution, or population PK model estimates. |
| popPK | Ruiz-Garcia_2017 | relevant | 6 | 3 | The study reports bioavailability and exposure ratios (AUC, Cmax) which are pharmacokinetic parameters, but does not explicitly report compartmental clearance (CL), volume of distribution (V), or half-life in the provided text. |
| popPK | Sun_2017 | irrelevant | 3 | 0 | The paper describes a PK-PD model linking palbociclib concentration to neutropenia, but the abstract and evidence provided do not contain quantitative disposition parameters (CL, V, Q, ka) for palbociclib itself. |
| popPK | Yu_2022 | relevant | 8 | 0 | The study reports a compartmental PK model for palbociclib in human patients, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/text. |
| popPK | Zheng_2021 | irrelevant | 2 | 1 | The paper is an exposure-response analysis that reports population pharmacokinetic results (CL/F) from a separate study rather than presenting original PK model parameters or numeric values for palbociclib. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:16 UTC</sub>
