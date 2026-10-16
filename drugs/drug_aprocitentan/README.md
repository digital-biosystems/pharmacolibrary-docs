<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;aprocitentan&quot;}]"></div>

# aprocitentan

- **generic name:** aprocitentan
- **ATC codes:** `C02KN01`
- **DrugBank:** [DB15059](https://go.drugbank.com/drugs/DB15059) · **PubChem:** not captured
- **molar mass:** 546.19 g/mol (C16H14Br2N6O4S) — DrugBank
- **groups:** approved

## About

Aprocitentan is a medicine used to treat high blood pressure (hypertension). It is approved and authorised for use in the European Union as an antihypertensive.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27146161](https://www.wikidata.org/wiki/Q27146161) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:04 | 1:42 | 0/0/0 | 1/0/0 | 0/0/0 | 57,050/1,891 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/4 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> | [Sidharta_2019_QTcF](drugs/drug_aprocitentan/pd_Sidharta_2019_QTcF.md) | ΔQTcF ← aprocitentan · direct linear effect | — | Sidharta PN et al., Single- and multiple-dose tolerability,…, Drug design, development an… (2019) | [10.2147/DDDT.S199051](https://doi.org/10.2147/DDDT.S199051) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aprocitentan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `UGT2B7` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP3A4` inducer/inhibitor, `SLC10A1` inhibitor, `UGT1A1` inhibitor/substrate, `UGT2B7` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor, `UGT1A1` inhibitor/substrate, `UGT2B7` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP2C18 (inhibitor), EDNRA (target), EDNRB (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 30 matched, 30 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bartolucci_2021.pdf` | Bartolucci R et al., A Population Pharmacokinetic Model of M…, Clinical pharmacokinetics (2021) | popPK | 10 | [10.1007/s40262-021-01049-3](https://doi.org/10.1007/s40262-021-01049-3) | [34159557](https://pubmed.ncbi.nlm.nih.gov/34159557) | The paper describes a population PK model for aprocitentan (active metabolite of macitentan) in humans, but specific numeric parameter values (CL, V, Q) are not explicitly listed in the provided abstract text, likely residing in the full text or supplementary tables. |
| `Brussee_2024.pdf` | Brussee JM et al., Population pharmacokinetics of the dual…, Journal of pharmacokinetics… (2024) | popPK | 10 | [10.1007/s10928-024-09902-1](https://doi.org/10.1007/s10928-024-09902-1) | [38332190](https://pubmed.ncbi.nlm.nih.gov/38332190) | The paper describes a population PK model for aprocitentan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Sidharta_2019_2.pdf` | Sidharta PN et al., Single-Dose Pharmacokinetics and Tolera…, Clinical drug investigation (2019) | popPK | 9 | [10.1007/s40261-019-00837-x](https://doi.org/10.1007/s40261-019-00837-x) | [31435905](https://pubmed.ncbi.nlm.nih.gov/31435905) | The study reports quantitative PK parameters (tmax, t1/2, GMR for Cmax and AUC) for aprocitentan in humans, though specific clearance (CL) and volume (V) values are not explicitly listed in the text. |
| `Fontes_2021.pdf` | Fontes MSC et al., Multiple-Dose Pharmacokinetics, Safety,…, Clinical pharmacology in dr… (2021) | popPK | 8 | [10.1002/cpdd.881](https://doi.org/10.1002/cpdd.881) | [33063477](https://pubmed.ncbi.nlm.nih.gov/33063477) | The study reports quantitative PK parameters (tmax, t1/2, accumulation index) for aprocitentan in humans, though full compartmental model parameters (CL, V) are not explicitly listed in the provided text. |
| `Nguyen_2025.pdf` | Nguyen T et al., Aprocitentan: The First Endothelin Rece…, American journal of therape… (2025) | pgx | 7 | [10.1097/MJT.0000000000001950](https://doi.org/10.1097/MJT.0000000000001950) | [40638911](https://www.ncbi.nlm.nih.gov/pubmed/40638911) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |

<sub>queue written 2026-10-06T15:03:54.839052+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bajinka_2025 | not_relevant | 0 | 0 | The paper is a review of 3PM in hypertension that mentions aprocitentan's general efficacy but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Bartolucci_2021 | relevant | 10 | 2 | The paper describes a population PK model for aprocitentan (active metabolite of macitentan) in humans, but specific numeric parameter values (CL, V, Q) are not explicitly listed in the provided abstract text, likely residing in the full text or supplementary tables. |
| popPK | Berger_2026 | irrelevant | 2 | 0 | The study focuses on macitentan as the subject drug, reporting only steady-state trough concentrations for macitentan and its metabolite aprocitentan, without providing compartmental PK parameters (CL, V, Q, ka) or a population PK model for aprocitentan. |
| popPK | Brussee_2024 | relevant | 10 | 0 | The paper describes a population PK model for aprocitentan, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for aprocitentan. |
| PD | Cabré_2026 | not_relevant | 1 | 0 | The text is a narrative review of cardiovascular pharmacotherapy that mentions endothelin pathway modulators but does not provide specific numeric PD parameters or exposure-response data for aprocitentan. |
| popPK | Gueneau_2021 | irrelevant | 1 | 0 | The study focuses on fluid homeostasis and body weight, and while it mentions a half-life of ~44 hours, it does not report quantitative disposition parameters like clearance, volume, or compartmental model values. |
| popPK | Naseralallah_2024 | irrelevant | 2 | 0 | This is a narrative review summarizing efficacy and safety, and while it mentions pharmacokinetics, it does not provide specific quantitative disposition parameters (CL, V, etc.) in the text. |
| PD | Naseralallah_2024 | not_relevant | 2 | 0 | The text is a narrative review summarizing general efficacy and safety without providing specific numeric PD parameters, exposure-response curves, or detailed PK/PD modeling results. |
| popPK | Nguyen_2025 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Nguyen_2025 | not_relevant | 1 | 0 | The text is a title indicating a review or overview article, which typically lacks the specific numeric PD parameters or detailed exposure-response data required for extraction. |
| PGx | Nguyen_2025 | not_relevant | 0 | 0 | The paper is a general review of aprocitentan for resistant hypertension and does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Phillips_2025 | irrelevant | 2 | 0 | This is a narrative review of clinical efficacy and safety data that does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) for aprocitentan. |
| popPK | Sidharta_2019 | relevant | 9 | 4 | The study reports non-compartmental PK parameters (t1/2, AUC, Cmax) for aprocitentan in humans, but specific numeric values for clearance (CL) and volume (V) are not explicitly listed in the provided text, only ratios and half-life. |
| popPK | Sidharta_2020 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of rosuvastatin as the subject drug, with aprocitentan acting as a co-administered agent to assess drug-drug interactions, and no quantitative PK parameters for aprocitentan are reported. |
| popPK | Sidharta_2020_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of midazolam (the probe drug) to assess drug-drug interactions, not the disposition parameters of aprocitentan itself. |
| popPK | Sidharta_2025 | irrelevant | 2 | 0 | This is a QT/QTc safety study that reports concentration-QT modeling and Cmax values, but does not report quantitative disposition parameters (CL, V, ka, t1/2) or a population PK model for aprocitentan. |
| popPK | Sidhu_2026 | irrelevant | 2 | 0 | The paper is a review summarizing the drug's profile but does not provide original quantitative pharmacokinetic parameter values (CL, V, etc.) in the text. |
| PD | Sidhu_2026 | not_relevant | 2 | 0 | The text is a narrative review summarizing the drug's profile and trial outcomes but does not provide specific numeric PD parameters (e.g., Emax, EC50) or detailed exposure-response data in the provided excerpt. |
| popPK | Verweij_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure outcomes and adverse events, with no pharmacokinetic parameters (CL, V, t1/2) reported for aprocitentan. |
| popPK | Zheng_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy (blood pressure) and safety, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for aprocitentan. |
| PD | Zheng_2025 | not_relevant | 3 | 2 | The paper is a meta-analysis reporting mean differences in blood pressure for fixed dose groups (10-12.5, 25, 50 mg) but does not provide concentration-effect data, PK parameters, or a fitted PD model (e.g., Emax, EC50) to derive a pharmacodynamic relationship. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 22 chars of text extracted (&lt; 400) |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a generic title "Drugs for hypertension" and contains no specific data, analysis, or mention of aprocitentan or any pharmacodynamic parameters. |
| popPK | unknown_2024_2 | irrelevant | 0 | 0 | no_text gate: only 38 chars of text extracted (&lt; 400) |
| PD | unknown_2024_2 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, models, or numeric parameters. |
| popPK | unknown_2026 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| PD | unknown_2026 | not_relevant | 0 | 0 | The provided text describes baxdrostat, not aprocitentan, and contains no pharmacodynamic data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
