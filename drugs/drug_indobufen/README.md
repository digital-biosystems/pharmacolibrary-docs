<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;indobufen&quot;}]"></div>

# indobufen

- **generic name:** indobufen
- **ATC codes:** `B01AC10`
- **DrugBank:** [DB12545](https://go.drugbank.com/drugs/DB12545) · **PubChem:** [CID 107641](https://pubchem.ncbi.nlm.nih.gov/compound/107641)
- **molar mass:** 295.338 g/mol (C18H17NO3) — DrugBank
- **groups:** investigational

## About

Indobufen is a platelet aggregation inhibitor that acts by blocking cyclooxygenase, and has been used to prevent blood clots. It is considered investigational in major drug databases and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3798322](https://www.wikidata.org/wiki/Q3798322) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 16:24 | 1:10 | 0/0/0 | 0/0/1 | 0/0/0 | 44,838/1,423 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/4 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span> | [Noh_2018_MPA](drugs/drug_indobufen/pd_Noh_2018_MPA.md) | maximal platelet aggregation ← S- and R-indobufen · direct sigmoid Emax (Hill) effect | — | Noh YH et al., Prediction of the human, Translational and clinical… (2018) | [10.12793/tcp.2018.26.4.160](https://doi.org/10.12793/tcp.2018.26.4.160) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 21 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lu_2026.pdf` | Lu X et al., Pharmacokinetics and safety evaluation…, Naunyn-Schmiedeberg's archi… (2026) | popPK | 8 | [10.1007/s00210-025-04834-0](https://doi.org/10.1007/s00210-025-04834-0) | [41296033](https://pubmed.ncbi.nlm.nih.gov/41296033) | The study reports pharmacokinetic parameters for indobufen in humans, but the specific numeric values are not present in the provided evidence, only the bioequivalence conclusion. |
| `Zhang_2026.pdf` | Zhang Z et al., Clopidogrel-indobufen conjugates as dua…, Drug metabolism and disposi… (2026) | popPK | 8 | [10.1016/j.dmd.2025.100212](https://doi.org/10.1016/j.dmd.2025.100212) | [41421299](https://pubmed.ncbi.nlm.nih.gov/41421299) | The study reports pharmacokinetic profiles for indobufen released from a prodrug in rats, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Główka_2007.pdf` | Główka F et al., Enantioselective CE method for pharmaco…, Electrophoresis (2007) | pgx | 8 | [10.1002/elps.200600736](https://doi.org/10.1002/elps.200600736) | [17657761](https://www.ncbi.nlm.nih.gov/pubmed/17657761) | metadata signals extractable PGX data (CYP450, PK/PD-context) |

<sub>queue written 2026-10-05T16:23:23.990089+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fuccella_1979 | relevant | 8 | 3 | The study reports PK parameters for indobufen, but only the half-life (7-8 h) is explicitly provided in the text, while other quantitative values like clearance and volume are not listed. |
| PGx | Główka_2007 | not_relevant | 0 | 0 | The paper focuses on ibuprofen pharmacokinetics and CYP2C polymorphisms; indobufen is only used as an internal standard. |
| popPK | Hou_2025 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic mechanisms of indobufen in myocardial injury (apoptosis, oxidative stress) and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Liu_2018 | irrelevant | 0 | 0 | The study investigates the anticoagulant pharmacodynamics (coagulation factors, APTT, PT) of indobufen, not its pharmacokinetic disposition parameters. |
| PD | Liu_2018 | not_relevant | 3 | 2 | The study reports dose-dependent effects (e.g., thrombus inhibition at 20, 40, 80 mg/kg) but lacks plasma concentration data and does not fit or report numeric PD parameters (Emax, EC50, etc.). |
| popPK | Lu_2026 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for indobufen in humans, but the specific numeric values are not present in the provided evidence, only the bioequivalence conclusion. |
| popPK | Mamiya_1989 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on platelet function and protein phosphorylation, reporting no pharmacokinetic parameters. |
| popPK | Marzo_2004 | irrelevant | 0 | 0 | The study is a pharmacodynamic/endoscopic evaluation of gastrointestinal tolerability and does not report any pharmacokinetic parameters for indobufen. |
| PD | Marzo_2004 | not_relevant | 1 | 0 | The paper reports qualitative clinical outcomes (endoscopic erosion scores) comparing indobufen and aspirin but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Noh_2018 | irrelevant | 2 | 0 | The study is a pharmacodynamic (PD) modeling of in vitro platelet aggregation data and does not report original quantitative pharmacokinetic (PK) parameters for indobufen, relying instead on literature values for simulation. |
| popPK | Patrignani_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (IC50 values) and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| popPK | Patrignani_1994 | irrelevant | 0 | 0 | The study is an in-vitro/ex-vivo biochemical characterization of cyclooxygenase inhibition (IC50 values) and does not report pharmacokinetic disposition parameters for indobufen. |
| popPK | Pepe_2025 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy and safety in coronary artery disease, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PD | Pepe_2025 | not_relevant | 2 | 0 | The paper is a systematic review that qualitatively mentions promising pharmacodynamic data on platelet inhibition but does not report or provide access to specific numeric PD parameters or concentration-effect curves for indobufen. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The study is a metabolomics analysis of pharmacodynamic effects and biomarkers, not a pharmacokinetic study, and reports no PK parameters for indobufen. |
| PD | Sun_2024 | not_relevant | 1 | 0 | The study is a metabolomics analysis comparing fixed-dose groups (n=5 per group) and reports qualitative metabolic pathway changes and biomarker identification, but it does not provide drug concentration data or fit any exposure-response or dose-response models to derive numeric PD parameters. |
| popPK | Tamassia_1979 | relevant | 8 | 0 | The paper is a pharmacokinetic study of indobufen in humans, but the provided evidence contains only qualitative descriptions of the results without any specific numeric parameter values (e.g., CL, V, t1/2). |
| popPK | Wiseman_1992 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties without original quantitative disposition parameters (CL, V, etc.) present in the evidence. |
| PD | Wiseman_1992 | not_relevant | 2 | 0 | The text is a qualitative review summary that describes pharmacodynamic properties and therapeutic efficacy but does not provide specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Yang_2021 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic effects (platelet aggregation, TXB2 levels) rather than pharmacokinetic parameters, and no quantitative PK values are reported. |
| PD | Yang_2021 | not_relevant | 3 | 2 | The study reports qualitative comparisons of pharmacodynamic effects (platelet aggregation, TXB2) across different dosing regimens but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect/dose-response model. |
| popPK | Zhang_2026 | relevant | 8 | 0 | The study reports pharmacokinetic profiles for indobufen released from a prodrug in rats, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
